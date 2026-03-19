import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - Invest4Kids",
  description:
    "Datenschutzerklärung der Invest4Kids GmbH. Informationen zum Schutz deiner personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-outfit text-4xl md:text-5xl font-bold text-primary">
            Datenschutz
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-text-medium leading-relaxed">
          {/* 1. Datenschutz auf einen Blick */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Allgemeine Hinweise
          </h3>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Datenerfassung auf dieser Website
          </h3>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            „Hinweis zur Verantwortlichen Stelle" in dieser
            Datenschutzerklärung entnehmen.
          </p>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            Wie erfassen wir Ihre Daten?
          </h4>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben.
          </p>
          <p className="mb-4">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
            oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            Wofür nutzen wir Ihre Daten?
          </h4>
          <p className="mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h4>
          <p className="mb-4">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
            unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="mb-4">
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
            sich jederzeit an uns wenden.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Analyse-Tools und Tools von Dritt­anbietern
          </h3>
          <p className="mb-4">
            Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit sogenannten
            Analyseprogrammen.
          </p>
          <p className="mb-4">
            Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
            der folgenden Datenschutzerklärung.
          </p>

          {/* 2. Hosting */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            2. Hosting
          </h2>
          <p className="mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Hetzner
          </h3>
          <p className="mb-4">
            Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710
            Gunzenhausen (nachfolgend Hetzner).
          </p>
          <p className="mb-4">
            Details entnehmen Sie der Datenschutzerklärung von Hetzner:{" "}
            <a
              href="https://www.hetzner.com/de/rechtliches/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://www.hetzner.com/de/rechtliches/datenschutz
            </a>
            .
          </p>
          <p className="mb-4">
            Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
            möglichst zuverlässigen Darstellung unserer Website. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
            25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers
            (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
            Einwilligung ist jederzeit widerrufbar.
          </p>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            Auftragsverarbeitung
          </h4>
          <p className="mb-4">
            Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung
            des oben genannten Dienstes geschlossen. Hierbei handelt es sich um
            einen datenschutzrechtlich vorgeschriebenen Vertrag, der
            gewährleistet, dass dieser die personenbezogenen Daten unserer
            Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
            DSGVO verarbeitet.
          </p>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            3. Allgemeine Hinweise und Pflicht­informationen
          </h2>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Datenschutz
          </h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="mb-4">
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie persönlich identifiziert werden können. Die vorliegende
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
            wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
            geschieht.
          </p>
          <p className="mb-4">
            Wir weisen darauf hin, dass die Datenübertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
            durch Dritte ist nicht möglich.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p className="mb-4">
            Invest4Kids GmbH, Fabrikstraße 7, 24103 Kiel
          </p>
          <p className="mb-4">
            Telefon: +49 123 456789
            <br />
            E-Mail: info@invest4kids.de
          </p>
          <p className="mb-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
            E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Speicherdauer
          </h3>
          <p className="mb-4">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
            handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
            erfolgt die Löschung nach Fortfall dieser Gründe.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
            auf dieser Website
          </h3>
          <p className="mb-4">
            Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
            wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
            lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
            Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
            Falle einer ausdrücklichen Einwilligung in die Übertragung
            personenbezogenen Daten in Drittstaaten erfolgt die
            Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a
            DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff
            auf Informationen in Ihr Endgerät (z.&nbsp;B. via
            Device-Fingerprinting) eingewilligt haben, erfolgt die
            Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG.
            Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
            Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
            erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6
            Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten,
            sofern diese zur Erfüllung einer rechtlichen Verpflichtung
            erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
            Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
            Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die
            jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
            folgenden Absätzen dieser Datenschutzerklärung informiert.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Empfänger von personenbezogenen Daten
          </h3>
          <p className="mb-4">
            Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen
            externen Stellen zusammen. Dabei ist teilweise auch eine
            Übermittlung von personenbezogenen Daten an diese externen Stellen
            erforderlich. Wir geben personenbezogene Daten nur dann an externe
            Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung
            erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind
            (z.&nbsp;B. Weitergabe von Daten an Steuerbehörden), wenn wir ein
            berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der
            Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
            Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben
            wir personenbezogene Daten unserer Kunden nur auf Grundlage eines
            gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer
            gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame
            Verarbeitung geschlossen.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h3>
          <p className="mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
            gegen Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p className="mb-4">
            Jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen
            Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen
            Daten Widerspruch einzulegen. Dies gilt auch für ein auf diese
            Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage,
            auf denen eine Verarbeitung beruht, entnehmen Sie dieser
            Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre
            betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
            denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung
            nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen,
            oder die Verarbeitung dient der Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1
            DSGVO).
          </p>
          <p className="mb-4">
            Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
            betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
            Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
            derartiger Werbung einzulegen. Dies gilt auch für das Profiling,
            soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
            widersprechen, werden Ihre personenbezogenen Daten anschließend
            nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach
            Art. 21 Abs. 2 DSGVO).
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Beschwerde­recht bei der zuständigen Aufsichts­behörde
          </h3>
          <p className="mb-4">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
            besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Recht auf Daten­übertrag­barkeit
          </h3>
          <p className="mb-4">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
            Einwilligung oder in Erfüllung eines Vertrags automatisiert
            verarbeiten, an sich oder an einen Dritten in einem gängigen,
            maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
            direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Auskunft, Berichtigung und Löschung
          </h3>
          <p className="mb-4">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren
            Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an
            uns wenden.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Recht auf Einschränkung der Verarbeitung
          </h3>
          <p className="mb-4">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu können Sie sich
            jederzeit an uns wenden. Das Recht auf Einschränkung der
            Verarbeitung besteht in folgenden Fällen:
          </p>
          <ul className="mb-4 list-disc pl-6 space-y-2">
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, benötigen wir in der Regel
              Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
              das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
              geschah/geschieht, können Sie statt der Löschung die Einschränkung
              der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
              sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
              Rechtsansprüchen benötigen, haben Sie das Recht, statt der
              Löschung die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abwägung zwischen Ihren und unseren Interessen
              vorgenommen werden. Solange noch nicht feststeht, wessen
              Interessen überwiegen, haben Sie das Recht, die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p className="mb-4">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
            abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
            Rechte einer anderen natürlichen oder juristischen Person oder aus
            Gründen eines wichtigen öffentlichen Interesses der Europäischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>

          {/* 4. Datenerfassung auf dieser Website */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            4. Datenerfassung auf dieser Website
          </h2>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Cookies
          </h3>
          <p className="mb-4">
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind
            kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
            automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
            gespeichert, bis Sie diese selbst löschen oder eine automatische
            Löschung durch Ihren Webbrowser erfolgt.
          </p>
          <p className="mb-4">
            Cookies können von uns (First-Party-Cookies) oder von
            Drittunternehmen stammen (sog. Third-Party-Cookies).
            Third-Party-Cookies ermöglichen die Einbindung bestimmter
            Dienstleistungen von Drittunternehmen innerhalb von Webseiten
            (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
          </p>
          <p className="mb-4">
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
            technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
            nicht funktionieren würden (z.&nbsp;B. die Warenkorbfunktion oder
            die Anzeige von Videos). Andere Cookies können zur Auswertung des
            Nutzerverhaltens oder zu Werbezwecken verwendet werden.
          </p>
          <p className="mb-4">
            Cookies, die zur Durchführung des elektronischen
            Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
            erwünschter Funktionen (z.&nbsp;B. für die Warenkorbfunktion) oder
            zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des
            Webpublikums) erforderlich sind (notwendige Cookies), werden auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine
            andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
            berechtigtes Interesse an der Speicherung von notwendigen Cookies
            zur technisch fehlerfreien und optimierten Bereitstellung seiner
            Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
            vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt
            die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die
            Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
            Cookies informiert werden und Cookies nur im Einzelfall erlauben,
            die Annahme von Cookies für bestimmte Fälle oder generell
            ausschließen sowie das automatische Löschen der Cookies beim
            Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
            kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mb-4">
            Welche Cookies und Dienste auf dieser Website eingesetzt werden,
            können Sie dieser Datenschutzerklärung entnehmen.
          </p>

          {/* 5. Analyse-Tools und Werbung */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            5. Analyse-Tools und Werbung
          </h2>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Google Analytics
          </h3>
          <p className="mb-4">
            Diese Website nutzt Funktionen des Webanalysedienstes Google
            Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon
            House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mb-4">
            Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten
            der Websitebesucher zu analysieren. Hierbei erhält der
            Websitebetreiber verschiedene Nutzungsdaten, wie z.&nbsp;B.
            Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft
            des Nutzers. Diese Daten werden in einer User-ID zusammengefasst und
            dem jeweiligen Endgerät des Websitebesuchers zugeordnet.
          </p>
          <p className="mb-4">
            Des Weiteren können wir mit Google Analytics u.&nbsp;a. Ihre Maus-
            und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google
            Analytics verschiedene Modellierungsansätze, um die erfassten
            Datensätze zu ergänzen und setzt Machine-Learning-Technologien bei
            der Datenanalyse ein.
          </p>
          <p className="mb-4">
            Google Analytics verwendet Technologien, die die Wiedererkennung des
            Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen
            (z.&nbsp;B. Cookies oder Device-Fingerprinting). Die von Google
            erfassten Informationen über die Benutzung dieser Website werden in
            der Regel an einen Server von Google in den USA übertragen und dort
            gespeichert.
          </p>
          <p className="mb-4">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
            Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
            Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Die Datenübertragung in die USA wird auf die
            Standardvertragsklauseln der EU-Kommission gestützt. Details finden
            Sie hier:{" "}
            <a
              href="https://privacy.google.com/businesses/controllerterms/mccs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://privacy.google.com/businesses/controllerterms/mccs/
            </a>
            .
          </p>
          <p className="mb-4">
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
            Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen
            zwischen der Europäischen Union und den USA, der die Einhaltung
            europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
            gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen
            verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
            <a
              href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark break-all"
            >
              https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
            </a>
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            IP Anonymisierung
          </h3>
          <p className="mb-4">
            Die Google Analytics IP-Anonymisierung ist aktiviert. Dadurch wird
            Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der
            Europäischen Union oder in anderen Vertragsstaaten des Abkommens
            über den Europäischen Wirtschaftsraum vor der Übermittlung in die
            USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
            einen Server von Google in den USA übertragen und dort gekürzt. Im
            Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten zusammenzustellen und um weitere
            mit der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im
            Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse
            wird nicht mit anderen Daten von Google zusammengeführt.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Browser Plugin
          </h3>
          <p className="mb-4">
            Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google
            verhindern, indem Sie das unter dem folgenden Link verfügbare
            Browser-Plugin herunterladen und installieren:{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            .
          </p>
          <p className="mb-4">
            Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
            finden Sie in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://support.google.com/analytics/answer/6004245?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://support.google.com/analytics/answer/6004245?hl=de
            </a>
            .
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Mouseflow
          </h3>
          <p className="mb-4">
            Diese Website nutzt Mouseflow, ein Web-Analyse-Tool der Mouseflow
            ApS, Flaesketorvet 68, 1711 Kopenhagen, Dänemark.
          </p>
          <p className="mb-4">
            Mouseflow zeichnet zufällig ausgewählte Einzelbesuche auf (nur mit
            anonymisierter IP-Adresse). Dadurch entsteht ein Protokoll der
            Mausbewegungen, Mausklicks und Tastaturinteraktionen mit dem Ziel,
            einzelne Webseitenbesuche stichprobenartig abzuspielen und
            potenzielle Verbesserungen für die Website daraus abzuleiten. Die
            erhobenen Daten sind nicht personenbezogen und werden nicht an
            Dritte weitergegeben. Die Speicherung und Verarbeitung der erhobenen
            Daten erfolgt innerhalb der EU.
          </p>
          <p className="mb-4">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
            Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
            Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Wenn Sie keine Aufzeichnung wünschen, können Sie diese auf allen
            Websites, die Mouseflow einsetzen, global für den Browser, den Sie
            gerade verwenden, unter dem folgenden Link deaktivieren:{" "}
            <a
              href="https://mouseflow.de/opt-out/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://mouseflow.de/opt-out/
            </a>
          </p>
          <p className="mb-4">
            Weitere Informationen zum Datenschutz und zur Datensicherheit von
            Mouseflow finden Sie hier:{" "}
            <a
              href="https://mouseflow.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://mouseflow.com/privacy/
            </a>
            .
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            JotForm
          </h3>
          <p className="mb-4">
            Diese Website nutzt JotForm, einen Dienst der JotForm Inc., 111 Pine
            St. Suite 1815, San Francisco, CA 94111, USA, zur Erstellung und
            Verwaltung von Online-Formularen.
          </p>
          <p className="mb-4">
            Die Formulare werden genutzt, um Leads zu generieren, wobei
            personenbezogene Daten wie Name, E-Mail-Adresse und Telefonnummer
            erhoben werden. Diese Daten werden verwendet, um Sie zu kontaktieren
            und Ihre Anfrage zu bearbeiten.
          </p>
          <p className="mb-4">
            Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
            Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.
            Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            JotForm speichert und verarbeitet Ihre Daten auf Servern innerhalb
            und außerhalb der EU. Weitere Informationen zu den
            Datenschutzpraktiken von JotForm finden Sie hier:{" "}
            <a
              href="https://www.jotform.com/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://www.jotform.com/privacy/
            </a>
            .
          </p>
          <p className="mb-4">
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
            Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen
            zwischen der Europäischen Union und den USA, der die Einhaltung
            europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
            gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen
            verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
            <a
              href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000TNlNAAW&status=Active"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark break-all"
            >
              https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000TNlNAAW&status=Active
            </a>
            .
          </p>

          {/* 6. Plugins und Tools */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            6. Plugins und Tools
          </h2>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            YouTube mit erweitertem Datenschutz
          </h3>
          <p className="mb-4">
            Diese Website bindet Videos der Website YouTube ein. Betreiber der
            Website ist die Google Ireland Limited („Google"), Gordon House,
            Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mb-4">
            Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden
            ist, wird eine Verbindung zu den Servern von YouTube hergestellt.
            Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie
            besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
            ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen
            Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus
            Ihrem YouTube-Account ausloggen.
          </p>
          <p className="mb-4">
            Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im
            erweiterten Datenschutzmodus abgespielt werden, werden nach Aussage
            von YouTube nicht zur Personalisierung des Surfens auf YouTube
            eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt
            werden, sind ebenfalls nicht personalisiert. Im erweiterten
            Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden
            jedoch sogenannte Local Storage Elemente im Browser des Users
            gespeichert, die ähnlich wie Cookies personenbezogene Daten
            beinhalten und zur Wiedererkennung eingesetzt werden können. Details
            zum erweiterten Datenschutzmodus finden Sie hier:{" "}
            <a
              href="https://support.google.com/youtube/answer/171780"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://support.google.com/youtube/answer/171780
            </a>
            .
          </p>
          <p className="mb-4">
            Gegebenenfalls können nach der Aktivierung eines YouTube-Videos
            weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir
            keinen Einfluss haben.
          </p>
          <p className="mb-4">
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
            25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers
            (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
            Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Weitere Informationen über Datenschutz bei YouTube finden Sie in
            deren Datenschutzerklärung unter:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p className="mb-4">
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
            Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen
            zwischen der Europäischen Union und den USA, der die Einhaltung
            europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
            gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen
            verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
            <a
              href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark break-all"
            >
              https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
            </a>
            .
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Google Fonts
          </h3>
          <p className="mb-4">
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Google Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren
            Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <p className="mb-4">
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
            den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
            darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde.
            Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
            der einheitlichen Darstellung des Schriftbildes auf seiner Website.
            Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
            Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die
            Speicherung von Cookies oder den Zugriff auf Informationen im
            Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne
            des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine
            Standardschrift von Ihrem Computer genutzt.
          </p>
          <p className="mb-4">
            Weitere Informationen zu Google Fonts finden Sie unter{" "}
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://developers.google.com/fonts/faq
            </a>{" "}
            und in der Datenschutzerklärung von Google:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://policies.google.com/privacy?hl=de
            </a>
            .
          </p>
          <p className="mb-4">
            Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US
            Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen
            zwischen der Europäischen Union und den USA, der die Einhaltung
            europäischer Datenschutzstandards bei Datenverarbeitungen in den USA
            gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen
            verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere
            Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:{" "}
            <a
              href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark break-all"
            >
              https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
            </a>
            .
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Google reCAPTCHA
          </h3>
          <p className="mb-4">
            Wir nutzen „Google reCAPTCHA" (im Folgenden „reCAPTCHA") auf dieser
            Website. Anbieter ist die Google Ireland Limited („Google"), Gordon
            House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mb-4">
            Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf dieser
            Website (z.&nbsp;B. in einem Kontaktformular) durch einen Menschen
            oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert
            reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener
            Merkmale. Diese Analyse beginnt automatisch, sobald der
            Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA
            verschiedene Informationen aus (z.&nbsp;B. IP-Adresse, Verweildauer
            des Websitebesuchers auf der Website oder vom Nutzer getätigte
            Mausbewegungen). Die bei der Analyse erfassten Daten werden an
            Google weitergeleitet.
          </p>
          <p className="mb-4">
            Die reCAPTCHA-Analysen laufen vollständig im Hintergrund.
            Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
            stattfindet.
          </p>
          <p className="mb-4">
            Die Speicherung und Analyse der Daten erfolgt auf Grundlage von Art.
            6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
            Interesse daran, seine Webangebote vor missbräuchlicher
            automatisierter Ausspähung und vor SPAM zu schützen. Sofern eine
            entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
            25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers
            (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
            Einwilligung ist jederzeit widerrufbar.
          </p>
          <p className="mb-4">
            Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
            Google-Datenschutzbestimmungen und den Google Nutzungsbedingungen
            unter folgenden Links:{" "}
            <a
              href="https://policies.google.com/privacy?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://policies.google.com/privacy?hl=de
            </a>{" "}
            und{" "}
            <a
              href="https://policies.google.com/terms?hl=de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://policies.google.com/terms?hl=de
            </a>
            .
          </p>

          {/* 7. Eigenentwickelte Plugins und Integrationen */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            7. Eigenentwickelte Plugins und Integrationen
          </h2>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            Interne Tools und Dienste
          </h3>
          <p className="mb-4">
            Unsere Website nutzt intern entwickelte Plugins und Integrationen
            zur Verbesserung der Benutzererfahrung und der Datensicherheit.
            Diese Tools erfassen und verarbeiten keine personenbezogenen Daten
            außerhalb der in dieser Datenschutzerklärung genannten Zwecke.
          </p>

          {/* 8. Tippgeber-Programm */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            8. Tippgeber-Programm
          </h2>

          <h5 className="mt-6 mb-2 font-outfit text-base font-semibold text-secondary">
            Automatische Teilnahme
          </h5>
          <p className="mb-4">
            Nach Vertragsabschluss nehmen wir unsere Kund:innen automatisch in
            unser Tippgeber-Programm auf, um ihnen einen persönlichen
            Empfehlungslink bereitzustellen.
          </p>

          <h5 className="mt-6 mb-2 font-outfit text-base font-semibold text-secondary">
            Welche Daten werden verarbeitet?
          </h5>
          <ul className="mb-4 list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
          </ul>

          <h5 className="mt-6 mb-2 font-outfit text-base font-semibold text-secondary">
            Zweck der Verarbeitung
          </h5>
          <ul className="mb-4 list-disc pl-6 space-y-1">
            <li>
              Erstellung und Verwaltung des persönlichen Empfehlungslinks
            </li>
            <li>Abwicklung von Empfehlungen und Prämienauszahlungen</li>
          </ul>

          <h5 className="mt-6 mb-2 font-outfit text-base font-semibold text-secondary">
            Rechtsgrundlage
          </h5>
          <p className="mb-4">
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an Kundenbindung und
            Empfehlungsmarketing).
          </p>

          <h5 className="mt-6 mb-2 font-outfit text-base font-semibold text-secondary">
            Dienstleister
          </h5>
          <p className="mb-4">
            Für die technische Abwicklung nutzen wir die Software „Referral
            Rock" (Referral Rock Inc., Sitz: USA). Dabei werden die oben
            genannten Daten ausschließlich zur Erstellung und Verwaltung des
            Empfehlungslinks verwendet. Sofern eine Übermittlung in die USA
            erfolgt, geschieht dies auf Grundlage der aktuellen
            EU-Standardvertragsklauseln bzw. des EU-US Data Privacy Frameworks,
            um ein angemessenes Datenschutzniveau sicherzustellen.
          </p>

          <h5 className="mt-6 mb-2 font-outfit text-base font-semibold text-secondary">
            Freiwilligkeit &amp; Widerspruch
          </h5>
          <p className="mb-4">
            Die Teilnahme am Tippgeber-Programm ist freiwillig. Eine aktive
            Nutzung des Links ist nicht erforderlich. Kund:innen können der
            Teilnahme jederzeit widersprechen. In diesem Fall werden die Daten
            unverzüglich gelöscht.
          </p>

          {/* 9. WhatsApp-Kommunikation und WhatsApp-Chatbot */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            9. WhatsApp-Kommunikation und WhatsApp-Chatbot
          </h2>
          <p className="mb-4">
            Verantwortlich für die im Rahmen der WhatsApp-Kommunikation
            erfolgende Datenverarbeitung ist die in dieser Datenschutzerklärung
            genannte verantwortliche Stelle.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.1 Allgemeine Hinweise zur Nutzung von WhatsApp
          </h3>
          <p className="mb-4">
            Wir nutzen WhatsApp zur Kundenkommunikation, zum Versand von
            aktuellen Informationen und Angeboten sowie für den Kundensupport.
            Zusätzlich bieten wir für bestimmte Veranstaltungen oder
            Serviceangebote einen WhatsApp-Chatbot an.
          </p>
          <p className="mb-4">
            Der Einsatz erfolgt über die offizielle WhatsApp Business API in
            Verbindung mit dem Technologieanbieter Superchat (SuperX GmbH,
            Prenzlauer Allee 242-247, 10405 Berlin, Deutschland, nachfolgend
            „Superchat" genannt).
          </p>
          <p className="mb-4">
            Die primäre Datenverarbeitung erfolgt auf Servern in Frankfurt am
            Main, Deutschland, sodass die Verarbeitung innerhalb der EU und nach
            den Standards der Datenschutz-Grundverordnung (DSGVO) erfolgt. Der
            Hinweis zur Datenschutzerklärung ist auf dem WhatsApp Profil in der
            Beschreibung hinterlegt.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.2 Verarbeitete Datenkategorien
          </h3>
          <p className="mb-4">
            Im Rahmen der Nutzung unseres WhatsApp-Chatbots und
            WhatsApp-Services verarbeiten wir folgende personenbezogene Daten:
          </p>
          <ul className="mb-4 list-disc pl-6 space-y-1">
            <li>Ihre Telefonnummer</li>
            <li>Ihr WhatsApp-Profilname</li>
            <li>Ihr Vorname (falls verfügbar)</li>
            <li>Ihre Kommunikations- und Interaktionsdaten im Chat</li>
            <li>Ihr Klickverhalten innerhalb des Chats</li>
            <li>
              Öffentlich einsehbare Informationen aus Ihren Social-Media-Profilen
              (sofern relevant)
            </li>
            <li>Ihr Navigationsverhalten auf unserer Website</li>
            <li>
              Sonstige von Ihnen eingegebene Daten im Rahmen der
              Chat-Interaktion
            </li>
            <li>
              Technische Log-Daten (z.&nbsp;B. IP-Adresse, verwendeter Browser
              etc.)
            </li>
          </ul>
          <p className="mb-4">
            Weitere Informationen zur Datenverarbeitung durch WhatsApp finden
            Sie in der Datenschutzerklärung von WhatsApp unter:{" "}
            <a
              href="https://www.whatsapp.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary-dark"
            >
              https://www.whatsapp.com/legal/#privacy-policy
            </a>
            .
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.3 Rechtsgrundlagen der Datenverarbeitung
          </h3>
          <p className="mb-4">
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt je nach
            Kontext auf unterschiedlichen rechtlichen Grundlagen:
          </p>
          <p className="mb-4">
            <strong>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung:</strong>
            <br />
            Falls wir Ihre Daten zur Zusendung von Informationen oder
            Marketing-Mitteilungen über WhatsApp verarbeiten, geschieht dies nur
            mit Ihrer ausdrücklichen Einwilligung. Diese erfolgt über den Chat,
            indem Sie den Button „START" auswählen. Die Einwilligung kann
            jederzeit durch das Senden von „STOP" im Chat widerrufen werden.
          </p>
          <p className="mb-4">
            <strong>
              Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung oder
              Vertragsanbahnung:
            </strong>
            <br />
            Falls Sie WhatsApp zur Kundenbetreuung oder Vertragsabwicklung
            nutzen (z.&nbsp;B. für Support-Anfragen oder die Bearbeitung von
            Bestellungen), erfolgt die Verarbeitung Ihrer Daten zur Erfüllung
            eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen.
          </p>
          <p className="mb-4">
            <strong>
              Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse:
            </strong>
            <br />
            In bestimmten Fällen kann die Verarbeitung auf unserem berechtigten
            Interesse an einer effektiven Kundenkommunikation basieren. Dies
            trifft z.&nbsp;B. zu, wenn wir analysieren, wie unser Chatbot
            genutzt wird, um diesen zu verbessern.
          </p>
          <p className="mb-4">
            <strong>
              § 25 Abs. 1 TTDSG – Einwilligung für Cookies oder
              Endgeräte-Zugriff:
            </strong>
            <br />
            Falls die Verarbeitung Tracking-Technologien wie Cookies oder
            Device-Fingerprinting umfasst, geschieht dies nur mit Ihrer
            gesonderten Einwilligung gemäß § 25 Abs. 1 TTDSG. Diese
            Einwilligung ist jederzeit widerrufbar.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.4 Speicherdauer und Datenlöschung
          </h3>
          <p className="mb-4">
            Wir speichern Ihre Daten nur so lange, wie sie für die jeweiligen
            Verarbeitungszwecke erforderlich sind:
          </p>
          <ul className="mb-4 list-disc pl-6 space-y-2">
            <li>
              Wenn Sie Ihre Einwilligung widerrufen (durch „STOP" im Chat),
              werden Ihre personenbezogenen Daten nicht mehr für den
              WhatsApp-Service genutzt und anonymisiert.
            </li>
            <li>
              Kommunikationsverläufe werden nach spätestens 12 Monaten gelöscht,
              sofern keine gesetzliche Aufbewahrungspflicht besteht.
            </li>
            <li>
              Falls die Daten für eine Vertragsabwicklung erforderlich sind,
              erfolgt die Speicherung nach den gesetzlichen
              Aufbewahrungsfristen, insbesondere nach § 147 AO (6 Jahre) oder §
              257 HGB (10 Jahre).
            </li>
          </ul>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.5 Datenweitergabe und mögliche Drittstaatenübermittlung
          </h3>
          <p className="mb-4">
            Ihre Telefonnummer und Kommunikationsdaten werden im Rahmen der
            WhatsApp-Nutzung an folgende Unternehmen übermittelt:
          </p>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            9.5.1 Verarbeitung innerhalb der EU (Deutschland)
          </h4>
          <p className="mb-4">
            Die Verarbeitung Ihrer Daten erfolgt primär auf Servern in Frankfurt
            am Main, Deutschland, die von Superchat gehostet werden. Damit
            werden Ihre Daten innerhalb der EU verarbeitet und unterliegen den
            hohen Datenschutzanforderungen der DSGVO.
          </p>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            9.5.2 Mögliche Übertragung in Drittländer (insbesondere USA)
          </h4>
          <p className="mb-4">
            Trotz der primären Verarbeitung in der EU kann in folgenden Fällen
            eine Datenübertragung in Drittländer (insbesondere die USA)
            stattfinden:
          </p>
          <ul className="mb-4 list-disc pl-6 space-y-2">
            <li>
              <strong>
                Support-Anfragen oder Systemwartungen durch Superchat, Inc.:
              </strong>{" "}
              Falls technische Unterstützung durch Superchat erforderlich ist,
              können Mitarbeiter von Superchat, Inc. in den USA auf
              personenbezogene Daten zugreifen.
            </li>
            <li>
              <strong>
                Datenübertragung durch WhatsApp an Meta (USA):
              </strong>{" "}
              WhatsApp Ireland Limited verarbeitet die Daten innerhalb der EU,
              kann aber Daten an Meta Platforms, Inc. (USA) weitergeben.
            </li>
          </ul>

          <h4 className="mt-6 mb-2 font-outfit text-lg font-semibold text-secondary">
            9.5.3 Datenschutzmaßnahmen bei einer Drittlandübertragung
          </h4>
          <p className="mb-4">
            Falls eine Datenübertragung in die USA erfolgt, sind folgende
            Schutzmaßnahmen aktiv:
          </p>
          <ul className="mb-4 list-disc pl-6 space-y-2">
            <li>
              <strong>EU-US Data Privacy Framework:</strong> Superchat nimmt am
              EU-US Data Privacy Framework teil, das ein angemessenes
              Datenschutzniveau gewährleisten soll.
            </li>
            <li>
              <strong>EU-Standardvertragsklauseln (SCCs):</strong> Superchat und
              WhatsApp nutzen Standardvertragsklauseln der EU-Kommission, um ein
              DSGVO-konformes Datenschutzniveau sicherzustellen.
            </li>
          </ul>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.6 Widerruf und Betroffenenrechte
          </h3>
          <p className="mb-4">Sie haben das Recht:</p>
          <ul className="mb-4 list-disc pl-6 space-y-2">
            <li>
              Ihre Einwilligung jederzeit zu widerrufen (durch „STOP" im Chat
              oder per E-Mail an info@invest4kids.de)
            </li>
            <li>
              Auskunft über Ihre gespeicherten Daten gemäß Art. 15 DSGVO zu
              erhalten
            </li>
            <li>
              Die Berichtigung falscher Daten gemäß Art. 16 DSGVO zu verlangen
            </li>
            <li>
              Die Löschung Ihrer Daten gemäß Art. 17 DSGVO zu fordern, soweit
              keine gesetzlichen Aufbewahrungspflichten entgegenstehen
            </li>
            <li>
              Die Einschränkung der Verarbeitung gemäß Art. 18 DSGVO zu
              verlangen
            </li>
            <li>
              Der Datenverarbeitung gemäß Art. 21 DSGVO zu widersprechen, wenn
              diese auf unserem berechtigten Interesse beruht
            </li>
          </ul>
          <p className="mb-4">
            Anfragen zu Ihren Datenschutzrechten können Sie an folgende
            E-Mail-Adresse richten: info@invest4kids.de.
          </p>

          <h3 className="mt-8 mb-3 font-outfit text-xl font-semibold text-secondary">
            9.7 Änderungen dieses Abschnitts
          </h3>
          <p className="mb-4">
            Wir behalten uns das Recht vor, diesen Abschnitt der
            Datenschutzerklärung jederzeit anzupassen, um ihn an neue rechtliche
            Anforderungen oder Änderungen unserer WhatsApp-Services anzupassen.
            Die jeweils aktuelle Version finden Sie unter der
            Datenschutzerklärung auf unserer Website.
          </p>

          {/* 10. Änderungen dieser Datenschutzerklärung */}
          <h2 className="mt-12 mb-6 font-outfit text-2xl md:text-3xl font-bold text-secondary">
            10. Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="mb-4">
            Wir behalten uns das Recht vor, diese Datenschutzerklärung von Zeit
            zu Zeit anzupassen, damit sie stets den aktuellen rechtlichen
            Anforderungen entspricht oder um Änderungen unserer Leistungen in
            der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt
            dann die neue Datenschutzerklärung.
          </p>
        </div>
      </section>
    </main>
  );
}
