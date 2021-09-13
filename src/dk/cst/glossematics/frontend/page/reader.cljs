(ns dk.cst.glossematics.frontend.page.reader
  (:require [shadow.resource :as sr]
            [reagent.core :as r]
            [lambdaisland.fetch :as fetch]
            [kitchen-async.promise :as p]
            [dk.cst.stucco.plastic :as plastic]
            [dk.cst.glossematics.frontend.facsimile :as facsimile]))

(def initial-examples
  {"1151anno-anno-tei.xml"                       (sr/inline "examples/tei/1151anno-anno-tei.xml")
   "1152anno-anno-tei.xml"                       (sr/inline "examples/tei/1152anno-anno-tei.xml")
   "1153anno-anno-tei.xml"                       (sr/inline "examples/tei/1153anno-anno-tei.xml")
   "1154anno-anno-tei.xml"                       (sr/inline "examples/tei/1154anno-anno-tei.xml")
   "1155anno-anno-tei.xml"                       (sr/inline "examples/tei/1155anno-anno-tei.xml")
   "1156anno-anno-tei.xml"                       (sr/inline "examples/tei/1156anno-anno-tei.xml")
   "1157anno-anno-tei.xml"                       (sr/inline "examples/tei/1157anno-anno-tei.xml")
   "1158anno-anno-tei.xml"                       (sr/inline "examples/tei/1158anno-anno-tei.xml")
   "1159anno-anno-tei.xml"                       (sr/inline "examples/tei/1159anno-anno-tei.xml")
   "1160anno-anno-tei.xml"                       (sr/inline "examples/tei/1160anno-anno-tei.xml")
   "tei_example.xml"                             (sr/inline "examples/tei/tei_example.xml")
   "test-1307-anno-tei.xml"                      (sr/inline "examples/tei/test-1307-anno-tei.xml")
   "DJtilHJU-1931-02-14-tei-final.xml"           (sr/inline "examples/tei/DJtilHJU-1931-02-14-tei-final.xml")
   "acc-1992_0005_032_Uldall_0780-tei-final.xml" (sr/inline "examples/tei/acc-1992_0005_032_Uldall_0780-tei-final.xml")})

(def examples
  (r/atom initial-examples))

(defn mk-tabs
  [filename]
  (let [tei (get @examples filename)]
    [["Indhold" ^{:key tei} [facsimile/tei-xml tei]]
     ["XML" [:pre {:style {:white-space "pre-wrap"}}
             [:code
              tei]]]]))

(defonce state
  (r/atom {:current-file "DJtilHJU-1931-02-14-tei-final.xml"
           :tabs         {:kvs (mk-tabs "DJtilHJU-1931-02-14-tei-final.xml")
                          :i   0}}))

;; TODO: temporary - only here because Stucco bugs out when using a map directly
(defonce tabs-state
  (r/cursor state [:tabs]))

(defn set-content!
  [filename]
  (swap! state assoc :current-file filename)
  (swap! state assoc-in [:tabs :kvs] (mk-tabs filename)))

(defn page
  []
  (let [{:keys [current-file]} @state]
    [:<>
     [:p
      [:label "TEI-fil: "
       [:select {:key           current-file
                 :default-value current-file
                 :on-change     (fn [e] (set-content! (.. e -target -value)))}
        (for [[k _] (sort @examples)]
          ^{:key k} [:option {:value k}
                     k])]
       " "
       [:input {:aria-label   "Ekstern TEI-fil (URL)"
                :type         "url"
                :on-key-press (fn [e]
                                (when (= "Enter" (.-key e))
                                  (let [url (.-value (.-target e))]
                                    (p/let [r (fetch/get url)]
                                      (swap! examples assoc url (:body r))
                                      (set-content! url)))))}]
       " "
       [:input {:aria-label "Lokal TEI-fil"
                :type       "file"
                :on-change  (fn [e]
                              (when-let [file (.item e.target.files 0)]
                                (.then (.text file)
                                       (fn [s]
                                         (swap! examples assoc (.-name file) s)
                                         (set-content! (.-name file))))))}]]]
     [:div {:style {:max-width "100ch"
                    :min-width "40ch"
                    :margin    "0 auto"}}
      [plastic/tabs tabs-state {:id "tei-tabs"}]]]))
