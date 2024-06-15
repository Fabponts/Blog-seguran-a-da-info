document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Escuro';
    } else {
        this.textContent = 'Modo Claro';
    }
});

function toggleLightMode() {
    document.body.classList.toggle('light-mode');
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    this.textContent = document.body.classList.contains('light-mode') ? 'Modo Escuro' : 'Modo Claro';

    const icons = document.querySelectorAll('.img-fluid');
    icons.forEach(icon => {
        if (document.body.classList.contains('light-mode')) {
            icon.classList.add('icon-light-mode');
            icon.classList.remove('icon-dark-mode');
        } else {
            icon.classList.add('icon-dark-mode');
            icon.classList.remove('icon-light-mode');
        }
    });
});

const initialIcons = document.querySelectorAll('.img-fluid');
initialIcons.forEach(icon => {
    icon.classList.add('icon-light-mode');
});