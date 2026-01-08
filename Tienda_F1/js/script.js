const modal = document.getElementById("modal-carro");
const btnCerrar = document.querySelector(".close-btn");
const botones = document.querySelectorAll("button[data-titulo]"); // Selecciona solo botones con datos

// Elementos DENTRO del modal que vamos a cambiar
const modalTitulo = document.getElementById("modal-titulo");
const modalDesc = document.getElementById("modal-descripcion");
const modalImg = document.getElementById("modal-img");

botones.forEach(boton => {
    boton.onclick = function() {
        // 1. Leemos la "telemetría" del botón presionado
        const titulo = this.getAttribute("data-titulo");
        const descripcion = this.getAttribute("data-desc");
        const imagen = this.getAttribute("data-img");

        // 2. Inyectamos los datos en el modal
        modalTitulo.innerText = titulo;
        modalDesc.innerText = descripcion;
        modalImg.src = imagen;

        // 3. Mostramos el modal
        modal.style.display = "block";
    }
});

// El código para cerrar se queda igual...
btnCerrar.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Sensor de carga completa
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    
    // Le damos un pequeño retraso de 1 segundo para que se aprecie el efecto
    setTimeout(() => {
        loader.style.opacity = "0";
        // Lo quitamos del camino para que podamos hacer clic en los carros
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 1000);
});

const formulario = document.getElementById("f1-form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const modelo = document.getElementById("modelo").value;

    // Validación simple
    if (nombre === "" || email === "" || modelo === "") {
        alert("⚠️ ¡Frenos a fondo! Por favor llena todos los campos obligatorios.");
    } else {
        alert(`🏁 ¡Excelente salida, ${nombre}! Tu pedido para ${modelo} ha sido registrado. Te contactaremos pronto a ${email}.`);
        formulario.reset(); // Limpia el formulario
    }
});