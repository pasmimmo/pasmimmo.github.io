# Domenico Pascucci
**Technical Architect & DevSecOps Specialist**  
Email: pasmimmo@gmail.com  
LinkedIn: [linkedin.com/in/pasmimmo](https://linkedin.com/in/pasmimmo/) | GitHub: [github.com/pasmimmo](https://github.com/pasmimmo) | Portfolio: [pasmimmo.github.io](https://pasmimmo.github.io/)

---

## Profilo Professionale
Technical Architect e DevSecOps Specialist con solida esperienza nella progettazione di architetture Cloud Native distribuite e nell'implementazione di ecosistemi enterprise di CI/CD, GitOps e sicurezza applicativa (Shift-Left). Ha coordinato team ingegneristici complessi (fino a 13 sviluppatori), standardizzato pipeline di automazione su scala di oltre 4.500 repository e conseguito ottimizzazioni architetturali e FinOps misurabili (fino al 30% di riduzione dei costi computazionali). Coniuga una profonda competenza sistemistica (Kubernetes, container runtime, troubleshooting di piattaforma) con un solido background nello sviluppo software backend e nella compliance di produzione in settori altamente regolamentati.

---

## Esperienza Professionale

### DevSecOps & Platform Engineer | Alten Italia (Cliente: Sisal / Flutter SEA)
*Agosto 2025 – Presente | Remoto / Milano*
* **Infrastruttura Runner & Kubernetes:** Gestione dell'infrastruttura di build e tool interni su cluster Kubernetes OKE (Oracle Cloud) in ambienti Dev e Prod (20–30 nodi); implementazione di Actions Runner Controller (ARC) su pod effimeri multi-stack (Java, .NET, Python, Node.js, Go) e runner specializzati Orka per mobile CI (iOS, Android, Unity).
* **CI/CD & GitOps su Larga Scala:** Ingegnerizzazione del framework modulare GitHub Actions (workflow riusabili, composite actions e matrici di dispatch) a servizio di oltre 4.500 repository; deploy dichiarativi con manifest Helm e Kustomize sincronizzati tramite ArgoCD.
* **AppSec & Shift-Left Governance:** Definizione dei Quality Gates SonarQube su *New Code* a tre livelli (Bronze, Silver, Gold) bloccanti per PR e release; introduzione di un flusso self-service per la bonifica del debito tecnico; integrazione di Veracode Firewall su Nexus Pro per il controllo delle dipendenze terze.
* **Compliance Regolatoria (SBAI):** Automazione del flusso *Supervised Build and Install* per la tracciabilità e la certificazione crittografica (checksum e log di build) degli artefatti in produzione secondo i requisiti del regolatore (ADM).
* **Ottimizzazioni Misurate:**
  * **-27% sui tempi di ciclo CI** grazie alla parallelizzazione degli step di test, scansione SAST/SCA e build delle immagini Docker.
  * **-60% LoC SonarQube e +70% velocità di esecuzione** tramite reingegnerizzazione dei processi di estrazione metriche con workflow schedulati su InfluxDB/Grafana e dismissione dei progetti temporanei.

### Technical Architect & Tech Project Lead | Magma S.r.l. (Cliente: Walgreens Boots Alliance)
*Marzo 2021 – Agosto 2025 | Remoto*
* **Ambito & Scala:** Architettura di integrazione per i servizi critici di supply chain, replenishment e ordini a supporto di oltre 9.000 farmacie, con carichi di picco fino a ~3.000 transazioni al secondo (TPS).
* **Leadership Tecnica:** Coordinamento di 2 team (13 sviluppatori complessivi) per lo sviluppo di common libraries (Java/Spring Boot) e componenti middleware/serverless (C#/.NET); gestione di roadmap tecniche, audit enterprise, PoC e allineamento con stakeholder internazionali.
* **Decoupling & Protocol Conversion:** Disegno e rilascio di 3 middleware core per l'integrazione di sistemi: bridge bidirezionale SOAP ⇄ REST, connettore ad alte prestazioni Azure Service Bus ⇄ EventHub, e pattern reattivo disaccoppiato basato su Cosmos DB Change Feed.
* **FinOps & Modernizzazione Architetturale:**
  * **-30% sui costi di calcolo** mediante migrazione da 23–25 repliche di microservizi Spring Boot a 19 istanze serverless C#/.NET (Isolated Worker Model, pre-warming e tuning del scale-out).
  * **-10% costi cluster** grazie all'implementazione di autoscaling guidato dagli eventi con KEDA su AKS e ottimizzazione dei probe di salute.
  * **-15% costi ambienti non-prod** tramite adozione mirata di Azure Spot Instances per il secondo ambiente di sviluppo/test.
* **Vendor Escalation & Troubleshooting di Piattaforma:** Interfaccia tecnica diretta (L3) verso Microsoft Engineering per la diagnosi e mitigazione di anomalie di runtime su AKS/JVM e SDK Service Bus, garantendo continuità di servizio.

### Algorithm Engineer | ACT Operations Research IT S.r.l.
*Settembre 2020 – Febbraio 2021 | Lomazzo (CO)*
* Sviluppo backend in Python e ingegnerizzazione di modelli algoritmici predittivi per *Cod19*, piattaforma ospedaliera finalizzata a stimare i tempi di degenza dei pazienti e anticipare i picchi di saturazione dei reparti durante l'emergenza Covid-19.

### Software & Machine Learning Engineer | Università degli Studi di Salerno
*Luglio 2019 – Marzo 2020 | Fisciano (SA)*
* Partecipazione ai bandi europei di ricerca PICO-E-PRO e PACIB per lo sviluppo di reti neurali convoluzionali (CNN) nell'analisi predittiva di anomalie biomediche e industriali.
* Progettazione di un layer distribuito a scambio asincrono di messaggi per l'orchestrazione del calcolo di pannelli proteici per il Dipartimento di Farmacia.

---

## Competenze Tecniche

* **Cloud & Container Platform:** Microsoft Azure (Functions, APIM, AKS, Service Bus, Cosmos DB), Oracle Cloud Infrastructure (OCI, OKE), Docker, Kubernetes, KEDA.
* **CI/CD, GitOps & Automazione:** GitHub Actions (Reusable & Composite Workflows, ARC), ArgoCD, Helm, Kustomize, Azure DevOps, Drone CI, Bash, Python, Go.
* **AppSec, Governance & Quality:** Veracode (SAST, SCA, Veracode Firewall), SonarQube (Quality Gates su New Code), Nexus Pro, InfluxDB, Grafana, Sealed Secrets, OCI Vault, Compliance SBAI.
* **Sviluppo Backend & Integrazione:** Java (Spring Boot), C# (.NET 8 Isolated), Python, Microservizi, Serverless, Architetture Event-Driven, Protocol Conversion (REST, SOAP).
* **Messaggistica & Database:** Azure Service Bus, Azure EventHub, RabbitMQ, Redis, Cosmos DB, Microsoft SQL Server, MySQL, SQLite.
* **Metodologie:** FinOps, Incident & Vendor Escalation Management, Root Cause Analysis, Blue/Green Deployment, Agile/Scrum.

---

## Attività Personali, Homelab & IoT
* **Homelab & Self-Hosting:** Hypervisor Proxmox VE, connettività mesh WireGuard cifrata via Tailscale, esposizione Zero-Trust via Cloudflare Tunnels, storage distribuito NFS su NAS e identity provider centralizzato OIDC (Pocket ID) per servizi self-hosted (Home Assistant, Immich, Vikunja).
* **Firmware & IoT (SmartDisplay):** Riprogettazione firmware ESPHome per dispositivo circolare ESP32-S3 (display IPS SPI con DMA a 80 MHz, UI LVGL 8 a 30 FPS, power gating dinamico dell'amplificatore audio I2S per azzerare il fruscio in idle, coda allarmi LIFO circolare, Passive BLE Proxy).

---

## Formazione & Lingue

* **Laurea in Informatica** — Università degli Studi di Salerno (2019)
* **Italiano:** Madrelingua
* **Inglese:** Lettura C2 | Scrittura C1 | Conversazione B1 (uso lavorativo per meeting internazionali e vendor escalation)