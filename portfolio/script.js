// Scroll animation for sections
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            section.classList.add('visible');

            // Animate skill bars when skills section is visible
            if(section.id === 'skills'){
                const skillProgress = document.querySelectorAll('.skill-progress');
                skillProgress.forEach(skill => {
                    skill.style.width = skill.getAttribute('data-progress');
                });
            }
        }
    });
});

// Typing animation in hero section
const typingText = ["Full-Stack Developer", "Web Enthusiast", "Tech Explorer"];
let i = 0, j = 0;
const typingElement = document.querySelector('.typing');

function type() {
    if(i < typingText.length){
        if(j < typingText[i].length){
            typingElement.textContent += typingText[i][j];
            j++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => erase(), 1500);
        }
    } else i = 0;
}

function erase() {
    if(j > 0){
        typingElement.textContent = typingText[i].substring(0,j-1);
        j--;
        setTimeout(erase, 100);
    } else {
        i++;
        if(i >= typingText.length) i = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Simple contact form alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});
