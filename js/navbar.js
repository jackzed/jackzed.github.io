function setupModals() {
    // Modal HTML structure
    const modalsHTML = `
    <div class="modal" id="contactModal">
        <div class="modal-content">
            <button class="close-btn" id="closeContactModal">Close</button>
            <iframe class="airtable-embed" src="https://airtable.com/embed/apps9gdCE3JCSYnX0/paga9xw6oFqu83qOg/form" frameborder="0" onmousewheel="" width="100%" height="670" style="background: transparent; border: 1px solid #ccc;"></iframe>
        </div>
    </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalsHTML);
    
    window.openModal = function() {
        document.getElementById('contactModal').style.display = 'flex';
    };
    
    window.closeModal = function() {
        document.getElementById('contactModal').style.display = 'none';
    };
    
    document.getElementById('closeContactModal')?.addEventListener('click', closeModal);
    
    document.addEventListener('click', (event) => {
        if (event.target === document.getElementById('contactModal')) {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
    <header>
        <div class="header-content">
            <a href="/" class="logo">
                <img src="https://jzap.co.nz/images/JZAP_cj_noWriting.png" alt="JZAP Logo" class="logo-img">
            </a>
            <nav class="main-nav">
                <a href="/demo" class="nav-link demo-link">Demo</a>
                <span class="nav-divider">|</span>
                <div class="contact-number">
                    <a href="tel:0220805712">Jack: 022 080 5712</a>
                </div>
            </nav>
            <button class="contact-btn" id="navbar-contact-btn">Get in touch</button>
            <a href="tel:0220805712" class="phone-icon">📞</a>
        </div>
    </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Set up modals
    setupModals();
    
    // Add contact button event
    document.getElementById('navbar-contact-btn')?.addEventListener('click', openModal);
    
    // Remove mobile toggle functionality since we're handling it via CSS
});