document.getElementById('check_menu').addEventListener('change', function() {
    var subNav = document.getElementById('sub_nav_var');
    var header = document.getElementById('header');

    if (this.checked) {
        subNav.style.display = 'block';
        setTimeout(function() {
            header.style.backgroundColor = '#121213';
            subNav.style.opacity = '1';

            // Aplica la transformación a cada enlace individualmente
            menuLinks.forEach(function(link) {
                link.style.transform = 'translateY(0)';
            });
        }, 300); // Pequeño retraso para la transición de opacidad y transformación
    } else {
        header.style.backgroundColor = '#00000000';
        subNav.style.opacity = '0';

        menuLinks.forEach(function(link) {
            link.style.transform = 'translateY(-20px)';
        });

        setTimeout(function() {
            subNav.style.display = 'none';
        }, 300); // Tiempo que coincide con la duración de la transición de opacidad y movimiento
    }
});



// Función para desmarcar el checkbox al hacer clic fuera del menú o en una opción del menú
document.addEventListener('click', function(event) {
    var checkbox = document.getElementById('check_menu');
    var subNav = document.getElementById('sub_nav_var');
    var hamburger = document.querySelector('.hamburger');

    // Verificar si el clic fue fuera del checkbox o el menú
    if (checkbox.checked && !subNav.contains(event.target) && !hamburger.contains(event.target)) {
        checkbox.checked = false;
        header.style.backgroundColor = '#00000000';
        subNav.style.opacity = '0';
        menuLinks.forEach(function(link) {
            link.style.transform = 'translateY(-20px)';
        });
        setTimeout(function() {
            subNav.style.display = 'none';
        }, 300);
    }
});

// Función para desmarcar el checkbox al hacer clic en cualquier opción del menú
var menuLinks = document.querySelectorAll('#sub_menu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var checkbox = document.getElementById('check_menu');
        var subNav = document.getElementById('sub_nav_var');

        checkbox.checked = false;
        header.style.backgroundColor = '#00000000';
        subNav.style.opacity = '0';
        menuLinks.forEach(function(link) {
            link.style.transform = 'translateY(-20px)';
        });
        setTimeout(function() {
            subNav.style.display = 'none';
        }, 300);
    });
});

let animado = document.querySelectorAll(".animado");
let animado_2 = document.querySelectorAll(".animado_2");
let animado_tit = document.querySelectorAll(".animado_tit");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = window.innerHeight;

    for (var i = 0; i < animado.length; i++) {
        // Obtiene la altura del elemento respecto al body
        let alturaAnimado = animado[i].getBoundingClientRect().top + window.scrollY;
        // Si el scroll ha llegado al elemento (incluyendo el ajuste con la altura de la ventana)
        if (scrollTop + windowHeight > alturaAnimado + 100) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("view_arriba");
        }
        
    }
    for (var i = 0; i < animado_2.length; i++) {
        // Obtiene la altura del elemento respecto al body
        let alturaAnimado2 = animado_2[i].getBoundingClientRect().top + window.scrollY;
        // Si el scroll ha llegado al elemento (incluyendo el ajuste con la altura de la ventana)
        if (scrollTop + windowHeight > alturaAnimado2 + 100) {
            animado_2[i].style.opacity = 1;
            animado_2[i].classList.add("view_lado");
        }
    }
    for (var i = 0; i < animado_tit.length; i++) {
        // Obtiene la altura del elemento respecto al body
        let alturaAnimado_tit = animado_tit[i].getBoundingClientRect().top + window.scrollY;
        // Si el scroll ha llegado al elemento (incluyendo el ajuste con la altura de la ventana)
        if (scrollTop + windowHeight > alturaAnimado_tit + 100) {
            animado_tit[i].style.opacity = 1;
            animado_tit[i].classList.add("view_tit");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

