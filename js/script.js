// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// close mobile nav after clicking a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", false);
  });
});

// ===== Workout plan filtering =====
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".plan-card");
const emptyState = document.getElementById("emptyState");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // update active tab
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !matches);
      if (matches) visibleCount++;
    });

    emptyState.hidden = visibleCount !== 0;
  });
});
