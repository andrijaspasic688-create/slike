// Glatko skrolovanje za linkove u navigaciji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Poruka nakon slanja forme
const form = document.getElementById('contact-form');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Hvala vam! Vaš upit je uspešno poslat.');
        form.reset();
    });
}