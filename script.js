// Función para permitir el arrastre sobre la zona de soltar
function allowDrop(event) {
    event.preventDefault();
  }
  
  // Función para manejar el evento de soltar
  function drop(event) {
    event.preventDefault();
    
    // Obtener el ID del elemento arrastrado
    var data = event.dataTransfer.getData("text");
    
    // Crear un nuevo elemento con el contenido del elemento arrastrado
    var newItem = document.createElement("div");
    newItem.classList.add("drag-item");
    newItem.textContent = data;
    
    // Agregar el nuevo elemento a la zona de soltar
    event.target.appendChild(newItem);
    
    // Desactivar el arrastre del elemento fijado
    newItem.draggable = false;
  }
  
  // Agregar el evento de arrastrar a los elementos disponibles
  var dragItems = document.getElementsByClassName("drag-item");
  for (var i = 0; i < dragItems.length; i++) {
    dragItems[i].addEventListener("dragstart", function(event) {
      event.dataTransfer.setData("text", event.target.textContent);
    });
  }
  