
document.addEventListener('DOMContentLoaded', function() {
    
    
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Cambiar Tema';
    
    // Estilos para el botón de cambio de tema
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '10px';
    themeToggle.style.right = '10px';
    themeToggle.style.padding = '10px';
    themeToggle.style.backgroundColor = '#333';
    themeToggle.style.color = '#fff';
    themeToggle.style.border = 'none';
    themeToggle.style.borderRadius = '5px';
    
    
    document.body.appendChild(themeToggle);

    /
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});


const darkThemeStyles = `
.dark-theme {
    background-color: #333;
    color: #fff;
}
.dark-theme .container {
    background-color: #444;
    color: #fff;
}
.dark-theme header, .dark-theme h2 {
    border-color: #fff;
}
`;


const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkThemeStyles;


document.head.appendChild(styleSheet);
