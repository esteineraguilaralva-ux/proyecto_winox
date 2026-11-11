// Script ultra-directo para cambiar el color de fondo
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnTema');
    if (btn) {
        let colors = ['#0f4c81', '#1b4332', '#3c096c', '#212529'];
        let i = 0;
        btn.onclick = function(e) {
            e.preventDefault();
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = colors[i];
            i = (i + 1) % colors.length;
        };
    }
});