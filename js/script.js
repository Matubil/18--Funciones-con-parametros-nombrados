// Funciones con parámetros nombrados
function customFont({ color, size, weight }) {//lo que se puede hacer es mandarle un objeto como parametro, asi puedo enviar de a un variable en vez de tener que enviar los 3 parametros por separado y para la llamar a la funcion por ejemplo puedo enviar customFont({ weight: 800 }), es lo mismo que pasa con swal, se llama destructuracion
    const divTexto = document.createElement('p');
    divTexto.innerText = `Un texto a modificar`

    divTexto.style.color = color || '#00746A'; //si yo tengo divTexto.style.color = color || 'blue' lo que va a pasar es que siempre le va a aplicar el azul, ya que es un or, lo que se puede usar es el ternario que va a preguntar si tiene un color y sino lo mejor es utilizar Nullish coalescing operator (??), lo que evalua, es que solo aplica lo de la derecha si el color es undefined o null, problema, que si viene un cero se le va a asignar un cero, lo mejor seria aplicar el nullish, y quedaria de la siguiente forma  divTexto.style.color = color ?? blue;
    divTexto.style.fontSize = size || '16px';
    divTexto.style.fontWeight = weight || 500;

    document.body.appendChild(divTexto);
}

customFont({ weight: 800 });