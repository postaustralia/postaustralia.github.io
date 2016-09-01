(ns postaustralia.core
  (:require [rum.core :as rum]
            [postaustralia.xyz :as xyz]))

(enable-console-print!)

;; [:ready :listening :thinking]
(defonce app-state (atom {:chat {:state :thinking}}))

;; Initialise AI
(xyz/init-ai #(swap! app-state assoc-in [:chat :state] :ready))

#_(defn gen-key []
     (gensym "key-"))

;; "#e9e8dc" "#11120c" "#aaac87" "#f6e4b6" "#515d51" "#333333" "rgb(216, 25, 53)"
(defn rand-color
  ([] {:backgroundColor (rand-nth ["#6a695d" "#11120c" "#aaac87" "#c3b183" 
                                   "#515d51" "#333333" "rgb(216, 25, 53)"])}) 
  ([other-styles]
   (merge other-styles (rand-color))))

;; passive cell types
(rum/defc cell [& content] 
  [:li [:div {:style (rand-color)} content]])

(rum/defcs hoverable-cell < (rum/local {:hovered false :color (rand-color)} ::local)
  [state & content]
  (let [local (::local state)
        {:keys [hovered color]} @local]
    [:li.hoverable 
     [:div {:style color
            :class (if hovered "hovered" "")
            :on-mouse-enter (fn [_] (swap! local assoc :hovered true))
            :on-focus (fn [_] (swap! local assoc :hovered true))}
      content]]))

(rum/defc brand [] 
  [:li 
   [:div 
    [:img.cell-img {:src "img/postaustralia.svg" :alt ""}]]])

(rum/defc pusher []
  [:li.pusher])

(rum/defc filler [] 
  [:li [:div]])

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

(rum/defcs chatter < rum/reactive []
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
    (hoverable-cell
      [:h1 
       [:div.clickable-overlay {:on-click toggle}]
       (case state
         :thinking (spinner)
         [:img {:src "img/microphone.svg"}])]
      [:p user])))

(rum/defc responder < rum/reactive [] 
  (let [{:keys [state user xyz]} (:chat (rum/react app-state))]
    (hoverable-cell
      [:h1 
       (case state
         :thinking (spinner)
         [:img {:src "img/speaker.svg"}])]
      [:p xyz])))

(rum/defc hive [size]
  [:ul.clr.categories 
   (let [ingredients [[8 cell] [2 brand] [1 pusher] [1 filler]]
         cocktail (mapcat #(repeat (first %) (last %)) ingredients)
         shaker (concat [cell filler cell brand chatter responder] (repeatedly size #(rand-nth cocktail)))]
     (map #(rum/with-key (%1) %2)
          shaker
          (range (count shaker))))])

(rum/mount (hive 100)
           (. js/document (getElementById "app")))

#_(defn on-js-reload []
  (swap! app-state update-in [:__figwheel_counter] inc))

