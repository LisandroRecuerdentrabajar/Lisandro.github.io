document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function (event) {
      event.preventDefault(); // Evitar que el formulario se envíe y se recargue la página
  
      var notaInput = document.getElementById("inputNota").value;
  
      if (notaInput === "") {
        return;
      }
  
      var listaNotas = document.getElementById("listaNotas");
  
      var nuevaNota = document.createElement("li");
      nuevaNota.innerHTML = notaInput;
  
      var botonEliminar = document.createElement("button");
      botonEliminar.innerHTML = "Eliminar";
      botonEliminar.addEventListener("click", function () {
        nuevaNota.remove();
      });
  
      nuevaNota.appendChild(botonEliminar);
      listaNotas.appendChild(nuevaNota);
  
      document.getElementById("inputNota").value = "";
    });
  
    function agregarTarea() {
      // Obtener el valor del campo de tarea
      var tareaInput = document.getElementById("tarea").value;
    
      // Verificar si el campo de tarea está vacío
      // Si no se ingresó ninguna tarea en el input, salir de la función sin cambiar ni agregar nada nuevo.
      if (tareaInput === "") {
        return;
      }
    
      // Obtener el contenedor de tareas
      var contenedorTareas = document.getElementById("contenedor-tareas");
    
      // Crear un nuevo elemento div para la tarea
      var nuevaTarea = document.createElement("div");
    
      // Establecer el contenido de la nueva tarea con el valor del campo de tarea
      nuevaTarea.innerHTML = tareaInput;
    
      // Agregar la clase "tarea" a la nueva tarea
      nuevaTarea.classList.add("tarea");
    
      // Crear un botón para eliminar la tarea
      var botonEliminar = document.createElement("button");
      botonEliminar.innerHTML = "Eliminar";
    
      // Agregar el evento click al botón Eliminar para eliminar la tarea
      botonEliminar.addEventListener("click", function () {
        nuevaTarea.remove();
      });
    
      // Agregar el botón de eliminar a la nueva tarea
      nuevaTarea.appendChild(botonEliminar);
    
      // Agregar la nueva tarea al contenedor de tareas
      contenedorTareas.appendChild(nuevaTarea);
    
      // Limpiar el campo de tarea después de agregar la tarea
      document.getElementById("tarea").value = "";
    }
  });
  