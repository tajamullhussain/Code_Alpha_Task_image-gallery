
        // Enhanced image data with metadata
        const images = [
            { 
                src: "https://images.pexels.com/photos/9487445/pexels-photo-9487445.jpeg",
                title: "Mountain view", 
                category: "nature",
                date: "April 28, 2022",
                description: ""
            },
            { 
                src: "https://images.pexels.com/photos/747191/pexels-photo-747191.jpeg", 
                title: "Welcome To Pasu", 
                category: "nature",
                date: "November 20, 2022",
                description: ""
            },
            { 
                src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                title: "Chicago llinois City", 
                category: "city",
                date: "2023-04-10",
                description: "Modern city skyline with glass skyscrapers reflecting the sunset."
            },
            {
                src: "https://images.pexels.com/photos/15817294/pexels-photo-15817294.jpeg",
                title: "Faisal Mosque", 
                category: "city",
                date: "October 19, 2023",
                description: "The iconic Faisal Mosque illuminated against the night sky in Islamabad."
            },
            { 
                src: "https://images.pexels.com/photos/28728726/pexels-photo-28728726.jpeg", 
                title: "London City", 
                category: "city",
                date: "2023-07-03",
                description: "Vibrant neon signs illuminating a rainy city street at night."
            },
            { 
                src: "https://images.pexels.com/photos/11059359/pexels-photo-11059359.jpeg", 
                title: "BMW", 
                category: "car",
                date: "2026-01-12",
                description: ""
            },
            { 
                src: "https://images.pexels.com/photos/35641517/pexels-photo-35641517.jpeg", 
                title: "Audi", 
                category: "car",
                date: "2023-08-12",
                description: ""
            },
            { 
                src: "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg", 
                title: "Ocean Sunrise", 
                category: "nature",
                date: "2023-09-05",
                description: ""
            },
            { 
                src: "https://plus.unsplash.com/premium_photo-1661919068698-40e7b78f196a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                title: "Dubai Marina Skyline at Night", 
                category: "city",
                date: "2023-10-20",
                description: ""
            },
            { 
                src: "https://images.pexels.com/photos/30046905/pexels-photo-30046905.jpeg", 
                title: "lexus", 
                category: "car",
                date: "2023-11-14",
                description: ""
            },
            { 
                src: "https://images.pexels.com/photos/27278591/pexels-photo-27278591.jpeg", 
                title: "Mercedes", 
                category: "car",
                date: "2023-11-14",
                description: ""
            },
            { 
                src: "https://images.pexels.com/photos/2227958/pexels-photo-2227958.jpeg", 
                title: "Funny Actor", 
                category: "people",
                date: "2023-12-01",
                description: ""
            },
            { 
                src: "https://images.unsplash.com/photo-1673505413451-196fe5fb12c8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                title: "Mountain Lake Reflection", 
                category: "nature",
                date: "2024-01-10",
                description: "Crystal clear alpine lake perfectly mirroring surrounding mountains."
            },
            { 
                src: "https://plus.unsplash.com/premium_photo-1678040730255-75770e666208?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
                title: "Hijabi Girl Praying Namaz", 
                category: "people",
                date: "2024-02-15",
                description: ""
            },
            {
                src: "https://images.unsplash.com/photo-1659721024884-7a43d901651f?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Poor People",
                category: "people",
                date: "2026-01-12",
                description: "",
            },
            {
                src: "https://images.unsplash.com/photo-1768316784536-46f1609e5ec5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
                title: "Tajamul Hussain",
                category: "people",
                date: "2024-01-16",
                description: "My profile picture.",
            }
        ];

        // DOM Elements
        const gallery = document.getElementById('gallery');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxCategory = document.getElementById('lightbox-category');
        const lightboxDate = document.getElementById('lightbox-date');
        const closeLightbox = document.getElementById('close-lightbox');
        const prevBtn = document.getElementById('prev-lightbox');
        const nextBtn = document.getElementById('next-lightbox');
        const counter = document.getElementById('counter');
        const downloadBtn = document.getElementById('download-btn');
        const shareBtn = document.getElementById('share-btn');
        const infoBtn = document.getElementById('info-btn');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const totalCount = document.getElementById('total-count');
        const categoryCount = document.getElementById('category-count');

        // Current state
        let currentIndex = 0;
        let currentCategory = 'all';
        let lightboxImageInfo = null;

        // Initialize stats
        totalCount.textContent = images.length;
        const categories = [...new Set(images.map(img => img.category))];
        categoryCount.textContent = categories.length;

        // Generate gallery items with placeholders
        function renderGallery(category = 'all') {
            gallery.innerHTML = '';
            
            // Create placeholder items first
            const placeholderCount = category === 'all' ? images.length : images.filter(img => img.category === category).length;
            for (let i = 0; i < placeholderCount; i++) {
                const placeholder = document.createElement('div');
                placeholder.className = 'gallery-item placeholder';
                gallery.appendChild(placeholder);
            }
            
            // Load actual images after a short delay to show loading effect
            setTimeout(() => {
                const filteredImages = category === 'all' 
                    ? images 
                    : images.filter(img => img.category === category);
                
                gallery.innerHTML = '';
                
                filteredImages.forEach((image, index) => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.dataset.index = index;
                    galleryItem.dataset.category = image.category;
                    
                    // Format date
                    const date = new Date(image.date);
                    const formattedDate = date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                    });
                    
                    galleryItem.innerHTML = `
                        <img src="${image.src}?auto=format&fit=crop&w=600&q=80" alt="${image.title}" loading="lazy">
                        <div class="gallery-overlay">
                            <div class="gallery-title">${image.title}</div>
                            <div class="gallery-meta">
                                <div class="gallery-category">${image.category.charAt(0).toUpperCase() + image.category.slice(1)}</div>
                                <div class="gallery-date">${formattedDate}</div>
                            </div>
                        </div>
                    `;
                    
                    galleryItem.addEventListener('click', () => openLightbox(index, category));
                    gallery.appendChild(galleryItem);
                });
            }, 300);
        }

        // Open lightbox
        function openLightbox(index, category = 'all') {
            currentIndex = index;
            currentCategory = category;
            
            const filteredImages = currentCategory === 'all' 
                ? images 
                : images.filter(img => img.category === currentCategory);
            
            const currentImage = filteredImages[currentIndex];
            lightboxImageInfo = currentImage;
            
            // Set image with higher quality
            lightboxImg.src = currentImage.src + '?auto=format&fit=crop&w=1600&q=90';
            lightboxTitle.textContent = currentImage.title;
            lightboxCategory.textContent = currentImage.category.charAt(0).toUpperCase() + currentImage.category.slice(1);
            
            const date = new Date(currentImage.date);
            const formattedDate = date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            lightboxDate.textContent = formattedDate;
            
            counter.textContent = `${currentIndex + 1}/${filteredImages.length}`;
            
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        function closeLightboxHandler() {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Navigate to next image
        function nextImage() {
            const filteredImages = currentCategory === 'all' 
                ? images 
                : images.filter(img => img.category === currentCategory);
            
            currentIndex = (currentIndex + 1) % filteredImages.length;
            openLightbox(currentIndex, currentCategory);
        }

        // Navigate to previous image
        function prevImage() {
            const filteredImages = currentCategory === 'all' 
                ? images 
                : images.filter(img => img.category === currentCategory);
            
            currentIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
            openLightbox(currentIndex, currentCategory);
        }

        // Download image
        function downloadImage() {
            if (!lightboxImageInfo) return;
            
            // In a real app, you would use the actual high-res image URL
            const link = document.createElement('a');
            link.href = lightboxImageInfo.src + '?auto=format&fit=crop&w=2000&q=95';
            link.download = lightboxImageInfo.title.replace(/\s+/g, '-').toLowerCase() + '.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show feedback
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
            }, 2000);
        }

        // Share image
        function shareImage() {
            if (!lightboxImageInfo) return;
            
            const shareData = {
                title: lightboxImageInfo.title,
                text: lightboxImageInfo.description || 'Check out this amazing image!',
                url: window.location.href
            };
            
            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => console.log('Shared successfully'))
                    .catch(() => showShareFallback());
            } else {
                showShareFallback();
            }
        }

        // Fallback for share functionality
        function showShareFallback() {
            alert('Sharing is not supported in your browser. Try copying the URL instead.');
        }

        // Show image details
        function showImageDetails() {
            if (!lightboxImageInfo) return;
            
            alert(`Title: ${lightboxImageInfo.title}\n\nCategory: ${lightboxImageInfo.category}\n\nDate: ${lightboxImageInfo.date}\n\nDescription: ${lightboxImageInfo.description}`);
        }

        // Filter gallery by category
        function filterGallery(category) {
            currentCategory = category;
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === category);
            });
            
            renderGallery(category);
        }

        // Event Listeners
        closeLightbox.addEventListener('click', closeLightboxHandler);
        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);
        downloadBtn.addEventListener('click', downloadImage);
        shareBtn.addEventListener('click', shareImage);
        infoBtn.addEventListener('click', showImageDetails);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            
            if (e.key === 'Escape') closeLightboxHandler();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'd' || e.key === 'D') downloadImage();
        });

        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterGallery(button.dataset.filter);
            });
        });

        // Initialize gallery
        renderGallery();
    