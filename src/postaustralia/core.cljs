(ns postaustralia.core
  (:require [rum.core :as rum]
            [postaustralia.xyz :as xyz]))

(enable-console-print!)

(println "This text is printed from src/postaustralia/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Live as if you were working in the latter days of a disposable nation."}))

(rum/defc colour [] 
  [:li
   [:div {:style {:background-color (rand-nth ["#FF0000" "#FF0021" "#FFFCFC" "#FF7D92" "#FF3858"])}}
        [:h1 "Postaustralia"]
        [:p (:text @app-state)]]])

(rum/defc brand [] 
  [:li 
   [:div 
    [:img {:src "img/postaustralia.svg" :alt ""}]
    [:h1 "Postaustralia"]
    [:p (:text @app-state)]]])

(rum/defc pusher []
  [:li.pusher])

(rum/defc filler [] 
  [:li [:div]])

(rum/defc hive [size]
  [:ul.clr.categories 
   (map (fn [component react-key] (rum/with-key (component) react-key)) 
        (repeatedly size #(rand-nth [colour colour colour brand brand brand pusher filler])) 
        (range size))])

#_(rum/defc hello-world []
    [:h2 (:text @app-state)])

(rum/mount (hive 100)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
