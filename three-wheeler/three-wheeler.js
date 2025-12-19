// Product data
const products = {
    garbage: {
        name: "Garbage Collector Rickshaw",
        category: "E-Cart Garbage",
        image: "../Images/product garbage rick.jpg",
        description: "The E-Cart garbage is perfect for municipal Garbage Collections for door to door. With high load capacity and efficient electric drivetrain, it's ideal for last-mile garbage collections & our vehicle can easily operate at narrow roads and help municipal employee for smooth garbage collections.",
        specs: {
            "Type of E-Cart": "Fully Electric, Battery-Operated Motor Driven for Garbage Bins",
            "Colour of E-Cart": "Blue & Green",
            "Steel Quality": "MS with CED / Powder coating / liquid paint As OEM Requirements",
            "Body Frame": "Galvanized Iron with hard plastic top cover",
            "Top Speed": "<25 km",
            "Motor Power": "<2000w",
            "Range per Charge": "70-150 KMPC (as per battery capacity)",
            "Number of Bins": "2",
            "Bin Capacity": "230 litres",
            "Chassis Type": "Ladder",
            "Battery Type": "Lead Acid / Lithium (as per OEM requirement)",
            "Vehicle Dimensions": "Length 2.75mtr, Width 1mtr, Height 1.7mtr",
            "Suspension Type": "Front- Telescopic, Rear- Leaf Spring",
            "Hydraulic Power Pack": "Manual Hydraulic/ Automatic Jack/ Tipper",
            "Kerb Weight": "250 kilogram",
            "Garbage Carrying Capacity": "450 kilogram",
            "Charging Time": "4-8 hours"
        },
        colors: ["#0066CC", "#00CC66"],
        warranty: "As per OEM requirements",
        // price: "Contact for Price"
    },
    golfcart: {
        name: "Golf Cart",
        category: "Fully Electric, Battery-Operated Golf cart",
        image: "../Images/product golf cart.jpg",
        description: "We are an Importer / Contract manufacturer of golf cart / sight seeing vehicle & its spare parts as customer requirement. Golf carts move Luggage and people within an enclosed area (not on road) like Airport, hospital, college, golf course, clubs, parks, real estate, heritage sites, zoos, factory's, farmhouse, government institution. It can design 2 seat buggy -16 seat capacity as customer customized requirements.",
        specs: {
            "Type of Vehicle": "Fully Electric, Battery-Operated Golf cart",
            "Steel Quality": "MS with Powder coating",
            "Body Frame": "Galvanized Iron with hard plastic top cover",
            "Top Speed": "<25 km",
            "Motor Power": "<4000w",
            "Range per Charge": "60-80 KMPC (as per battery OEM requirements)",
            "Passenger Capacity": "2-seater to 16-seater",
            "Customization": "As per customer requirements",
            "Battery Type": "Lead Acid / Lithium (as per OEM requirements)",
            "Charging Time": "4-8 hours",
            "Load Capacity": "500 kilogram - 800 kilogram"
        },
        colors: ["#FFFFFF", "#000000", "#1A237E", "#B71C1C"],
        warranty: "As per OEM requirements",
        // price: "Contact for Price"
    },
    passengerrickshaw: {
        name: "Electric Passenger Rickshaw",
        category: "Fully Electric, Battery-Operated Motor Driven for Passengers",
        image: "../Images/product passanger rick.jpg",
        description: "We are a contract manufacturer. Our E-Rickshaw is designed & assembled as per OEM specification for commercial passenger transport with zero emissions. Built for durability and efficiency, it offers comfortable seating for 6 passengers and reliable performance for daily operations as last mile connectivity.",
        specs: {
            "Type of Electric rickshaw": "Fully Electric, Battery-Operated Motor Driven for Passengers",
            "Steel Quality": "MS with Powder coating / Liquid paint (as customer requirements)",
            "Body Frame": "Galvanized Iron with hard plastic top cover",
            "Top Speed": "<25 km",
            "Motor Power": "<2000w (1000w, 1200w, 1500w, 1800w options available)",
            "Range per Charge": "70-150 KMPC (as per battery capacity)",
            "Passenger Capacity": "D + 6-Seater",
            "Battery Type": "Lead Acid / Lithium (as per OEM requirements)",
            "Charging Time": "4-8 hours",
            "Suspension Type": "Front- Telescopic, Rear- Leaf Spring",
            "Load Capacity": "400 kilogram",
            "Kerb Weight": "320 kilogram"
        },
        colors: ["#0066CC", "#FFFFFF", "#000000", "#B71C1C"],
        warranty: "As per OEM requirements",
        // price: "Contact for Price"
    }
};

// Modal functions
function openModal(productId) {
    const product = products[productId];
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-header">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-body">
            <h2 class="modal-title">${product.name}</h2>
            <p class="modal-category">${product.category}</p>
            <p class="modal-description">${product.description}</p>
            
            <h4>Technical Specifications</h4>
            <div class="specs-grid">
                ${Object.entries(product.specs).map(([key, value]) => `
                    <div class="spec-item">
                        <div class="spec-label">${key}</div>
                        <div class="spec-value">${value}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="warranty-info">
                <h4>Warranty Information</h4>
                <p>${product.warranty}</p>
            </div>
            
            
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});