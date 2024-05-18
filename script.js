// Configuración de usuario de muestra
const sampleUser = {
    email: "admin",
    password: "1234"
};

// Elementos del DOM
const loginForm = document.getElementById('login-form');
const examForm = document.getElementById('exam-form');
const resultDiv = document.getElementById('result');
const loginBtn = document.getElementById('login-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Iniciar sesión
loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === sampleUser.email && password === sampleUser.password) {
        loginForm.style.display = 'none';
        examForm.style.display = 'block';
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
});

// Enviar respuestas del examen
examForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulamos el envío de respuestas (aquí podrías guardar las respuestas en una base de datos)
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;

    if (q1 && q2 && q3 && q4 && q5) {
        alert('Respuestas enviadas');
    } else {
        alert('Por favor, responde todas las preguntas');
    }
});
