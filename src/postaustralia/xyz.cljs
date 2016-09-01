(ns postaustralia.xyz)

(enable-console-print!)

;; https://github.com/api-ai/api-ai-javascript

(defonce ai (atom {}))

(defn make-ai []
  (let [config #js {:server "wss://api.api.ai:4435/api/ws/query"
                    :serverVersion "20150910"
                    :token "e4961bdd873c4379a6fad00c705095b0"
                    :sessionId "session_id"
                    :onInit (fn [e]
                              (println "Opening api.ai websocket …")
                              (.open (:handle @ai)))}
        handle (js/ApiAi. config)]
    (swap! ai assoc :handle handle)
    (println "Configuring api.ai and requesting microphone access …")
    (.init handle)))

(make-ai)


