document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animations for elements with class 'fade-in'
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
function validateForm() {
    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    let valid = true;

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // Validate name
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        valid = false;
    }

    // Validate email (basic format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    // Validate message
    if (message.trim() === "") {
        messageError.textContent = "Message is required.";
        valid = false;
    }

    // Return valid or invalid
    return valid;
}
function validateForm() {
    // Get the values from the form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Get the error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Initialize validation flag
    let isValid = true;

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate name
    if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email (using a basic regex for email validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email.';
        isValid = false;
    }

    // Validate message
    if (message === '') {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }

    // Prevent form submission if validation fails
    return isValid;
}
function openNavbar() {
    document.querySelector('.navbar-container').classList.toggle('open-navbar-container');
}
function filterSelection(category) {
    let items = document.getElementsByClassName('project-item');
    
    // Show all items if "all" is selected
    if (category === 'all') {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('show'); // Add 'show' to all items
        }
    } else {
        // Loop through all portfolio items and filter based on category
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('show'); // Hide all items initially
            if (items[i].classList.contains(category)) {
                items[i].classList.add('show'); // Show the items that match the selected category
            }
        }
    }
}

// Show all items by default when the page loads
window.onload = function() {
    filterSelection('all');
};
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggleButton.textContent = 'Switch to Light Mode';
    }

    // Toggle between dark and light theme
    themeToggleButton.addEventListener('click', function () {
        body.classList.toggle('dark-theme');

        // Update button text
        if (body.classList.contains('dark-theme')) {
            themeToggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            themeToggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light'); // Save preference
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('content-container');

    // Function to load new content with transition
    function loadContent(newContent) {
        // Add fade-out effect
        contentContainer.classList.add('fade-out');

        // Wait for the fade-out to complete
        setTimeout(() => {
            contentContainer.innerHTML = newContent;
            // Add fade-in effect
            contentContainer.classList.remove('fade-out');
            contentContainer.classList.add('fade-in');
        }, 500); // Delay for fade-out transition to complete
    }

    // Example of dynamically loading new content
    document.querySelector('.btn-hero').addEventListener('click', function (e) {
        e.preventDefault();
        const newPortfolioContent = `
            <section id="portfolio" class="portfolio-section fade-in">
                <div class="portfolio-container">
                    <h1>My Projects</h1>
                    <div class="project-item">
                        <h2>CropsSense</h2>
                        <p>Developed and launched CropSense...</p>
                    </div>
                    <!-- More projects here -->
                </div>
            </section>`;
        loadContent(newPortfolioContent);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'fade-in' or 'slide-in' class when element is in view
                entry.target.classList.add('fade-in'); // or 'slide-in' for specific elements
                observer.unobserve(entry.target); // Stop observing after the element is revealed
            }
        });
    }, observerOptions);

    hiddenElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});

