// Script to update all Get Quote buttons in 2W spare parts
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.inquiry-btn');
    buttons.forEach(button => {
        if (button.textContent.trim() === 'Get Quote') {
            const link = document.createElement('a');
            link.href = 'https://wa.me/919330088585?text=Hi, I\'m interested in getting a quote for this product. Can you please provide me with pricing and availability details?';
            link.target = '_blank';
            link.className = 'inquiry-btn';
            link.innerHTML = 'Get Quote <i class="fab fa-whatsapp"></i>';
            button.parentNode.replaceChild(link, button);
        }
    });
});