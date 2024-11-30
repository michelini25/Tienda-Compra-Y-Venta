document.addEventListener("DOMContentLoaded", function() {
    const signupform = document.querySelector("#signupform");
    signupform.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
    
        // Validación de campos vacíos
        if (!name || !email || !password) {
            return alert("Todos los campos son obligatorios.");
        }
    
        // Obtener los usuarios almacenados en localStorage o crear un array vacío si no existe
        const Users = JSON.parse(localStorage.getItem("users")) || [];
    
        // Comprobar si el usuario ya está registrado
        const isUserRegistered = Users.find(user => user.email === email);
        if (isUserRegistered) {
            return alert("Usuario ya registrado");
        }
    
        // Agregar el nuevo usuario a la lista de usuarios
        Users.push({ name: name, email: email, password: password });
    
        // Guardar la lista actualizada en localStorage
        localStorage.setItem("users", JSON.stringify(Users));
    
        // Mostrar un mensaje de éxito
        alert("Registro exitoso");
    
        // Redirigir a la página de login
        window.location.href = 'loginV.html';
    });
});