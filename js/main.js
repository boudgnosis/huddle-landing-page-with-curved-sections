/* MENU HEADER */
window.addEventListener('scroll', function(){
	let header = document.querySelector('.logo__and-btn')

	header.classList.toggle('baja', window.scrollY>0)
})

/* Scroll Reveal - library */
window.sr = ScrollReveal()

sr.reveal('.container__sections-cards', {
	delay: 500,
	origin: 'bottom',
	distance: '-100px'
});
