function showBrand(brand) {
    var brands = document.getElementsByClassName('brand-content');
    for (var i = 0; i < brands.length; i++) {
        brands[i].style.display = 'none';
    }
    document.getElementById(brand).style.display = 'block';
}

function showType(type) {
    var types = document.getElementsByClassName('type-content');
    for (var i = 0; i < types.length; i++) {
        types[i].style.display = 'none';
    }
    document.getElementById(type).style.display = 'block';
}

function showModel(model) {
    var models = document.getElementsByClassName('model-content');
    for (var i = 0; i < models.length; i++) {
        models[i].style.display = 'none';
    }
    document.getElementById(model).style.display = 'block';
}

// Objeto para almacenar los índices de las diapositivas por modelo
var slideIndex = {};

// Función para mostrar las diapositivas de un modelo específico
function showSlides(modelId) {
    // Obtener todas las diapositivas del modelo actual
    var slides = document.querySelectorAll(`#${modelId} .mySlides`);

    // Inicializar slideIndex si no está definido para este modelo
    if (!slideIndex[modelId]) {
        slideIndex[modelId] = 0;
    }

    // Ocultar todas las diapositivas del modelo actual
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrementar el índice de la diapositiva a mostrar
    slideIndex[modelId]++;

    // Si el índice es mayor que la cantidad de diapositivas, reiniciar a la primera
    if (slideIndex[modelId] > slides.length) {
        slideIndex[modelId] = 1;
    }

    // Mostrar la diapositiva actual
    slides[slideIndex[modelId] - 1].style.display = "block";

    // Llamar a la función showSlides() nuevamente después de un intervalo de tiempo
    setTimeout(function() {
        showSlides(modelId);
    }, 2000); // Cambiar el valor según el intervalo deseado
}

// Llamada inicial para mostrar las diapositivas del primer modelo al cargar la página
showSlides('ls2cerradomodelo1'); // Ajustar el modelo inicial según tus necesidades
showSlides('ls2abiertomodelo1');
showSlides('ls2abatiblemodelo1');
showSlides('ls2crossmodelo1');
showSlides('ls2doblemodelo1');
showSlides('ls2cerradomodelo2');
showSlides('ls2abiertomodelo2');
showSlides('ls2abatiblemodelo2');
showSlides('ls2crossmodelo2');
showSlides('ls2doblemodelo2');
showSlides('ls2cerradomodelo3');
showSlides('ls2abiertomodelo3');
showSlides('ls2abatiblemodelo3');
showSlides('ls2crossmodelo3');
showSlides('ls2doblemodelo3');
showSlides('ls2cerradomodelo4');
showSlides('ls2abiertomodelo4');
showSlides('ls2abatiblemodelo4');
showSlides('ls2crossmodelo4');
showSlides('ls2doblemodelo4');
showSlides('ls2cerradomodelo5');
showSlides('ls2abiertomodelo5');
showSlides('ls2abatiblemodelo5');
showSlides('ls2crossmodelo5');
showSlides('ls2doblemodelo5');
showSlides('shaftabatiblemodelo1');




