// WEB ATELIER (UDIT) - Student Project Template JavaScript
// Add your interactive functionality here

document.addEventListener('DOMContentLoaded', function () {
	// Initialize your project functionality
	console.log('WEB ATELIER (UDIT) - Student project initialized');

	// Example: Add smooth scrolling for anchor links
	const links = document.querySelectorAll('a[href^="#"]');
	links.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
				});
			}
		});
	});

	// Example: Add skip link functionality
	const skipLink = document.querySelector('.skip-link');
	if (skipLink) {
		skipLink.addEventListener('click', function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute('href'));
			if (target) {
				target.focus();
				target.scrollIntoView({ behavior: 'smooth' });
			}
		});
	}

	// Load portfolio gallery from CSV
	loadPortfolioGallery();
});

// Add your custom functions here
// Example: Function to update page metadata
function updatePageMetadata(title, description) {
	document.title = title;

	let metaDescription = document.querySelector('meta[name="description"]');
	if (metaDescription) {
		metaDescription.setAttribute('content', description);
	} else {
		metaDescription = document.createElement('meta');
		metaDescription.setAttribute('name', 'description');
		metaDescription.setAttribute('content', description);
		document.head.appendChild(metaDescription);
	}
}

// Load portfolio gallery from CSV file
function loadPortfolioGallery() {
	const galleryContainer = document.getElementById('portfolioGallery');
	
	if (!galleryContainer) return;

	fetch('./docs/Proyectos.csv')
		.then(response => {
			if (!response.ok) {
				throw new Error('Error loading CSV file');
			}
			return response.text();
		})
		.then(csvData => {
			const projects = parseCSV(csvData);
			renderGallery(projects, galleryContainer);
		})
		.catch(error => {
			console.error('Error loading portfolio gallery:', error);
			galleryContainer.innerHTML = '<p>Error cargando la galería. Intenta recargar la página.</p>';
		});
}

// Parse CSV data
function parseCSV(csvData) {
	const lines = csvData.trim().split('\n');
	const projects = [];

	// Skip the first line (header) and empty lines
	for (let i = 1; i < lines.length; i++) {
		const line = lines[i].trim();
		if (!line) continue;

		// Simple CSV parsing - split by comma and trim whitespace
		const parts = line.split(',').map(part => part.trim());
		
		if (parts.length >= 5) {
			projects.push({
				imageUrl: parts[0],
				alt: parts[1],
				title: parts[2],
				category: parts[3],
				description: parts[4]
			});
		}
	}

	return projects;
}

// Render gallery with project cards
function renderGallery(projects, container) {
	if (projects.length === 0) {
		container.innerHTML = '<p>No hay proyectos disponibles.</p>';
		return;
	}

	container.innerHTML = projects.map(project => `
		<div class="portfolio-card">
			<div class="portfolio-card-image">
				<img 
					src="${project.imageUrl}" 
					alt="${project.alt}"
					loading="lazy"
				/>
				<div class="portfolio-card-overlay">
					<span class="portfolio-card-category">${project.category}</span>
				</div>
			</div>
			<div class="portfolio-card-content">
				<h4>${project.title}</h4>
				<p>${project.description}</p>
			</div>
		</div>
	`).join('');
}
