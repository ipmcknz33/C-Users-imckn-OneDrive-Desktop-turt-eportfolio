const body = document.body;
let contrastToggle = false;
let isModalOpen = false;
let currentPanel = "about";

function showPanel(panelName) {
  const aboutPanel = document.getElementById("about-panel");
  const recruiterPanel = document.getElementById("recruiter-panel");

  if (!aboutPanel || !recruiterPanel) return;

  aboutPanel.classList.remove("modal__panel--active");
  recruiterPanel.classList.remove("modal__panel--active");

  if (panelName === "recruiter") {
    recruiterPanel.classList.add("modal__panel--active");
    currentPanel = "recruiter";
  } else {
    aboutPanel.classList.add("modal__panel--active");
    currentPanel = "about";
  }
}

function openModal(panelName = "about") {
  isModalOpen = true;
  body.classList.add("modal--open");
  showPanel(panelName);
}

function closeModal() {
  isModalOpen = false;
  body.classList.remove("modal--open");
  showPanel("about");

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  if (loading) loading.classList.remove("modal__overlay--visible");
  if (success) success.classList.remove("modal__overlay--visible");
}

function toggleModal() {
  if (isModalOpen) {
    closeModal();
  } else {
    openModal("about");
  }
}

function openRecruiterQuickView() {
  openModal("recruiter");
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  body.classList.toggle("dark-theme", contrastToggle);
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * 0.02;
  const y = event.clientY * 0.02;

  shapes.forEach((shape, i) => {
    const isOdd = i % 2 !== 0;
    const modifier = isOdd ? -1 : 1;
    const xScalar = x * modifier * 0.6;
    const yScalar = y * modifier * 0.6;

    shape.style.transform = `translate(${xScalar}px, ${yScalar}px) rotate(${xScalar * 0.4}deg)`;
  });
}

function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  if (!loading || !success) {
    alert("Please email me directly at i.p.mcknz33@gmail.com");
    return;
  }

  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_njecpim",
      "template_xyczash",
      event.target,
      "0Mtkr8IFmq5-KtZG2",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
      event.target.reset();
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at i.p.mcknz33@gmail.com",
      );
    });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isModalOpen) {
    closeModal();
  }
});

document.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal");
  if (!isModalOpen || !modal) return;

  const clickedInsideModal = modal.contains(event.target);
  const clickedOpenButton = event.target.closest('[onclick*="toggleModal"]');
  const clickedRecruiterButton = event.target.closest(
    '[onclick*="openRecruiterQuickView"]',
  );
  const clickedExitButton = event.target.closest(".modal__exit");

  if (clickedOpenButton || clickedRecruiterButton || clickedExitButton) {
    return;
  }

  if (!clickedInsideModal) {
    closeModal();
  }
});
