/**
 * ============================================
 * WEB ATELIER (UDIT) - Student Project Template
 * ============================================
 * Main JavaScript: Scrollytelling Functionality
 * ============================================
 * PEDAGOGICAL NOTE: This file implements
 * scrollytelling with Intersection Observer API.
 * Progressive enhancement: site works without JS.
 * ============================================
 */

// ===== INTERSECTION OBSERVER FOR SCROLL-TRIGGERED ANIMATIONS =====
// PEDAGOGICAL NOTE: Modern, performant way to detect when elements
// enter viewport. Better than scroll event listeners.

const observerOptions = {
	threshold: 0.2, // Trigger when 20% of element is visible
	rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters viewport
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Element is visible, add 'visible' class to trigger CSS animations
			entry.target.classList.add('visible');

			// PEDAGOGICAL NOTE: Optional - stop observing after animation
			// Uncomment below if you want one-time animations only
			// observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all sections with data-observe attribute
// PEDAGOGICAL NOTE: data-* attributes are semantic way to mark elements for JS
document.querySelectorAll('[data-observe]').forEach((section) => {
	observer.observe(section);
});

// ===== SCROLL PROGRESS INDICATOR =====
// PEDAGOGICAL NOTE: Shows user how far they've scrolled through the page

function updateScrollProgress() {
	const windowHeight = window.innerHeight;
	const documentHeight = document.documentElement.scrollHeight;
	const scrollTop = window.scrollY;

	// Calculate percentage scrolled
	const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

	// Update progress display
	const progressElement = document.getElementById('progress');
	if (progressElement) {
		progressElement.textContent = Math.round(scrollPercent);
	}
}

// Listen for scroll events (throttled by browser's requestAnimationFrame)
window.addEventListener('scroll', updateScrollProgress);

// Initialize on page load
updateScrollProgress();

// ===== SCROLL TO TOP FUNCTION =====
// PEDAGOGICAL NOTE: Smooth scroll to top for better UX

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

// Make function available globally for onclick in HTML
// PEDAGOGICAL NOTE: In production, prefer addEventListener over onclick
window.scrollToTop = scrollToTop;

// ===== SMOOTH SCROLL BEHAVIOR =====
// PEDAGOGICAL NOTE: CSS scroll-behavior is simpler, but this works in all browsers

document.documentElement.style.scrollBehavior = 'smooth';

// ===== REDUCED MOTION PREFERENCE =====
// PEDAGOGICAL NOTE: Respect user's accessibility preferences
// If user prefers reduced motion, disable scroll animations

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
	// Disable smooth scrolling
	document.documentElement.style.scrollBehavior = 'auto';

	// Optionally: add a class to body to disable CSS animations
	document.body.classList.add('reduce-motion');

	console.log('Reduced motion preference detected - animations disabled');
}

// ===== CONSOLE LOG FOR DEBUGGING =====
// PEDAGOGICAL NOTE: Helpful during development, remove in production

// ===== CARGAR GALERÍA DE PROYECTOS DESDE CSV =====
// Esta función carga las imágenes desde el archivo Proyectos.csv
// y las muestra como tarjetas interactivas

function loadPortfolioGallery() {
	const gallery = document.getElementById('portfolioGallery');
	
	if (!gallery) {
		console.warn('Gallery element not found');
		return;
	}

	// Cargar el archivo CSV
	fetch('./docs/Proyectos.csv')
		.then(response => response.text())
		.then(data => {
			// Parsear el CSV
			const lines = data.trim().split('\n');
			const projects = [];

			// Saltar la línea de encabezado (línea 0)
			// La línea 1 contiene el ejemplo de formato, así que también la saltamos
			for (let i = 2; i < lines.length; i++) {
				const line = lines[i].trim();
				if (line.length === 0) continue; // Saltar líneas vacías

				// Parsear cada línea del CSV
				// Formato: URL, Alt/Description, Title, Category, Text
				const parts = line.split(',').map(part => part.trim());
				
				if (parts.length >= 4) {
					const project = {
						image: parts[0],
						alt: parts[1],
						title: parts[2],
						category: parts[3],
						text: parts[4] || ''
					};
					projects.push(project);
				}
			}

			// Limpiar el contenedor
			gallery.innerHTML = '';

			// Crear tarjetas para cada proyecto
			projects.forEach((project, index) => {
				const card = document.createElement('div');
				card.className = 'portfolio-card';
				card.setAttribute('data-category', project.category);
				card.setAttribute('data-observe', '');
				
				card.innerHTML = `
					<div class="portfolio-card-image">
						<img src="${project.image}" alt="${project.alt}" loading="lazy" />
						<div class="portfolio-card-overlay">
							<span class="portfolio-card-category">${project.category}</span>
						</div>
					</div>
					<div class="portfolio-card-content">
						<h4>${project.title}</h4>
						<p>${project.alt}</p>
						${project.text ? `<span class="portfolio-card-text">${project.text}</span>` : ''}
					</div>
				`;

				gallery.appendChild(card);

				// Observar la nueva tarjeta
				observer.observe(card);
			});

			console.log(`Portfolio gallery loaded with ${projects.length} projects`);
		})
		.catch(error => {
			console.error('Error loading portfolio gallery:', error);
			gallery.innerHTML = '<div class="error-message">Error al cargar la galería de proyectos</div>';
		});
}

// Cargar la galería cuando el DOM esté listo
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', loadPortfolioGallery);
} else {
	loadPortfolioGallery();
}
console.log('✅ Scrollytelling initialized');
console.log(`📊 Observing ${document.querySelectorAll('[data-observe]').length} sections`);
