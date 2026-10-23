/**
 * CV Data Module - Single Source of Truth (IT & EN)
 * Domenico Pascucci (@pasmimmo) - Technical Architect & DevSecOps Specialist
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.cvData = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const cvData = {
    it: {
      contact: {
        name: "Domenico Pascucci",
        nickname: "pasmimmo",
        role: "Technical Architect & DevSecOps Specialist",
        email: "pasmimmo@gmail.com",
        linkedin: "https://linkedin.com/in/pasmimmo/",
        linkedinDisplay: "linkedin.com/in/pasmimmo",
        github: "https://github.com/pasmimmo",
        githubDisplay: "github.com/pasmimmo",
        website: "https://pasmimmo.github.io",
        websiteDisplay: "pasmimmo.github.io",
        birthDate: "20/09/1990"
      },
      summaries: {
        executive: "Technical Architect e DevSecOps Specialist con comprovata esperienza nella progettazione di architetture Cloud Native distribuite ad alto throughput e nell'implementazione di ecosistemi enterprise di CI/CD, GitOps e sicurezza applicativa (Shift-Left). Ha guidato team di ingegneria complessi (fino a 13 sviluppatori), standardizzato pipeline per oltre 4.500 repository e conseguito ottimizzazioni architetturali e FinOps misurabili (fino al 30% di riduzione dei costi computazionali). Coniuga una solida visione di governance e compliance regolatoria con una profonda padronanza dello sviluppo backend e della continuità operativa.",
        technical: "Profilo ibrido con forte background infrastrutturale, sistemistico e applicativo. Esperto nella transizione tra workload monolitici/containerizzati e microservizi serverless ed event-driven su Azure e Oracle Cloud (OCI). Competenze avanzate nella gestione di cluster Kubernetes su larga scala (AKS, OKE), orchestrazione di runner effimeri via Actions Runner Controller (ARC), automazione dichiarativa GitOps (ArgoCD, Helm, Kustomize) e policy di sicurezza shift-left (SonarQube Quality Gates su New Code, Veracode SAST/SCA, Veracode Firewall su Nexus). Spiccata capacità di troubleshooting di sistema (Linux Kernel, allocazione risorse container, gestione carichi concorrenti e IoT barebone)."
      },
      layers: {
        L0: {
          id: "layer-0",
          code: "L0",
          name: "L0 · Core",
          subtitle: "Barebone, OS & Core Frameworks",
          concept: "Hardware, Kernel, Runtime & Performance di Basso Livello",
          color: "poster-teal",
          accentHex: "#00a885",
          metrics: [
            "-30% costi computazionali con .NET 8 Isolated",
            "SPI DMA 80 MHz per LVGL 8 a 30 FPS",
            "-20 mA in idle con audio power gating (GPIO46)"
          ],
          technologies: [
            {
              name: "Linux Kernel & OS",
              scope: "Gestione risorse di sistema, cgroups v1/v2, thread pool & I/O",
              context: "Cluster AKS / OKE, VM Linux, nodi runner CI",
              value: "Risoluzione disallineamento quote container/JVM evitando crash OOM sotto carico a 3.000 TPS",
              layers: ["L0"]
            },
            {
              name: "Java (8 → 11 → 17) & Spring Boot",
              scope: "Microservizi enterprise, common libraries, stream reattivi",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Standardizzazione libreria CloudMessage, eliminazione debito tecnico, upgrade runtime a zero downtime",
              layers: ["L0"]
            },
            {
              name: "C# / .NET 8 (Isolated Worker Model)",
              scope: "Microservizi serverless ultra-scalabili, elaborazione messaggi ad alto throughput",
              context: "Walgreens Boots Alliance (WBA)",
              value: "-30% costi computazionali sostituendo 23-25 pod monolitici con 19 istanze serverless",
              layers: ["L0"]
            },
            {
              name: "Python",
              scope: "Algoritmi predittivi time-series, deep learning (CNN), micro-utility di piattaforma",
              context: "ACT Operations Research (Cod19), Università di Salerno, Sisal",
              value: "Modelli di saturazione posti letto ospedalieri; automazione KPI di piattaforma e telemetria",
              layers: ["L0"]
            },
            {
              name: "Go & Bash",
              scope: "Platform tooling, daemon di supporto, automazione di sistema e CI scripting",
              context: "Sisal (Flutter SEA), Platform Engineering",
              value: "Automazione estrazione metriche codice ad altissima efficienza e zero overhead",
              layers: ["L0"]
            },
            {
              name: "ESPHome (ESP32-S3 IoT Barebone)",
              scope: "Firmware custom edge per microcontrollori bare-metal",
              context: "SmartDisplay (Progetto Open Source)",
              value: "Rendering LVGL 8 a 30 FPS con SPI DMA 80 MHz, buffer LIFO allarmi circolare, Passive BLE Proxy",
              layers: ["L0"]
            },
            {
              name: "Tailscale (WireGuard)",
              scope: "Backbone di rete mesh cifrata point-to-point zero-trust",
              context: "Homelab & Remote Ops",
              value: "Interconnessione sicura nodi remoti senza porte esposte su firewall WAN",
              layers: ["L0"]
            },
            {
              name: "NFS",
              scope: "Storage distribuito condiviso per carichi virtualizzati",
              context: "Homelab Proxmox & NAS dedicato",
              value: "Storage persistente affidabile per backup immutabili e volumi container",
              layers: ["L0"]
            }
          ]
        },
        L1: {
          id: "layer-1",
          code: "L1",
          name: "L1 · Platform",
          subtitle: "Container, Delivery, AppSec & Quality",
          concept: "Automazione CI/CD, Container Engine, Governance del Codice & AppSec Shift-Left",
          color: "poster-coral",
          accentHex: "#e2513a",
          metrics: [
            "4.500+ repository governati",
            "-27% tempo ciclo CI tramite parallelizzazione",
            "-60% LoC SonarQube e +70% velocità di esecuzione"
          ],
          technologies: [
            {
              name: "Docker",
              scope: "Multi-stage container builds, caching layer optimization, runtime hardening",
              context: "Sisal, WBA, Homelab",
              value: "Immagini minimali OCI-compliant con footprint ridotto e vulnerability surface azzerata",
              layers: ["L1"]
            },
            {
              name: "Proxmox VE (Hypervisor Type-1, VM & LXC)",
              scope: "Virtualizzazione bare-metal di livello enterprise, orchestrazione LXC",
              context: "Homelab Infrastructure",
              value: "Isolamento sicuro dei carichi applicativi, snapshot ZFS e continuità operativa",
              layers: ["L1"]
            },
            {
              name: "Actions Runner Controller (ARC)",
              scope: "Runner effimeri autoscalanti su pod Kubernetes per GitHub Actions",
              context: "Sisal (Flutter SEA)",
              value: "Scalabilità orizzontale istantanea, isolamento ermetico dei job e abbattimento costi di calcolo",
              layers: ["L1"]
            },
            {
              name: "Orka (macOS Bare-Metal Mobile CI)",
              scope: "Virtualizzazione bare-metal su hardware Apple per pipeline mobili",
              context: "Sisal (Flutter SEA)",
              value: "Pipeline CI dedicate e performanti per build iOS, packaging Android e asset Unity",
              layers: ["L1"]
            },
            {
              name: "GitHub Actions (Reusable Workflows, Composite, Matrix)",
              scope: "Framework CI modulare enterprise a servizio di oltre 4.500 repository",
              context: "Sisal (Flutter SEA)",
              value: "-27% tempo di ciclo grazie all'esecuzione parallela di test, scansioni e build Docker",
              layers: ["L1"]
            },
            {
              name: "SonarQube (Quality Gates Bronze/Silver/Gold)",
              scope: "Analisi statica del codice (SAST) vincolata al New Code, bloccante per PR e release",
              context: "Sisal (Flutter SEA)",
              value: "-60% LoC licenziate e +70% velocità di scansione dismettendo i vecchi script e adottando InfluxDB",
              layers: ["L1"]
            },
            {
              name: "Veracode (SAST & SCA)",
              scope: "Scansioni statiche e analisi delle vulnerabilità delle dipendenze terze",
              context: "Sisal (Flutter SEA)",
              value: "Shift-Left della sicurezza con individuazione tempestiva di CVE prima del merge in branch protetti",
              layers: ["L1"]
            },
            {
              name: "Veracode Firewall + Nexus Pro",
              scope: "Supply chain security e proxy di ispezione per package manager (npm, Maven, NuGet, PyPI, Docker)",
              context: "Sisal (Flutter SEA)",
              value: "Blocco automatico preventivo di dipendenze terze malevole o con vulnerabilità critiche",
              layers: ["L1"]
            },
            {
              name: "Compliance Regolatoria SBAI (ADM)",
              scope: "Supervised Build and Install: tracciabilità immutabile di compilazione per requisiti regolatori ADM",
              context: "Sisal (Flutter SEA)",
              value: "Certificazione crittografica con checksum e log immutabili a prova di audit per gli organi di controllo",
              layers: ["L1"]
            },
            {
              name: "InfluxDB & Grafana",
              scope: "Raccolta e visualizzazione telemetria di build, tempi di pipeline e KPI di qualità",
              context: "Sisal (Flutter SEA)",
              value: "Visibilità real-time sulle performance di 4.500+ repo e trend del debito tecnico",
              layers: ["L1"]
            },
            {
              name: "Backstage (IDP)",
              scope: "Internal Developer Portal, service catalog e documentazione centralizzata",
              context: "Sisal (Flutter SEA)",
              value: "Discovery rapida di microservizi, pipeline templates e standardizzazione aziendale",
              layers: ["L1"]
            }
          ]
        },
        L2: {
          id: "layer-2",
          code: "L2",
          name: "L2 · Cloud",
          subtitle: "Cloud, Orchestrazione Distribuita & Dati",
          concept: "Cluster Kubernetes, GitOps, Event Streaming, Serverless & Alta Scalabilità",
          color: "poster-yellowDark",
          accentHex: "#f0be2f",
          metrics: [
            "~3.000 TPS di punta gestiti su Service Bus",
            "3 middleware core di disaccoppiamento",
            "-10% costi cluster con KEDA e -15% dev con Spot Instances"
          ],
          technologies: [
            {
              name: "Kubernetes (AKS & OKE 20-30 nodi)",
              scope: "Orchestrazione container ad alta disponibilità in ambienti multi-cloud (Azure & OCI)",
              context: "Sisal (Flutter SEA), Walgreens Boots Alliance (WBA)",
              value: "Gestione stabile di 20-30 nodi di calcolo, alta resilienza e zero-downtime rolling updates",
              layers: ["L2"]
            },
            {
              name: "GitOps (ArgoCD, Helm, Kustomize)",
              scope: "Delivery continuo dichiarativo sincronizzato da repository Git",
              context: "Sisal (Flutter SEA)",
              value: "Patch automatiche generate dai workflow CI sui manifest e riconciliazione continua dello stato desiderato",
              layers: ["L2"]
            },
            {
              name: "KEDA (Event-Driven Autoscaling)",
              scope: "Autoscaling orizzontale dei pod guidato dalla profondità delle code Service Bus",
              context: "Walgreens Boots Alliance (WBA)",
              value: "-10% costi infrastrutturali di cluster scalando a zero durante i periodi di inattività",
              layers: ["L2"]
            },
            {
              name: "Microsoft Azure (Functions, APIM, AKS, Spot Instances)",
              scope: "Piattaforma cloud completa per servizi serverless, API Gateway ed elaborazione distribuita",
              context: "Walgreens Boots Alliance (WBA)",
              value: "-15% costi ambienti di test con Azure Spot Instances; gestione API enterprise via APIM",
              layers: ["L2"]
            },
            {
              name: "Oracle Cloud Infrastructure (OCI, OKE)",
              scope: "Infrastruttura cloud enterprise per cluster Kubernetes e runner flotta CI/CD",
              context: "Sisal (Flutter SEA)",
              value: "Alte prestazioni di rete e calcolo per migliaia di pipeline concorrenti giornaliere",
              layers: ["L2"]
            },
            {
              name: "Cosmos DB & Change Feed",
              scope: "Database NoSQL distribuito a bassa latenza e streaming reattivo di mutazioni",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Pattern reattivo `Change Feed ⇄ Service Bus` che disaccoppia completamente persistenza e propagazione eventi",
              layers: ["L2"]
            },
            {
              name: "Azure Service Bus (~3.000 TPS)",
              scope: "Message broker enterprise con garanzie FIFO, sessioni e gestione code transazionali",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Spina dorsale per l'instradamento di ~3.000 TPS di ordini per oltre 9.000 farmacie sul territorio",
              layers: ["L2"]
            },
            {
              name: "Azure EventHub",
              scope: "Piattaforma di event streaming ad altissima capacità per ingestione log e telemetria analitica",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Bridge `Service Bus ⇄ EventHub` per disaccoppiare flussi transazionali da flussi analitici",
              layers: ["L2"]
            },
            {
              name: "Redis",
              scope: "In-memory caching ad altissima velocità e session store distribuito",
              context: "Sisal, WBA",
              value: "Abbattimento latenze di lettura sotto il millisecondo e protezione database di backend",
              layers: ["L2"]
            },
            {
              name: "Sealed Secrets & OCI Vault",
              scope: "Gestione cifrata e sicura dei segreti integrata nel flusso GitOps",
              context: "Sisal (Flutter SEA)",
              value: "Archiviazione sicura dei segreti cifrati direttamente nei repository Git senza rischi di leak",
              layers: ["L2"]
            },
            {
              name: "Cloudflare Tunnels (Zero-Trust)",
              scope: "Esposizione sicura e protetta di servizi web senza apertura porte inbound",
              context: "Homelab Infrastructure",
              value: "Crittografia TLS end-to-end e protezione DDoS automatica per l'infrastruttura self-hosted",
              layers: ["L2"]
            }
          ]
        }
      },
      experiences: [
        {
          id: "exp-alten",
          company: "Alten Italia",
          client: "Sisal (Flutter SEA)",
          role: "DevSecOps & Platform Engineer",
          period: "08/2025 – Presente",
          location: "Remoto / Milano",
          domain: "Gaming, scommesse ad alto traffico, mercati regolamentati ADM",
          scale: "4.500+ repository su GitHub Enterprise, 20-30 nodi OKE",
          layers: ["L0", "L1", "L2"],
          narrative: "In Sisal (Flutter SEA) ho operato come DevSecOps & Platform Engineer a servizio di un'organizzazione enterprise con oltre 4.500 repository su GitHub Enterprise. Ho curato l'infrastruttura di build su cluster Kubernetes OKE, l'automazione dei runner effimeri ARC, la standardizzazione CI/CD GitOps con ArgoCD, l'integrazione di policy di sicurezza Shift-Left e la compliance regolatoria SBAI per l'Agenzia delle Dogane e dei Monopoli.",
          responsibilities: [
            {
              title: "Infrastruttura Runner & Cluster OKE",
              description: "Amministrazione e manutenzione dei cluster Kubernetes (OKE su Oracle Cloud, ambienti Dev e Prod, 20–30 nodi) dedicati ai runner di compilazione e agli strumenti di piattaforma (Redis, dashboard interne, InfluxDB)."
            },
            {
              title: "Flotta Runner Effimeri (ARC)",
              description: "Scalabilità e gestione di Actions Runner Controller su pod Kubernetes per workload multi-stack: Java, Python, .NET, Node.js e Go. Isolamento dei carichi ed efficienza dei costi di calcolo."
            },
            {
              title: "Mobile CI con Orka",
              description: "Configurazione di runner dedicati interfacciati con infrastruttura Orka (macOS virtualizzato su bare-metal) per pipeline di build e testing di app iOS, Android e asset Unity."
            },
            {
              title: "Framework GitHub Actions",
              description: "Sviluppo di una libreria modulare di workflow riusabili (reusable workflows), matrici di dispatch (matrix build) e composite actions per eliminare la duplicazione di codice tra software factory."
            },
            {
              title: "GitOps Continuo (ArgoCD + Helm/Kustomize)",
              description: "Automazione dei deploy con patch automatiche generate dalle pipeline CI sui repository dei manifest e riconciliazione continua su cluster di produzione."
            },
            {
              title: "AppSec & Governance (Shift-Left)",
              description: "Quality Gates su SonarQube a 3 livelli (Bronze, Silver, Gold) vincolati al New Code e bloccanti per PR e release. Flusso self-service per la sanatoria del debito tecnico. Supply Chain Security tramite Veracode Firewall posizionato a monte di Nexus Pro come proxy ispezionante."
            },
            {
              title: "Compliance Regolatoria SBAI (ADM)",
              description: "Automazione Supervised Build and Install per la raccolta di log immutabili e generazione di checksum crittografici degli artefatti per le verifiche dell'ente regolatore."
            },
            {
              title: "Internal Developer Platform & Tooling",
              description: "Service catalog su Backstage, dashboard KPI su Grafana, persistenza metriche su InfluxDB, sviluppo micro-utility e bot di automazione in Bash, Python e Go."
            }
          ],
          quantifiableResults: [
            "-27% tempo ciclo di CI grazie alla parallelizzazione degli step di test, analisi SonarQube, scansioni Veracode e build delle immagini Docker.",
            "-60% LoC SonarQube e +70% velocità: reingegnerizzazione del flusso di estrazione metriche codice su InfluxDB e dismissione automatizzata dei progetti temporanei, con drastico abbattimento dei costi di licenza Sonar."
          ],
          tools: [
            "GitHub Actions (Reusable & Composite)", "Kubernetes (OKE)", "ArgoCD", "Oracle Cloud (OCI)",
            "ARC (Runner effimeri su Pod)", "Veracode (SAST & SCA)", "SonarQube (Quality Gates)",
            "Veracode Firewall", "Nexus Pro", "Compliance SBAI", "Helm & Kustomize", "Orka (macOS CI)",
            "InfluxDB", "Grafana", "Backstage", "Trivy", "CrowdStrike", "OCI Vault", "Sealed Secrets", "Bash", "Python", "Go"
          ]
        },
        {
          id: "exp-magma",
          company: "Magma S.r.l.",
          client: "Walgreens Boots Alliance (WBA)",
          role: "Technical Architect & Tech Project Lead",
          period: "03/2021 – 08/2025",
          location: "Remoto",
          domain: "Supply Chain, Replenishment, Gestione Ordini e Logistica Farmaceutica (~9.000 farmacie)",
          scale: "Throughput di punta fino a ~3.000 TPS sui canali critici di instradamento ordini",
          layers: ["L0", "L1", "L2"],
          narrative: "Per Walgreens Boots Alliance ho ricoperto il ruolo di Technical Architect e Tech Project Lead, progettando e guidando l'implementazione di architetture Cloud Native su Microsoft Azure con focus su scalabilità, decoupling a microservizi e approccio serverless ed event-driven. Ho coordinato 2 team ingegneristici (13 sviluppatori complessivi), curato l'ottimizzazione FinOps e ingegnerizzato 3 middleware core per la conversione di protocollo e il disaccoppiamento applicativo.",
          responsibilities: [
            {
              title: "Guida Tecnica di 2 Team (13 sviluppatori)",
              description: "Coordinamento del Team Java/Spring (6 dev: common libraries, standardizzazione CloudMessage, connettori Cosmos DB, autenticazione) e del Team C#/.NET (7 dev: componenti serverless, framework utility, middleware)."
            },
            {
              title: "Ownership Architetturale & Audit",
              description: "Redazione di architetture di riferimento, Proof of Concept (PoC), roadmap di delivery (Gantt), piani di mitigazione dell'obsolescenza e presidio tecnico durante gli audit enterprise internazionali."
            },
            {
              title: "3 Middleware Core di Decoupling & Protocol Conversion",
              description: "Disegno e rilascio da zero di 3 middleware: 1) Azure Service Bus ⇄ Azure EventHub (disaccoppiamento transazionale/analitico); 2) SOAP ⇄ REST (layer bidirezionale enterprise/microservizi); 3) Cosmos DB Change Feed ⇄ Service Bus (pattern reattivo streaming)."
            },
            {
              title: "FinOps, Scalabilità & Autoscaling",
              description: "Refactoring serverless da 23-25 repliche di microservizi Spring Boot a 19 istanze C#/.NET Isolated (-30% costi); autoscaling KEDA su AKS (-10% costi cluster); adozione Azure Spot Instances (-15% costi ambienti test)."
            },
            {
              title: "Modernizzazione Runtime & Vendor Escalation",
              description: "Migrazione Java 8 → 11 → 17 e .NET Core 3 → 6 → 8 con deployment Blue/Green a zero downtime. Interfaccia tecnica L3 diretta verso Microsoft Engineering per breaking change su AKS/JVM e bug SDK Service Bus."
            }
          ],
          quantifiableResults: [
            "-30% costi computazionali sostituendo 23–25 repliche Spring Boot con 19 istanze serverless C#/.NET (Isolated Worker Model, pre-warming e scale-out tuning).",
            "-10% costi cluster grazie ad autoscaling event-driven con KEDA su AKS e taratura fine dei probe di salute.",
            "-15% costi ambienti non-prod mediante adozione mirata di Azure Spot Instances per il secondo ambiente di collaudo."
          ],
          tools: [
            "Microsoft Azure (Functions, APIM, AKS)", "Azure ServiceBus (~3.000 TPS)", "Azure EventHub",
            "KEDA", "Java (Spring Boot)", "C# (.NET 8 Isolated)", "Docker", "Cosmos DB & Change Feed",
            "Redis", "Azure Spot Instances", "SonarQube", "SOAP ⇄ REST Middleware", "FinOps", "CI/CD"
          ]
        },
        {
          id: "exp-act",
          company: "ACT Operations Research IT S.r.l.",
          client: "Cod19 (Piattaforma Ospedaliera Emergenza Covid-19)",
          role: "Algorithm Engineer",
          period: "09/2020 – 02/2021",
          location: "Lomazzo (CO) / Remoto",
          domain: "Sanità, Ricerca Operativa & Gestione Emergenze",
          scale: "Monitoraggio regionale e presidi ospedalieri",
          layers: ["L0"],
          narrative: "Durante la prima fase pandemica ho sviluppato il backend per Cod19, una piattaforma a supporto decisionale dei presidi ospedalieri finalizzata a monitorare e stimare i tempi di degenza dei pazienti Covid-19. Ho lavorato a stretto contatto con medici e ricercatori operativi per ingegnerizzare modelli predittivi basati su serie temporali.",
          responsibilities: [
            {
              title: "Backend & Modelli Time-Series",
              description: "Sviluppo backend in Python e modelli algoritmici predittivi basati su serie temporali per stimare i tempi di degenza ospedaliera e anticipare i picchi di saturazione dei reparti."
            },
            {
              title: "API & Data Persistence",
              description: "Progettazione di REST APIs e layer di persistenza relazionale (MySQL, SQLite) per l'ingestione e aggregazione sicura dei dati clinici."
            }
          ],
          quantifiableResults: [
            "Ingegnerizzazione di modelli algoritmici predittivi adottati da reparti ospedalieri per l'anticipazione dei picchi di saturazione delle terapie intensive."
          ],
          tools: [
            "Python", "REST APIs", "Time-Series Modeling", "Algoritmi Predittivi", "MySQL", "SQLite", "Git"
          ]
        },
        {
          id: "exp-unisa",
          company: "Università degli Studi di Salerno",
          client: "Bandi UE PICO-E-PRO & PACIB (Dip. Farmacia)",
          role: "Software & ML Engineer",
          period: "07/2019 – 03/2020",
          location: "Fisciano (SA)",
          domain: "Ricerca Applicata Europea, Deep Learning & Farmaceutica",
          scale: "Pipeline distribuite di calcolo scientifico",
          layers: ["L0"],
          narrative: "Partecipazione a bandi europei competitivi di ricerca applicata (PICO-E-PRO e PACIB), realizzando modelli di intelligenza artificiale per l'analisi preventiva di anomalie e un layer di orchestrazione distribuita per il Dipartimento di Farmacia.",
          responsibilities: [
            {
              title: "Deep Learning & Visione Artificiale",
              description: "Sviluppo modelli basati su reti neurali convoluzionali (CNN) in Python/TensorFlow per l'analisi predittiva di anomalie biomediche e industriali."
            },
            {
              title: "Pipeline Distribuita Asincrona",
              description: "Progettazione per il Dipartimento di Farmacia di una pipeline distribuita di calcolo di pannelli proteici basata su scambio asincrono di messaggi tra moduli software."
            }
          ],
          quantifiableResults: [
            "Realizzazione di pipeline asincrone ad alto parallelismo per il calcolo scientifico di biomarcatori proteici."
          ],
          tools: [
            "Python", "CNN (TensorFlow/Keras)", "Message Brokers", "Elaborazione Immagini", "Linux", "Git"
          ]
        }
      ],
      starStories: [
        {
          id: "star-a",
          code: "Scheda A",
          title: "Risoluzione Breaking Change su AKS & Runtime JVM",
          badge: "Deep Troubleshooting • Kubernetes / JVM Cgroups Quotas",
          layers: ["L0", "L2"],
          situation: "A seguito di un aggiornamento del nodo Kubernetes/containerd su AKS, i carichi di lavoro basati su microservizi Java legacy hanno manifestato instabilità grave, frequenti arresti anomali per OOM (Out Of Memory) e forte degradazione di throughput.",
          task: "Isolare la causa radice del disservizio su sistemi che gestivano carichi critici di ordini (~3.000 TPS) e ristabilire la piena disponibilità operativa senza regressioni.",
          action: "Effettuata analisi approfondita del comportamento della JVM in ambiente containerizzato, isolando l'anomalia nella mancata lettura delle quote del container da parte delle versioni legacy di runtime (vincolate erroneamente alle risorse globali del nodo host), che causava la saturazione rapida dei thread pool interni. Aperta una sessione tecnica L3 con il team ingegneristico di Microsoft, individuata la release di runtime con i backport corretti e normalizzate le immagini dei container con flag di isolamento cgroups.",
          result: "Azzeramento immediato dei crash, ripristino delle corrette soglie di memoria e salvaguardia della continuità operativa del business retail da oltre 9.000 farmacie."
        },
        {
          id: "star-b",
          code: "Scheda B",
          title: "Anomalia Manipolazione Metadati su Azure Service Bus",
          badge: "Deep Troubleshooting • Cloud SDK Bug Escalation",
          layers: ["L0", "L2"],
          situation: "Durante i picchi di instradamento messaggi su Azure Service Bus, una funzione critica di manipolazione metadati non persisteva correttamente alcuni attributi custom durante la fase di apply.",
          task: "Determinare se l'inconsistenza dipendesse dalla logica applicativa del middleware sviluppato internamente o da un difetto intrinseco dell'SDK fornito dal provider cloud.",
          action: "Sviluppato un Proof of Concept minimale e riproducibile a codice isolato; acquisite le tracce binarie e avviata escalation formale con il supporto ingegneristico Microsoft, dimostrando inequivocabilmente il comportamento anomalo del client SDK.",
          result: "Adozione tempestiva di un workaround applicativo ad hoc per garantire l'integrità dei dati e successivo allineamento definitivo alla patch ufficiale rilasciata dal vendor."
        }
      ],
      homelab: [
        {
          id: "hl-infra",
          title: "Infrastruttura Homelab Self-Hosted",
          category: "Virtualizzazione, Networking & Zero-Trust",
          layers: ["L1", "L2"],
          description: "Ambiente enterprise casalingo su hypervisor bare-metal Proxmox VE con segmentazione di rete, storage condiviso e gestione identità federata.",
          highlights: [
            "Hypervisor Proxmox VE (Type-1) per l'isolamento di carichi di calcolo su macchine virtuali e container LXC.",
            "Backbone di rete mesh crittografata Tailscale (WireGuard) per l'amministrazione remota point-to-point senza porte esposte su WAN.",
            "Esposizione controllata TLS Zero-Trust tramite Cloudflare Tunnels per i servizi web interni.",
            "Storage distribuito persistente NFS su NAS dedicato per volumi e snapshot ZFS immutabili.",
            "Identity provider centralizzato OIDC (Pocket ID) per single-sign-on a protezione di Home Assistant, Immich e Vikunja."
          ]
        },
        {
          id: "hl-iot",
          title: "SmartDisplay — IoT & Barebone Edge",
          category: "Firmware Bare-Metal, SPI DMA & Microcontrollori",
          layers: ["L0"],
          repo: "https://github.com/pasmimmo/SmartDisplay",
          repoDisplay: "github.com/pasmimmo/SmartDisplay",
          description: "Riprogettazione completa del firmware per display circolare da 1.28\" basato su ESP32-S3 tramite ESPHome, convertito da cloud proprietario in dispositivo edge locale integrato in Home Assistant.",
          highlights: [
            "Display IPS SPI pilotato a 80 MHz con DMA per rendering grafico fluido dell'interfaccia LVGL 8 a 30 FPS.",
            "Power gating hardware dell'amplificatore audio I2S (GPIO46) per azzerare il fruscio di fondo in idle e risparmiare ~20 mA.",
            "Ring-buffer circolare in memoria per la gestione allarmi con prioritizzazione LIFO.",
            "Funzionalità Passive BLE Proxy integrata per acquisire telemetria Bluetooth senza saturare la banda Wi-Fi."
          ]
        }
      ],
      education: [
        {
          degree: "Laurea in Informatica",
          institution: "Università degli Studi di Salerno",
          period: "2019",
          description: "Tesi e approfondimenti su sistemi operativi, algoritmi distribuiti e ingegneria del software."
        },
        {
          degree: "Bandi Europei Ricerca Applicata ML",
          institution: "PICO-E-PRO & PACIB (Dip. Farmacia)",
          period: "2019 — 2020",
          description: "Modelli basati su reti neurali convoluzionali (CNN) e pipeline asincrone di calcolo scientifico."
        }
      ],
      languages: [
        {
          language: "Italiano",
          level: "Madrelingua",
          detail: "Lingua nativa"
        },
        {
          language: "Inglese",
          level: "Professionale Tecnico",
          detail: "C2 Lettura • C1 Scrittura • B1 Parlato (meeting internazionali, documentazione tecnica e vendor escalation)"
        }
      ],
      milestones: [
        {
          year: "2019",
          period: "BASE",
          badge: "🎓 BASE",
          title: "Laurea Informatica",
          subtitle: "Uni Salerno",
          targetId: "section-education"
        },
        {
          year: "2019 — 2020",
          period: "RICERCA",
          badge: "🧠 RICERCA",
          title: "Deep Learning & ML",
          subtitle: "PICO-E-PRO",
          targetId: "exp-unisa"
        },
        {
          year: "2020 — 2021",
          period: "COVID19",
          badge: "💻 TIME-SERIES",
          title: "Algorithm Eng.",
          subtitle: "Cod19 Platform",
          targetId: "exp-act"
        },
        {
          year: "2021 — 2025",
          period: "SCALE",
          badge: "☁️ CLOUD ARCH",
          title: "Cloud Architect",
          subtitle: "WBA • Team 13",
          targetId: "exp-magma"
        },
        {
          year: "2025 — OGG",
          period: "PLATFORM",
          badge: "🛡️ DEVSECOPS",
          title: "DevSecOps & Platform",
          subtitle: "Alten • Sisal (Flutter)",
          targetId: "exp-alten"
        }
      ],
      ui: {
        docTitle: "Domenico Pascucci (pasmimmo) — Technical Architect & DevSecOps Specialist",
        badgeTop: "Curriculum Vitae • Domenico Pascucci (pasmimmo)",
        btnPrint: "Stampa / Salva PDF",
        viewInteractive: "Interactive X-Ray",
        viewClassic: "CV Classico",
        summaryExecutive: "👔 Taglio Executive / HR",
        summaryTechnical: "⚙️ Taglio Tech Lead / Architetto",
        heroGreeting: "Hello! I'm",
        heroNicknamePrefix: "...but you can call me",
        heroBadgeArch: "TECH & CLOUD ARCHITECT",
        heroBadge1: "Sisal (Flutter SEA) • DevSecOps & Platform",
        heroBadge2: "Walgreens Boots Alliance • Tech Architect",
        milestonesHeading: "Esperienze Più Significative & Tappe Chiave",
        milestonesSub: "Clicca per saltare all'esperienza",
        titleContact: "Contact",
        qrTag: "PORTFOLIO LIVE",
        qrText: "Scansiona o clicca per il CV online",
        titleSkills: "Skills & Expertise",
        skillsTag: "CORE STACK",
        titleLanguages: "Lingue / Languages",
        titleEducation: "Education",
        titleExperience: "Experience",
        labelClient: "CLIENTE",
        labelTools: "Strumenti & Tecnologie",
        labelMetrics: "Risultati & Ottimizzazioni",
        labelResponsibilities: "Aree di Responsabilità",
        labelDomain: "Dominio & Contesto",
        labelScale: "Perimetro & Scala",
        footerText: "Domenico Pascucci (pasmimmo) • Technical Architect & DevSecOps Specialist • Ospitato su GitHub Pages",
        
        // X-Ray UI
        xraySectionTitle: "Domenico Pascucci, un dev ai raggi x",
        xraySectionSub: "Ispezione dello stack a 3 livelli: dal kernel barebone alle piattaforme cloud distribuite.",
        xrayAll: "Tutti i Livelli",
        xrayDepth: "Profondità Scanner X-Ray",
        xrayShortcutsHint: "Clicca su un livello per filtrare",
        xrayActiveLayer: "Livello Selezionato",
        xrayTechTitle: "Tecnologie & Competenze del Livello",
        xrayColTech: "Tecnologia",
        xrayColScope: "Ambito d'Uso",
        xrayColContext: "Contesto Enterprise",
        xrayColValue: "Dettaglio Tecnico & Valore Misurato",
        xrayRelatedExpTitle: "Esperienze Lavorative Collegate a Questo Livello",
        xrayStarTitle: "Schede di Troubleshooting & STAR Stories",
        xrayStarSub: "Evidenze pratiche e risoluzione incidenti critici per colloqui tecnici.",
        xraySituation: "Situazione",
        xrayTask: "Task",
        xrayAction: "Azione",
        xrayResult: "Risultato",
        xrayHomelabTitle: "Homelab & Progetti Edge Collegati",
        xrayViewCode: "Visualizza Repository",
        btnDetailsToggleShow: "Mostra Dettagli Architetturali",
        btnDetailsToggleHide: "Nascondi Dettagli Architetturali",
        xraySelectionLabel: "SELEZIONE LIVELLO:",
        xrayAllBadge: "STACK INTEGRALE • 3 LIVELLI",
        xrayAllHeading: "Visione Architetturale Completa",
        xrayAllDesc: "Ispezione integrale dell'avatar architetturale: dalle fondamenta e kernel barebone (L0 · Core), alla piattaforma di delivery e sicurezza applicativa (L1 · Platform), fino ai sistemi distribuiti cloud (L2 · Cloud).",
        xrayEmptyStar: "Nessuna scheda STAR specifica per questo livello (seleziona L0 · Core, L2 · Cloud o ALL).",
        xrayEmptyHomelab: "Nessun progetto edge o homelab specifico per questo livello.",
        titleSummary: "Profilo & Sintesi Architetturale",
        btnContacts: "Contatti",
        filterContextAll: "Tutti",
        filterContextSisal: "Sisal",
        filterContextWba: "WBA",
        filterContextHomelab: "Homelab & IoT",
        skillCategories: [
          { title: "Kubernetes & GitOps", icon: "☸️", items: "K8s, OKE (Oracle), AKS (Azure), ArgoCD, Helm, Kustomize, KEDA" },
          { title: "CI/CD & Automation", icon: "🚀", items: "GitHub Actions (4.500+ repo, Reusable & Composite), ARC (Runner effimeri), Orka (macOS bare-metal)" },
          { title: "AppSec & Governance", icon: "🛡️", items: "Veracode (SAST/SCA & Firewall), SonarQube (Quality Gates), Nexus Pro, OCI Vault, Sealed Secrets, SBAI" },
          { title: "Cloud & Virtualization", icon: "☁️", items: "Microsoft Azure (Functions, APIM, AKS, Spot), Oracle Cloud (OCI, OKE), Docker, Proxmox VE" },
          { title: "Backend & Barebone", icon: "💻", items: "Java (8→11→17, Spring Boot), C# (.NET 8 Isolated), Python, Go, Bash, ESPHome (ESP32-S3)" },
          { title: "Messaging & Data", icon: "🔄", items: "Azure Service Bus (~3.000 TPS), EventHub, Cosmos DB (Change Feed), Redis, InfluxDB, Grafana" },
          { title: "Leadership & FinOps", icon: "👥", items: "Technical Architecture, Team Lead (13 dev), FinOps (-30% costi), Vendor Escalation (Microsoft L3)" }
        ]
      }
    },
    en: {
      contact: {
        name: "Domenico Pascucci",
        nickname: "pasmimmo",
        role: "Technical Architect & DevSecOps Specialist",
        email: "pasmimmo@gmail.com",
        linkedin: "https://linkedin.com/in/pasmimmo/",
        linkedinDisplay: "linkedin.com/in/pasmimmo",
        github: "https://github.com/pasmimmo",
        githubDisplay: "github.com/pasmimmo",
        website: "https://pasmimmo.github.io",
        websiteDisplay: "pasmimmo.github.io",
        birthDate: "20/09/1990"
      },
      summaries: {
        executive: "Technical Architect and DevSecOps Specialist with proven expertise in designing high-throughput distributed Cloud Native architectures and implementing enterprise CI/CD, GitOps, and application security (Shift-Left) ecosystems. Has led complex engineering teams (up to 13 developers), standardized automation pipelines across more than 4,500 repositories, and achieved measurable architectural and FinOps optimizations (up to 30% reduction in cloud compute costs). Combines a robust governance and regulatory compliance vision with deep backend engineering proficiency and operational resilience.",
        technical: "Hybrid profile with a strong infrastructure, systems engineering, and application development background. Expert in migrating monolithic and containerized workloads to serverless and event-driven microservices on Microsoft Azure and Oracle Cloud (OCI). Advanced expertise in large-scale Kubernetes cluster management (AKS, OKE), ephemeral runner orchestration via Actions Runner Controller (ARC), declarative GitOps automation (ArgoCD, Helm, Kustomize), and shift-left security enforcement (SonarQube Quality Gates on New Code, Veracode SAST/SCA, Veracode Firewall on Nexus). Distinctive systems troubleshooting capabilities (Linux Kernel, container resource allocation/cgroups, high-concurrency loads up to ~3,000 TPS, and barebone IoT)."
      },
      layers: {
        L0: {
          id: "layer-0",
          code: "L0",
          name: "L0 · Core",
          subtitle: "Barebone, OS & Core Frameworks",
          concept: "Hardware, Kernel, Runtimes & Low-Level Performance",
          color: "poster-teal",
          accentHex: "#00a885",
          metrics: [
            "-30% compute costs via .NET 8 Isolated",
            "SPI DMA 80 MHz for LVGL 8 @ 30 FPS",
            "-20 mA idle via hardware audio power gating (GPIO46)"
          ],
          technologies: [
            {
              name: "Linux Kernel & OS",
              scope: "System resource management, cgroups v1/v2, thread pools & I/O",
              context: "AKS / OKE clusters, Linux VMs, CI runner nodes",
              value: "Resolved container quota / JVM misalignment preventing OOM crashes under ~3,000 TPS peak load",
              layers: ["L0"]
            },
            {
              name: "Java (8 → 11 → 17) & Spring Boot",
              scope: "Enterprise microservices, common libraries, reactive streams",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Standardized CloudMessage library, eliminated technical debt, executed zero-downtime runtime upgrade",
              layers: ["L0"]
            },
            {
              name: "C# / .NET 8 (Isolated Worker Model)",
              scope: "Ultra-scalable serverless microservices, high-throughput message processing",
              context: "Walgreens Boots Alliance (WBA)",
              value: "-30% compute costs by replacing 23-25 monolithic pods with 19 serverless instances",
              layers: ["L0"]
            },
            {
              name: "Python",
              scope: "Predictive time-series algorithms, deep learning (CNN), platform tooling",
              context: "ACT Operations Research (Cod19), University of Salerno, Sisal",
              value: "Hospital bed saturation predictive models; automated platform KPI and telemetry tooling",
              layers: ["L0"]
            },
            {
              name: "Go & Bash",
              scope: "Platform tooling, helper daemons, system automation & CI scripting",
              context: "Sisal (Flutter SEA), Platform Engineering",
              value: "High-efficiency, zero-overhead automated code metrics extraction",
              layers: ["L0"]
            },
            {
              name: "ESPHome (ESP32-S3 IoT Barebone)",
              scope: "Custom edge firmware for bare-metal microcontrollers",
              context: "SmartDisplay (Open Source Project)",
              value: "LVGL 8 rendering @ 30 FPS via SPI DMA 80 MHz, circular LIFO alarm buffer, Passive BLE Proxy",
              layers: ["L0"]
            },
            {
              name: "Tailscale (WireGuard)",
              scope: "Zero-trust encrypted point-to-point mesh network backbone",
              context: "Homelab & Remote Ops",
              value: "Secure remote node interconnect without exposed WAN ports or firewall pinholes",
              layers: ["L0"]
            },
            {
              name: "NFS",
              scope: "Distributed shared network storage for virtualized workloads",
              context: "Homelab Proxmox & Dedicated NAS",
              value: "Reliable persistent storage for immutable backups and container volumes",
              layers: ["L0"]
            }
          ]
        },
        L1: {
          id: "layer-1",
          code: "L1",
          name: "L1 · Platform",
          subtitle: "Container, Delivery, AppSec & Quality",
          concept: "CI/CD Automation, Container Engines, Code Governance & Shift-Left AppSec",
          color: "poster-coral",
          accentHex: "#e2513a",
          metrics: [
            "4,500+ repositories governed",
            "-27% CI cycle time via parallel execution",
            "-60% SonarQube LoC & +70% execution speed"
          ],
          technologies: [
            {
              name: "Docker",
              scope: "Multi-stage container builds, layer caching optimization, runtime hardening",
              context: "Sisal, WBA, Homelab",
              value: "Minimal OCI-compliant images with compact footprint and eliminated vulnerability surface",
              layers: ["L1"]
            },
            {
              name: "Proxmox VE (Hypervisor Type-1, VM & LXC)",
              scope: "Enterprise-grade bare-metal virtualization, LXC container orchestration",
              context: "Homelab Infrastructure",
              value: "Secure workload isolation, automated ZFS snapshots, and operational continuity",
              layers: ["L1"]
            },
            {
              name: "Actions Runner Controller (ARC)",
              scope: "Ephemeral autoscaling GitHub Actions runners on Kubernetes pods",
              context: "Sisal (Flutter SEA)",
              value: "Instant horizontal scalability, hermetic job isolation, and drastic compute cost reduction",
              layers: ["L1"]
            },
            {
              name: "Orka (macOS Bare-Metal Mobile CI)",
              scope: "Bare-metal Apple hardware virtualization for mobile CI/CD pipelines",
              context: "Sisal (Flutter SEA)",
              value: "Dedicated high-performance CI pipelines for iOS builds, Android packaging, and Unity 3D assets",
              layers: ["L1"]
            },
            {
              name: "GitHub Actions (Reusable Workflows, Composite, Matrix)",
              scope: "Enterprise modular CI framework serving 4,500+ repositories",
              context: "Sisal (Flutter SEA)",
              value: "-27% CI cycle time via parallel execution of testing, security scans, and Docker builds",
              layers: ["L1"]
            },
            {
              name: "SonarQube (Quality Gates Bronze/Silver/Gold)",
              scope: "Static code analysis (SAST) locked to New Code, blocking for PRs and releases",
              context: "Sisal (Flutter SEA)",
              value: "-60% licensed LoC and +70% speed by replacing legacy VM scripts with scheduled InfluxDB flows",
              layers: ["L1"]
            },
            {
              name: "Veracode (SAST & SCA)",
              scope: "Static application security testing and Software Composition Analysis",
              context: "Sisal (Flutter SEA)",
              value: "Shift-Left security with proactive early CVE detection before merging into protected branches",
              layers: ["L1"]
            },
            {
              name: "Veracode Firewall + Nexus Pro",
              scope: "Supply chain security & inspecting proxy for artifact registries (npm, Maven, NuGet, PyPI, Docker)",
              context: "Sisal (Flutter SEA)",
              value: "Automated perimeter blocking of malicious or critically vulnerable third-party dependencies",
              layers: ["L1"]
            },
            {
              name: "Compliance Regolatoria SBAI (ADM)",
              scope: "Supervised Build and Install: immutable build provenance for ADM regulatory requirements",
              context: "Sisal (Flutter SEA)",
              value: "Cryptographic artifact checksum verification and immutable audit-ready build logs",
              layers: ["L1"]
            },
            {
              name: "InfluxDB & Grafana",
              scope: "Build telemetry, pipeline timing analytics, and quality KPI dashboards",
              context: "Sisal (Flutter SEA)",
              value: "Real-time visibility into 4,500+ repository build performances and technical debt trends",
              layers: ["L1"]
            },
            {
              name: "Backstage (IDP)",
              scope: "Internal Developer Portal, service catalog, and centralized technical documentation",
              context: "Sisal (Flutter SEA)",
              value: "Rapid microservice discovery, pipeline scaffolding templates, and engineering alignment",
              layers: ["L1"]
            }
          ]
        },
        L2: {
          id: "layer-2",
          code: "L2",
          name: "L2 · Cloud",
          subtitle: "Cloud, Distributed Orchestration & Data",
          concept: "Kubernetes Clusters, GitOps, Event Streaming, Serverless & Massive Scale",
          color: "poster-yellowDark",
          accentHex: "#f0be2f",
          metrics: [
            "~3,000 peak TPS routed on Service Bus",
            "3 core decoupling middlewares",
            "-10% cluster costs via KEDA & -15% dev via Spot Instances"
          ],
          technologies: [
            {
              name: "Kubernetes (AKS & OKE 20-30 nodi)",
              scope: "High-availability container orchestration across multi-cloud environments (Azure & OCI)",
              context: "Sisal (Flutter SEA), Walgreens Boots Alliance (WBA)",
              value: "Stable production management of 20-30 compute nodes, high resilience and zero-downtime updates",
              layers: ["L2"]
            },
            {
              name: "GitOps (ArgoCD, Helm, Kustomize)",
              scope: "Declarative continuous delivery synchronized from Git repositories",
              context: "Sisal (Flutter SEA)",
              value: "Automated patch generation from CI pipelines to manifests and continuous state reconciliation",
              layers: ["L2"]
            },
            {
              name: "KEDA (Event-Driven Autoscaling)",
              scope: "Event-driven horizontal pod autoscaling driven by Service Bus queue depth",
              context: "Walgreens Boots Alliance (WBA)",
              value: "-10% cluster infrastructure costs by scaling workloads to zero during idle intervals",
              layers: ["L2"]
            },
            {
              name: "Microsoft Azure (Functions, APIM, AKS, Spot Instances)",
              scope: "Full-stack cloud platform for serverless services, API Gateway, and distributed processing",
              context: "Walgreens Boots Alliance (WBA)",
              value: "-15% test environment costs via Azure Spot Instances; enterprise API governance via APIM",
              layers: ["L2"]
            },
            {
              name: "Oracle Cloud Infrastructure (OCI, OKE)",
              scope: "Enterprise cloud infrastructure hosting Kubernetes clusters and CI/CD runner fleets",
              context: "Sisal (Flutter SEA)",
              value: "High-throughput compute and networking powering thousands of daily concurrent pipelines",
              layers: ["L2"]
            },
            {
              name: "Cosmos DB & Change Feed",
              scope: "Globally distributed multi-model NoSQL database and reactive mutation streaming",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Reactive pattern `Change Feed ⇄ Service Bus` completely decoupling storage and event distribution",
              layers: ["L2"]
            },
            {
              name: "Azure Service Bus (~3,000 TPS)",
              scope: "Enterprise message broker with FIFO guarantees, sessions, and transactional queues",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Core transactional backbone routing ~3,000 TPS order streams across 9,000+ pharmacies",
              layers: ["L2"]
            },
            {
              name: "Azure EventHub",
              scope: "Massive-scale event streaming platform for analytical logs and telemetry ingestion",
              context: "Walgreens Boots Alliance (WBA)",
              value: "Bridge `Service Bus ⇄ EventHub` decoupling transactional order paths from analytical streams",
              layers: ["L2"]
            },
            {
              name: "Redis",
              scope: "Ultra-fast in-memory caching and distributed session store",
              context: "Sisal, WBA",
              value: "Sub-millisecond read latency reduction and backend database offloading",
              layers: ["L2"]
            },
            {
              name: "Sealed Secrets & OCI Vault",
              scope: "Encrypted, audit-proof secret management integrated into GitOps workflows",
              context: "Sisal (Flutter SEA)",
              value: "Safe storage of encrypted secrets directly within Git repositories with zero leak risk",
              layers: ["L2"]
            },
            {
              name: "Cloudflare Tunnels (Zero-Trust)",
              scope: "Secure TLS reverse proxy publishing services without inbound port forwarding",
              context: "Homelab Infrastructure",
              value: "End-to-end TLS encryption and automated DDoS protection for self-hosted edge services",
              layers: ["L2"]
            }
          ]
        }
      },
      experiences: [
        {
          id: "exp-alten",
          company: "Alten Italia",
          client: "Sisal (Flutter SEA)",
          role: "DevSecOps & Platform Engineer",
          period: "08/2025 – Present",
          location: "Remote / Milan, Italy",
          domain: "Gaming, high-traffic betting, regulated markets (ADM)",
          scale: "4,500+ repositories on GitHub Enterprise, 20-30 OKE nodes",
          layers: ["L0", "L1", "L2"],
          narrative: "At Sisal (Flutter SEA), I served as DevSecOps & Platform Engineer supporting an enterprise organization with over 4,500 repositories on GitHub Enterprise. I managed the build infrastructure on OKE Kubernetes clusters, orchestrated ARC ephemeral runners, standardized CI/CD GitOps practices with ArgoCD, integrated Shift-Left application security, and implemented SBAI regulatory compliance for the Customs and Monopolies Agency (ADM).",
          responsibilities: [
            {
              title: "Runner Infrastructure & OKE Clusters",
              description: "Administering and maintaining Kubernetes clusters (OKE on Oracle Cloud, Dev and Prod environments, 20–30 nodes) dedicated to compilation runners and platform tooling (Redis, internal dashboards, InfluxDB)."
            },
            {
              title: "Ephemeral Runner Fleet (ARC)",
              description: "Scaling and managing Actions Runner Controller on Kubernetes pods for multi-stack workloads: Java, Python, .NET, Node.js, and Go. Workload isolation and compute cost efficiency."
            },
            {
              title: "Mobile CI with Orka",
              description: "Configuring dedicated runners interfaced with Orka infrastructure (bare-metal virtualized macOS) for build and test pipelines of iOS apps, Android packages, and Unity assets."
            },
            {
              title: "GitHub Actions Framework",
              description: "Developing a modular library of reusable workflows, matrix build dispatchers, and composite actions to eliminate pipeline duplication across software factories."
            },
            {
              title: "Continuous GitOps (ArgoCD + Helm/Kustomize)",
              description: "Automating deployments with automatic patches generated by CI pipelines onto manifest repositories, with continuous reconciliation on production clusters."
            },
            {
              title: "AppSec & Governance (Shift-Left)",
              description: "Three-tier SonarQube Quality Gates (Bronze, Silver, Gold) locked to New Code, blocking PRs and releases. Self-service technical debt remediation workflow. Supply chain security via Veracode Firewall upstream of Nexus Pro as an inspecting proxy."
            },
            {
              title: "SBAI Regulatory Compliance (ADM)",
              description: "Supervised Build and Install automation for collecting immutable logs and generating cryptographic checksums of artifacts for regulatory authority audits."
            },
            {
              title: "Internal Developer Platform & Tooling",
              description: "Backstage service catalog, Grafana KPI dashboards, InfluxDB metric persistence, and development of micro-utilities and automation bots in Bash, Python, and Go."
            }
          ],
          quantifiableResults: [
            "-27% CI cycle time via parallel execution of test steps, SonarQube analysis, Veracode scans, and Docker image builds.",
            "-60% SonarQube LoC and +70% speed: reengineering the code metric extraction workflow onto InfluxDB and automating decommissioning of temporary projects, drastically lowering Sonar licensing costs."
          ],
          tools: [
            "GitHub Actions (Reusable & Composite)", "Kubernetes (OKE)", "ArgoCD", "Oracle Cloud (OCI)",
            "ARC (Ephemeral Runners on Pods)", "Veracode (SAST & SCA)", "SonarQube (Quality Gates)",
            "Veracode Firewall", "Nexus Pro", "Compliance SBAI", "Helm & Kustomize", "Orka (macOS CI)",
            "InfluxDB", "Grafana", "Backstage", "Trivy", "CrowdStrike", "OCI Vault", "Sealed Secrets", "Bash", "Python", "Go"
          ]
        },
        {
          id: "exp-magma",
          company: "Magma S.r.l.",
          client: "Walgreens Boots Alliance (WBA)",
          role: "Technical Architect & Tech Project Lead",
          period: "03/2021 – 08/2025",
          location: "Remote",
          domain: "Supply Chain, Replenishment, Order Management and Pharmaceutical Logistics (~9,000 pharmacies)",
          scale: "Peak throughput up to ~3,000 TPS on mission-critical order routing channels",
          layers: ["L0", "L1", "L2"],
          narrative: "For Walgreens Boots Alliance, I served as Technical Architect and Tech Project Lead, designing and steering the delivery of Cloud Native architectures on Microsoft Azure with an emphasis on scalability, microservices decoupling, and serverless/event-driven patterns. I coordinated 2 engineering teams (13 developers total), drove FinOps optimizations, and engineered 3 core middlewares for protocol conversion and application decoupling.",
          responsibilities: [
            {
              title: "Technical Leadership of 2 Teams (13 developers)",
              description: "Steering the Java/Spring Team (6 devs: common libraries, CloudMessage standardization, Cosmos DB connectors, authentication) and the C#/.NET Team (7 devs: serverless components, utility frameworks, middleware)."
            },
            {
              title: "Architectural Ownership & Audits",
              description: "Authoring reference architectures, Proof of Concepts (PoCs), delivery roadmaps (Gantt), obsolescence mitigation plans, and leading technical presence during enterprise international audits."
            },
            {
              title: "3 Core Decoupling & Protocol Conversion Middlewares",
              description: "Designing and releasing from scratch: 1) Azure Service Bus ⇄ Azure EventHub (transactional/analytical decoupling); 2) SOAP ⇄ REST (bidirectional enterprise-to-microservice layer); 3) Cosmos DB Change Feed ⇄ Service Bus (reactive streaming pattern)."
            },
            {
              title: "FinOps, Scalability & Autoscaling",
              description: "Serverless refactoring from 23-25 Spring Boot microservice replicas to 19 C#/.NET Isolated instances (-30% costs); event-driven KEDA autoscaling on AKS (-10% cluster costs); Azure Spot Instances adoption (-15% test environment costs)."
            },
            {
              title: "Runtime Modernization & Vendor Escalation",
              description: "Migrating Java 8 → 11 → 17 and .NET Core 3 → 6 → 8 with zero-downtime Blue/Green deployments. Direct L3 technical escalation interface with Microsoft Engineering for AKS/JVM breaking changes and Service Bus SDK issues."
            }
          ],
          quantifiableResults: [
            "-30% compute costs by replacing 23–25 Spring Boot replicas with 19 serverless C#/.NET instances (Isolated Worker Model, pre-warming, and scale-out tuning).",
            "-10% cluster costs through event-driven autoscaling with KEDA on AKS and fine-tuning health probes.",
            "-15% non-prod environment costs through targeted adoption of Azure Spot Instances for secondary dev/test environments."
          ],
          tools: [
            "Microsoft Azure (Functions, APIM, AKS)", "Azure ServiceBus (~3,000 TPS)", "Azure EventHub",
            "KEDA", "Java (Spring Boot)", "C# (.NET 8 Isolated)", "Docker", "Cosmos DB & Change Feed",
            "Redis", "Azure Spot Instances", "SonarQube", "SOAP ⇄ REST Middleware", "FinOps", "CI/CD"
          ]
        },
        {
          id: "exp-act",
          company: "ACT Operations Research IT S.r.l.",
          client: "Cod19 (Hospital Emergency Platform)",
          role: "Algorithm Engineer",
          period: "09/2020 – 02/2021",
          location: "Lomazzo (CO), Italy / Remote",
          domain: "Healthcare, Operations Research & Emergency Management",
          scale: "Regional monitoring and hospital facilities",
          layers: ["L0"],
          narrative: "During the initial pandemic wave, I developed the backend for Cod19, a clinical decision-support platform designed to monitor and forecast Covid-19 patient hospitalization windows. I worked closely with medical staff and operations research scientists to engineer predictive time-series models anticipating hospital ward saturation.",
          responsibilities: [
            {
              title: "Backend & Time-Series Models",
              description: "Developing backend services in Python and predictive time-series algorithmic models to forecast hospital stay durations and anticipate department saturation peaks."
            },
            {
              title: "APIs & Data Persistence",
              description: "Designing REST APIs and relational persistence layers (MySQL, SQLite) for secure clinical data ingestion and aggregation."
            }
          ],
          quantifiableResults: [
            "Engineered predictive algorithmic models successfully adopted by hospital wards to anticipate ICU bed saturation."
          ],
          tools: [
            "Python", "REST APIs", "Time-Series Modeling", "Predictive Algorithms", "MySQL", "SQLite", "Git"
          ]
        },
        {
          id: "exp-unisa",
          company: "University of Salerno",
          client: "EU Research Grants PICO-E-PRO & PACIB (Pharmacy Dept.)",
          role: "Software & ML Engineer",
          period: "07/2019 – 03/2020",
          location: "Fisciano (SA), Italy",
          domain: "European Applied Research, Deep Learning & Pharmaceuticals",
          scale: "Distributed scientific computing pipelines",
          layers: ["L0"],
          narrative: "Participated in competitive European applied research grants (PICO-E-PRO and PACIB), engineering artificial intelligence models for predictive anomaly analysis and a distributed orchestration layer for the Department of Pharmacy.",
          responsibilities: [
            {
              title: "Deep Learning & Computer Vision",
              description: "Developing models based on Convolutional Neural Networks (CNN) in Python/TensorFlow for predictive analysis of biomedical and industrial anomalies."
            },
            {
              title: "Distributed Asynchronous Pipeline",
              description: "Designing a distributed protein panel calculation pipeline for the Department of Pharmacy based on asynchronous message queues between compute modules."
            }
          ],
          quantifiableResults: [
            "Delivered high-parallelism asynchronous scientific computing pipelines for protein biomarker calculations."
          ],
          tools: [
            "Python", "CNN (TensorFlow/Keras)", "Message Brokers", "Biomedical Image Processing", "Linux", "Git"
          ]
        }
      ],
      starStories: [
        {
          id: "star-a",
          code: "Story A",
          title: "Breaking Change Resolution on AKS & JVM Runtime",
          badge: "Deep Troubleshooting • Kubernetes / JVM Cgroups Quotas",
          layers: ["L0", "L2"],
          situation: "Following a Kubernetes/containerd node upgrade on AKS, legacy Java microservice workloads suffered severe instability, recurring OOM (Out Of Memory) crashes, and steep throughput degradation.",
          task: "Isolate the root cause on critical production systems processing high-volume order flows (~3,000 TPS) and restore full operational resilience without regressions.",
          action: "Performed deep JVM behavioral analysis inside containerized environments, isolating the defect to legacy runtimes failing to detect container cgroup resource quotas (erroneously binding to total host node capacity), rapidly exhausting internal thread pools. Initiated an L3 technical session with Microsoft Engineering, identified the runtime release containing the proper backports, and normalized container images with cgroup isolation flags.",
          result: "Zero crashes achieved immediately, restored correct memory boundaries, and safeguarded continuous operations for over 9,000 retail pharmacies."
        },
        {
          id: "star-b",
          code: "Story B",
          title: "Metadata Manipulation Anomaly on Azure Service Bus",
          badge: "Deep Troubleshooting • Cloud SDK Bug Escalation",
          layers: ["L0", "L2"],
          situation: "During peak message routing volumes on Azure Service Bus, a mission-critical metadata manipulation function intermittently failed to persist custom attributes during the apply phase.",
          task: "Determine whether the inconsistency stemmed from internal middleware application logic or represented an intrinsic bug within the cloud provider's managed client SDK.",
          action: "Engineered an isolated, reproducible minimal Proof of Concept (PoC); captured raw binary network traces and escalated formally to Microsoft Engineering, conclusively proving anomalous client SDK behavior.",
          result: "Promptly rolled out a targeted application-level workaround ensuring zero data loss, followed by a permanent alignment once the official vendor patch was released."
        }
      ],
      homelab: [
        {
          id: "hl-infra",
          title: "Self-Hosted Homelab Infrastructure",
          category: "Virtualization, Networking & Zero-Trust",
          layers: ["L1", "L2"],
          description: "Enterprise-grade home lab on Proxmox VE bare-metal hypervisor with network segmentation, shared storage, and federated identity management.",
          highlights: [
            "Proxmox VE (Type-1) bare-metal hypervisor isolating workloads across virtual machines and LXC containers.",
            "Tailscale (WireGuard) encrypted peer-to-point mesh network backbone for remote administration with zero WAN port forwarding.",
            "Zero-Trust TLS reverse proxy publishing internal web services securely via Cloudflare Tunnels.",
            "Distributed persistent NFS storage on dedicated NAS for immutable ZFS snapshots and container volumes.",
            "Centralized OIDC identity provider (Pocket ID) enabling SSO protection for Home Assistant, Immich, and Vikunja."
          ]
        },
        {
          id: "hl-iot",
          title: "SmartDisplay — IoT & Barebone Edge",
          category: "Bare-Metal Firmware, SPI DMA & Microcontrollers",
          layers: ["L0"],
          repo: "https://github.com/pasmimmo/SmartDisplay",
          repoDisplay: "github.com/pasmimmo/SmartDisplay",
          description: "Full firmware redesign for a 1.28\" circular display based on ESP32-S3 using ESPHome, transformed from a closed proprietary cloud ecosystem into a 100% local edge device integrated with Home Assistant.",
          highlights: [
            "IPS SPI display driven at 80 MHz via DMA for smooth UI rendering with LVGL 8 at 30 FPS.",
            "Hardware power gating of the I2S audio amplifier (GPIO46) eliminating idle speaker hiss and saving ~20 mA.",
            "Circular in-memory ring buffer managing alarm events with LIFO prioritization.",
            "Built-in Passive BLE Proxy capturing Bluetooth telemetry without congesting Wi-Fi bandwidth."
          ]
        }
      ],
      education: [
        {
          degree: "B.Sc. in Computer Science",
          institution: "University of Salerno",
          period: "2019",
          description: "Focus on operating systems, distributed algorithms, and software engineering."
        },
        {
          degree: "European Applied Research Grants",
          institution: "PICO-E-PRO & PACIB (Dept. of Pharmacy)",
          period: "2019 — 2020",
          description: "Convolutional neural network (CNN) architectures and asynchronous scientific computing pipelines."
        }
      ],
      languages: [
        {
          language: "Italian",
          level: "Native Speaker",
          detail: "Mother tongue"
        },
        {
          language: "English",
          level: "Full Professional Proficiency",
          detail: "C2 Reading • C1 Writing • B1 Speaking (daily international meetings, technical architecture documentation, and vendor escalation)"
        }
      ],
      milestones: [
        {
          year: "2019",
          period: "BASE",
          badge: "🎓 BASE",
          title: "B.Sc. CompSci",
          subtitle: "Uni Salerno",
          targetId: "section-education"
        },
        {
          year: "2019 — 2020",
          period: "RESEARCH",
          badge: "🧠 RESEARCH",
          title: "Deep Learning & ML",
          subtitle: "PICO-E-PRO",
          targetId: "exp-unisa"
        },
        {
          year: "2020 — 2021",
          period: "COVID19",
          badge: "💻 TIME-SERIES",
          title: "Algorithm Eng.",
          subtitle: "Cod19 Platform",
          targetId: "exp-act"
        },
        {
          year: "2021 — 2025",
          period: "SCALE",
          badge: "☁️ CLOUD ARCH",
          title: "Cloud Architect",
          subtitle: "WBA • Team 13",
          targetId: "exp-magma"
        },
        {
          year: "2025 — PRES",
          period: "PLATFORM",
          badge: "🛡️ DEVSECOPS",
          title: "DevSecOps & Platform",
          subtitle: "Alten • Sisal (Flutter)",
          targetId: "exp-alten"
        }
      ],
      ui: {
        docTitle: "Domenico Pascucci (pasmimmo) — Technical Architect & DevSecOps Specialist",
        badgeTop: "Curriculum Vitae • Domenico Pascucci (pasmimmo)",
        btnPrint: "Print / Save PDF",
        viewInteractive: "Interactive X-Ray",
        viewClassic: "Classic CV",
        summaryExecutive: "👔 Executive / HR Focus",
        summaryTechnical: "⚙️ Tech Lead / Architect Focus",
        heroGreeting: "Hello! I'm",
        heroNicknamePrefix: "...but you can call me",
        heroBadgeArch: "TECH & CLOUD ARCHITECT",
        heroBadge1: "Sisal (Flutter SEA) • DevSecOps & Platform",
        heroBadge2: "Walgreens Boots Alliance • Tech Architect",
        milestonesHeading: "Key Milestones & Significant Experiences",
        milestonesSub: "Click to jump to experience",
        titleContact: "Contact",
        qrTag: "PORTFOLIO LIVE",
        qrText: "Scan or click for live web CV",
        titleSkills: "Skills & Expertise",
        skillsTag: "CORE STACK",
        titleLanguages: "Languages",
        titleEducation: "Education",
        titleExperience: "Experience",
        labelClient: "CLIENT",
        labelTools: "Tools & Technologies",
        labelMetrics: "Results & Optimizations",
        labelResponsibilities: "Key Responsibilities",
        labelDomain: "Domain & Context",
        labelScale: "Scale & Perimeter",
        footerText: "Domenico Pascucci (pasmimmo) • Technical Architect & DevSecOps Specialist • Hosted on GitHub Pages",
        
        // X-Ray UI
        xraySectionTitle: "Domenico Pascucci, an X-Rayed Dev",
        xraySectionSub: "3-layer stack inspector: from bare-metal kernel to distributed cloud platforms.",
        xrayAll: "All Layers",
        xrayDepth: "X-Ray Scanner Depth",
        xrayShortcutsHint: "Click on a level to filter",
        xrayActiveLayer: "Selected Layer",
        xrayTechTitle: "Layer Technologies & Competencies",
        xrayColTech: "Technology",
        xrayColScope: "Scope of Use",
        xrayColContext: "Enterprise Context",
        xrayColValue: "Technical Detail & Measured Value",
        xrayRelatedExpTitle: "Work Experiences Related to this Layer",
        xrayStarTitle: "Deep Troubleshooting & STAR Stories",
        xrayStarSub: "Concrete enterprise evidence and critical incident handling for technical interviews.",
        xraySituation: "Situation",
        xrayTask: "Task",
        xrayAction: "Action",
        xrayResult: "Result",
        xrayHomelabTitle: "Homelab & Edge Projects Related to this Layer",
        xrayViewCode: "View Repository",
        btnDetailsToggleShow: "Show Architectural Details",
        btnDetailsToggleHide: "Hide Architectural Details",
        xraySelectionLabel: "LAYER SELECTION:",
        xrayAllBadge: "FULL STACK • 3 LAYERS",
        xrayAllHeading: "Complete Architectural Overview",
        xrayAllDesc: "Complete inspection of the architectural avatar: from bare-metal kernel and core foundations (L0 · Core), through delivery platform and AppSec (L1 · Platform), up to distributed cloud systems (L2 · Cloud).",
        xrayEmptyStar: "No STAR troubleshooting card specific to this layer (select L0 · Core, L2 · Cloud or ALL).",
        xrayEmptyHomelab: "No edge or homelab project specific to this layer.",
        titleSummary: "Executive & Architectural Summary",
        btnContacts: "Contact",
        filterContextAll: "All",
        filterContextSisal: "Sisal",
        filterContextWba: "WBA",
        filterContextHomelab: "Homelab & IoT",
        skillCategories: [
          { title: "Kubernetes & GitOps", icon: "☸️", items: "K8s, OKE (Oracle), AKS (Azure), ArgoCD, Helm, Kustomize, KEDA" },
          { title: "CI/CD & Automation", icon: "🚀", items: "GitHub Actions (4,500+ repos, Reusable & Composite), ARC (Ephemeral Runners), Orka (macOS bare-metal)" },
          { title: "AppSec & Governance", icon: "🛡️", items: "Veracode (SAST/SCA & Firewall), SonarQube (Quality Gates), Nexus Pro, OCI Vault, Sealed Secrets, SBAI" },
          { title: "Cloud & Virtualization", icon: "☁️", items: "Microsoft Azure (Functions, APIM, AKS, Spot), Oracle Cloud (OCI, OKE), Docker, Proxmox VE" },
          { title: "Backend & Barebone", icon: "💻", items: "Java (8→11→17, Spring Boot), C# (.NET 8 Isolated), Python, Go, Bash, ESPHome (ESP32-S3)" },
          { title: "Messaging & Data", icon: "🔄", items: "Azure Service Bus (~3,000 TPS), EventHub, Cosmos DB (Change Feed), Redis, InfluxDB, Grafana" },
          { title: "Leadership & FinOps", icon: "👥", items: "Technical Architecture, Team Lead (13 devs), FinOps (-30% costs), Vendor Escalation (Microsoft L3)" }
        ]
      }
    }
  };

  return cvData;
});

