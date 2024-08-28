const divClick = document.getElementById("divClick");
divClick.addEventListener('click', function() {
    alert("Hola! Soy el div");
});

const button = document.querySelector("#divClick button");
button.addEventListener('click', function(event) {
    event.stopPropagation(); 
    alert('Hola! Soy el botón');
});