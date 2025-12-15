const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("imgModalImg");
const modalCap = document.getElementById("imgModalCap");

function openModal(src, title) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    modalImg.src = src;
    modalImg.alt = title || "Artwork";
    modalCap.textContent = title || "";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
    document.body.style.overflow = "";
}

document.querySelectorAll(".work-open").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.currentTarget.closest(".work-card");
    openModal(card.dataset.full, card.dataset.title);
  });
});


modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

