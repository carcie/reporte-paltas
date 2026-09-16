window.openLightbox = function(src, caption, subtext) {
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const modalSubtext = document.getElementById('modalSubtext');

if (modal && modalImg && modalCaption && modalSubtext) {
    modalImg.src = src;
    modalCaption.textContent = caption;
    modalSubtext.textContent = subtext;
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}


};

window.closeLightbox = function(e) {
const modal = document.getElementById('lightboxModal');
if (modal) {
modal.classList.add('hidden');
document.body.classList.remove('overflow-hidden');
}
};

// Global keypress handler for accessible modal closure
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape') {
window.closeLightbox(null);
}
});