// Interactive Logic for Project Catfish '99
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================================================
  // 1. Initial State & Setup
  // ==========================================================================
  let engineStarted = false;
  let audioCtx = null;
  let engineOsc1 = null;
  let engineOsc2 = null;
  let engineFilter = null;
  let engineGain = null;
  let modOsc = null;
  
  // Perspective specs data
  const specData = {
    hate: [
      { component: "Engine", spec: "3.8L L36 V6", verdict: "Only 200 hp. Slower than a modern minivan. Embarrassing for a Camaro.", level: "hate" },
      { component: "Transmission", spec: "4-Speed Automatic", verdict: "Sluggish, power-sapping 4L60E. Lacks the mechanical engagement of a manual.", level: "hate" },
      { component: "Body Style", spec: "Convertible", verdict: "Severe chassis flex, body squeaks, and a heavy, complex hydraulic top mechanism.", level: "hate" },
      { component: "Appearance", spec: "Catfish Facelift Nose", verdict: "Often ridiculed as the ugliest nose in Camaro history. Looks like a bottom-feeder.", level: "hate" },
      { component: "Project Value", spec: "Cheap Sports Toy", verdict: "Depreciated, plastic-heavy 90s GM interior. Low prestige and high maintenance.", level: "hate" }
    ],
    love: [
      { component: "Engine", spec: "3800 Series II V6", verdict: "Absolutely bulletproof engine block. Low maintenance, highly reliable, and 30 MPG highway.", level: "love" },
      { component: "Transmission", spec: "4L60E Automatic", verdict: "Strong, simple transmission. Extremely easy to service and perfect for relaxed cruising.", level: "love" },
      { component: "Body Style", spec: "Convertible", verdict: "Infinite headroom. Dropping the top on Ocean Drive under the palm trees is pure Miami bliss.", level: "love" },
      { component: "Appearance", spec: "Aerodynamic Bio-Design", verdict: "A classic late-90s streamlined design. Uniquely retro, smooth, and aging beautifully.", level: "love" },
      { component: "Project Value", spec: "Dad's Original Ride", verdict: "Brought brand new by Dad, gifted back by my wife. Priceless memories and sentimental value.", level: "love" }
    ]
  };

  // SVG Illustration vectors for work logs
  const logSVGs = {
    "birthday-surprise": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(255, 51, 102, 0.08)"/>
        <!-- Red Gift Box -->
        <rect x="30" y="45" width="40" height="40" fill="var(--bg-dark)" stroke="var(--secondary-color)" stroke-width="2"/>
        <line x1="50" y1="45" x2="50" y2="85" stroke="var(--secondary-color)" stroke-width="2"/>
        <line x1="30" y1="65" x2="70" y2="65" stroke="var(--secondary-color)" stroke-width="2"/>
        <!-- Giant Red Bow -->
        <path d="M 50 45 C 38 30, 32 40, 50 45 C 62 30, 68 40, 50 45" fill="none" stroke="var(--secondary-color)" stroke-width="3"/>
        <path d="M 50 45 L 42 35 M 50 45 L 58 35" stroke="var(--secondary-color)" stroke-width="3"/>
        <!-- Sparkles -->
        <circle cx="25" cy="30" r="1.5" fill="var(--primary-color)" class="pulse-text"/>
        <circle cx="75" cy="35" r="1.5" fill="var(--primary-color)" class="pulse-text"/>
        <circle cx="70" cy="75" r="1" fill="#fff"/>
      </svg>
    `,
    "miami-migration": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(0, 230, 240, 0.08)"/>
        <!-- Sun -->
        <circle cx="50" cy="35" r="12" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Sun rays -->
        <line x1="50" y1="18" x2="50" y2="10" stroke="var(--primary-color)" stroke-width="1.5"/>
        <line x1="50" y1="52" x2="50" y2="60" stroke="var(--primary-color)" stroke-width="1.5"/>
        <line x1="33" y1="35" x2="25" y2="35" stroke="var(--primary-color)" stroke-width="1.5"/>
        <line x1="67" y1="35" x2="75" y2="35" stroke="var(--primary-color)" stroke-width="1.5"/>
        <!-- Palm Trees -->
        <path d="M 15 85 Q 22 65, 20 50" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <path d="M 20 50 Q 10 45, 8 50 M 20 50 Q 15 40, 20 42 M 20 50 Q 28 42, 26 48" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
        <!-- Road -->
        <line x1="0" y1="85" x2="100" y2="85" stroke="var(--primary-color)" stroke-width="2"/>
        <line x1="0" y1="92" x2="100" y2="92" stroke="var(--primary-color)" stroke-width="1" stroke-dasharray="4 4"/>
      </svg>
    `,
    "power-window-revival": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(0, 230, 240, 0.08)"/>
        <!-- Door Panel outline -->
        <rect x="20" y="25" width="60" height="50" rx="4" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Window glass -->
        <path d="M 25 35 L 75 35 L 75 48 L 25 48 Z" fill="rgba(0, 230, 240, 0.2)" stroke="var(--primary-color)" stroke-width="1.5"/>
        <!-- Up arrow indicator -->
        <path d="M 50 65 L 50 55 M 50 55 L 46 59 M 50 55 L 54 59" fill="none" stroke="var(--secondary-color)" stroke-width="2"/>
        <!-- Gear/Motor symbol -->
        <circle cx="50" cy="65" r="6" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
        <line x1="50" y1="57" x2="50" y2="73" stroke="var(--primary-color)" stroke-width="1.5"/>
        <line x1="42" y1="65" x2="58" y2="65" stroke="var(--primary-color)" stroke-width="1.5"/>
      </svg>
    `,
    "weatherstrip-overhaul": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(255, 51, 102, 0.08)"/>
        <!-- Cloud and Rain -->
        <path d="M 35 45 C 35 38, 45 35, 50 38 C 55 32, 70 35, 68 45 C 75 45, 75 55, 65 55 L 35 55 Z" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <line x1="40" y1="62" x2="36" y2="72" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <line x1="50" y1="62" x2="46" y2="72" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <line x1="60" y1="62" x2="56" y2="72" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <!-- Shield/Protection Umbrella -->
        <path d="M 25 78 A 20 20 0 0 1 65 78" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <line x1="45" y1="78" x2="45" y2="88" stroke="var(--primary-color)" stroke-width="1.5"/>
      </svg>
    `,
    "monsoon-bluetooth": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(0, 230, 240, 0.08)"/>
        <!-- Radio Chassis -->
        <rect x="20" y="30" width="60" height="40" rx="2" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Cassette Deck slot -->
        <rect x="35" y="40" width="30" height="10" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
        <circle cx="42" cy="45" r="2" fill="var(--primary-color)"/>
        <circle cx="58" cy="45" r="2" fill="var(--primary-color)"/>
        <!-- Bluetooth Icon -->
        <path d="M 50 55 L 50 72 L 56 67 L 44 58 L 56 58 L 50 53" fill="none" stroke="var(--secondary-color)" stroke-width="2" class="pulse-text"/>
        <!-- Dial knobs -->
        <circle cx="28" cy="50" r="4" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
        <circle cx="72" cy="50" r="4" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
      </svg>
    `,
    "polishing-catfish": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(255, 51, 102, 0.08)"/>
        <!-- Buffer pad -->
        <ellipse cx="50" cy="55" rx="25" ry="10" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <line x1="50" y1="55" x2="50" y2="35" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Handles -->
        <line x1="50" y1="42" x2="72" y2="42" stroke="var(--primary-color)" stroke-width="1.5"/>
        <line x1="50" y1="42" x2="28" y2="42" stroke="var(--primary-color)" stroke-width="1.5"/>
        <!-- Sparkle sparkles -->
        <path d="M 75 25 L 80 30 L 75 35 L 70 30 Z" fill="var(--secondary-color)"/>
        <path d="M 25 65 L 28 68 L 25 71 L 22 68 Z" fill="var(--secondary-color)"/>
      </svg>
    `,
    "oil-change-battery-2026": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(0, 230, 240, 0.08)"/>
        <!-- Oil Can -->
        <path d="M 25 50 L 35 50 L 35 80 L 17 80 L 17 55 Z" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <circle cx="26" cy="67" r="3" fill="var(--primary-color)"/>
        <!-- Jump Box / Battery -->
        <rect x="52" y="45" width="28" height="32" rx="3" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Screen inside box -->
        <rect x="58" y="52" width="16" height="8" fill="var(--primary-color)" opacity="0.3"/>
        <!-- Cables -->
        <circle cx="58" cy="45" r="1.5" fill="var(--secondary-color)"/>
        <circle cx="74" cy="45" r="1.5" fill="var(--primary-color)"/>
        <path d="M 58 45 C 50 35, 45 42, 45 48" fill="none" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <path d="M 74 45 C 82 35, 87 42, 87 48" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
      </svg>
    `,
    "exhaust-hanger-fix": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(255, 51, 102, 0.08)"/>
        <!-- Exhaust pipe -->
        <path d="M 15 55 L 60 55 C 65 55, 70 57, 72 62 L 85 62" fill="none" stroke="var(--primary-color)" stroke-width="3"/>
        <line x1="85" y1="58" x2="85" y2="66" stroke="var(--primary-color)" stroke-width="3"/>
        <!-- Hanger bracket -->
        <rect x="50" y="25" width="14" height="24" rx="4" fill="none" stroke="var(--secondary-color)" stroke-width="2"/>
        <circle cx="57" cy="31" r="2.5" fill="var(--secondary-color)"/>
        <circle cx="57" cy="43" r="2.5" fill="var(--secondary-color)"/>
        <line x1="57" y1="43" x2="57" y2="55" stroke="var(--primary-color)" stroke-width="1.5" stroke-dasharray="2 2"/>
      </svg>
    `,
    "obd-egr-diagnostics": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(0, 230, 240, 0.08)"/>
        <!-- Handheld scanner shape -->
        <rect x="30" y="20" width="40" height="60" rx="6" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Screen -->
        <rect x="36" y="28" width="28" height="22" fill="none" stroke="var(--primary-color)" stroke-width="1.5"/>
        <!-- OBD Code Text "P0401" -->
        <text x="50" y="42" font-family="monospace" font-size="7" fill="var(--secondary-color)" font-weight="bold" text-anchor="middle">P0401</text>
        <!-- Scanner Buttons -->
        <circle cx="42" cy="58" r="2" fill="var(--primary-color)"/>
        <circle cx="50" cy="58" r="2" fill="var(--primary-color)"/>
        <circle cx="58" cy="58" r="2" fill="var(--primary-color)"/>
        <rect x="42" y="66" width="16" height="4" rx="1" fill="none" stroke="var(--primary-color)" stroke-width="1"/>
      </svg>
    `,
    "ppf-protection": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(255, 51, 102, 0.08)"/>
        <!-- Front bumper hood profile line -->
        <path d="M 15 80 L 35 60 C 45 45, 65 42, 85 42" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Shiny Protection shield overlay -->
        <path d="M 35 60 C 45 45, 65 42, 85 42 C 65 52, 45 68, 35 80 Z" fill="rgba(0, 230, 240, 0.15)" stroke="var(--secondary-color)" stroke-width="1.5" stroke-dasharray="2 2"/>
        <!-- Sparkles -->
        <path d="M 50 32 L 53 35 L 50 38 L 47 35 Z" fill="var(--secondary-color)"/>
        <path d="M 72 30 L 75 33 L 72 36 L 69 33 Z" fill="var(--secondary-color)"/>
      </svg>
    `,
    "convertible-window-reseal": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(255, 51, 102, 0.08)"/>
        <!-- Convertible top profile -->
        <path d="M 15 70 C 25 45, 45 42, 65 42 L 85 70 Z" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <!-- Rear window glass panel -->
        <path d="M 62 48 L 78 70 L 68 70 L 56 48 Z" fill="rgba(0, 230, 240, 0.2)" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <!-- Glue tube or seal lines -->
        <line x1="56" y1="48" x2="62" y2="48" stroke="var(--secondary-color)" stroke-width="2"/>
        <line x1="68" y1="70" x2="78" y2="70" stroke="var(--secondary-color)" stroke-width="2"/>
        <!-- Water droplets sliding off -->
        <circle cx="76" cy="40" r="1" fill="var(--primary-color)"/>
        <circle cx="82" cy="45" r="1" fill="var(--primary-color)"/>
      </svg>
    `,
    "detailing-polishing": `
      <svg viewBox="0 0 100 100" class="log-vector-art">
        <rect width="100" height="100" fill="rgba(0, 230, 240, 0.08)"/>
        <!-- Polishing Buffer Disk -->
        <circle cx="50" cy="50" r="20" fill="none" stroke="var(--primary-color)" stroke-width="2"/>
        <circle cx="50" cy="50" r="14" fill="none" stroke="var(--primary-color)" stroke-width="1" stroke-dasharray="3 3"/>
        <!-- Spin rotation arrows -->
        <path d="M 50 22 A 28 28 0 0 1 78 50" fill="none" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <path d="M 50 78 A 28 28 0 0 1 22 50" fill="none" stroke="var(--secondary-color)" stroke-width="1.5"/>
        <!-- Sparkles -->
        <path d="M 75 25 L 78 28 L 75 31 L 72 28 Z" fill="var(--secondary-color)"/>
        <path d="M 25 70 L 28 73 L 25 76 L 22 73 Z" fill="var(--secondary-color)"/>
      </svg>
    `
  };

  // ==========================================================================
  // 2. Odometer/Hit Counter
  // ==========================================================================
  function initHitCounter() {
    let hits = localStorage.getItem("camaro_log_hits");
    if (!hits) {
      hits = 1999; // Starter year!
    } else {
      hits = parseInt(hits, 10);
    }
    
    // Increment only once per session
    if (!sessionStorage.getItem("camaro_session_counted")) {
      hits += 1;
      localStorage.setItem("camaro_log_hits", hits);
      sessionStorage.setItem("camaro_session_counted", "true");
    }

    const hitStr = hits.toString().padStart(6, "0");
    const container = document.getElementById("hitCounterDisplay");
    container.innerHTML = "";
    
    for (let i = 0; i < hitStr.length; i++) {
      const digit = document.createElement("span");
      digit.className = "counter-digit";
      digit.textContent = hitStr[i];
      container.appendChild(digit);
    }
  }

  // ==========================================================================
  // 3. CRT Scanline Toggle
  // ==========================================================================
  const crtToggleBtn = document.getElementById("crtToggleBtn");
  const crtOverlay = document.getElementById("crtOverlay");
  
  crtToggleBtn.addEventListener("click", () => {
    const isActive = crtOverlay.classList.toggle("active");
    crtToggleBtn.classList.toggle("active", isActive);
    crtToggleBtn.innerHTML = `<span class="btn-indicator"></span> CRT: ${isActive ? "ON" : "OFF"}`;
  });

  // ==========================================================================
  // 4. Paint Theme Switcher
  // ==========================================================================
  const themeBtns = document.querySelectorAll(".theme-select-btn");
  const body = document.body;
  const themeColorName = document.querySelector(".theme-color-name");

  themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Clean active class
      themeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Apply theme to body
      const selectedTheme = btn.getAttribute("data-theme");
      const name = btn.getAttribute("data-name");
      
      body.className = ""; // Wipe classes
      body.classList.add(`theme-${selectedTheme}`);
      
      // Keep CRT active status if it was active
      if (crtToggleBtn.classList.contains("active")) {
        crtOverlay.classList.add("active");
      }

      themeColorName.textContent = name;
      themeColorName.className = `val theme-color-name ${selectedTheme}-text`;
    });
  });

  // ==========================================================================
  // 5. Perspective Toggle (Haters vs. Owner)
  // ==========================================================================
  const hatePerspectiveBtn = document.getElementById("hatePerspectiveBtn");
  const lovePerspectiveBtn = document.getElementById("lovePerspectiveBtn");
  const toggleSliderKnob = document.getElementById("toggleSliderKnob");
  const specsTableBody = document.getElementById("specsTableBody");

  function renderSpecs(mode) {
    const list = specData[mode];
    specsTableBody.innerHTML = "";
    
    list.forEach(item => {
      const row = document.createElement("tr");
      
      const componentTd = document.createElement("td");
      componentTd.className = "spec-component";
      componentTd.textContent = item.component;
      row.appendChild(componentTd);
      
      const specTd = document.createElement("td");
      specTd.className = "spec-value";
      specTd.textContent = item.spec;
      row.appendChild(specTd);
      
      const verdictTd = document.createElement("td");
      verdictTd.className = `spec-verdict ${mode === "hate" ? "hate-text" : "love-text"}`;
      verdictTd.textContent = item.verdict;
      row.appendChild(verdictTd);
      
      specsTableBody.appendChild(row);
    });
  }

  hatePerspectiveBtn.addEventListener("click", () => {
    hatePerspectiveBtn.classList.add("active");
    lovePerspectiveBtn.classList.remove("active");
    toggleSliderKnob.classList.remove("right");
    renderSpecs("hate");
  });

  lovePerspectiveBtn.addEventListener("click", () => {
    lovePerspectiveBtn.classList.add("active");
    hatePerspectiveBtn.classList.remove("active");
    toggleSliderKnob.classList.add("right");
    renderSpecs("love");
  });

  // Initial render
  renderSpecs("love");

  // ==========================================================================
  // 6. Project Dashboard Metrics Calculation
  // ==========================================================================
  function initProjectDashboard() {
    const totalJobs = maintenanceChecklist.length;
    const completedJobs = maintenanceChecklist.filter(item => item.done === "Yes").length;
    
    const completedJobsVal = document.getElementById("completedJobsVal");
    const projectProgressFill = document.getElementById("projectProgressFill");
    const projectProgressPercent = document.getElementById("projectProgressPercent");
    const lastUpdateVal = document.getElementById("lastUpdateVal");

    // Calculate percent
    const percent = totalJobs > 0 ? Math.round((completedJobs / totalJobs) * 100) : 0;

    if (completedJobsVal) {
      completedJobsVal.textContent = `${completedJobs} / ${totalJobs}`;
    }
    if (projectProgressFill) {
      projectProgressFill.style.width = `${percent}%`;
    }
    if (projectProgressPercent) {
      projectProgressPercent.textContent = `${percent}%`;
    }

    // Get the most recent log dynamically
    if (projectLogs && projectLogs.length > 0 && lastUpdateVal) {
      const latestLog = projectLogs[projectLogs.length - 1];
      
      const dateObj = new Date(latestLog.date);
      let shortDate = latestLog.date;
      if (!isNaN(dateObj.getTime())) {
        shortDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear().toString().slice(-2)}`;
      }
      lastUpdateVal.textContent = `${latestLog.title.split(":")[0]} (${shortDate})`;
    }
  }

  // Call it on load
  initProjectDashboard();

  // ==========================================================================
  // 7. Timeline Filtering & Work Logs Feed
  // ==========================================================================
  const logsGrid = document.getElementById("logsGrid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  
  function renderLogsGrid(categoryFilter = "all") {
    logsGrid.innerHTML = "";
    
    const filteredLogs = categoryFilter === "all" 
      ? projectLogs 
      : projectLogs.filter(log => log.category === categoryFilter);

    if (filteredLogs.length === 0) {
      logsGrid.innerHTML = `<div class="no-logs">No logs found in this category. Check back soon!</div>`;
      return;
    }

    filteredLogs.forEach(log => {
      const card = document.createElement("div");
      card.className = "log-card card";
      card.setAttribute("data-id", log.id);
      
      // Convert difficulty rating to wrenches
      const wrenches = "🔧".repeat(log.difficulty) || "🟢 Story";
      
      // Vector header graphic or fallback SVG
      const svgHeader = logSVGs[log.id] || `
        <svg viewBox="0 0 100 100" class="log-vector-art">
          <rect width="100" height="100" fill="rgba(255,255,255,0.03)"/>
          <text x="50" y="50" font-family="monospace" font-size="12" fill="var(--primary-color)" text-anchor="middle">CAMARO</text>
        </svg>
      `;

      card.innerHTML = `
        <div class="card-glow"></div>
        <div class="log-card-header">
          <span class="log-category-label">${log.category}</span>
          ${log.image ? `<img src="${log.image}" alt="${log.title}" class="log-card-img" onerror="this.remove();">` : ''}
          ${svgHeader}
        </div>
        <div class="log-card-body">
          <span class="log-date">${log.date}</span>
          <h4 class="log-title">${log.title}</h4>
          <p class="log-summary">${log.summary}</p>
          <div class="log-card-footer">
            <span class="log-difficulty">${wrenches}</span>
            <span class="read-thread-link">READ THREAD &gt;</span>
          </div>
        </div>
      `;

      // Event listener for opening modal
      card.addEventListener("click", () => {
        openModal(log.id);
      });

      logsGrid.appendChild(card);
    });
  }

  // Filter tabs behavior
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const category = tab.getAttribute("data-category");
      renderLogsGrid(category);
    });
  });

  // Initial render of logs
  renderLogsGrid("all");

  // ==========================================================================
  // 8. Modal Management
  // ==========================================================================
  const modal = document.getElementById("logModal");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  
  const modalDate = document.getElementById("modalDate");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDifficulty = document.getElementById("modalDifficulty");
  const modalTime = document.getElementById("modalTime");
  const modalCost = document.getElementById("modalCost");
  const modalImageContainer = document.getElementById("modalImageContainer");
  const modalContent = document.getElementById("modalContent");
  const modalTags = document.getElementById("modalTags");

  function openModal(logId) {
    const log = projectLogs.find(l => l.id === logId);
    if (!log) return;

    modalDate.textContent = log.date;
    modalCategory.textContent = log.category;
    modalTitle.textContent = log.title;
    modalDifficulty.textContent = "🔧".repeat(log.difficulty) || "🟢 Story";
    modalTime.textContent = log.time;
    modalCost.textContent = log.cost;
    
    // Graphic header in modal
    const svgHeader = logSVGs[log.id] || "";
    modalImageContainer.innerHTML = log.image
      ? `<img src="${log.image}" alt="${log.title}" class="modal-main-img" onerror="this.style.display='none'; document.getElementById('modalSvgFallback').style.display='block';">
         <div id="modalSvgFallback" style="width: 100%; display: flex; align-items: center; justify-content: center;">${svgHeader}</div>`
      : svgHeader;

    modalContent.innerHTML = log.content;
    
    // Render tags
    modalTags.innerHTML = "";
    log.tags.forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "modal-tag";
      tagSpan.textContent = `#${tag}`;
      modalTags.appendChild(tagSpan);
    });

    modal.classList.add("active");
    body.style.overflow = "hidden"; // Disable background scrolling
  }

  function closeModal() {
    modal.classList.remove("active");
    body.style.overflow = ""; // Re-enable background scrolling
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // ==========================================================================
  // 9. Interactive Guestbook (localStorage)
  // ==========================================================================
  const guestbookForm = document.getElementById("guestbookForm");
  const signaturesList = document.getElementById("signaturesList");

  // Initial guestbook entries if storage is empty
  const defaultEntries = [
    {
      name: "F-Body_Frankie",
      message: "Hell yeah brother! V6 or V8, fourth-gen Camaros rule. That 3.8L 3800 engine is a literal tank. Keep up the clean work!",
      avatar: "🚗",
      date: "Oct 15, 2024"
    },
    {
      name: "MiamiCruiser",
      message: "Spotted a clean Pewter convertible cruising down A1A in South Beach last week. Convertible weather is 365 days a year down here. Awesome project!",
      avatar: "🌴",
      date: "Jan 18, 2025"
    }
  ];

  function getGuestbookEntries() {
    const entries = localStorage.getItem("camaro_guestbook_entries");
    return entries ? JSON.parse(entries) : defaultEntries;
  }

  function saveGuestbookEntries(entries) {
    localStorage.setItem("camaro_guestbook_entries", JSON.stringify(entries));
  }

  function renderGuestbook() {
    const entries = getGuestbookEntries();
    signaturesList.innerHTML = "";

    if (entries.length === 0) {
      signaturesList.innerHTML = `<div class="no-signatures">No entries yet. Be the first to sign!</div>`;
      return;
    }

    entries.forEach(entry => {
      const item = document.createElement("div");
      item.className = "gb-entry";
      item.innerHTML = `
        <div class="gb-avatar">${entry.avatar}</div>
        <div class="gb-content">
          <div class="gb-user-info">
            <span class="gb-name">${escapeHTML(entry.name)}</span>
            <span class="gb-date">${entry.date}</span>
          </div>
          <span class="gb-msg">${escapeHTML(entry.message)}</span>
        </div>
      `;
      signaturesList.appendChild(item);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  guestbookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById("gbName");
    const msgInput = document.getElementById("gbMessage");
    const selectedAvatar = document.querySelector("input[name='gbAvatar']:checked").value;
    
    const newEntry = {
      name: nameInput.value.trim(),
      message: msgInput.value.trim(),
      avatar: selectedAvatar,
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const entries = getGuestbookEntries();
    entries.unshift(newEntry); // Add to beginning
    saveGuestbookEntries(entries);
    
    // Clear inputs
    nameInput.value = "";
    msgInput.value = "";
    
    renderGuestbook();
  });

  // ==========================================================================
  // 10. Interactive Maintenance Checklist Controller
  // ==========================================================================
  const checklistTableBody = document.getElementById("checklistTableBody");
  const checklistSearch = document.getElementById("checklistSearch");
  const chkFilterBtns = document.querySelectorAll(".chk-filter-btn");
  
  const chkTotalCount = document.getElementById("chkTotalCount");
  const chkDoneCount = document.getElementById("chkDoneCount");
  const chkFutureCount = document.getElementById("chkFutureCount");
  
  let currentChkFilter = "all";
  let currentChkSearch = "";

  function updateChecklistStats() {
    const total = maintenanceChecklist.length;
    const done = maintenanceChecklist.filter(item => item.done === "Yes").length;
    const future = maintenanceChecklist.filter(item => item.done === "Future").length;
    
    chkTotalCount.textContent = total;
    chkDoneCount.textContent = done;
    chkFutureCount.textContent = future;
  }

  function renderChecklist(filter = "all", searchQuery = "") {
    checklistTableBody.innerHTML = "";
    
    let filtered = maintenanceChecklist;
    
    // Apply filter
    if (filter === "done") {
      filtered = filtered.filter(item => item.done === "Yes");
    } else if (filter === "future") {
      filtered = filtered.filter(item => item.done === "Future");
    }
    
    // Apply search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(item => item.item.toLowerCase().includes(q));
    }

    if (filtered.length === 0) {
      checklistTableBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 20px;">No matching tasks found.</td></tr>`;
      return;
    }

    filtered.forEach(item => {
      const row = document.createElement("tr");
      
      // Item Name
      const nameTd = document.createElement("td");
      nameTd.className = "chk-item-name";
      nameTd.textContent = item.item;
      row.appendChild(nameTd);
      
      // Date Completed
      const dateTd = document.createElement("td");
      dateTd.className = "chk-item-date";
      dateTd.textContent = item.date;
      row.appendChild(dateTd);
      
      // Status Badge
      const statusTd = document.createElement("td");
      const isDone = item.done === "Yes";
      statusTd.innerHTML = isDone 
        ? `<span class="status-badge done">✅ Done</span>` 
        : `<span class="status-badge future">⏳ Future</span>`;
      row.appendChild(statusTd);
      
      checklistTableBody.appendChild(row);
    });
  }

  // Bind Search Input
  checklistSearch.addEventListener("input", (e) => {
    currentChkSearch = e.target.value;
    renderChecklist(currentChkFilter, currentChkSearch);
  });

  // Bind Filters
  chkFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      chkFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      currentChkFilter = btn.getAttribute("data-filter");
      renderChecklist(currentChkFilter, currentChkSearch);
    });
  });

  // Initial Checklist Render & Stats
  updateChecklistStats();
  renderChecklist("all", "");

  // Render initial guestbook list & hits
  renderGuestbook();
  initHitCounter();

});
