document.addEventListener('DOMContentLoaded', () => {
    // Botón básico para cambiar el fondo a un color vivo
    const btnTema = document.getElementById('btnTema');
    if (btnTema) {
        btnTema.addEventListener('click', () => {
            document.body.style.background = '#004085';
        });
    }
});
