// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Crear un botón para cambiar el tema de la página
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
    
    // Agregar el botón al cuerpo del documento
    document.body.appendChild(themeToggle);

    // Agregar un evento de clic al botón para alternar el tema oscuro
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

// CSS adicional para el tema oscuro
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

// Crear un elemento <style> para agregar los estilos del tema oscuro
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkThemeStyles;

// Agregar los estilos del tema oscuro al documento
document.head.appendChild(styleSheet);
