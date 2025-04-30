document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const toggleLogin = document.getElementById('toggleLogin');
    const createAccountBtn = document.querySelector('.primary-btn');
    
    // Manejo de botones
    loginBtn.addEventListener('click', () => {
        window.location.href = '#login';
        alert('Función de login activada');
    });
    
    document.querySelector('.ghost-btn').addEventListener('click', () => {
        alert('Conectar con Google');
    });
    
    createAccountBtn.addEventListener('click', () => {
        window.location.href = '#register';
        alert('Crear nueva cuenta');
    });
    
    // Texto interactivo inferior
    let isLogin = true;
    toggleLogin.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = !isLogin;
        toggleLogin.textContent = isLogin ? 'Inicia sesión' : 'Regístrate aquí';
        document.querySelector('.footer-text').innerHTML = isLogin 
            ? '¿Ya tienes cuenta? <a href="#" id="toggleLogin">Inicia sesión</a>' 
            : '¿Nuevo en Tasatop? <a href="#" id="toggleLogin">Regístrate aquí</a>';
    });
});