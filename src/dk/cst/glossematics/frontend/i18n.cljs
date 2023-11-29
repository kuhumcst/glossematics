(ns dk.cst.glossematics.frontend.i18n
  "English and Danish translations for the frontend pages."
  (:require [tongue.core :as tongue]
            [dk.cst.glossematics.frontend.state :as state]
            [dk.cst.glossematics.frontend :as-alias frontend]
            [dk.cst.glossematics.frontend.shared :as-alias fshared]
            [dk.cst.glossematics.frontend.page.main :as-alias main]
            [dk.cst.glossematics.frontend.page.topics.tol-lectures :as-alias tol-lectures]
            [dk.cst.glossematics.frontend.page.privacy :as-alias privacy]
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
   ::frontend/language-flag        {:en [:img.language-icon {:src "/images/united-kingdom-svgrepo-com.svg"
                                                             :alt "Union Jack"}]
                                    :da [:img.language-icon {:src "/images/denmark-svgrepo-com.svg"
                                                             :alt "Dannebrog"}]}
   ::frontend/language-caption     {:en "English (klik for skifte til dansk)"
                                    :da "Dansk (click to switch to English)"}
   ::frontend/bookmarks            {:en "Bookmarks"
                                    :da "Bogmærker"}
   ::frontend/add-bookmark-caption {:en "Add bookmark for this page"
                                    :da "Opret bogmærke for denne side"}
   ::frontend/rem-bookmark-caption {:en "Remove bookmark for this page"
                                    :da "Fjern bogmærke for denne side"}
   ::frontend/a11y                 {:da "Tilgængelighed"
                                    :en "Accessibility"}
   ::frontend/tol-lectures         {:da "Forelæsninger over sprogteori"
                                    :en "Lectures on the theory of language"}
   ::frontend/privacy              {:da "Privatliv"
                                    :en "Privacy"}
   ::frontend/copyright            {:da [:<>
                                         [:span "© 2022 - "]
                                         [:a {:href "https://www.ku.dk/"}
                                          [:span.first "K"]
                                          "øbenhavns Universitet"]
                                         [:span " & "]
                                         [:a {:href "https://www.au.dk/"}
                                          [:span.first "A"]
                                          "arhus Universitet"]
                                         "."]
                                    :en [:<>
                                         [:span "© 2022 - "]
                                         [:a {:href "https://www.ku.dk/english/"}
                                          [:span.first "U"]
                                          "niversity of Copenhagen"]
                                         [:span " & "]
                                         [:a {:href "https://international.au.dk/"}
                                          [:span.first "A"]
                                          "arhus University"]
                                         "."]}
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
                                    [:img.text-illustration.right.bg1 {:src   "/images/hjelmslev_transparent.png"
                                                                       :title "Louis Hjelmslev"
                                                                       :alt   "Louis Hjelmslev portrait"}]
                                    [:p
                                     "The Royal Danish Library in Copenhagen contains a multitude of letter correspondences
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
                                    [:img.text-illustration.left.bg2 {:src   "/images/efj_transparent.png"
                                                                      :title "Eli Fischer-Jørgensen"
                                                                      :alt   "Eli Fischer-Jørgensen portrait"}]
                                    [:p
                                     "You may always view the timeline and the bibliography pages. "
                                     "However, the search page and the facsimile reader "
                                     "are not available unless you first log in. "
                                     "Once authenticated, you may search all documents within our archive."]
                                    [:p
                                     "Glossematics allows you to log in through your own institution "
                                     "as long as it is part of a common educational federation. "
                                     "Clicking 'Log in' above will direct you to "
                                     [:abbr {:title "Where Are You From"} "WAYF"] " "
                                     "where you may choose your institution from a list (if applicable). "]]
                                   [:section
                                    [:h2 "Topic pages"]
                                    [:p
                                     "We try to collect important material under different topics pages:"]
                                    [:ul
                                     [:li [:a {:href "/app/tol-lectures"} "Lectures on the theory of language"]]]]
                                   [:section
                                    [:h2 "Correspondences"]
                                    [:img.text-illustration.right.bg3 {:src   "/images/pd_transparent.png"
                                                                       :title "Paul Diderichsen"
                                                                       :alt   "Paul Diderichsen portait"}]
                                    [:p
                                     "Below are exchanges that were important to the theory of Glossematics:"]]]
                              :da [:<>
                                   [:section
                                    [:h2 "Introduktion"]
                                    [:img.text-illustration.right.bg1 {:src   "/images/hjelmslev_transparent.png"
                                                                       :title "Louis Hjelmslev"
                                                                       :alt   "Louis Hjelmslev portræt"}]
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
                                    [:img.text-illustration.left.bg2 {:src   "/images/efj_transparent.png"
                                                                      :title "Eli Fischer-Jørgensen"
                                                                      :alt   "Eli Fischer-Jørgensen portræt"}]
                                    [:p
                                     "Du kan altid se tidslinjen og bibliografi-siderne. "
                                     "Søgesiden og facsimile-læseren "
                                     "vil dog ikke være tilgængelige før du logger ind. "
                                     "Når du har logget ind, kan du fremsøge alle dokumenter i vores arkiv."]
                                    [:p
                                     "Glossematics lader dig logge ind via din egen institution, "
                                     "så længe den er en del af en kendt uddannelsesmæssig føderation. "
                                     "Ved at klikke 'Log ind' ovenover kommer du videre til "
                                     [:abbr {:title "Where Are You From"} "WAYF"] " "
                                     "hvor du kan vælge din institution fra en liste, når førnævnte gælder. "]]
                                   [:section
                                    [:h2 "Temasider"]
                                    [:p
                                     "Vi forsøger at samle vigtigt materiale under forskellige temasider:"]
                                    [:ul
                                     [:li [:a {:href "/app/tol-lectures"} "Forelæsninger over sprogteori"]]]]
                                   [:section
                                    [:h2 "Korrespondancer"]
                                    [:img.text-illustration.right.bg3 {:src   "/images/pd_transparent.png"
                                                                       :title "Paul Diderichsen"
                                                                       :alt   "Paul Diderichsen portræt"}]
                                    [:p
                                     "Nedenfor er brevvekslinger der havde betydning for Glossematikken:"]]]}})

(def tol-lectures-page-translations
  {::tol-lectures/text
   {:da [:<>
         [:p "Dette er en oversættelse af Francis J. Whitfield af den transkriberede stenografi fra Louis Hjelmslevs forelæsninger over sprogteori som de blev givet ved Københavns Universitet gennem årene 1942 og 1943."]
         [:ul
          [:li
           [:a {:href "/app/reader/Introduction_to_FJWs_translation.pdf"}
            "\"An introduction to Francis J. Whitfield’s English translation\""]
           " — skrevet af Una Canger, Lorenzo Cigana og Frans Gregersen 2023."]
          [:li
           "Whitfields oprindelige manuskript:"
           [:ul
            [:li [:a {:href "/app/reader/Page_1-52.xml"} "Side 1-52"]]
            [:li [:a {:href "/app/reader/Page_53-104.xml"} "Side 53-10"]]
            [:li [:a {:href "/app/reader/Page_105-156.xml"} "Side 105-156"]]
            [:li [:a {:href "/app/reader/Page_157_211.xml"} "Side 157-211"]]]]
          [:li
           "Det håndskrevne manuskript blev indtastet (af Nicolai Pharao) for at facilitere ordsøgning i dokumentet:"
           [:ul
            [:li [:a {:href "/app/reader/Typed_page_1-52.xml"} "Side 1-52"]]
            [:li [:a {:href "/app/reader/Typed_page_53-104.xml"} "Side 53-10"]]
            [:li [:a {:href "/app/reader/Typed_page_105-156.xml"} "Side 105-156"]]
            [:li [:a {:href "/app/reader/Typed_page_157_211.xml"} "Side 157-211"]]]]
          ;; TODO: need to fix the bullets in the reader
          [:li
           [:a {:href "/app/reader/acc-1992_0005_122_SogS_0050-tei.xml"}
            "\"[SogS] 122-0050 Forelaesninger over sprogteori Kopi 3\""]
           " — i manuskriptet er refererer numrene (p. xx) til siderne i de danske transkriptioner lavet af Harry Wett Frederiksens \"Forelaesninger over sprogteori\"."]
          [:li
           "Da Whitfield har udeladt visse passager af den originale tekst da han anså dem som irrelevante, er oversættelsen ikke helt komplet: "
           [:a {:href "/app/reader/Omitted_passages_translated.xml"} "de udeladte passager (oversat af Heidi McGhee)"]
           " — indekserne markeret med §xxx i den indtastede udgave af manuskriptet henviser til nummereringen af de udeladte passager."]
          [:li
           [:a {:href "/app/reader/Kærestefolkene_Toppen_og_Bolden.xml"} "Whitfields håndskrevne udgave af H. C. Andersens \"Kærestefolk\""]
           " — denne historie af H. C. Andersen bliver analyseret i Hjelmslevs forelæsninger. "]
          [:li
           "Whitfield's oprindelige manuskript indeholder også nogle referencer:"
           [:ul
            [:li [:a {:href "/app/reader/TCLC_25-tei.xml"} "Omkring Sprogteoriens Grundlæggelse (OSG)"]]
            [:li [:a {:href "/app/reader/TCLC_25-tei.xml "} "Résumé of a Theory of Language"]]]]
          [:li
           "Du kan også finde Louis Hjelmslevs egne dokumenter:"
           [:ul
            [:li [:a {:href "/app/reader/acc-1992_0005_113_Lectures_0100-tei.xml"} "[Lectures] 113-0100 Forelæsning over sprogteori"]]
            [:li [:a {:href "/app/reader/acc-1992_0005_113_Lectures_0080-tei.xml"} "[Lectures] 113-0080 Forelæsning over sprogteori"]]
            [:li [:a {:href "/app/reader/acc-1992_0005_144_Sprogteori_0030-tei.xml"} "[Sprogteori] 144-0030 Forelæsning over sprogteori 1943 II"]]]]]]
    :en [:<>
         [:p "This is a translation made by Francis J. Whitfield of the transcribed shorthand rendering of Louis Hjelmslev’s Lectures on the Theory of Language given at the University of Copenhagen during the years 1942 and 1943."]
         [:ul
          [:li
           [:a {:href "/app/reader/Introduction_to_FJWs_translation.pdf"}
            "\"An introduction to Francis J. Whitfield’s English translation\""]
           " — written by Una Canger, Lorenzo Cigana and Frans Gregersen 2023."]
          [:li
           "Whitfield’s original manuscript:"
           [:ul
            [:li [:a {:href "/app/reader/Page_1-52.xml"} "Pages 1-52"]]
            [:li [:a {:href "/app/reader/Page_53-104.xml"} "Pages 53-10"]]
            [:li [:a {:href "/app/reader/Page_105-156.xml"} "Pages 105-156"]]
            [:li [:a {:href "/app/reader/Page_157_211.xml"} "Pages 157-211"]]]]
          [:li
           "The handwritten manuscript was typed (by Nicolai Pharao) to facilitate word search in the document:"
           [:ul
            [:li [:a {:href "/app/reader/Typed_page_1-52.xml"} "Pages 1-52"]]
            [:li [:a {:href "/app/reader/Typed_page_53-104.xml"} "Pages 53-10"]]
            [:li [:a {:href "/app/reader/Typed_page_105-156.xml"} "Pages 105-156"]]
            [:li [:a {:href "/app/reader/Typed_page_157_211.xml"} "Pages 157-211"]]]]
          ;; TODO: need to fix the bullets in the reader
          [:li
           [:a {:href "/app/reader/acc-1992_0005_122_SogS_0050-tei.xml"}
            "\"\t[SogS] 122-0050 Forelaesninger over sprogteori Kopi 3\""]
           " — \tin the manuscript the numbering (p. xx) refers to the pages in the Danish transcripts made by Harry Wett Frederiksens \"Forelaesninger over sprogteori\"."]
          [:li
           "Since Whitfield omitted some passages of the original text as they were deemed irrelevant for his purpose, the translation is not complete: "
           [:a {:href "/app/reader/Omitted_passages_translated.xml"} "the omitted passages (translated by Heidi McGhee)"]
           " — the indexes §xxx in the typed version of the manuscript refer to the numbering of the omitted passages."]
          [:li
           [:a {:href "/app/reader/Kærestefolkene_Toppen_og_Bolden.xml"} "Whitfield’s handwritten version of Hans Christian Andersen's \"Kærestefolk\""]
           " — this story by Hans Christian Andersen is analysed in the Hjelmslev lectures. "]
          [:li
           "Whitfield’s original manuscript also contains some references:"
           [:ul
            [:li [:a {:href "/app/reader/TCLC_25-tei.xml"} "Omkring Sprogteoriens Grundlæggelse (OSG)"]]
            [:li [:a {:href "/app/reader/TCLC_25-tei.xml "} "Résumé of a Theory of Language"]]]]
          [:li
           "Louis Hjelmslev’s own documents are also available:"
           [:ul
            [:li [:a {:href "/app/reader/acc-1992_0005_113_Lectures_0100-tei.xml"} "[Lectures] 113-0100 Forelæsning over sprogteori"]]
            [:li [:a {:href "/app/reader/acc-1992_0005_113_Lectures_0080-tei.xml"} "[Lectures] 113-0080 Forelæsning over sprogteori"]]
            [:li [:a {:href "/app/reader/acc-1992_0005_144_Sprogteori_0030-tei.xml"} "[Sprogteori] 144-0030 Forelæsning over sprogteori 1943 II"]]]]]]}})

(def privacy-page-translations
  {::privacy/text {:da [:<>
                        [:p
                         "Glossematics indsamler ikke data om sine brugere til statistik eller andet.
                        Dog skal du forvente at dit besøg på siden logges, og at der lagres cookies
                        og andet data i det omfang du bruger siden."]
                        [:p
                         "Eksempelvis lagres dine sprogindstillinger lokalt i din browser,
                        hvis du ændrer sproget og din sessions-ID gemmes også som en cookie både i
                        din browser og på serveren, således at login-funktionaliteten fungerer.
                        Funktionalitet på siden som kræver at andet data gemmes, f.eks. bogmærker,
                        resulterer også i at data lagres på vores server."]
                        [:p
                         "Login håndteres helt transparent via din egen institutions login-side.
                        Når du logger ind, modtager vi en lille portion data, der identificerer dig.
                        De datapunkter vi modtager, kan du se under BRUGERDETALJER på forsiden."]]
                   :en [:<>
                        [:p
                         "Glossematics does not collect data about its users for statistics or other purposes.
                         However, you should expect that your visit to this page is logged and that cookies
                         and other data will be stored according to your site usage."]
                        [:p
                         "For example, your language settings are stored locally in your browser
                         if you change the language and your session ID is also stored as a cookie in both
                         your browser and on the server, such that logins are possible.
                         Any functionality on this site which requires saving other data, e.g. bookmarks,
                         also results in data being persisted on our server."]
                        [:p
                         "Login is handled completely transparently via the login page of your institution.
                         When you log in, we will receive a tiny bit of data identifying you.
                         You can inspect this data under USER DETAILS on the frontpage."]]}})

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
   ::search/add          {:en "Add another criterion"
                          :da "Tilføj endnu et kriterie"}
   ::search/prev         {:en "← previous"
                          :da "← forrige"}
   ::search/next         {:en "next →"
                          :da "næste →"}
   ::search/empty        {:en "No documents match the criteria. Perhaps try removing a criterion?"
                          :da "Ingen dokumenter matcher kriterierne.  Prøv evt. at fjerne et kriterie?"}
   ::search/empty-exact  {:en [:<> [:strong "NOTE:"] " search works better when you pick one of the " [:em "suggested entities"] " from the list."]
                          :da [:<> [:strong "BEMÆRK:"] " søgning fungerer bedre, når du vælger en af de " [:em "foreslåede entiteter"] " fra listen."]}
   ::search/view-caption {:en "View in the reader"
                          :da "Vis i læseren"}
   ::search/condition    {:en "Document condition"
                          :da "Dokumentets tilstand"}
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
                               [:h2 "Find documents"]
                               [:p "Use this page to search for relevant documents in our archive."]
                               [:ul
                                [:li
                                 "Results are found by matching document metadata to "
                                 [:strong [:em "one or more"]] " search criteria."]
                                [:li
                                 "The search criteria comprise: "
                                 [:em "archive, people, places, organisations, publications, languages,"] " and "
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
                               [:h2 "Find dokumenter"]
                               [:p "Brug denne side til at søge efter relevante dokumenter i arkivet."]
                               [:ul
                                [:li
                                 "Resultater fås ved at matche dokumenters metadata med "
                                 [:strong [:em "et eller flere"]] " søgekriterier."]
                                [:li
                                 "Søgekriterier består af: "
                                 [:em "arkiv, personer, steder, organisationer, udgivelser, sprog "] " og "
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
  {:entity.type/unknown                 {:en "Unknown entity"
                                         :da "Ukendt entitet"}
   :entity.type/domain                  {:en "Domain"
                                         :da "Domæne"}
   :entity.type/archive                 {:en "Archive"
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
   :document/relevant                   {:en "relevant for"
                                         :da "relevant for"}
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
   :exactly                             {:en "text"
                                         :da "tekst"}
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
                               tol-lectures-page-translations
                               privacy-page-translations
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
