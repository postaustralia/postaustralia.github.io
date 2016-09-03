(ns postaustralia.cell
  (:require [rum.core :as rum]))

;; "#e9e8dc" "#11120c" "#aaac87" "#f6e4b6" "#515d51" "#333333" "rgb(216, 25, 53)"
(defn rand-color
  ([] {:backgroundColor (rand-nth ["#6a695d" "#11120c" "#aaac87" "#c3b183" 
                                   "#515d51" "#333333" "rgb(216, 25, 53)"])}) 
  ([other-styles]
   (merge other-styles (rand-color))))

;; passive cell types
(rum/defc basic [& content] 
  [:li [:div {:style (rand-color)} content]])

(rum/defcs hoverable < (rum/local {:hovered false :color (rand-color)} ::local)
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

(rum/defc push []
  [:li.pusher])

(rum/defc fill [] 
  [:li [:div]])


