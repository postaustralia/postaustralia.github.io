(ns postaustralia.core
  (:require [rum.core :as rum]
            [postaustralia.xyz :as xyz]))

(enable-console-print!)

(defonce app-state (atom {:listening false}))

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
            :on-mouse-enter (fn [_] (swap! local assoc :hovered true))}
      content]]))

(rum/defc brand [] 
  [:li 
   [:div 
    [:img.cell-img {:src "img/postaustralia.svg" :alt ""}]]])

(rum/defc pusher []
  [:li.pusher])

(rum/defc filler [] 
  [:li [:div]])

;; chat cells
(defn show-response [result]
  (swap! app-state assoc :response (.-speech (.-fulfillment result))))

(rum/defcs audio-button < rum/reactive []
  (let [listening (:listening (rum/react app-state))
        toggle (fn [_]
                 (if listening 
                   (do 
                     (println "Finished chatting …") 
                     (xyz/stop-ai)) 
                   (do
                     (println "Say something …") 
                     (xyz/receive-chat show-response)
                     (xyz/start-ai)))
                 (swap! app-state assoc :listening (not listening)))
        svg-file "img/microphone.svg"]
    [:h1 
     [:div.clickable-overlay {:on-click toggle}] 
     [:img {:src svg-file}]]))

(rum/defc chat [] 
  (hoverable-cell (audio-button)))

(rum/defc responder < rum/reactive [] 
  (let [response (:response (rum/react app-state))]
    (hoverable-cell
      [:h1 [:img {:src "img/speaker.svg" :style {:height "50px" :width "50px"}}]]
      [:p response])))

(rum/defc hive [size]
  [:ul.clr.categories 
   (let [ingredients [[8 cell] [2 brand] [1 pusher] [1 filler]]
         cocktail (mapcat #(repeat (first %) (last %)) ingredients)]
     (map #(rum/with-key (%1) %2)
          (-> (into [] (repeatedly size #(rand-nth cocktail)))
              (assoc 5 chat)
              (assoc 4 responder)
              (assoc 3 brand))
          (range size)))])

(rum/mount (hive 100)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  (swap! app-state update-in [:__figwheel_counter] inc))

