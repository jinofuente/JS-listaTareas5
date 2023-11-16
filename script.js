let inputTarea = document.getElementById('inputTarea');
let listaTarea = document.getElementById('listaTarea');

//capturemos el evento al pulsar la tecla "enter" en el campo de texto
inputTarea.addEventListener('keydown', (e) => {
    if(e.key === "Enter" && inputTarea.value){
        agregarTarea(inputTarea.value);
        inputTarea = "";
    }
})

//funcion para agregar una nueva tarea a la lista
function agregarTarea(tarea){
    let li = document.createElement("li"); // creamos un elemento <li>
    let checkbox = document.createElement("input"); //creamos un eemento <input>
    checkbox.type = "checkbox"; //indicamos que el tipo de <input> sera un checkbox (<input type="checkbox">)
    // Capturamos el evento para detectar cuando hagamos check en el checkbox
    checkbox.addEventListener('change', () => {
        li.classList.toggle("completed");
    })

    let texto = document.createElement("p"); //Creamos un elemento <p>
    texto.innerHTML = tarea; //Insertamos el texto de la tarea en el elemento <p>
    let botonEliminar = document.createElement("span"); //creamos el elemento <span> que funcionara como boton de eliminar tarea
    botonEliminar.classList.add("delete"); // Añadimos la clase "delete" al boton de eliminar
    botonEliminar.innerHTML = '<i class="bi bi-x-circle"></i>';
    
    /* Al hacer click en el boton eliminar, la funcion quita el
     elemento <li> seleccionado en el que se encuentra el boton 
     eliminar al que hicimos click */
    botonEliminar.addEventListener("click", function(){
        li.parentNode.removeChild(li);
    });

    /* Insertamos los nuevos elementos al DOM al agregar una nueva tarea */
    li.appendChild(checkbox);
    li.appendChild(texto);
    li.appendChild(botonEliminar);
    listaTarea.appendChild(li);


}

// https://www.youtube.com/watch?v=EEQVn8V42DM se sigio hasta el minuto 21:00