(ns postaustralia.jekyll
  (:require [postaustralia.cell :as cell]
            [rum.core :as rum]
            [markdown.core :as md]))

(enable-console-print!)

(defonce articles (atom {"4df3e4" "### Jekyll test\n\n1. Item\n1. Another\n"}))

(defn parse-md [src]
  (:html (md/md-to-html-string* src nil)))

(rum/defcs jekyll < rum/local
  [state jekyll-id]
  (let [src (@articles jekyll-id)
        html (parse-md src)]
    (print html)
    (cell/basic [:h1 (str "Jekyll " jekyll-id)]
                [:p {:dangerouslySetInnerHTML {:__html html}}])))


