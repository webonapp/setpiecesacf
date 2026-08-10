ACF Fiorentina - Set Pieces App PWA v117

COME USARLA SU IPAD
1. Carica l'intera cartella su un hosting HTTPS.
2. Apri in Safari l'indirizzo che termina con /index.html.
3. Tocca Condividi.
4. Tocca "Aggiungi alla schermata Home".
5. Apri l'app dalla nuova icona.
6. Dopo la prima apertura online, l'app potrà essere usata offline.

IMPORTANTE
- Non aprire index.html direttamente dall'app File o da Quick Look.
- Service worker e installazione PWA funzionano soltanto tramite HTTPS oppure localhost.
- Backup e importazione restano locali sul dispositivo.
- Le funzioni PNG/PDF dipendono dalle librerie esterne già richiamate nell'HTML:
  apri almeno una volta l'app con connessione prima di usarle offline.


NOVITÀ v117
- Barra touch sotto il campo
- Copia, incolla ed elimina
- Allineamento orizzontale e verticale
- Distribuzione uniforme
- Gestione livelli per oggetti grafici
- Blocco modifiche
- Modalità campo intero


NOVITÀ v117 - BACKUP UNIVERSALE
- Nuovo formato .acf compatibile con Mac, iPad, Safari e Chrome
- Importazione di .acf, .setpieces, .acfbackup, .json e .txt
- Compatibilità con tutti i backup precedenti
- Lettura UTF-8 robusta tramite ArrayBuffer
- Supporto ai file rinominati o salvati tramite AirDrop/iCloud
- Esportazione tramite pannello Condividi nativo su iPad
- Controllo e riparazione automatica dei dati importati
- Messaggi di errore dettagliati


NOVITÀ v117
- Pulsante Torna indietro, equivalente a Command+Z
- Allinea H rinominato in Orizzontale
- Allinea V rinominato in Verticale


CORREZIONE v141 - POSIZIONI INVARIATE
- Rapporto del campo fissato a 1000 × 620 su Mac, iPad e fullscreen
- Nessuna deformazione passando tra dispositivi
- Nessun riallargamento entrando in modalità Campo intero
- Coordinate di giocatori, frecce, forme, palloni e testi mantenute in percentuale


NOVITÀ v141
- Dimensione predefinita delle maglie: 90%
- Trascinamento più fluido di pallone e testi
- Stessa anagrafica completa per Fiorentina e avversari
- Cursore Tratteggio per frecce dritte e curve
- Punta delle frecce sempre piena
- Controllo completo della sintassi JavaScript


NOVITÀ v141
- Nuovo sfondo del campo basato sull'immagine campo.png
- Vecchie linee CSS del campo disattivate
- Coordinate e posizioni degli oggetti mantenute invariate
- Compatibilità Mac, iPad, fullscreen, PNG e PDF


NOVITÀ v141
- Movimento pallone più fluido su Mac e iPad
- Movimento testo più fluido su Mac e iPad
- Eliminati i rerender durante il trascinamento
- Pointer capture e requestAnimationFrame per un drag stabile
- Bloccato lo scorrimento involontario della pagina durante il drag


NOVITÀ v141
- Flag Numero nel cerchio per Fiorentina e avversari
- Opzione Avversari: linea tratteggiata da compilare a penna
- Navigazione schema precedente/successivo in Campo intero
- Tratteggio delle frecce corretto
- Punta delle frecce sempre piena
- Nuove preferenze incluse nel backup


NOVITÀ v141
- Linea avversari continua anziché tratteggiata
- Linea avversari spostata più in basso
- Flag numero applicato soltanto ai giocatori selezionati
- Possibilità di mostrare/nascondere il numero per gruppi diversi
- Stato misto del flag quando la selezione contiene giocatori con impostazioni differenti


NOVITÀ v141
- Flag Linea nei selezionati applicato soltanto agli avversari selezionati
- Possibilità di mostrare o nascondere la linea per singoli avversari o gruppi
- Stato intermedio del flag per selezioni miste
- Il flag resta disabilitato se non è selezionato alcun avversario


FIX v141 - TRATTEGGIO FRECCE
- Applicato realmente stroke-dasharray al corpo di frecce dritte e curve
- Punta della freccia sempre piena
- Quattro livelli: continua, tratto corto, tratto medio, puntinata
- Aggiornamento immediato del cursore anche su iPad
- Valore salvato nei progetti e nei backup
- Compatibilità con frecce create nelle versioni precedenti


NOVITÀ v141 - AGGIORNAMENTO AUTOMATICO PWA
- Cache service worker versionata per ogni release
- Eliminazione automatica delle cache precedenti
- index.html sempre controllato dalla rete prima della cache
- Asset aggiornati in background con stale-while-revalidate
- Controllo aggiornamenti all'avvio, al ritorno in primo piano e ogni 5 minuti
- Attivazione automatica della nuova versione
- Salvataggio dello stato prima del refresh invisibile
- Nessuna necessità di svuotare manualmente la cache


NOVITÀ v141 - RENDERING CAMPO
- Canvas logico fisso 1000 × 620
- Il campo viene ridimensionato soltanto tramite transform: scale()
- Maglie, palloni, testi, frecce e forme crescono insieme al campo
- Nessun oggetto resta piccolo entrando in Campo intero
- Coordinate identiche tra Mac, iPad e fullscreen
- Adattamento automatico a rotazione e ridimensionamento


FIX v141 - CAMPO INTERO
- Corretto il campo ingrandito e tagliato in modalità fullscreen
- Eliminata la centratura tramite translate, instabile su Safari e Chrome
- Posizione del canvas calcolata esplicitamente in pixel
- Scala uniforme per campo, maglie, palloni, testi, frecce e forme
- Campo sempre centrato e interamente visibile
- Ricalcolo automatico dopo rotazione e cambio dimensione


FIX v141 - FULLSCREEN PERFETTO
- Scala calcolata sul visualViewport reale del browser
- Campo sempre interamente visibile
- Centratura orizzontale e verticale precisa
- Spazio protetto per le frecce di navigazione
- Nessun taglio inferiore o laterale
- Nessuna deformazione
- Maglie, palloni, frecce, testi e forme scalano insieme
- Ricalcolo dopo resize, rotazione, cambio barra browser e riapertura app


FIX v141 - CAMPO INTERO
- Campo sempre completamente visibile
- Margini di sicurezza più ampi sopra, sotto e ai lati
- Calcolo basato sul viewport reale del browser
- Piccolo fattore di sicurezza contro tagli e arrotondamenti
- Centratura precisa
- Campo, maglie, palloni, frecce, testi e forme scalano insieme


FIX v141 - CAMPO INTERO
- Centratura reale orizzontale e verticale
- Campo ingrandito uniformemente
- Spazi bianchi ridotti al minimo
- Proporzioni 1000 × 620 mantenute
- Maglie, palloni, frecce, testi e forme scalano insieme
- Nessun taglio ai bordi


NOVITÀ v141 - MODALITÀ PANCHINA E SPOGLIATOIO
- Pulsante PANCHINA a sinistra di Sostituzione
- Pulsante SPOGLIATOIO a destra di Sostituzione
- PANCHINA mostra cognome, cerchio bianco e numero su tutti i giocatori
- SPOGLIATOIO nasconde cognome e numero, lasciando soltanto il cerchio bianco
- Funzione applicata sia a Fiorentina sia agli avversari
- Stato attivo evidenziato graficamente
- Preferenze incluse automaticamente nei backup


NOVITÀ v141
- PANCHINA e SPOGLIATOIO diventano modalità globali del progetto
- La modalità vale automaticamente per tutti gli schemi
- I nuovi schemi e quelli duplicati ereditano la modalità attiva
- PANCHINA mostra nome, cerchio e numero su tutti i giocatori
- SPOGLIATOIO mostra soltanto il cerchio bianco
- Rimossa definitivamente la scritta tecnica di stato sotto Sostituzione


NOVITÀ v141
- Numero nei selezionati modifica soltanto lo schema corrente
- Linea nei selezionati modifica soltanto lo schema corrente
- Ogni schema conserva autonomamente numeri e linee personalizzate
- PANCHINA e SPOGLIATOIO restano modalità globali per tutti gli schemi
- Override per-schema inclusi automaticamente nei backup


NOVITÀ v141
- Nuovo pulsante PREPARAZIONE accanto a SPOGLIATOIO
- PREPARAZIONE riattiva la modifica libera di numeri, nomi, linee e cerchi
- PANCHINA e SPOGLIATOIO restano modalità globali per tutti gli schemi
- I flag locali sono modificabili soltanto in PREPARAZIONE
- Pulsante Sostituzione spostato più a destra
- Stato attivo evidenziato sui tre pulsanti modalità


NOVITÀ v141
- In modalità SPOGLIATOIO i nomi restano nascosti
- Il flag Linea nei selezionati resta utilizzabile sugli avversari
- La linea può essere mostrata o nascosta soltanto sugli avversari selezionati
- Numero nei selezionati resta bloccato fuori da PREPARAZIONE
- PANCHINA continua a mostrare nome, cerchio e numero su tutti gli schemi


NOVITÀ v141
- Numero nei selezionati utilizzabile in PANCHINA, SPOGLIATOIO e PREPARAZIONE
- Linea nei selezionati utilizzabile in PANCHINA, SPOGLIATOIO e PREPARAZIONE
- Le modifiche restano limitate allo schema corrente
- PANCHINA e SPOGLIATOIO impostano la base globale su tutti gli schemi
- PREPARAZIONE e Sostituzione non si sovrappongono più
- Header reso responsive su Mac e iPad


FIX v141
- Pulsante Sostituzione separato dal gruppo PANCHINA/SPOGLIATOIO/PREPARAZIONE
- Nessuna sovrapposizione tra i quattro pulsanti
- Header responsive su Mac e iPad
- Su schermi stretti le modalità restano scorrevoli senza coprire Sostituzione


FIX v141
- Pulsante Sostituzione spostato in una riga dedicata
- Nessuna sovrapposizione con contatori o modalità
- Posizione stabile su Mac e iPad
- Header principale semplificato


NOVITÀ v141
- Pulsante Sostituzione spostato al centro della barra superiore
- Rimossa la riga dedicata precedente
- Linea nei selezionati disponibile per Fiorentina e avversari
- In SPOGLIATOIO: niente nome, niente numero e niente cerchio bianco
- In SPOGLIATOIO: linea continua sotto tutte le maglie
- Linea sotto la maglia ridotta del 35%


NOVITÀ v144
- Pulsante Sostituzione abbassato ulteriormente del 35%
- Linea sotto le maglie Fiorentina ridotta del 40%
- Linea avversari lasciata invariata
- Nessuna modifica alla logica dell'app


NOVITÀ v144
- Pulsante Sostituzione abbassato ulteriormente del 30%
- Linea sotto le maglie abbassata di circa 7 px
- Colore linea aggiornato a #D0CFD7
- Lunghezze linea Fiorentina e avversari mantenute come in v143


FIX v146
- Allineato il versioning interno a v146
- Aggiornati STORAGE_KEY, appVersion e service worker
- Corretto João Mário: firstName João, lastName Mário, name João Mário
- Eliminato il nome duplicato João João Mário
- Ripuliti i riferimenti residui a pulsanti Undo/Redo inesistenti
- Controllo sintassi JavaScript completato


FIX v147
- Ripristinato il funzionamento dei due flag Cerchio bianco
- Funzionano in PANCHINA, SPOGLIATOIO e PREPARAZIONE
- Selezione supportata sia dal campo sia dalla lista laterale
- Modifica applicata soltanto allo schema corrente quando ci sono giocatori selezionati
- Senza selezione, il flag aggiorna il valore predefinito della squadra
- PANCHINA e SPOGLIATOIO continuano a impostare la base globale su tutti gli schemi


FIX v148 - SPESSORE FRECCE
- Unica sorgente dello spessore: cursore Spessore
- Nuove frecce create sempre con il valore esatto del cursore
- Rimossa la duplicazione della proprietà dashStyle
- Spessore normalizzato e salvato come numero
- vector-effect non-scaling-stroke per resa uniforme
- Rimossa l'ombra direzionale che alterava otticamente lo spessore
- Tratteggio ricalcolato sullo spessore reale
- Compatibilità con frecce delle versioni precedenti


ROADMAP 20 PASSAGGI - PASSAGGIO 01/20 - v149
Fondazione tecnica / integrità progetto

- Introdotto PROJECT_SCHEMA_VERSION
- Aggiunta normalizzazione centralizzata di progetto, schemi, giocatori e oggetti grafici
- Coordinate e valori numerici vengono validati prima di essere usati
- Salvataggio protetto contro stati corrotti
- Ripristino Undo/Redo protetto contro snapshot non validi
- Limite storico ridotto e centralizzato per contenere l'uso di memoria
- Ogni nuovo schema inizializza correttamente gli override grafici
- Nessuna modifica intenzionale all'esperienza utente o al layout


ROADMAP 20 PASSAGGI - PASSAGGIO 02/20 - v150
Motore grafico comune, fase 1

- Introdotto un gestore comune delle selezioni per palloni, testi e disegni
- Introdotto un motore Pointer Drag condiviso con requestAnimationFrame
- Pallone e testo ora usano lo stesso ciclo: selezione, drag, history, salvataggio
- Cleanup centralizzato degli event listener di trascinamento
- Gestione pointerId uniforme per Mac e iPad
- clearAllSelections ora aggiorna anche i testi
- Nessuna modifica intenzionale al layout o alle coordinate degli schemi
- Frecce e maglie restano sul motore precedente in questa release per ridurre il rischio


ROADMAP 20 PASSAGGI - PASSAGGIO 03/20 - v151
Motore grafico comune, fase 2

- Frecce dritte, frecce curve, cerchi e rettangoli migrati al motore comune di selezione
- Drag dei disegni migrato a un gestore Pointer condiviso
- Coordinate logiche 1000×620 gestite da un unico helper
- Cleanup centralizzato di pointermove / pointerup / pointercancel
- Multi-selezione dei disegni mantenuta
- Selezione primaria e selezione multipla ora restano sincronizzate
- Undo e salvataggio del drag seguono lo stesso ciclo di palloni e testi
- Nessuna modifica intenzionale al layout o alla resa grafica
- Maglie restano sul motore storico per un'ultima migrazione separata


ROADMAP 20 PASSAGGI - PASSAGGIO 04/20 - v152
Motore grafico comune, fase 3

- Maglie/giocatori migrate al motore Pointer Drag condiviso
- Selezione giocatori integrata nel gestore comune delle selezioni
- Drag singolo e drag di gruppo mantengono lo stesso comportamento
- Eliminato il possibile salto iniziale della maglia quando viene presa fuori centro
- Un solo snapshot Undo per ogni trascinamento completo
- Cleanup comune degli event listener pointermove/pointerup/pointercancel
- Gestione pointerId uniforme per Mac e iPad
- Cmd/Ctrl continua a gestire la multiselezione senza avviare drag accidentali
- Doppio tap/click rapido degli avversari preservato
- Palloni, testi, frecce, forme e maglie ora condividono la stessa base di selezione/drag


ROADMAP 20 PASSAGGI - PASSAGGIO 05/20 - v153
Motore grafico comune, completamento

- Maniglie di frecce dritte migrate al motore Pointer Drag condiviso
- Maniglie delle frecce curve migrate al motore condiviso
- Control point Bézier delle curve gestiti dallo stesso sistema
- Maniglie di cerchi e rettangoli migrate al motore condiviso
- Un solo snapshot Undo per ogni modifica tramite maniglia
- Eliminati salvataggi duplicati al termine del drag
- Coordinate delle curve normalizzate per evitare valori fuori campo
- Touch handling delle maniglie migliorato su iPad
- Motore grafico comune ora copre maglie, palloni, testi, frecce, curve e forme
- Nessuna modifica intenzionale al layout o alla grafica del progetto


ROADMAP 20 PASSAGGI - PASSAGGIO 06/20 - v154
Undo/Redo robusto, fase 1

- Cronologia deduplicata: snapshot identici non occupano più step
- Undo e Redo protetti durante ripristini o transazioni
- Introdotta base transazionale begin/commit/cancel per le prossime operazioni complesse
- Drag usa la stessa deduplicazione centralizzata
- Aggiunto pulsante touch Ripristina accanto a Torna indietro
- Cmd/Ctrl+Shift+Z continua a fare Redo
- Aggiunto Cmd/Ctrl+Y come scorciatoia Redo
- Shortcut Undo/Redo ignorate durante la scrittura in input e textarea
- Corretto cache-busting del service worker rimasto fermo a v127
- Import progetto normalizzato prima del rendering


ROADMAP 20 PASSAGGI - PASSAGGIO 07/20 - v155
Undo/Redo robusto, fase 2
- Slider raggruppati in un solo step Undo per gesto.
- Evitati snapshot multipli durante lo scorrimento.
- Controlli grafici transaction-aware.
- Undo/Redo chiudono regolazioni aperte in sicurezza.
- Stato accessibile Undo/Redo sincronizzato.
- Cache service worker aggiornata a v155.


ROADMAP 20 PASSAGGI - PASSAGGIO 08/20 - v156
Architettura modalità, fase 1

- Separata la logica di visualizzazione in tre livelli:
  1. base globale della modalità
  2. override dello schema corrente
  3. valore del singolo giocatore
- Centralizzata la lettura di nome, numero, cerchio e linea
- Centralizzata la scrittura degli override dello schema
- PANCHINA / SPOGLIATOIO / PREPARAZIONE mantengono il comportamento esistente
- I flag locali continuano a modificare soltanto lo schema corrente
- Override non validi vengono ripuliti automaticamente al caricamento
- Aggiunto controllo di integrità degli override per ogni schema
- Nessuna modifica intenzionale al layout o alla resa grafica


ROADMAP 20 PASSAGGI - PASSAGGIO 09/20 - v157
Architettura modalità, fase 2

- PANCHINA e SPOGLIATOIO diventano preset globali non distruttivi
- Il cambio modalità non riscrive più gli override salvati nei singoli schemi
- Tornando a PREPARAZIONE riappaiono automaticamente le personalizzazioni locali
- Gerarchia definitiva:
  1. override dello schema corrente
  2. preset globale PANCHINA/SPOGLIATOIO
  3. valore base del giocatore/squadra
- I flag locali continuano a funzionare in tutte le modalità
- Aggiunto controllo interno per verificare che un cambio modalità non alteri gli schemi
- Nessuna modifica intenzionale al layout o alla grafica


ROADMAP 20 PASSAGGI - PASSAGGIO 10/20 - v158
Preset di visualizzazione, fase 1

- Introdotto un motore centralizzato VIEW_PRESETS
- Preparati i preset:
  - Preparazione
  - Panchina
  - Spogliatoio
  - Presentazione staff
  - Stampa
  - Analisi interna
- PANCHINA / SPOGLIATOIO / PREPARAZIONE ora mantengono sincronizzato anche il preset interno
- Aggiunta proprietà state.viewPreset con migrazione automatica dei progetti esistenti
- Predisposto il passaggio controllato alla modalità Campo intero per i preset che lo richiederanno
- Rimossi controlli diagnostici v157 non più necessari
- Nessuna modifica intenzionale all'interfaccia in questa release


ROADMAP 20 PASSAGGI - PASSAGGIO 11/20 - v159
Preset di visualizzazione, fase 2

- Aggiunto selettore Vista nella barra dei comandi rapidi
- Preset: Preparazione, Panchina, Spogliatoio, Presentazione staff, Stampa, Analisi interna
- Presentazione staff può attivare automaticamente Campo intero
- Selettore sincronizzato con PANCHINA/SPOGLIATOIO/PREPARAZIONE
- Evitati step Undo quando si richiama un preset già attivo
- Preset salvato nel progetto e nei backup
- Layout responsive per Mac e iPad


ROADMAP 20 PASSAGGI - PASSAGGIO 12/20 - v160
Frecce professionali, fase 1

- Stile corpo freccia trasformato in pulsanti espliciti
- Scelte rapide: Continua, Tratteggio, Puntinata
- Dimensione punta trasformata in preset rapidi
- Scelte punta: Piccola, Media, Grande
- I controlli precedenti restano internamente compatibili ma non occupano più spazio visivo
- Pulsante attivo sempre sincronizzato con la freccia selezionata
- Nuove frecce ereditano correttamente l'ultimo preset scelto
- Migliorata usabilità touch su iPad
- Nessuna modifica alla geometria o allo spessore delle frecce esistenti


ROADMAP 20 PASSAGGI - PASSAGGIO 13/20 - v161
Frecce professionali, fase 2

- Spessore delle frecce normalizzato e deterministico
- Eliminata la dipendenza della resa dello spessore dal resize SVG
- Aggiunto vector-effect non-scaling-stroke
- Pattern Continua / Tratteggio / Puntinata calcolato in modo stabile
- Tratteggio ora dipende solo dallo stile scelto e dallo spessore impostato
- stroke-linecap e stroke-linejoin uniformati
- Disegni esistenti normalizzati al caricamento
- Migliorata coerenza tra vista normale, Campo intero e iPad
- Nessuna modifica intenzionale a posizioni, colori o contenuto degli schemi


ROADMAP 20 PASSAGGI - PASSAGGIO 14/20 - v162
Snap intelligente, fase 1

- Toggle SNAP aggiunto nella barra comandi.
- Snap disattivato di default.
- Griglia logica al 5%.
- Aggancio morbido solo quando un oggetto si avvicina alla griglia.
- Maglie, palloni e testi supportano lo snap.
- Guide temporanee verticali/orizzontali durante l'aggancio.
- Stato SNAP salvato nel progetto e nei backup.
- Nessuna posizione esistente viene modificata automaticamente.


ROADMAP 20 PASSAGGI - PASSAGGIO 15/20 - v163
Snap intelligente, fase 2

- Snap ora riconosce gli allineamenti X/Y degli altri giocatori sul campo.
- Aggiunto aggancio dedicato al centro campo (50%).
- Guide verdi = allineamento con giocatore.
- Guide gialle = centro campo.
- Guide azzurre = griglia.
- Palloni e testi possono allinearsi alle coordinate dei giocatori.
- FIX importante: trascinando più maglie insieme lo snap non deforma più la formazione.
- Nel drag di gruppo viene agganciato il giocatore-ancora e applicato lo stesso delta a tutto il gruppo.
- SNAP resta opzionale e disattivato di default.


ROADMAP 20 PASSAGGI - PASSAGGIO 16/20 - v164
Export e stampa robusti, fase 1

- PNG e PDF ora usano una sessione di export isolata.
- Tutte le selezioni vengono nascoste durante la cattura.
- Stato completo dell'interfaccia ripristinato dopo l'export.
- Ripristino garantito anche se html2canvas/jsPDF genera un errore.
- PDF multi-schema ripulisce le selezioni a ogni pagina.
- Attesa di due frame prima della cattura per evitare render incompleti.
- Interazioni bloccate temporaneamente durante l'esportazione.
- Corretto il rischio di perdere selezioni di palloni, testi, frecce o multi-selezioni.
- Nessuna modifica al contenuto degli schemi.


ROADMAP 20 PASSAGGI - PASSAGGIO 17/20 - v165
Export e stampa robusti, fase 2

- Export PNG/PDF reso indipendente dalla modalità Campo intero.
- Prima della cattura viene usata automaticamente la geometria standard del campo.
- Al termine viene ripristinata anche la precedente modalità Campo intero.
- Scala export adattiva: alta qualità su Mac, consumo memoria controllato su iPad/iPhone.
- Limite prudente della superficie canvas per ridurre crash su dispositivi mobili.
- Retry automatico a qualità inferiore se una cattura ad alta risoluzione fallisce.
- Attesa esplicita di font e immagini prima dell'acquisizione.
- Timeout di sicurezza sulle immagini per evitare export bloccati.
- Controlli fullscreen e guide SNAP esclusi dalla copia esportata.
- Nessuna modifica ai dati o alla disposizione degli schemi.


ROADMAP 20 PASSAGGI - PASSAGGIO 18/20 - v166
Autosave e recupero sessione

- Aggiunto snapshot di recovery separato dal salvataggio principale.
- Recovery aggiornato con debounce per non appesantire iPad/Mac.
- Salvataggio forzato quando l'app passa in background o viene chiusa.
- Timestamp di aggiornamento aggiunto allo stato progetto.
- All'avvio viene confrontato il salvataggio normale con il recovery.
- Se il recovery è più recente, la sessione viene ripristinata automaticamente.
- Conservata anche la pagina/schema su cui si stava lavorando.
- Nessuna modifica visiva o ai contenuti degli schemi.


ROADMAP 20 PASSAGGI - PASSAGGIO 19/20 - v167
Stabilità runtime e self-healing

- Aggiunto controllo d'integrità dello stato prima del rendering.
- currentPage viene sempre ricondotto a uno schema valido.
- Se manca ogni schema viene ricreato automaticamente uno Schema 1 sicuro.
- Selezioni obsolete di giocatori, frecce, palloni e testi vengono ripulite.
- page() resa resistente a riferimenti fuori indice.
- Aggiunto safeRenderAll per recupero automatico da stato parzialmente corrotto.
- Errori runtime e Promise non gestite non lasciano più SNAP/export in stato bloccato.
- Cleanup aggiuntivo su blur e pointercancel, utile soprattutto su iPad.
- Recovery snapshot aggiornato alla v167.
- Nessuna modifica intenzionale a grafica o contenuto degli schemi.


ROADMAP 20 PASSAGGI - PASSAGGIO 20/20 - v168
Finalizzazione e hardening generale

- Migrazione automatica del progetto dalle versioni v164-v167.
- Corretto un bug latente dell'autosave recovery: il debounce era dopo il return di save() e quindi non veniva eseguito.
- Recovery snapshot aggiornato alla v168.
- Self-test leggero all'avvio per stato, rosa, campo, layer disegni e storage.
- Riparazione runtime eseguita prima del rendering finale.
- Sincronizzazione finale di SNAP, preset frecce e preset visualizzazione.
- Global error guard reso idempotente.
- Version marker v168 nel DOM per diagnosi cache.
- Service Worker aggiornato a v168 e attivazione immediata quando supportata.
- Nessuna modifica intenzionale alla grafica o agli schemi.
- ROADMAP 20/20 COMPLETATA.


v169 - Correzioni richieste + audit v168

- Rimossa la scritta/pulsante visivo "VISTA"; resta il selettore preset.
- Rifatta la disposizione dei controlli Punta e Tratteggio.
- Pulsanti frecce confinati correttamente nella sidebar, senza sovrapposizioni.
- Default nuove frecce: Punta Media (13), Tratteggio Continuo (0).
- Corretto bug self-test storage v168: ora rileva realmente un fallimento di localStorage.
- Recovery reso coerente con i wrapper safeStorageGet/Set/Remove.
- Nessuna modifica agli schemi esistenti o alla resa delle frecce già salvate.


v177 - FIX CRITICO REFRESH / ROSA / SCHEMI

Base ripartita dalla v169 stabile.

- Un'unica sorgente di stato viene caricata PRIMA del primo render.
- Rimossa completamente la sostituzione tardiva dello stato tramite recovery.
- Chiave progetto stabile: setPieceBoardPro_main.
- currentPage salvato separatamente e dentro il progetto.
- Dopo refresh viene riaperto automaticamente lo stesso schema.
- Lo schema viene renderizzato completo immediatamente: rosa, giocatori, palloni, testi, frecce.
- Il click sul campo o su un pallone non può più essere ciò che "fa comparire" giocatori vecchi.
- Stato "rosa caricata" derivato dai giocatori realmente presenti, non da un booleano stale.
- Se la rosa non è realmente presente, il pulsante Carica rosa torna utilizzabile.
- Menu schemi ricostruito deterministicamente ad ogni render.
- Cambio schema salva subito currentPage.
- Aggiunto pulsante visibile NUOVO SCHEMA.
- Nuovi schemi creati con positions della lunghezza corretta della rosa corrente.
- SNAP attivo di default e migrazione una-tantum v177.
- Flush sincrono su refresh/pagehide/background.
- Service Worker non salva più durante controllerchange.


v178 - Fix eliminazione multipla mista: giocatori, frecce, palloni e testi vengono eliminati insieme con una sola azione. Un solo Undo. Render completo dopo eliminazione. Stato rosa avversaria reso truth-based.


v179 - RESET COMPLETO SU REFRESH
- Ogni refresh apre sempre una nuova sessione vuota.
- Nessun progetto viene ricaricato automaticamente.
- Per conservare il lavoro bisogna Esportare backup.
- Per recuperarlo dopo refresh bisogna Importare backup.
- SNAP attivo di default.
- Rosa iniziale vuota.
- 10 schemi iniziali vuoti.
- Database/archivio resta separato.


v180
- Indicatore backup + contatore modifiche.
- Avviso refresh/chiusura con modifiche non esportate.
- Backup: YYMMDD_HH-MM_ACFSetPieces.json.
- Salvataggio manuale progetto nel Database ACF.
- Nuovo schema: vuoto / duplica corrente / crea da Layout.
- Rinomina rapida con matita.
- Copia/Incolla visibili.
- Controllo integrità rapido prima del backup.
- Reset su refresh della v179 preservato.
- Audit sintattico e strutturale completato.


v181 - FIX COMPLETO v180
- Causa principale trovata: listener su quickRenameSchemeBtn inesistente interrompeva il JavaScript.
- Questo bloccava Nuovo schema e Carica rosa Fiorentina.
- Pulsante rinomina aggiunto realmente nel DOM.
- Listener critici resi null-safe.
- Caricamento rosa rafforzato.
- Tendina schemi sincronizzata e abilitata a ogni render.
- Service Worker query corretta a v181.
- Audit statico: nessun listener diretto punta a ID mancanti.


v182 - RIGHT COLUMN STABILITY FIX
- Aggiunto controller indipendente dedicato alla colonna destra.
- Funziona anche se il grande script principale incontra un errore runtime.
- Fix Carica rosa Fiorentina.
- Fix Aggiungi rosa avversario.
- Fix + Giocatore.
- Fix toggle nomi selezionati.
- Fix cerchio Fiorentina/Avversari.
- Fix Numero nei selezionati.
- Fix Linea nei selezionati.
- Fix Note dello schema.
- Eventi catturati prima dei listener legacy per evitare doppie esecuzioni.
- Service Worker aggiornato a v182.


v183 - ROSTER BUTTONS HARD FIX
- Rimossi i listener legacy dei due pulsanti rosa.
- Rimosso il controller v182 che poteva competere con i listener principali.
- Carica rosa Fiorentina ora ha un singolo onclick diretto.
- Aggiungi rosa avversario ora ha un singolo onclick diretto.
- Fiorentina viene ricostruita dal preset già incluso nell'app.
- Avversari: esattamente 11 giocatori generici.
- Roster e array positions riallineati dopo ogni caricamento.
- Render immediato dopo il click.
- Sintassi di tutti gli script verificata.
