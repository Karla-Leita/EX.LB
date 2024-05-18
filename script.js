// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Elementos del DOM
const loginForm = document.getElementById('login-form');
const examForm = document.getElementById('exam-form');
const resultDiv = document.getElementById('result');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Iniciar sesión
loginBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            loginForm.style.display = 'none';
            examForm.style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});

// Registrarse
signupBtn.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            loginForm.style.display = 'none';
            examForm.style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});

// Enviar respuestas del examen
examForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const q1 = document.querySelector('input[name="q1"]:checked').value;

    db.collection('exams').add({
        uid: user.uid,
        q1: q1,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        alert('Respuestas enviadas');
    }).catch(error => {
        console.error('Error al enviar respuestas: ', error);
    });
});
