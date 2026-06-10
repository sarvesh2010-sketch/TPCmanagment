// --- TPC System Client State Management ---

// Default Initial Data
const DEFAULT_JOBS = [
  {
    id: "job-meta",
    company: "Meta",
    role: "AI Software Engineer",
    ctc: 46.0,
    cgpa: 8.5,
    dept: "CSE",
    desc: "Develop next-generation AI foundation models, large language models (LLMs), and scale machine learning infrastructure for Llama and PyTorch ecosystems."
  },
  {
    id: "job-1",
    company: "Stripe",
    role: "Backend Infrastructure Engineer",
    ctc: 42.0,
    cgpa: 8.5,
    dept: "CSE",
    desc: "Scale the global ledger systems. Experience with Java, distributed systems, and transactional databases is highly valued."
  },
  {
    id: "job-2",
    company: "Google",
    role: "Software Engineering Graduate",
    ctc: 32.5,
    cgpa: 8.5,
    dept: "ALL",
    desc: "Work on core search infrastructure, AI engines, or cloud-scale systems. Strong algorithmic fundamentals required."
  },
  {
    id: "job-3",
    company: "Microsoft",
    role: "Product Management Associate",
    ctc: 24.0,
    cgpa: 8.0,
    dept: "ALL",
    desc: "Define product features, synthesize feedback, and coordinate cross-functional engineering sprints."
  },
  {
    id: "job-4",
    company: "Adobe",
    role: "Frontend Engineer (Creative Cloud)",
    ctc: 18.5,
    cgpa: 7.5,
    dept: "CSE",
    desc: "Build next-gen web tools for creative professionals. Deep expertise in React, Canvas API, and CSS transitions."
  }
];

const DEFAULT_APPLICATIONS = [
  {
    id: "app-mock-1",
    jobId: "job-3",
    studentName: "Siddharth Sharma",
    studentGPA: 9.2,
    studentBranch: "CSE",
    studentSkills: "Java, React, Node.js, SQL, Git",
    studentScore: 85,
    status: "Shortlisted",
    roundName: "Coding Round",
    scheduleTime: "Tomorrow 2:00 PM"
  }
];

const DEFAULT_COMPANIES = [
  { name: "OpenAI", industry: "Artificial Intelligence", status: "Pending" },
  { name: "Figma", industry: "Design Tools", status: "Approved" },
  { name: "Airbnb", industry: "Hospitality Tech", status: "Approved" },
  { name: "Netflix", industry: "Streaming Media", status: "Approved" },
  { name: "Google", industry: "Technology & Cloud Computing", status: "Approved" },
  { name: "Stripe", industry: "Fintech & Payments Infrastructure", status: "Approved" },
  { name: "Microsoft", industry: "Enterprise Software & Cloud", status: "Approved" },
  { name: "Adobe", industry: "Digital Media Systems", status: "Approved" }
];

const DEFAULT_FEED = [
  "Stripe published interview schedules for shortlisted CSE graduates.",
  "Karan Malhotra (ECE, Batch 2026) accepted an offer from Amazon at 28 LPA!",
  "Google shortlisted 12 candidates for the final technical round.",
  "TPC Coordinator updated registration criteria for the upcoming Autumn Drive."
];

const DEFAULT_ANNOUNCEMENTS = [
  "Connecting with local administrative database announcements...",
  "Amazon drives registration is now open for ECE & CSE branches.",
  "Figma results announced: 3 students selected from CSE branch.",
  "Google final interview slots scheduled for tomorrow."
];

const DEFAULT_ACCOUNTS = [
  {
    username: "student",
    password: "student123",
    role: "student",
    name: "Siddharth Sharma",
    gpa: 9.2,
    branch: "CSE",
    skills: "Java, React, Node.js, SQL, Git",
    score: 85
  },
  {
    username: "karan",
    password: "karan123",
    role: "student",
    name: "Karan Malhotra",
    gpa: 8.2,
    branch: "ECE",
    skills: "C++, Python, SQL, Git",
    score: 75
  },
  {
    username: "aditi",
    password: "aditi123",
    role: "student",
    name: "Aditi Sen",
    gpa: 7.8,
    branch: "CSE",
    skills: "React, HTML, CSS, JavaScript, Git",
    score: 65
  },
  {
    username: "admin",
    password: "admin123",
    role: "coordinator",
    name: "Prof. R. K. Prasad"
  }
];

// Initialize LocalStorage Database Store
function initStore() {
  if (!localStorage.getItem("tpc_jobs")) {
    localStorage.setItem("tpc_jobs", JSON.stringify(DEFAULT_JOBS));
  } else {
    // Check if Meta job is in local storage, if not add it (simple loop)
    var jobs = JSON.parse(localStorage.getItem("tpc_jobs"));
    var hasMeta = false;
    for (var i = 0; i < jobs.length; i++) {
      if (jobs[i].company === "Meta") {
        hasMeta = true;
      }
    }
    if (hasMeta === false) {
      var metaJob = {
        id: "job-meta",
        company: "Meta",
        role: "AI Software Engineer",
        ctc: 46.0,
        cgpa: 8.5,
        dept: "CSE",
        desc: "Develop next-generation AI foundation models, large language models (LLMs), and scale machine learning infrastructure for Llama and PyTorch ecosystems."
      };
      jobs.unshift(metaJob);
      localStorage.setItem("tpc_jobs", JSON.stringify(jobs));
    }
  }
  if (!localStorage.getItem("tpc_applications")) {
    localStorage.setItem("tpc_applications", JSON.stringify(DEFAULT_APPLICATIONS));
  }
  if (!localStorage.getItem("tpc_companies")) {
    localStorage.setItem("tpc_companies", JSON.stringify(DEFAULT_COMPANIES));
  }
  if (!localStorage.getItem("tpc_feed")) {
    localStorage.setItem("tpc_feed", JSON.stringify(DEFAULT_FEED));
  }
  if (!localStorage.getItem("tpc_announcements")) {
    localStorage.setItem("tpc_announcements", JSON.stringify(DEFAULT_ANNOUNCEMENTS));
  }
  if (!localStorage.getItem("tpc_accounts")) {
    localStorage.setItem("tpc_accounts", JSON.stringify(DEFAULT_ACCOUNTS));
  }
}

// Getters and Setters
const getJobs = () => JSON.parse(localStorage.getItem("tpc_jobs") || "[]");
const saveJobs = (jobs) => localStorage.setItem("tpc_jobs", JSON.stringify(jobs));

const getApplications = () => JSON.parse(localStorage.getItem("tpc_applications") || "[]");
const saveApplications = (apps) => localStorage.setItem("tpc_applications", JSON.stringify(apps));

const getCompanies = () => JSON.parse(localStorage.getItem("tpc_companies") || "[]");
const saveCompanies = (comps) => localStorage.setItem("tpc_companies", JSON.stringify(comps));

const getFeed = () => JSON.parse(localStorage.getItem("tpc_feed") || "[]");
const saveFeed = (feed) => localStorage.setItem("tpc_feed", JSON.stringify(feed));

const getAnnouncements = () => JSON.parse(localStorage.getItem("tpc_announcements") || "[]");
const saveAnnouncements = (ann) => localStorage.setItem("tpc_announcements", JSON.stringify(ann));

const getAccounts = () => JSON.parse(localStorage.getItem("tpc_accounts") || "[]");
const saveAccounts = (accs) => localStorage.setItem("tpc_accounts", JSON.stringify(accs));

// Log an item to the activity audit feed
function addFeedItem(message) {
  const feed = getFeed();
  feed.unshift(message);
  if (feed.length > 20) feed.pop();
  saveFeed(feed);
}

// --- Session Handling ---
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("currentUser") || "null");
}

function loginUser(username, password, role) {
  const accounts = getAccounts();
  const user = accounts.find(
    acc => acc.username.toLowerCase() === username.toLowerCase() && 
           acc.password === password && 
           acc.role === role
  );
  if (user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false, error: "Invalid credentials for selected role." };
}

function logoutUser() {
  sessionStorage.removeItem("currentUser");
}

function registerNewStudent(username, password, name, gpa, branch, skills) {
  const accounts = getAccounts();
  if (accounts.some(acc => acc.username.toLowerCase() === username.toLowerCase())) {
    return { success: false, error: "Username already exists." };
  }
  const newStudent = {
    username,
    password,
    name,
    role: "student",
    gpa: parseFloat(gpa),
    branch,
    skills,
    score: 70
  };
  accounts.push(newStudent);
  saveAccounts(accounts);
  return { success: true, user: newStudent };
}

// Update current student details in account list when graded or modified
function updateStudentInfoInStore(updatedUser) {
  const accounts = getAccounts();
  const idx = accounts.findIndex(acc => acc.username === updatedUser.username && acc.role === "student");
  if (idx !== -1) {
    accounts[idx] = updatedUser;
    saveAccounts(accounts);
  }
}

// --- Global Alerts (Simple Student Alerts) ---
function showAlert(containerId, message, type = "success") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
  container.classList.remove("hidden");
  setTimeout(() => {
    container.classList.add("hidden");
  }, 4000);
}

// --- Routing / Navigation Logic ---
window.switchView = function(viewName) {
  const views = ["home", "stats", "login", "student", "admin"];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    const navEl = document.getElementById(`nav-${v}`);
    if (el) el.classList.remove("active");
    if (navEl) navEl.classList.remove("active");
  });

  const activeView = document.getElementById(`view-${viewName}`);
  const activeNav = document.getElementById(`nav-${viewName}`);
  if (activeView) activeView.classList.add("active");
  if (activeNav) activeNav.classList.add("active");

  // Load view data on trigger
  if (viewName === "home") {
    loadHomeView();
  } else if (viewName === "stats") {
    loadStatsView();
  } else if (viewName === "student") {
    loadStudentView();
  } else if (viewName === "admin") {
    loadAdminView();
  } else if (viewName === "login") {
    loadLoginView();
  }
};

// Update header menu items based on session state
function updateNavigationMenu() {
  const currentUser = getCurrentUser();
  const navLogin = document.getElementById("nav-login");
  const navStudent = document.getElementById("nav-student");
  const navAdmin = document.getElementById("nav-admin");
  const navLogout = document.getElementById("nav-logout");

  if (currentUser) {
    if (navLogin) navLogin.classList.add("hidden");
    if (navLogout) navLogout.classList.remove("hidden");

    if (currentUser.role === "student") {
      if (navStudent) navStudent.classList.remove("hidden");
      if (navAdmin) navAdmin.classList.add("hidden");
    } else if (currentUser.role === "coordinator") {
      if (navStudent) navStudent.classList.add("hidden");
      if (navAdmin) navAdmin.classList.remove("hidden");
    }
  } else {
    if (navLogin) navLogin.classList.remove("hidden");
    if (navStudent) navStudent.classList.add("hidden");
    if (navAdmin) navAdmin.classList.add("hidden");
    if (navLogout) navLogout.classList.add("hidden");
  }
}

// --- Load View Contents ---

// A. Home/Landing Page
function loadHomeView() {
  // Update Ticker
  const tickerText = document.getElementById("ticker-announcements");
  if (tickerText) {
    const announcements = getAnnouncements();
    tickerText.textContent = announcements.join("   |   ");
  }

  // Bind FAQ accordions
  const faqHeaders = document.querySelectorAll(".faq-header");
  faqHeaders.forEach(header => {
    header.replaceWith(header.cloneNode(true)); // remove previous listeners
  });

  const newFaqHeaders = document.querySelectorAll(".faq-header");
  newFaqHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains("open");
      
      // Close all first
      document.querySelectorAll(".faq-item").forEach(fi => fi.classList.remove("open"));
      document.querySelectorAll(".faq-icon").forEach(icon => icon.textContent = "+");
      
      if (!isOpen) {
        item.classList.add("open");
        header.querySelector(".faq-icon").textContent = "-";
      }
    });
  });
}

// B. Stats View
function loadStatsView() {
  const apps = getApplications();
  const jobs = getJobs();
  const comps = getCompanies();

  // Highlight calculations
  const placedApps = apps.filter(a => a.status === "Placed");
  
  // Base placements (simulated student count: 346 base + dynamic)
  const basePlacedCount = 346;
  const baseHighestPkg = 42.0;
  const baseAveragePkg = 12.4;

  let highestPkg = baseHighestPkg;
  let dynamicCtcSum = 0;
  let dynamicCtcCount = 0;

  placedApps.forEach(app => {
    const job = jobs.find(j => j.id === app.jobId);
    if (job && job.ctc) {
      if (job.ctc > highestPkg) highestPkg = job.ctc;
      dynamicCtcSum += job.ctc;
      dynamicCtcCount++;
    }
  });

  const totalPlacedCount = basePlacedCount + placedApps.length;
  const finalAveragePkg = ((basePlacedCount * baseAveragePkg + dynamicCtcSum) / (basePlacedCount + dynamicCtcCount)).toFixed(2);
  const placementRate = ((totalPlacedCount / 550) * 100).toFixed(1);

  document.getElementById("stat-highest-package").textContent = highestPkg.toFixed(1) + " LPA";
  document.getElementById("stat-average-package").textContent = finalAveragePkg + " LPA";
  document.getElementById("stat-placement-ratio").textContent = placementRate + "%";
  document.getElementById("stat-partner-companies").textContent = comps.filter(c => c.status === "Approved").length + " Partners";

  // Render Ledger tables
  renderStatsTables();
}

function renderStatsTables() {
  const apps = getApplications();
  const jobs = getJobs();
  const comps = getCompanies();

  const query = document.getElementById("stats-search-input").value.toLowerCase();
  const branchFilter = document.getElementById("stats-branch-filter").value;

  // 1. Placed Students Table
  const placementsBody = document.getElementById("stats-placements-table-body");
  placementsBody.innerHTML = "";

  const basePlacedLogs = [
    { name: "Siddharth Sharma", branch: "CSE", company: "Figma", ctc: 18.0, score: 85 },
    { name: "Mayra Verma", branch: "CSE", company: "Stripe", ctc: 42.0, score: 94 },
    { name: "Rahul Malhotra", branch: "ECE", company: "Microsoft", ctc: 12.5, score: 78 },
    { name: "Priya Sen", branch: "CSE", company: "Adobe", ctc: 10.8, score: 81 }
  ];

  // Map dynamic placed apps
  const dynamicPlaced = apps.filter(a => a.status === "Placed").map(app => {
    const job = jobs.find(j => j.id === app.jobId) || { company: "Corporate Partner", ctc: 12.0 };
    return {
      name: app.studentName,
      branch: app.studentBranch || "CSE",
      company: job.company,
      ctc: job.ctc,
      score: app.studentScore || 80
    };
  });

  const allPlaced = [...basePlacedLogs, ...dynamicPlaced];

  allPlaced.forEach(p => {
    const matchesQuery = p.name.toLowerCase().includes(query) || p.company.toLowerCase().includes(query);
    const matchesBranch = branchFilter === "All" || p.branch === branchFilter;

    if (matchesQuery && matchesBranch) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${p.name}</strong></td>
        <td><span class="badge badge-info">${p.branch}</span></td>
        <td>${p.company}</td>
        <td><strong>${p.ctc.toFixed(1)} LPA</strong></td>
        <td><strong style="color: #e67e22">${p.score}/100</strong></td>
      `;
      placementsBody.appendChild(tr);
    }
  });

  if (placementsBody.innerHTML === "") {
    placementsBody.innerHTML = `<tr><td colspan="5" class="text-center">No matching placed student logs found.</td></tr>`;
  }

  // 2. Recruiter Registers Table
  const companiesBody = document.getElementById("stats-companies-table-body");
  companiesBody.innerHTML = "";

  const approvedComps = comps.filter(c => c.status === "Approved");
  approvedComps.forEach(c => {
    const matchesQuery = c.name.toLowerCase().includes(query) || (c.industry && c.industry.toLowerCase().includes(query));
    if (matchesQuery) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${c.name}</strong></td>
        <td>${c.industry || "Visiting Partner"}</td>
        <td><span class="badge badge-placed">Approved</span></td>
      `;
      companiesBody.appendChild(tr);
    }
  });

  if (companiesBody.innerHTML === "") {
    companiesBody.innerHTML = `<tr><td colspan="3" class="text-center">No approved companies match the search terms.</td></tr>`;
  }
}

// C. Login View
function loadLoginView() {
  // Reset alerts
  document.getElementById("login-alert-container").classList.add("hidden");

  // Tab buttons
  const tabBtnStudent = document.getElementById("login-tab-student");
  const tabBtnCoord = document.getElementById("login-tab-coordinator");
  const signupLink = document.getElementById("student-signup-prompt");
  
  let activeRole = "student";

  tabBtnStudent.addEventListener("click", () => {
    activeRole = "student";
    tabBtnStudent.classList.add("active");
    tabBtnCoord.classList.remove("active");
    signupLink.classList.remove("hidden");
    document.getElementById("login-username").placeholder = "Enter student username (e.g. student)";
  });

  tabBtnCoord.addEventListener("click", () => {
    activeRole = "coordinator";
    tabBtnCoord.classList.add("active");
    tabBtnStudent.classList.remove("active");
    signupLink.classList.add("hidden");
    document.getElementById("login-username").placeholder = "Enter admin username (e.g. admin)";
  });

  // Login form submit
  const loginForm = document.getElementById("login-form-submit");
  loginForm.replaceWith(loginForm.cloneNode(true));
  document.getElementById("login-form-submit").addEventListener("submit", (e) => {
    e.preventDefault();
    const userVal = document.getElementById("login-username").value.trim();
    const passVal = document.getElementById("login-password").value;

    const res = loginUser(userVal, passVal, activeRole);
    if (res.success) {
      updateNavigationMenu();
      if (res.user.role === "student") {
        switchView("student");
      } else {
        switchView("admin");
      }
    } else {
      showAlert("login-alert-container", res.error, "danger");
    }
  });

  // Demo auto-fill helpers
  document.getElementById("demo-student-login").onclick = () => {
    tabBtnStudent.click();
    document.getElementById("login-username").value = "student";
    document.getElementById("login-password").value = "student123";
    document.getElementById("login-form-submit").dispatchEvent(new Event("submit"));
  };

  document.getElementById("demo-admin-login").onclick = () => {
    tabBtnCoord.click();
    document.getElementById("login-username").value = "admin";
    document.getElementById("login-password").value = "admin123";
    document.getElementById("login-form-submit").dispatchEvent(new Event("submit"));
  };
}

// D. Student View
function loadStudentView() {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== "student") {
    switchView("login");
    return;
  }

  // Populate details
  document.getElementById("student-profile-name").textContent = currentUser.name;
  document.getElementById("student-profile-branch-gpa").textContent = `${currentUser.branch} Branch | GPA: ${currentUser.gpa}`;
  
  const initials = currentUser.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
  document.getElementById("student-profile-initials").textContent = initials;

  // Prepopulate resume grader
  document.getElementById("resume-skills-input").value = currentUser.skills || "";
  
  // Readiness score
  updateStudentReadinessUI();

  // Render Job listings
  renderStudentJobListings();

  // Render applications timeline
  renderStudentTimeline();

  // Register checklist changes
  const checkGov = document.getElementById("check-student-gov-id");
  checkGov.replaceWith(checkGov.cloneNode(true));
  document.getElementById("check-student-gov-id").addEventListener("change", (e) => {
    const user = getCurrentUser();
    const statusSpan = document.getElementById("student-gov-id-status");
    if (e.target.checked) {
      statusSpan.textContent = "Verified";
      statusSpan.className = "badge badge-placed";
      user.score = Math.min((user.score || 70) + 5, 100);
    } else {
      statusSpan.textContent = "Pending";
      statusSpan.className = "badge badge-applied";
      user.score = Math.max((user.score || 75) - 5, 0);
    }
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    updateStudentInfoInStore(user);
    updateStudentReadinessUI();
  });
}

function updateStudentReadinessUI() {
  const user = getCurrentUser();
  const score = user.score || 70;
  document.getElementById("student-readiness-percent").textContent = score + "%";
  document.getElementById("student-readiness-progress-bar").style.width = score + "%";
}

window.gradeStudentResume = function() {
  const skillsInput = document.getElementById("resume-skills-input").value.trim();
  const projects = parseInt(document.getElementById("resume-projects-input").value) || 0;
  const internships = parseInt(document.getElementById("resume-internships-input").value) || 0;

  let score = 40; // Base score
  score += Math.min(projects * 8, 24);
  score += Math.min(internships * 13, 26);

  const parsed = skillsInput.split(",").map(s => s.trim().toLowerCase());
  const critical = ["react", "node", "sql", "java", "python", "docker", "aws", "kubernetes", "c++", "git"];
  let keywordPoints = 0;
  parsed.forEach(s => {
    if (critical.includes(s)) keywordPoints += 5;
  });
  score += Math.min(keywordPoints, 20);
  score = Math.min(score, 100);

  // Update session and store
  const user = getCurrentUser();
  user.skills = skillsInput;
  user.score = score;
  sessionStorage.setItem("currentUser", JSON.stringify(user));
  updateStudentInfoInStore(user);

  // Update UI
  updateStudentReadinessUI();
  document.getElementById("resume-score-display").textContent = score + "/100";
  document.getElementById("resume-grade-result-container").classList.remove("hidden");

  // Log activity
  addFeedItem(`${user.name} (B.Tech ${user.branch}) analyzed resume. Readiness score set to ${score}%.`);
  showAlert("student-alert-container", `Resume graded! Readiness score updated to ${score}%.`);
};

function renderStudentJobListings() {
  const container = document.getElementById("student-job-list");
  container.innerHTML = "";

  const jobs = getJobs();
  const apps = getApplications();
  const currentUser = getCurrentUser();

  jobs.forEach(job => {
    // Check applied
    const applied = apps.find(a => a.jobId === job.id && a.studentName === currentUser.name);
    // Check eligibility
    const eligibleGpa = currentUser.gpa >= job.cgpa;
    const eligibleDept = job.dept === "ALL" || job.dept === currentUser.branch;
    const isEligible = eligibleGpa && eligibleDept;

    let actionButton = "";
    if (applied) {
      actionButton = `<span class="badge badge-placed">Applied (${applied.status})</span>`;
    } else if (!isEligible) {
      const reason = !eligibleGpa ? `GPA < ${job.cgpa}` : `${job.dept} Branch only`;
      actionButton = `<span class="badge badge-declined" title="${reason}">Ineligible: ${reason}</span>`;
    } else {
      actionButton = `<button onclick="studentApplyJob('${job.id}')" class="btn btn-primary btn-sm">Apply Now</button>`;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="flex-space-between" style="margin-bottom: 5px;">
        <h4 style="margin: 0; font-size: 15px; color: #2c3e50;">${job.company}</h4>
        <span class="badge badge-info" style="font-size: 11px;">${job.ctc.toFixed(1)} LPA</span>
      </div>
      <p style="font-size: 12px; font-weight: bold; color: #555; margin-bottom: 5px;">${job.role}</p>
      <p style="font-size: 11px; color: #7f8c8d; margin-bottom: 10px;">${job.desc}</p>
      <div class="flex-space-between" style="border-top: 1px solid #eee; padding-top: 8px;">
        <span style="font-size: 10px; color: #95a5a6;">Min GPA: ${job.cgpa} | Branch: ${job.dept}</span>
        <div>${actionButton}</div>
      </div>
    `;
    container.appendChild(card);
  });

  if (jobs.length === 0) {
    container.innerHTML = `<p class="text-center" style="font-size: 13px; color: #95a5a6; padding: 20px;">No job postings available currently.</p>`;
  }
}

window.studentApplyJob = function(jobId) {
  const currentUser = getCurrentUser();
  const jobs = getJobs();
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  const apps = getApplications();
  const newApp = {
    id: "app-" + Date.now(),
    jobId: jobId,
    studentName: currentUser.name,
    studentGPA: currentUser.gpa,
    studentBranch: currentUser.branch,
    studentSkills: currentUser.skills,
    studentScore: currentUser.score || 70,
    status: "Applied"
  };

  apps.push(newApp);
  saveApplications(apps);

  addFeedItem(`${currentUser.name} applied for the ${job.company} drive.`);
  showAlert("student-alert-container", `Successfully applied to ${job.company} opening!`);

  // Re-render student views
  renderStudentJobListings();
  renderStudentTimeline();
};

function renderStudentTimeline() {
  const container = document.getElementById("student-timeline-container");
  container.innerHTML = "";

  const apps = getApplications();
  const jobs = getJobs();
  const currentUser = getCurrentUser();

  const studentApps = apps.filter(a => a.studentName === currentUser.name);

  studentApps.forEach(app => {
    const job = jobs.find(j => j.id === app.jobId);
    if (!job) return;

    let badgeClass = "badge-applied";
    let statusText = "HR Reviewing";
    let messageDetail = "Your application credentials have been submitted and are under coordinator verification.";

    if (app.status === "Shortlisted") {
      badgeClass = "badge-shortlisted";
      statusText = "Shortlisted";
      const roundDetails = app.roundName ? `${app.roundName} scheduled for ${app.scheduleTime}` : "Coding round scheduled for tomorrow at 2:00 PM";
      messageDetail = `<strong>Congratulations!</strong> You have been shortlisted. ${roundDetails}.`;
    } else if (app.status === "Placed") {
      badgeClass = "badge-placed";
      statusText = "Placed";
      messageDetail = `<strong>Congratulations!</strong> You received an offer. Verification complete. Welcome to the team!`;
    } else if (app.status === "Declined") {
      badgeClass = "badge-declined";
      statusText = "Declined";
      messageDetail = `Unfortunately, your score or profile did not meet company criteria for this opening.`;
    }

    const item = document.createElement("div");
    item.className = "card";
    item.style.padding = "15px";
    item.style.borderLeft = "4px solid " + (app.status === "Placed" ? "#2ecc71" : app.status === "Shortlisted" ? "#3498db" : app.status === "Declined" ? "#e74c3c" : "#f1c40f");
    item.innerHTML = `
      <div class="flex-space-between" style="margin-bottom: 5px;">
        <span style="font-weight: bold; font-size: 13px;">${job.company} - ${job.role}</span>
        <span class="badge ${badgeClass}">${statusText}</span>
      </div>
      <p style="font-size: 12px; color: #555;">${messageDetail}</p>
    `;
    container.appendChild(item);
  });

  if (studentApps.length === 0) {
    container.innerHTML = `<p style="font-size: 11px; color: #95a5a6;">You have not applied to any job opening drives yet.</p>`;
  }
}

window.simulateStudentResource = function(type) {
  let textMsg = "";
  if (type === "dsa") {
    textMsg = "Resource Vetting: DSA practice links allocated to LeetCode and HackerRank modules.";
  } else if (type === "system") {
    textMsg = "Resource Vetting: System Design architectural articles uploaded to campus FTP drive.";
  } else if (type === "hr") {
    textMsg = "Resource Vetting: Behavioral interview templates shared. Review STAR method guides.";
  }
  showAlert("student-alert-container", textMsg, "info");
};

// E. Admin / Coordinator View
function loadAdminView() {
  const currentUser = getCurrentUser();
  if (!currentUser || currentUser.role !== "coordinator") {
    switchView("login");
    return;
  }

  // Render Recruiter approval list
  renderAdminRecruiterApprovals();

  // Render Applicants lists
  renderAdminApplicantVetting();

  // Render general metrics
  const jobs = getJobs();
  const apps = getApplications();
  document.getElementById("admin-metrics-drives").textContent = jobs.length + " drives";
  document.getElementById("admin-metrics-placed").textContent = apps.filter(a => a.status === "Placed").length + " students";
  
  // Render Branch placement table
  renderBranchMatrixTable();

  // Render audit feed log
  renderAdminAuditFeed();
}

function renderAdminRecruiterApprovals() {
  const container = document.getElementById("admin-approvals-list");
  container.innerHTML = "";

  const comps = getCompanies();
  const pendingComps = comps.filter(c => c.status === "Pending");

  pendingComps.forEach(c => {
    const div = document.createElement("div");
    div.className = "flex-space-between";
    div.style.padding = "10px";
    div.style.border = "1px solid #eee";
    div.style.borderRadius = "4px";
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <div>
        <strong style="font-size: 13px; color: #2c3e50;">${c.name}</strong>
        <span style="font-size: 11px; color: #7f8c8d; margin-left: 10px;">${c.industry}</span>
      </div>
      <div>
        <button onclick="adminApproveRecruiter('${c.name}', true)" class="btn btn-success btn-sm">Approve</button>
        <button onclick="adminApproveRecruiter('${c.name}', false)" class="btn btn-danger btn-sm">Decline</button>
      </div>
    `;
    container.appendChild(div);
  });

  if (pendingComps.length === 0) {
    container.innerHTML = `<p style="font-size: 12px; color: #95a5a6; text-align: center; padding: 10px;">No pending recruiter profile verification requests.</p>`;
  }
}

window.adminApproveRecruiter = function(companyName, approved) {
  const comps = getCompanies();
  const compIdx = comps.findIndex(c => c.name === companyName);
  if (compIdx === -1) return;

  if (approved) {
    comps[compIdx].status = "Approved";
    addFeedItem(`TPC Coordinator authorized recruiter profile for ${companyName}.`);
    showAlert("admin-alert-container", `Recruiter profile for ${companyName} authorized successfully.`);
  } else {
    comps.splice(compIdx, 1);
    addFeedItem(`TPC Coordinator declined access request for ${companyName}.`);
    showAlert("admin-alert-container", `Access request for ${companyName} declined.`, "danger");
  }

  saveCompanies(comps);
  loadAdminView();
};

function renderAdminApplicantVetting() {
  const container = document.getElementById("admin-vetting-list");
  container.innerHTML = "";

  const apps = getApplications();
  const jobs = getJobs();

  // Populate interview scheduling dropdown
  const scheduleSelect = document.getElementById("schedule-candidate-select");
  scheduleSelect.innerHTML = `<option value="" disabled selected>Select candidate application...</option>`;

  apps.forEach(app => {
    const job = jobs.find(j => j.id === app.jobId);
    if (!job) return;

    // Add to schedule options if applicant is in queue
    if (app.status === "Applied" || app.status === "Shortlisted") {
      const opt = document.createElement("option");
      opt.value = app.id;
      opt.textContent = `${app.studentName} - ${job.company} (${app.status})`;
      scheduleSelect.appendChild(opt);
    }

    let actions = "";
    if (app.status === "Applied") {
      actions = `
        <button onclick="adminUpdateApplicant('${app.id}', 'Shortlisted')" class="btn btn-primary btn-sm">Shortlist</button>
        <button onclick="adminUpdateApplicant('${app.id}', 'Declined')" class="btn btn-danger btn-sm">Decline</button>
      `;
    } else if (app.status === "Shortlisted") {
      actions = `
        <button onclick="adminUpdateApplicant('${app.id}', 'Placed')" class="btn btn-success btn-sm">Offer Job</button>
        <button onclick="adminUpdateApplicant('${app.id}', 'Declined')" class="btn btn-danger btn-sm">Decline</button>
      `;
    } else {
      actions = `<span class="badge ${app.status === 'Placed' ? 'badge-placed' : 'badge-declined'}">Vetting Closed (${app.status})</span>`;
    }

    const item = document.createElement("div");
    item.style.padding = "10px 12px";
    item.style.border = "1px solid #ddd";
    item.style.borderRadius = "4px";
    item.style.marginBottom = "10px";
    item.innerHTML = `
      <div class="flex-space-between" style="margin-bottom: 5px;">
        <div>
          <strong style="font-size: 13px; color: #2c3e50;">${app.studentName}</strong> 
          <span class="badge badge-info" style="font-size: 10px;">${app.studentBranch || "CSE"}</span>
        </div>
        <span style="font-size: 11px; font-weight: bold; color: #e67e22;">GPA: ${app.studentGPA} | Grader Score: ${app.studentScore}/100</span>
      </div>
      <div class="flex-space-between" style="font-size: 11px; color: #666;">
        <span>Applied for: <strong>${job.company} - ${job.role}</strong></span>
        <div style="display: flex; gap: 5px; align-items: center;">${actions}</div>
      </div>
    `;
    container.appendChild(item);
  });

  if (apps.length === 0) {
    container.innerHTML = `<p style="font-size: 12px; color: #95a5a6; text-align: center; padding: 15px;">No student applications received yet.</p>`;
  }
}

window.adminUpdateApplicant = function(appId, newStatus) {
  const apps = getApplications();
  const appIdx = apps.findIndex(a => a.id === appId);
  if (appIdx === -1) return;

  const jobs = getJobs();
  const job = jobs.find(j => j.id === apps[appIdx].jobId);

  apps[appIdx].status = newStatus;
  saveApplications(apps);

  addFeedItem(`${job.company} drive status for ${apps[appIdx].studentName} updated to "${newStatus}".`);
  showAlert("admin-alert-container", `Candidate ${apps[appIdx].studentName} status set to ${newStatus}.`);

  loadAdminView();
};

window.adminPostJobDrive = function() {
  const company = document.getElementById("admin-job-company").value.trim();
  const role = document.getElementById("admin-job-role").value.trim();
  const ctc = parseFloat(document.getElementById("admin-job-ctc").value);
  const cgpa = parseFloat(document.getElementById("admin-job-cgpa").value);
  const dept = document.getElementById("admin-job-branch").value;
  const desc = document.getElementById("admin-job-desc").value.trim();

  if (!company || !role || isNaN(ctc) || isNaN(cgpa) || !desc) {
    showAlert("admin-alert-container", "Please fill all fields with valid values.", "danger");
    return;
  }

  const jobs = getJobs();
  const newJob = {
    id: "job-" + Date.now(),
    company,
    role,
    ctc,
    cgpa,
    dept,
    desc
  };

  jobs.unshift(newJob);
  saveJobs(jobs);

  addFeedItem(`TPC Coordinator posted corporate drive opening for ${company} - ${role} (CTC ${ctc} LPA).`);
  showAlert("admin-alert-container", `Corporate drive for ${company} posted successfully!`);

  // Reset Form
  document.getElementById("admin-job-drive-form").reset();
  loadAdminView();
};

window.adminScheduleInterview = function() {
  const appId = document.getElementById("schedule-candidate-select").value;
  const roundName = document.getElementById("schedule-round-name").value.trim();
  const scheduleTime = document.getElementById("schedule-date-time").value.trim();

  if (!appId || !roundName || !scheduleTime) {
    showAlert("admin-alert-container", "Select a candidate and specify round and date time details.", "danger");
    return;
  }

  const apps = getApplications();
  const appIdx = apps.findIndex(a => a.id === appId);
  if (appIdx === -1) return;

  apps[appIdx].status = "Shortlisted";
  apps[appIdx].roundName = roundName;
  apps[appIdx].scheduleTime = scheduleTime;
  saveApplications(apps);

  addFeedItem(`TPC Coordinator scheduled interview round '${roundName}' for ${apps[appIdx].studentName} on ${scheduleTime}.`);
  showAlert("admin-alert-container", `Interview drive scheduled for ${apps[appIdx].studentName}.`);

  // Reset form
  document.getElementById("admin-schedule-form").reset();
  loadAdminView();
};

window.adminPublishAnnouncement = function() {
  const textVal = document.getElementById("admin-announcement-text").value.trim();
  if (!textVal) return;

  const ann = getAnnouncements();
  ann.unshift(textVal);
  if (ann.length > 8) ann.pop();
  saveAnnouncements(ann);

  addFeedItem(`TPC Coordinator published campus announcement: "${textVal}"`);
  showAlert("admin-alert-container", "Campus-wide announcement published!");

  document.getElementById("admin-announcement-text").value = "";
  loadAdminView();
};

function renderBranchMatrixTable() {
  const tbody = document.getElementById("admin-branch-table-body");
  if (!tbody) return;

  const apps = getApplications();

  const branches = [
    { name: "CSE", registered: 180, placedBase: 142, pkg: "18.2 LPA" },
    { name: "ECE", registered: 140, placedBase: 88, pkg: "12.5 LPA" },
    { name: "MECH", registered: 120, placedBase: 54, pkg: "8.4 LPA" },
    { name: "MGMT", registered: 110, placedBase: 62, pkg: "10.8 LPA" }
  ];

  tbody.innerHTML = "";
  branches.forEach(b => {
    // Dynamic counts
    const dynamicCount = apps.filter(a => a.studentBranch === b.name && a.status === "Placed").length;
    const totalPlaced = b.placedBase + dynamicCount;
    const rate = ((totalPlaced / b.registered) * 100).toFixed(1);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${b.name}</strong></td>
      <td>${b.registered}</td>
      <td>${totalPlaced}</td>
      <td><span class="badge badge-placed" style="background-color: #d4edda; color: #155724;">${rate}%</span></td>
      <td><strong>${b.pkg}</strong></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAdminAuditFeed() {
  const container = document.getElementById("admin-live-activity-list");
  if (!container) return;

  const feed = getFeed();
  container.innerHTML = "";
  feed.forEach(msg => {
    const div = document.createElement("div");
    div.className = "feed-item";
    div.innerHTML = `• ${msg}`;
    container.appendChild(div);
  });
}

// F. Registration Modal
window.openStudentRegistration = function() {
  document.getElementById("signup-alert-container").classList.add("hidden");
  document.getElementById("registration-modal").classList.remove("hidden");
};

window.closeStudentRegistration = function() {
  document.getElementById("registration-modal").classList.add("hidden");
  document.getElementById("registration-form").reset();
};

window.submitStudentRegistration = function(e) {
  e.preventDefault();
  const username = document.getElementById("reg-student-username").value.trim();
  const name = document.getElementById("reg-student-name").value.trim();
  const password = document.getElementById("reg-student-password").value;
  const branch = document.getElementById("reg-student-branch").value;
  const gpa = document.getElementById("reg-student-gpa").value.trim();
  const skills = document.getElementById("reg-student-skills").value.trim();

  if (!username || !name || !password || !gpa || !skills) {
    showAlert("signup-alert-container", "All registration parameters are mandatory.", "danger");
    return;
  }

  const res = registerNewStudent(username, password, name, gpa, branch, skills);
  if (res.success) {
    closeStudentRegistration();
    // Auto fill and switch views
    document.getElementById("login-username").value = username;
    document.getElementById("login-password").value = password;
    document.getElementById("login-form-submit").dispatchEvent(new Event("submit"));
  } else {
    showAlert("signup-alert-container", res.error, "danger");
  }
};

// --- Logout ---
window.triggerLogout = function() {
  logoutUser();
  updateNavigationMenu();
  switchView("home");
};

// --- Page Initialize Trigger ---
document.addEventListener("DOMContentLoaded", () => {
  initStore();
  updateNavigationMenu();
  
  // Set default view on page load
  switchView("home");
  
  // Connect search listeners in stats
  const searchInput = document.getElementById("stats-search-input");
  const branchFilter = document.getElementById("stats-branch-filter");
  if (searchInput) searchInput.addEventListener("input", renderStatsTables);
  if (branchFilter) branchFilter.addEventListener("change", renderStatsTables);

  // Wire header navigation clicks (moved from inline handlers in HTML)
  ["home","stats","login","student","admin"].forEach(v => {
    const navEl = document.getElementById(`nav-${v}`);
    if (navEl) navEl.addEventListener('click', () => switchView(v));
  });
  const navLogout = document.getElementById('nav-logout');
  if (navLogout) navLogout.addEventListener('click', triggerLogout);

  // Hero action buttons
  const heroStats = document.getElementById('hero-stats-btn');
  if (heroStats) heroStats.addEventListener('click', () => switchView('stats'));
  const heroLogin = document.getElementById('hero-login-btn');
  if (heroLogin) heroLogin.addEventListener('click', () => switchView('login'));

  // Registration modal triggers
  const openReg = document.getElementById('open-registration-link');
  if (openReg) openReg.addEventListener('click', openStudentRegistration);
  const regClose = document.getElementById('registration-close-btn');
  if (regClose) regClose.addEventListener('click', closeStudentRegistration);
  const regForm = document.getElementById('registration-form');
  if (regForm) regForm.addEventListener('submit', (e) => submitStudentRegistration(e));

  // Practice prep buttons
  const prepDsa = document.getElementById('prep-dsa'); if (prepDsa) prepDsa.addEventListener('click', () => simulateStudentResource('dsa'));
  const prepSystem = document.getElementById('prep-system'); if (prepSystem) prepSystem.addEventListener('click', () => simulateStudentResource('system'));
  const prepHr = document.getElementById('prep-hr'); if (prepHr) prepHr.addEventListener('click', () => simulateStudentResource('hr'));

  // Resume grader
  const gradeBtn = document.getElementById('btn-grade-resume');
  if (gradeBtn) gradeBtn.addEventListener('click', gradeStudentResume);

  // Admin publish announcement
  const adminPub = document.getElementById('admin-publish-announcement-btn');
  if (adminPub) adminPub.addEventListener('click', adminPublishAnnouncement);

  // Admin forms
  const schedForm = document.getElementById('admin-schedule-form');
  if (schedForm) schedForm.addEventListener('submit', (e) => { e.preventDefault(); adminScheduleInterview(); });
  const jobForm = document.getElementById('admin-job-drive-form');
  if (jobForm) jobForm.addEventListener('submit', (e) => { e.preventDefault(); adminPostJobDrive(); });
});
