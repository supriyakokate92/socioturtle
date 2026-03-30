let currentStep = 0;
const roleData = {
  student: {
    eyebrow: "For Students",
    title: "Turn learning into visible proof of capability",
    summary: "Build a portfolio that goes beyond marksheets with projects, verified skills, and a clearer path to opportunity.",
    highlights: [
      "Create a credible project portfolio",
      "Earn verified proof of skills and progress",
      "Discover peers, mentors, and career direction"
    ],
    outcome: "Move from learning to employability with a profile that shows what you can actually do."
  },
  educator: {
    eyebrow: "For Educators",
    title: "Extend your impact beyond the classroom",
    summary: "Mentor learners in a more outcome-driven way by validating real work, tracking growth, and making your guidance visible.",
    highlights: [
      "Review portfolios instead of isolated scores",
      "Verify student skills with context and credibility",
      "Showcase mentorship impact across a wider community"
    ],
    outcome: "Become the bridge between learning, confidence, and career readiness."
  },
  employer: {
    eyebrow: "For Employers",
    title: "Hire from evidence, not just resumes",
    summary: "Discover emerging talent through demonstrated skills, educator validation, and project-based proof of potential.",
    highlights: [
      "Find candidates with visible, verified capabilities",
      "Reduce screening effort with stronger signal upfront",
      "Build an early pipeline through community engagement"
    ],
    outcome: "Reach talent earlier and make hiring decisions with more confidence."
  }
};

// default
window.onload = () => {
  const firstBtn = document.querySelector(".role-btn");
  switchRole("student", firstBtn);
  if (isMobile()) {
  document.querySelector('.qr-btn i').className = 'fas fa-download text-white text-xl';
}
};

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("menu-toggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      document.getElementById("mobile-menu").classList.toggle("hidden");
    });
  }
});

function showPage(pageId) {
  console.log("Navigating to:", pageId);

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active-page");
  }

  document.getElementById("mobile-menu").classList.add("hidden");

  window.scrollTo(0, 0);
}

function goToEcosystem() {
  showPage("home");

  requestAnimationFrame(() => {
    const ecosystemSection = document.getElementById("ecosystem");

    if (ecosystemSection) {
      ecosystemSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function handleQRClick() {
  const appLink = "https://drive.google.com/file/d/1mgdjWcMFJZ6lZL--J8pxYVlhmP9PdM-P/view";

  if (isMobile()) {
    // Direct open on mobile
    window.location.href = appLink;
  } else {
    // Show QR on desktop
    toggleQR();
  }
}

function toggleQR() {
  document.getElementById("qrPopup").classList.toggle("hidden");
}

function switchRole(role, el = null) {
  const container = document.getElementById("roleContent");
  const data = roleData[role];
  container.className = `role-card role-card-${role}`;

  container.innerHTML = `
    <div class="role-card-inner">
      <p class="role-eyebrow">${data.eyebrow}</p>
      <h3 class="role-title">${data.title}</h3>
      <p class="role-summary">${data.summary}</p>
      <div class="role-divider"></div>
      <ul class="role-highlights">
        ${data.highlights.map(item => `
          <li class="role-highlight-item">
            <span class="role-highlight-icon"><i class="fas fa-check"></i></span>
            <span>${item}</span>
          </li>
        `).join("")}
      </ul>
      <p class="role-outcome">${data.outcome}</p>
    </div>
  `;

  document.querySelectorAll(".role-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (el) {
    el.classList.add("active");
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-in, .stagger").forEach(el => {
  observer.observe(el);
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 50;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 30);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

const observerFlow = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => observerFlow.observe(el));

// flow start
const wrapper = document.querySelector(".eco-wrapper");
const nodes = document.querySelectorAll(".eco-node");
const lines = document.querySelectorAll(".line");

// default open (student)
let activeNode = document.querySelector('[data-role="student"]');
activeNode.classList.add("expanded");
wrapper.classList.add("student-active");

nodes.forEach(node => {
  const role = node.dataset.role;

  node.addEventListener("click", e => {
    e.stopPropagation();
    delete wrapper.dataset.activeConnection;

    nodes.forEach(n => n.classList.remove("expanded"));
    wrapper.classList.remove("student-active", "educator-active", "employer-active");

    node.classList.add("expanded");
    wrapper.classList.add(`${role}-active`);

    activeNode = node;
  });

  node.addEventListener("mouseenter", () => {
    delete wrapper.dataset.activeConnection;
    wrapper.classList.add(`${role}-active`);
  });

  node.addEventListener("mouseleave", () => {
    wrapper.classList.remove(`${role}-active`);
    wrapper.classList.add(`${activeNode.dataset.role}-active`);
  });
});

lines.forEach(line => {
  const connection = line.dataset.connection;

  line.addEventListener("mouseenter", () => {
    wrapper.dataset.activeConnection = connection;
  });

  line.addEventListener("mouseleave", () => {
    delete wrapper.dataset.activeConnection;
  });
});

document.addEventListener("click", () => {
  nodes.forEach(n => n.classList.remove("expanded"));
  wrapper.classList.remove("student-active", "educator-active", "employer-active");
  delete wrapper.dataset.activeConnection;

  activeNode.classList.add("expanded");
  wrapper.classList.add(`${activeNode.dataset.role}-active`);
});
// flow end
