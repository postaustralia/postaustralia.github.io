(ns postaustralia.core
  (:require [postaustralia.cell :as cell]
            [rum.core :as rum]
            [postaustralia.xyz :as xyz]
            [postaustralia.jekyll :as jekyll]))

(enable-console-print!)

;; [:ready :listening :thinking]
(defonce app-state (atom {:chat {:state :thinking}}))

;; Initialise AI
(xyz/init-ai #(swap! app-state assoc-in [:chat :state] :ready))

#_(defn gen-key []
     (gensym "key-"))

;; loading animation
(rum/defc spinner []
  [:img.spinner {:src "img/spinner.svg"}])

;; chat cells
(defn transact-ai-response [result]
  (let [user (.-resolvedQuery result)
        xyz (.-speech (.-fulfillment result))]
    (swap! app-state 
           update-in [:chat] 
           merge {:user user :xyz xyz :state :ready})))

(rum/defc chatter < rum/reactive []
  (let [{:keys [state user xyz]} (:chat (rum/react app-state))
        toggle (fn [_]
                 (case state
                   :listening 
                   (do (xyz/stop-ai)
                       (swap! app-state assoc-in [:chat :state] :thinking))
                   :ready 
                   (do (xyz/receive-chat transact-ai-response)
                       (xyz/start-ai)
                       (swap! app-state assoc-in [:chat :state] :listening))
                   :default))]
    (cell/hoverable
      [:h1 
       [:div.clickable-overlay {:on-click toggle}]
       (case state
         :thinking (spinner)
         [:img {:src "img/microphone.svg"}])]
      [:p user])))

(rum/defc responder < rum/reactive [] 
  (let [{:keys [state user xyz]} (:chat (rum/react app-state))]
    (cell/hoverable
      [:h1 
       (case state
         :thinking (spinner)
         [:img {:src "img/speaker.svg"}])]
      [:p xyz])))

(rum/defc hive [size]
  [:ul.clr.categories 
   (let [jekyll-test (partial jekyll/jekyll "4df3e4")
         ingredients [[8 cell/basic] [2 cell/brand] [1 cell/push] [1 cell/fill]]
         cocktail (mapcat #(repeat (first %) (last %)) ingredients)
         shaker (concat [cell/basic cell/fill cell/basic cell/brand chatter responder] 
                        (repeatedly size #(rand-nth cocktail)))]

     (map #(rum/with-key (%1) %2)
          shaker
          (range (count shaker))))])

(rum/mount (hive 100)
           (. js/document (getElementById "app")))

#_(defn on-js-reload []
  (swap! app-state update-in [:__figwheel_counter] inc))

