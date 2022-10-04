(ns dk.cst.glossematics.frontend.i18n
  "English and Danish translations for the frontend pages."
  (:require [tongue.core :as tongue]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend :as-alias frontend]
            [dk.cst.glossematics.frontend.shared :as-alias fshared]
            [dk.cst.glossematics.frontend.page.main :as-alias main]
            [dk.cst.glossematics.frontend.page.bookmarks :as-alias bookmarks]
            [dk.cst.glossematics.frontend.page.reader :as-alias reader]
            [dk.cst.glossematics.frontend.page.search :as-alias search]))

;; Allow for positionally interpolated Hiccup vectors in translations.
;; NOTE: copy-pasted from https://github.com/tonsky/tongue#interpolation
(extend-type PersistentVector
  tongue/IInterpolate
  #_(interpolate-named [v dicts locale interpolations]
                       (mapv (fn [x]
                               (if (and (keyword? x)
                                        (= "arg" (namespace x)))
                                 (get interpolations x)
                                 x)) v))

  ;; TODO: modify? currently only supports arguments at top level.
  (interpolate-positional [v dicts locale interpolations]
    (mapv (fn [x]
            (if (and (vector? x)
                     (= :arg (first x)))
              (nth interpolations (second x))
              x)) v)))

(def frontend-translations
  {::frontend/main-caption         {:en "Go to the main page"
                                    :da "Gå til hovedsiden"}
   ::frontend/encyclopedia         {:en "Encyclopedia"
                                    :da "Encyklopædi"}
   ::frontend/local-reader         {:en "Local reader"
                                    :da "Lokal læser"}
   ::frontend/search               {:en "Search"
                                    :da "Søg"}
   ::frontend/search-caption       {:en "Find documents in our archive"
                                    :da "Find dokumenter i vores arkiv"}
   ::frontend/timeline             {:en "Timeline"
                                    :da "Tidslinje"}
   ::frontend/timeline-caption     {:en "Explore the life Louis Hjelmslev"
                                    :da "Udforsk Louis Hjelmslevs liv"}
   ::frontend/bibliography         {:en "Bibliography"
                                    :da "Bibliografi"}
   ::frontend/bibliography-caption {:en "View relevant works"
                                    :da "Se relevante værker"}
   ::frontend/language-flag        {:en "\uD83C\uDDEC\uD83C\uDDE7"
                                    :da "\uD83C\uDDE9\uD83C\uDDF0"}
   ::frontend/language-caption     {:en "English (klik for skifte til dansk)"
                                    :da "Dansk (click to switch to English)"}
   ::frontend/bookmarks            {:en "Bookmarks"
                                    :da "Bogmærker"}
   ::frontend/add-bookmark-caption {:en "Add bookmark for this page"
                                    :da "Opret bogmærke for denne side"}
   ::frontend/rem-bookmark-caption {:en "Remove bookmark for this page"
                                    :da "Fjern bogmærke for denne side"}
   ::frontend/unknown-page         {:en [:p "Unknown page."]
                                    :da [:p "Ukendt side."]}})

(def main-page-translations
  {::main/logged-in-status   {:en [:p "You are currently " [:em "logged in"] " via your institution"
                                   " (" [:a {:href "/app/bookmarks"} "bookmarks"] ")."]
                              :da [:p "Du er i øjeblikket " [:em "logget ind"] " via din institution"
                                   " (" [:a {:href "/app/bookmarks"} "bogmærker"] ")."]}
   ::main/logged-in-status-1 {:en [:p "You are currently " [:em "logged in"] " via " [:arg 0]
                                   " (" [:a {:href "/app/bookmarks"} "bookmarks"] ")."]
                              :da [:p "Du er i øjeblikket " [:em "logget ind"] " via " [:arg 0]
                                   " (" [:a {:href "/app/bookmarks"} "bogmærker"] ")."]}
   ::main/log-out            {:en "Log out"
                              :da "Log ud"}
   ::main/log-out-long       {:en "Log out of Glossematics"
                              :da "Log ud af Glossematics"}
   ::main/user-details       {:en "User details"
                              :da "Brugerdetaljer"}
   ::main/logged-out-status  {:en [:p "You are currently " [:em "not"] " logged in. "]
                              :da [:p "Du er i øjeblikket " [:em "ikke"] " logget ind. "]}
   ::main/log-in             {:en "Log in"
                              :da "Log ind"}
   ::main/log-in-long        {:en "Log in to Glossematics using your institution"
                              :da "Log ind i Glossematics vha. din institution"}
   ::main/introduction       {:en [:<>
                                   [:section
                                    [:h2 "Introduction"]
                                    [:img.text-illustration {:src   "/images/hjelmslev_transparent.png"
                                                             :alt   "Louis Hjelmslev"
                                                             :style {:float "right"}}]
                                    [:p
                                     "The Royal Danish Library in Copenhagen is contains a multitude of letter correspondences
                                     between leading characters in the domain of linguistics,
                                     e.g. Louis Hjelmslev and Hans Jørgen Uldall.
                                     These individuals were key to the creation of the Glossematics theory of linguistics
                                     as an area of note within linguistic structuralism."]
                                    [:p
                                     "The letters and other relevant documents have been made available on this website to both Danish and international researchers.
                                     The documents comprise anything from highly topical discussions to Christmas (and other) greetings
                                     as well as day-to-day chatter.
                                     This allows researchers to take a deep dive into linguistic structuralism,
                                     investigating it from every relevant angle."]]
                                   [:section
                                    [:h2 "Get access"]
                                    [:img.text-illustration {:src   "/images/efj_transparent.png"
                                                             :alt   "Eli Fischer-Jørgensen"
                                                             :style {:float "left"}}]
                                    [:p
                                     "You may always view the timeline and the bibliography pages. "
                                     "However, the search page and the facsimile reader "
                                     "are not available unless you first log in. "]
                                    [:p
                                     "Glossematics allows you to log in through your own institution "
                                     "as long as it is part of a common educational federation. "
                                     "Clicking 'Log in' above will direct you to "
                                     [:abbr {:title "Where Are You From"} "WAYF"] " "
                                     "where you may choose your institution from a list (if applicable)."]]
                                   [:section
                                    [:h2 "Correspondences"]
                                    [:img.text-illustration {:src   "/images/pd_transparent.png"
                                                             :Alt   "Paul Diderichsen"
                                                             :style {:float "right"}}]
                                    [:p
                                     "Once authenticated, you may search all documents within our archive. "
                                     "Below are exchanges that were important to the theory of Glossematics:"]]]
                              :da [:<>
                                   [:section
                                    [:h2 "Introduktion"]
                                    [:img.text-illustration {:src   "/images/hjelmslev_transparent.png"
                                                             :alt   "Louis Hjelmslev"
                                                             :style {:float "right"}}]
                                    [:p
                                     "På Det Kongelige Bibliotek i København findes der et væld af brevkorrespondancer
                                     mellem de førende figurer i det sprogvidenskabelige miljø,
                                     eksempelvis Louis Hjelmslev og Hans Jørgen Uldall.
                                     Disse var centrale inden for dannelsen af sprogteorien Glossematik,
                                     som et særligt område inden for strukturel lingvistik."]
                                    [:p
                                     "På denne hjemmeside gør vi disse breve og andre relevante dokumenter tilgængelige for danske og udenlandske forskere.
                                     Dokumenterne kan være alt fra fagligt skarpe diskussioner til julehilsner og lykønskninger
                                     samt aftaler om lavpraktiske emner.
                                     Dette giver forskere mulighed for at dykke dybere ned i strukturalismen
                                     og undersøge samtlige relevante facetter."]]
                                   [:section
                                    [:h2 "Få adgang"]
                                    [:img.text-illustration {:src   "/images/efj_transparent.png"
                                                             :alt   "Eli Fischer-Jørgensen"
                                                             :style {:float "left"}}]
                                    [:p
                                     "Du kan altid se tidslinjen og bibliografi-siderne. "
                                     "Søgesiden og facsimile-læseren "
                                     "vil dog ikke være tilgængelige før du logger ind."]
                                    [:p
                                     "Glossematics lader dig logge ind via din egen institution, "
                                     "så længe den er en del af en kendt uddannelsesmæssig føderation. "
                                     "Ved at klikke 'Log ind' ovenover kommer du videre til "
                                     [:abbr {:title "Where Are You From"} "WAYF"] " "
                                     "hvor du kan vælge din institution fra en liste, når førnævnte gælder."]]
                                   [:section
                                    [:h2 "Korrespondancer"]
                                    [:img.text-illustration {:src   "/images/pd_transparent.png"
                                                             :Alt   "Paul Diderichsen"
                                                             :style {:float "right"}}]
                                    [:p
                                     "Når du har logget ind, kan du fremsøge alle dokumenter i vores arkiv. "
                                     "Nedenfor er brevvekslinger der havde betydning for Glossematikken:"]]]}})

(def reader-page-translations
  {::reader/local-file        {:en "Local TEI file"
                               :da "Lokal TEI-fil"}
   ::reader/transcription     {:en "Transcription"
                               :da "Transkription"}
   ::reader/prev-results      {:en "previous results..."
                               :da "forrige resultater..."}
   ::reader/next-results      {:en "more results..."
                               :da "flere resultater..."}
   ::reader/placeholder       {:en ["N/A" "[content missing]"]
                               :da ["N/A" "[indhold mangler]"]}
   ::reader/illustration-of-1 {:en "Illustration of {1}"
                               :da "Illustration af {1}"}})

(def search-page-translations
  {::search/look-for     {:en "Look for"
                          :da "Led efter"}
   ::search/placeholder  {:en "e.g. place, person, organisation, …"
                          :da "f.eks. sted, person, organisation, …"}
   ::search/go           {:en "Search"
                          :da "Søg"}
   ::search/options      {:en "More options"
                          :da "Flere muligheder"}
   ::search/criteria     {:en "Criteria"
                          :da "Kriterier"}
   ::search/reset        {:en "Reset criteria"
                          :da "Nulstil kriterier"}
   ::search/remove       {:en "Remove criterion"
                          :da "Fjern kriterie"}
   ::search/prev         {:en "← previous"
                          :da "← forrige"}
   ::search/next         {:en "next →"
                          :da "næste →"}
   ::search/empty        {:en "No documents match the criteria. Perhaps try removing a criterion?"
                          :da "Ingen dokumenter matcher kriterierne.  Prøv evt. at fjerne et kriterie?"}
   ::search/view-caption {:en "View in the reader"
                          :da "Vis i læseren"}
   ::search/limit-from   {:en "Limit from "
                          :da "Begræns fra "}
   ::search/limit-to     {:en " to "
                          :da " til "}
   ::search/order-by     {:en "Sort by"
                          :da "Sortér via"}
   ::search/ascending    {:en "▲ ascending"
                          :da "▲ opadgående"}
   ::search/descending   {:en "▼ descending"
                          :da "▼ nedadgående"}
   ::search/explanation  {:en [:<>
                               [:p "Use this page to search for relevant documents in our archive."]
                               [:ul
                                [:li
                                 "Results are found by matching document metadata to "
                                 [:strong [:em "one or more"]] " search criteria."]
                                [:li
                                 "The search criteria comprise: "
                                 [:em "people, places, organisations, publications, languages,"] " and "
                                 [:em "terms"] "."]
                                [:li
                                 "Note that " [:strong [:em "all"]]
                                 " selected criteria will apply to every document in a search result."]
                                [:li
                                 "By default, a search criterion will be compared to anything. "
                                 "However, a particular field may be selected for any criterion."]
                                [:li
                                 "The search results may also be sorted according to a specific field. "
                                 "They can be further restricted to a certain range too."]]]
                          :da [:<>
                               [:p "Brug denne side til at søge efter relevante dokumenter i arkivet."]
                               [:ul
                                [:li
                                 "Resultater fås ved at matche dokumenters metadata med "
                                 [:strong [:em "et eller flere"]] " søgekriterier."]
                                [:li
                                 "Søgekriterier består af: "
                                 [:em "personer, steder, organisationer, udgivelser, sprog "] " og "
                                 [:em "begreber"] "."]
                                [:li
                                 "Bemærk at " [:strong [:em "alle"]]
                                 " valgte kriterier gælder for hvert dokument i et søgeresultat."]
                                [:li
                                 "Som grundregel vil et søgekriterie blive sammenlignet med alt. "
                                 "Man kan dog også vælge et specifikt felt for ethvert kriterie."]
                                [:li
                                 "Søgeresultaterne kan også sorteres via visse af felterne. "
                                 "De kan også yderligere begrænses til en udvalgt del."]]]}
   ::search/explanation+ {:en [:p
                               "Currently, a total of " [:arg 0]
                               " entities may be used as search criteria. "
                               "An example of an entity that can be used as a criterion might be \""
                               [:arg 1] "\". "]
                          :da [:p
                               "I øjeblikket kan i alt " [:arg 0]
                               " entiteter bruges som søgekriterier. "
                               "Et eksempel på en entitet, der kan bruges som kriterie, kunne være \""
                               [:arg 1] "\". "]}})

(def bookmarks-page-translations
  {::bookmarks/other        {:en "Other"
                             :da "Andet"}
   ::bookmarks/encyclopedia {:en "Encyclopedia"
                             :da "Encyklopædi"}
   ::bookmarks/searches     {:en "Searches"
                             :da "Søgninger"}
   ::bookmarks/documents    {:en "Documents"
                             :da "Dokumenter"}
   ::bookmarks/go-caption   {:en "Go to this page"
                             :da "Gå til denne side"}
   ::bookmarks/empty        {:en (str "You do not seem to have bookmarked any pages. "
                                      "Click on the star in the top-right corner to bookmark a page.")
                             :da (str "Det ser ikke ud til, at du har tilføjet nogen bogmærker. "
                                      "Klik på stjernen i det øverste højre hjørne for at tilføje den nuværende side som bogmærke.")}})

(def other-translations
  {:entity.type/archive                 {:en "Archive"
                                         :da "Arkiv"}
   :entity.type/person                  {:en "Person"
                                         :da "Person"}
   :entity.type/publication             {:en "Publication"
                                         :da "Udgivelse"}
   :entity.type/term                    {:en "Term (Danish)"
                                         :da "Begreb"}
   :entity.type/english-term            {:en "Term"
                                         :da "Begreb (engelsk)"}
   :entity.type/language                {:en "Language"
                                         :da "Sprog"}
   :entity.type/place                   {:en "Place"
                                         :da "Sted"}
   :entity.type/organisation            {:en "Organisation"
                                         :da "Organisation"}
   :entity.type/linguistic-organisation {:en "Linguistic organisation"
                                         :da "Lingvistisk organisation"}
   :document/condition                  {:en "condition"
                                         :da "tilstand"}
   :document/mention                    {:en "mentioned"
                                         :da "omtalt"}
   :document/author                     {:en "author"
                                         :da "forfatter"}
   :document/sender                     {:en "sender"
                                         :da "afsender"}
   :document/sender-location            {:en "sender location"
                                         :da "afsenders lokation"}
   :document/recipient                  {:en "recipient"
                                         :da "modtager"}
   :document/recipient-location         {:en "recipient location"
                                         :da "modtagers lokation"}
   :document/archive                    {:en "archive"
                                         :da "arkiv"}
   :document/language                   {:en "document language"
                                         :da "dokumentsprog"}
   :document/publication                {:en "publication"
                                         :da "udgivelse"}
   :document/place                      {:en "place"
                                         :da "sted"}
   :document/date-mention               {:en "mentioned date"
                                         :da "omtalt dato"}
   :document/sent-at                    {:en "date"
                                         :da "dato"}
   :db/ident                            {:en "id"
                                         :da "id"}
   :document/title                      {:en "title"
                                         :da "titel"}
   :document/bib-entry                  {:en "bibliography entry"
                                         :da "bibliografisk angivelse"}
   :document/notes                      {:en "notes"
                                         :da "noter"}
   :document/pp                         {:en "pp."
                                         :da "pp."}
   :document/publisher                  {:en "publisher"
                                         :da "udgiver"}
   :document/collection                 {:en "collection"
                                         :da "samling"}
   :document/facsimile                  {:en "facsimile"
                                         :da "facsimile"}
   :document/year                       {:en "year"
                                         :da "år"}
   :document/end-year                   {:en "year (end)"
                                         :da "år (afslutning)"}
   :file/name                           {:en "file"
                                         :da "fil"}
   :file/extension                      {:en "file extension"
                                         :da "filendelse"}

   ;; Some captions in use
   ::fshared/title-caption              {:en "View in the reader"
                                         :da "Vis i læseren"}
   ::fshared/condition-caption          {:en "Find documents in this condition"
                                         :da "Find dokumenter i denne tilstand"}
   ::fshared/entity-caption             {:en "Find documents with this entity"
                                         :da "Find relevante dokumenter for denne entitet"}

   ;; Dynamic relations -- expands to a more complex operation during search.
   :correspondent                       {:en "correspondent"
                                         :da "korrespondent"}
   :any                                 {:en "any role"
                                         :da "enhver rolle"}})

(defn- into-dicts
  "Turn aligned translations into top-level `dicts` as expected by Tongue."
  [dicts [k {:keys [en da]}]]
  (merge-with merge dicts {:en {k en}
                           :da {k da}}))

(def dicts
  (reduce into-dicts {} (merge frontend-translations
                               main-page-translations
                               reader-page-translations
                               search-page-translations
                               bookmarks-page-translations
                               other-translations)))

(def tr
  (tongue/build-translate dicts))

(def tr-da
  (partial tr :da))

(def tr-en
  (partial tr :en))

(defn ->tr
  "Return a translation function/reagent component translating into da/en."
  []
  (if (= "da" @state/language)
    tr-da
    tr-en))
