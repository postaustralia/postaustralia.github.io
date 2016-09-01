(ns postaustralia.xyz)

(enable-console-print!)

;; https://github.com/api-ai/api-ai-javascript

(defonce ai (atom {}))

(defn init-ai [callback]
  (let [config #js {:server "wss://api.api.ai:4435/api/ws/query"
                    :serverVersion "20150910"
                    :token "e4961bdd873c4379a6fad00c705095b0"
                    :sessionId "session_id"
                    :onInit (fn [e]
                              (println "Opening api.ai websocket …")
                              (.open (:handle @ai))
                              (callback))}
        handle (js/ApiAi. config)]
    (swap! ai assoc :handle handle)
    (println "Configuring api.ai and requesting microphone access …")
    (.init handle)))

(defn stop-ai [] 
  (.stopListening (:handle @ai)))

(defn start-ai [] 
  (.startListening (:handle @ai)))

(defn receive-chat [callback]
  (let [handle (:handle @ai)]
    (aset handle "onResults" 
          (fn [data] 
            (println "Received a new result …")
            (callback (.-result data))))))


