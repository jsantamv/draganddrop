# Drag and Drop con Vue 

En este ejemplo **index-vue-close.html**, hemos utilizado la sintaxis de la Composition API de Vue.js para crear el componente Vue. Los elementos disponibles se almacenan en la propiedad dragItems del componente y se muestran en la lista utilizando la directiva v-for. Cada elemento de la lista tiene el atributo draggable establecido en true y se activa el evento dragstart para iniciar el arrastre.

El área de soltar tiene los eventos drop y dragover asociados a las funciones drop y allowDrop, respectivamente. En el método drop, se obtiene el elemento arrastrado y se filtra de la lista dragItems. Luego, se crea un nuevo elemento utilizando la función createDraggedItem y se añade a la zona de soltar.

Ten en cuenta que en este ejemplo no hemos utilizado ninguna biblioteca adicional para el arrastre y soltar, simplemente hemos utilizado los eventos y las funciones nativas del navegador.

## Close
En esta versión modificada, los elementos arrastrados ya no se eliminan de la lista dragItems cuando se sueltan en el área de soltar. En el método drop, simplemente agregamos el elemento arrastrado a la lista droppedItems.

El botón de cierre se mantiene para permitir eliminar los elementos arrastrados de la lista droppedItems cuando se hace clic en él, utilizando el método removeItem.

Ahora, los elementos arrastrados se mantendrán tanto en la lista original como en el área de soltar, y se podrán eliminar solo desde el área de soltar cuando se hace clic en el botón de cierre.
