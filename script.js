//funcion ver hoja de vida
function openCV() {
    window.open('Hoja_de_vida_2.0.pdf', '_blank');
}

// Función para copiar el correo al portapapeles
function copyEmail() {
    const email = document.getElementById("email").value;
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Correo copiado al portapapeles");
        })
        .catch((error) => {
            console.error("Error al copiar el correo:", error);
            alert("No se pudo copiar el correo. Por favor, intenta manualmente.");
        });
}

// Función para abrir el cliente de correo con el email en la dirección
function sendEmail() {
    const email = document.getElementById("email").value;
    window.location.href = `mailto:${email}`;
}
