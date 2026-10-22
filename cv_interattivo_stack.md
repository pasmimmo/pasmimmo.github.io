# Specifiche Stack Interattivo a 3 Livelli (Interactive X-Ray)

> Documento di specifica tecnica che formalizza la scomposizione architetturale del profilo professionale di **Domenico Pascucci** (`@pasmimmo`) in 3 livelli di astrazione gerarchici e interconnessi.  
> Torna all'[Indice Generale](indice_archivio_professionale.md) | Consulta il [Master Archivio (Fonte Unica)](fonte_unica_di_verit.md) | Consulta il [CV Canonico](curriculum_vitae_canonico.md).

---

## 🧭 Panoramica Architetturale

```
                      ┌────────────────────────────────────────────────────────┐
   Livello 2 (Alto)   │ Cloud, Orchestrazione Distribuita & Dati               │
                      │ AKS, OKE, GitOps ArgoCD, KEDA, Cosmos DB, Service Bus  │
                      ├────────────────────────────────────────────────────────┤
   Livello 1 (Medio)  │ Container, Delivery, AppSec & Quality                  │
                      │ Docker, Proxmox VE, ARC, SonarQube, Veracode, SBAI     │
                      ├────────────────────────────────────────────────────────┤
   Livello 0 (Basso)  │ Barebone, OS & Core Frameworks                         │
                      │ Linux Kernel, Java/Spring, C#/.NET 8, ESPHome, NFS     │
                      └────────────────────────────────────────────────────────┘
```

---

## 1. Livello 0 (Basso) — Barebone, OS & Core Frameworks ("Ossa & Fondamenta")

* **Concetto Chiave:** Dominio di basso livello, sistemi operativi, kernel, thread pool, memorie e runtime linguistici ad alte prestazioni.
* **Metrica d'Impatto:**
  * **-30% costi computazionali** con refactoring serverless C#/.NET 8 (Isolated Worker Model).
  * **30 FPS fluidi** con pilotaggio display IPS SPI via DMA a 80 MHz su ESP32-S3.
  * **-20 mA assorbimento in idle** tramite audio power gating hardware (GPIO46).

### Tecnologie e Dettagli Operativi
1. **Linux Kernel & OS:** Gestione delle risorse di sistema, allocazione container quotas/cgroups, scheduling dei processi, thread pooling e debugging avanzato di sistema.
2. **Java (8 → 11 → 17) & Spring Boot:** Sviluppo di enterprise common libraries (`CloudMessage`), stream di messaggi, connettori Cosmos DB e layer di autenticazione enterprise. Upgrade runtime a zero downtime.
3. **C# / .NET 8 (Isolated Worker Model):** Implementazione di microservizi serverless ad altissimo throughput, gestione avanzata del pre-warming e tuning del max scale-out per flussi di ordini.
4. **Python:** Sviluppo backend, modelli Time-Series predittivi per saturazione reparti ospedalieri (*Cod19*), reti neurali convoluzionali (*CNN*) e script di telemetria di piattaforma.
5. **Go & Bash:** Sviluppo di micro-utility, CLI interne e automazioni ad alta efficienza per l'estrazione e aggregazione delle metriche di codice.
6. **ESPHome (ESP32-S3 IoT Barebone):** Firmware custom edge per display circolare 1.28", pilotaggio display IPS SPI con DMA a 80 MHz, rendering UI LVGL 8 a 30 FPS, ring-buffer circolare allarmi LIFO e Passive BLE Proxy.
7. **Tailscale (WireGuard):** Backbone di rete mesh crittografata point-to-point zero-trust per connessioni sicure tra cluster, homelab e client remoti.
8. **NFS:** Storage distribuito di rete per carichi virtualizzati Proxmox e backup immutabili.

---

## 2. Livello 1 (Medio) — Container, Delivery, AppSec & Quality ("Muscoli, Corpo & Piattaforma")

* **Concetto Chiave:** Automazione del ciclo di vita del software, packaging in container, orchestrazione dei runner CI/CD, governance della qualità e sicurezza Shift-Left.
* **Metrica d'Impatto:**
  * **4.500+ repository** governati con framework modulare di pipeline CI/CD.
  * **-27% tempo di ciclo CI** grazie all'esecuzione parallela di test, scansioni SAST/SCA e build Docker.
  * **-60% LoC SonarQube & +70% velocità di esecuzione** tramite reingegnerizzazione processi su InfluxDB.

### Tecnologie e Dettagli Operativi
1. **Docker:** Multi-stage build ottimizzate, caching dei layer, standardizzazione ambienti di compilazione ed esecuzione sicura di container runtime.
2. **Proxmox VE (Hypervisor Type-1, VM & LXC):** Virtualizzazione bare-metal di livello enterprise, orchestrazione container LXC e gestione di storage ZFS con snapshot automatici.
3. **Actions Runner Controller (ARC):** Flotta di runner effimeri scalabili su pod Kubernetes per carichi di lavoro multi-stack (Java, .NET, Python, Node.js, Go).
4. **Orka (macOS Bare-Metal Mobile CI):** Gestione di runner specializzati su hardware Apple bare-metal per build e test automatizzati di app iOS, Android e asset Unity.
5. **GitHub Actions (Reusable & Composite Workflows, Matrix):** Architettura modulare a libreria per eliminare la duplicazione di pipeline tra decine di software factory.
6. **SonarQube (Quality Gates Bronze/Silver/Gold):** Definizione di Quality Gates vincolati al *New Code* bloccanti per PR e release; flusso self-service per la sanatoria del debito tecnico.
7. **Veracode (SAST & SCA):** Scansioni statiche del codice e analisi delle dipendenze per l'individuazione tempestiva delle vulnerabilità prima del merge in branch protetti.
8. **Veracode Firewall + Nexus Pro:** Proxy di ispezione preventivo su package manager (npm, Maven, NuGet, PyPI, Docker) per il blocco delle dipendenze malevole.
9. **Compliance Regolatoria SBAI (ADM):** Raccolta immutabile dei log di build e certificazione crittografica (checksum SHA256) per conformità alle disposizioni dell'ente regolatore.
10. **InfluxDB & Grafana:** Database time-series e dashboard visuali per il monitoraggio real-time di KPI di build, metriche di qualità e trend del debito tecnico.
11. **Backstage (IDP):** Portale interno per sviluppatori con catalogazione di microservizi, template standardizzati di pipeline e documentazione tecnica.

---

## 3. Livello 2 (Alto) — Cloud, Orchestrazione Distribuita & Dati ("Nuvoletta & Sistemi Distribuiti")

* **Concetto Chiave:** Piattaforme cloud scalabili, orchestrazione distribuita Kubernetes, protocol conversion, event-driven streaming e storage NoSQL ad alta resilienza.
* **Metrica d'Impatto:**
  * **~3.000 transazioni al secondo (TPS)** di picco gestite sui flussi critici di ordini.
  * **3 middleware core di disaccoppiamento** progettati e rilasciati da zero.
  * **-10% costi cluster** grazie ad autoscaling guidato dagli eventi con KEDA.
  * **-15% costi ambienti dev/test** mediante adozione di Azure Spot Instances.

### Tecnologie e Dettagli Operativi
1. **Kubernetes (AKS & OKE 20–30 nodi):** Gestione di cluster di produzione in ambienti Azure e OCI, provisioning dichiarativo, policy di scheduling e rolling updates a zero downtime.
2. **GitOps (ArgoCD, Helm, Kustomize):** Riconciliazione continua dello stato del cluster rispetto ai manifest Git, con patch automatiche generate in fase di CI.
3. **KEDA (Event-Driven Autoscaling):** Scalabilità orizzontale reattiva dei pod basata sul backlog e sulla lunghezza delle code di messaggi Service Bus.
4. **Microsoft Azure (Functions, APIM, AKS, Spot Instances):** Piattaforma cloud per microservizi serverless, governance delle API enterprise e ottimizzazione FinOps degli ambienti di collaudo.
5. **Oracle Cloud Infrastructure (OCI, OKE):** Infrastruttura cloud per l'hosting dei cluster Kubernetes e l'esecuzione ad alte prestazioni dei runner CI enterprise.
6. **Cosmos DB & Change Feed:** Database NoSQL distribuito a bassa latenza e pattern reattivo per la trasformazione del log delle mutazioni in stream di eventi.
7. **Azure Service Bus (~3.000 TPS):** Message broker enterprise per l'instradamento affidabile di ordini con sessioni e garanzie di ordinamento per oltre 9.000 farmacie.
8. **Azure EventHub:** Piattaforma di streaming di eventi per l'ingestione massiva di log e telemetria analitica.
9. **Redis:** Cache distribuita in-memory per abbattere le latenze di accesso ai dati frequenti e proteggere i database di backend.
10. **Sealed Secrets & OCI Vault:** Archiviazione crittografata dei segreti all'interno dei repository Git, con decifratura runtime delegata esclusivamente al cluster.
11. **Cloudflare Tunnels (Zero-Trust):** Esposizione controllata TLS end-to-end dei servizi senza apertura di porte sul firewall perimetrale.

