# Master Archivio — Fonte Unica di Verità

> Documento di riferimento integrale contenente fatti, contesti, metriche, architetture e schede STAR di supporto ai colloqui tecnici.  
> Torna all'[Indice Generale](index.md) | Consulta il [CV Canonico](cv_canonico.md) | Consulta lo [Stack Interattivo](cv_interattivo_stack.md).

---

## 1. Dati Anagrafici & Identità Professionale

* **Nominativo:** Domenico Pascucci
* **Data di Nascita:** 20/09/1990
* **Residenza / Operatività:** Napoli / Remoto (Italia)
* **Email:** pasmimmo@gmail.com
* **Telefono:** +39 388 1020601
* **LinkedIn:** [linkedin.com/in/pasmimmo](https://linkedin.com/in/pasmimmo/)
* **GitHub:** [github.com/pasmimmo](https://github.com/pasmimmo)
* **Web / Portfolio:** [pasmimmo.github.io](https://pasmimmo.github.io/)

---

## 2. Sintesi del Profilo & Posizionamento

### 2.1 Sintesi HR / Executive (Impatto, Leadership & Governance)
Technical Architect e DevSecOps Specialist con comprovata esperienza nella progettazione di architetture Cloud Native distribuite ad alto throughput e nell'implementazione di ecosistemi enterprise di CI/CD, GitOps e sicurezza applicativa (Shift-Left). Ha guidato team di ingegneria complessi (fino a 13 sviluppatori), standardizzato pipeline per oltre 4.500 repository e conseguito ottimizzazioni architetturali e FinOps misurabili (fino al 30% di riduzione dei costi computazionali). Coniuga una solida visione di governance e compliance regolatoria con una profonda padronanza dello sviluppo backend e della continuità operativa.

### 2.2 Sintesi Tecnica per Tech Lead & Architetti (Scale, Sistemi & Low-Level)
Profilo ibrido con forte background infrastrutturale, sistemistico e applicativo. Esperto nella transizione tra workload monolitici/containerizzati e microservizi serverless ed event-driven su Azure e Oracle Cloud (OCI). Competenze avanzate nella gestione di cluster Kubernetes su larga scala (AKS, OKE), orchestrazione di runner effimeri via Actions Runner Controller (ARC), automazione dichiarativa GitOps (ArgoCD, Helm, Kustomize) e policy di sicurezza shift-left (SonarQube Quality Gates su New Code, Veracode SAST/SCA, Veracode Firewall su Nexus). Spiccata capacità di troubleshooting di sistema (Linux Kernel, allocazione risorse container, gestione carichi concorrenti e IoT barebone).

---

## 3. Cronologia Esperienze Lavorative

### [08/2025 – Presente] Alten Italia — DevSecOps & Platform Engineer
* **Cliente Finale:** Sisal (Flutter SEA)
* **Dominio:** Gaming, scommesse ad alto traffico, mercati regolamentati ADM.
* **Perimetro:** Piattaforma di build/deployment e governance applicativa a servizio di un'organizzazione con **oltre 4.500 repository** su GitHub Enterprise.

#### Responsabilità & Piattaforma
* **Infrastruttura Runner & Cluster OKE:** Amministrazione e manutenzione dei cluster Kubernetes (OKE su Oracle Cloud, ambienti Dev e Prod, 20–30 nodi) dedicati ai runner di compilazione e agli strumenti di piattaforma (Redis, dashboard interne, InfluxDB).
* **Flotta Runner Effimeri (ARC):** Scalabilità e gestione di Actions Runner Controller su pod Kubernetes per workload multi-stack: Java, Python, .NET, Node.js e Go. Isolamento dei carichi ed efficienza dei costi di calcolo.
* **Mobile CI con Orka:** Configurazione di runner dedicati interfacciati con infrastruttura Orka (macOS virtualizzato su bare-metal) per pipeline di build e testing di app iOS, Android e asset Unity.
* **Framework GitHub Actions:** Sviluppo di una libreria modulare di workflow riusabili (*reusable workflows*), matrici di dispatch (*matrix build*) e composite actions per eliminare la duplicazione di codice tra software factory.
* **GitOps Continuo (ArgoCD + Helm/Kustomize):** Automazione dei deploy con patch automatiche generate dalle pipeline CI sui repository dei manifest e riconciliazione continua su cluster di produzione.
* **AppSec & Governance:**
  * Quality Gates su SonarQube a 3 livelli (Bronze, Silver, Gold) vincolati al *New Code* e bloccanti per PR e release.
  * Flusso self-service per la sanatoria del debito tecnico su progetti Sonar paralleli dedicati.
  * Supply Chain Security tramite **Veracode Firewall** posizionato a monte di **Nexus Pro** come proxy ispezionante per Docker e dependency manager (Maven, npm, NuGet, PyPI).
* **Compliance Regolatoria SBAI (Supervised Build and Install):** Automazione per la raccolta di log immutabili e generazione di checksum crittografici degli artefatti per le verifiche dell'ente regolatore.
* **Internal Developer Platform & Tooling:** Service catalog su **Backstage**, dashboard KPI su **Grafana**, persistenza metriche su **InfluxDB**, sviluppo micro-utility e bot di automazione in **Bash, Python e Go**.

#### Risultati Quantificabili
* **-60% LoC SonarQube e +70% velocità:** Reingegnerizzazione del flusso di estrazione metriche codice (dismissione vecchi script su VM a favore di workflow schedulati con salvataggio su InfluxDB e dismissione automatizzata dei progetti temporanei), con drastico abbattimento dei costi di licenza Sonar.
* **-27% tempo ciclo di CI:** Introduzione di step paralleli in pipeline per l'esecuzione contemporanea di test, analisi SonarQube, scansioni Veracode e build delle immagini Docker.

---

### [03/2021 – 08/2025] Magma S.r.l. — Technical Architect & Tech Project Lead
* **Cliente Finale:** Walgreens Boots Alliance (WBA)
* **Dominio:** Supply Chain, Replenishment, Gestione Ordini e Logistica Farmaceutica (~9.000 farmacie sul territorio).
* **Volumi:** Throughput di punta fino a **~3.000 transazioni al secondo (TPS)** sui canali critici di instradamento ordini.

#### Responsabilità & Coordinamento
* **Guida Tecnica di 2 Team (13 sviluppatori complessivi):**
  * *Team Java/Spring (6 dev):* Sviluppo common libraries, standardizzazione payload `CloudMessage`, connettori Cosmos DB e layer di autenticazione.
  * *Team C#/.NET (7 dev):* Sviluppo componenti serverless, framework utility e middleware ad alte prestazioni.
* **Ownership:** Redazione di architetture di riferimento, Proof of Concept (PoC), roadmap di delivery (Gantt), piani di mitigazione dell'obsolescenza e presidio tecnico durante gli audit enterprise. Interfaccia con stakeholder internazionali.

#### Architettura, Decoupling & Protocol Conversion
Progettazione e rilascio da zero di 3 middleware core per l'integrazione di sistemi disaccoppiati:
1. **Azure Service Bus ⇄ Azure EventHub:** Bridge per disaccoppiare code transazionali e stream analitico/event-driven ad alto volume.
2. **SOAP ⇄ REST:** Layer bidirezionale per consentire la transizione trasparente tra sistemi legacy enterprise e microservizi moderni.
3. **Cosmos DB Change Feed ⇄ Service Bus:** Pattern reattivo che trasforma il Change Feed di Cosmos in uno stream di messaggi, disaccoppiando completamente persistenza e propagazione eventi.

#### FinOps, Scalabilità & Troubleshooting
* **Refactoring Serverless (-30% costi computazionali):** Sostituzione di un pool di 23–25 repliche di microservizi Spring Boot sempre attivi con **19 istanze serverless C#/.NET** (Isolated Worker Model, pre-warming, max scale-out tuning), risolvendo colli di bottiglia di concorrenza del vecchio dispatcher.
* **Autoscaling con KEDA (-10% costi cluster):** Introduzione di KEDA su AKS per autoscaling orizzontale guidato dagli eventi (lunghezza code Service Bus) con taratura fine di liveness/readiness probes.
* **Ottimizzazione Ambienti Dev (-15% costi):** Adozione di **Azure Spot Instances** per il secondo ambiente di sviluppo e collaudo.
* **Modernizzazione Runtime:** Migrazione Java (8 → 11 → 17) con stream e binding custom Spring; migrazione .NET (Core 3 → 6 → 8); deployment Blue/Green a zero downtime.
* **Vendor Escalation con Microsoft:** Interfaccia tecnica L3 per breaking change di runtime (es. disallineamento quote risorse container su AKS / JVM legacy; issue di manipolazione metadati su Azure Service Bus).

---

### [09/2020 – 02/2021] ACT Operations Research IT S.r.l. — Algorithm Engineer
* **Progetto / Cliente:** Cod19 (Piattaforma emergenza Covid-19).
* **Attività:** Sviluppo backend in Python e modelli algoritmici predittivi basati su serie temporali per stimare i tempi di degenza ospedaliera e anticipare i picchi di saturazione dei reparti.
* **Stack:** Python, REST APIs, modelli Time-Series, MySQL, SQLite, Git.

---

### [07/2019 – 03/2020] Università degli Studi di Salerno — Software & ML Engineer
* **Progetto / Contesto:** Bandi Europei di Ricerca Applicata PICO-E-PRO e PACIB.
* **Attività:** 
  * Sviluppo modelli basati su reti neurali convoluzionali (CNN) per l'analisi predittiva di anomalie biomediche e industriali.
  * Progettazione per il Dipartimento di Farmacia di una pipeline distribuita di calcolo di pannelli proteici basata su scambio asincrono di messaggi tra moduli software.
* **Stack:** Python, CNN (TensorFlow/Keras), Message Queues, Linux, Git.

---

## 4. Schede di Troubleshooting & STAR Stories (Interviste Tecniche)

### Scheda A: Risoluzione Breaking Change su AKS & Runtime JVM
* **Situazione:** A seguito di un aggiornamento del nodo Kubernetes/containerd su AKS, i carichi di lavoro basati su microservizi Java legacy hanno manifestato instabilità grave, frequenti arresti anomali per OOM (*Out Of Memory*) e forte degradazione di throughput.
* **Task:** Isolare la causa radice del disservizio su sistemi che gestivano carichi critici di ordini (~3.000 TPS) e ristabilire la piena disponibilità operativa.
* **Azione:** Effettuata analisi del comportamento della JVM in ambiente containerizzato, isolando l'anomalia nella mancata lettura dei quote del container da parte delle versioni legacy di runtime (vincolate alle risorse globali del nodo host), saturando i thread pool interni. Aperta una sessione tecnica L3 con il team ingegneristico di Microsoft, individuata la release di runtime con i backport corretti e normalizzate le immagini dei container.
* **Risultato:** Azzeramento dei crash, ripristino delle corrette soglie di memoria e salvaguardia della continuità operativa del business retail.

### Scheda B: Anomalia Manipolazione Metadati su Azure Service Bus
* **Situazione:** Durante i picchi di instradamento messaggi, una funzione di manipolazione metadati su Azure Service Bus non persisteva correttamente alcuni attributi custom durante la fase di *apply*.
* **Task:** Determinare se l'inconsistenza dipendesse dalla logica del middleware o da un bug dell'SDK gestito dal provider cloud.
* **Azione:** Sviluppato un PoC minimale e riproducibile a codice isolato; acquisite le tracce e avviata escalation con il supporto Microsoft, dimostrando il comportamento anomalo del client SDK.
* **Risultato:** Adozione di un workaround temporaneo per consentire la continuazione delle attività e successivo allineamento definitivo alla patch rilasciata dal vendor.

---

## 5. Homelab & Progetti Personali

### 5.1 Infrastruttura Homelab Self-Hosted
* **Virtualizzazione Bare-Metal:** Hypervisor **Proxmox VE** per l'esecuzione e l'isolamento di carichi su macchine virtuali e container LXC.
* **Networking Mesh & Zero-Trust:** **Tailscale (WireGuard)** come backbone cifrata peer-to-peer per l'amministrazione remota senza porte esposte; **Cloudflare Tunnels** per l'esposizione controllata TLS dei servizi web.
* **Storage & Identity:** Volumi condivisi **NFS** su NAS dedicato; identity provider centralizzato **Pocket ID** (OIDC SSO) a protezione di Home Assistant, Immich e Vikunja.

### 5.2 IoT & Firmware: *SmartDisplay*
* **Repository:** [github.com/pasmimmo/SmartDisplay](https://github.com/pasmimmo/SmartDisplay)
* **Descrizione:** Riprogettazione firmware per device commerciale circolare da 1.28" basato su ESP32-S3 tramite **ESPHome**, convertito da ecosistema chiuso cloud in un dispositivo edge completamente locale e integrato in Home Assistant.
* **Dettagli Tecnici:**
  * Display IPS SPI pilotato a 80 MHz con DMA per rendering fluido UI **LVGL 8** a 30 FPS.
  * Power gating dell'amplificatore audio I2S (GPIO46) per azzerare il fruscio di fondo in idle e risparmiare ~20 mA.
  * Ring-buffer circolare per gestione allarmi con prioritizzazione LIFO e modalità *Passive BLE Proxy* per telemetria Bluetooth senza saturare la banda Wi-Fi.

---

## 6. Formazione & Competenze Linguistiche

* **Titolo di Studio:** Laurea in Informatica — Università degli Studi di Salerno (2019)
* **Italiano:** Madrelingua
* **Inglese:** Lettura C2 | Scrittura C1 | Conversazione B1 (uso lavorativo per meeting internazionali, documentazione tecnica e vendor escalation)