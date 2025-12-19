// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    // Add animation delay variables to menu items
    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Product Modal Functions
function openModal(productType) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    const products = {
        grace: {
            name: 'Grace',
            image: '../Images/grace_home-removebg-preview.png',
            specs: {
                'MAX SPEED': '< 25 KMPH',
                'MOTOR MAX POWER': '< 250W',
                'UNLADEN WEIGHT (WITHOUT BATTERY)': '< 60KG',
                'BRAKE': 'Front disc, Rear drum',
                'Display': 'LED'
            }
        },
        power: {
            name: 'Power',
            image: '../Images/power_home-removebg-preview.png',
            specs: {
                'MAX SPEED': '< 25 KMPH',
                'MOTOR MAX POWER': '< 250W',
                'UNLADEN WEIGHT (WITHOUT BATTERY)': '< 60KG',
                'BRAKE': 'Front disc, Rear drum',
                'Display': 'LED'
            }
        },
        prince: {
            name: 'Prince',
            image: '../Images/Model_Prince_Blue-removebg-preview (1).png',
            specs: {
                'MAX SPEED': '< 25 KMPH',
                'MOTOR MAX POWER': '< 250W',
                'UNLADEN WEIGHT (WITHOUT BATTERY)': '< 60KG',
                'BRAKE': 'Front disc, Rear drum',
                'Display': 'LED'
            }
        },
        winner: {
            name: 'Winner',
            image: '../Images/winner_home-removebg-preview.png',
            specs: {
                'MAX SPEED': '< 25 KMPH',
                'MOTOR MAX POWER': '< 250W',
                'UNLADEN WEIGHT (WITHOUT BATTERY)': '< 60KG',
                'BRAKE': 'Front disc, Rear drum',
                'Display': 'LED'
            }
        }
    };
    
    const product = products[productType];
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-body">
            <h2 class="modal-title">MODEL - ${product.name.toUpperCase()}</h2>
            <h4>Description</h4>
            <div class="specs-grid">
                ${Object.entries(product.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <div class="spec-label">${key}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}