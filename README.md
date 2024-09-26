Sprint 4 NodeJS

---------------------

Instrucciones para probar la API de la entrega 4.1:
- PRIMERO DE TODO. Navegar en la consola al 'cd' raíz del proyecto. Una vez ahí, ejecutar el comando 'npm i' para instalar las dependencias.

- SEGUNDO. Para probar correctamente esta entrega, hay que usar la colección de postman adjunta en el proyecto. En postman, arriba a la izquierda seleccionar el menú desplegable 'file', 'import...'. En la misma pestaña 'file', seleccionar en mitad de la ventana emergente 'Upload Files'. Navegar a la carpeta del proyecto y abrir la colección 'api-entrega4.1.postman_collection.json'.

- TERCERO Y ÚLTIMO. Ejecutar en la consola, de nuevo en la raíz del proyecto, el comando 'npm start' para iniciar el server.

- Está todo listo para probar las request en postman.

INSTRUCCIONES PARA LA CORRECTA EJECUCIÓN DE LAS REQUESTS.

GET nivel1-ejercicio1:
- Simplemente darle al botón 'Send' arriba a la derecha. Debería enviar como respuesta abajo un json con name, edad y una url.
- Por si acaso, la dirección a probar para este endpoint es 'localhost:3000/user'. No hay que añadir ningún parámetro adicional.

POST nivel1-ejercicio2:
- En el proyecto hay una carpeta 'material' con imágenes, gifs y un archivo no válido para probar el correcto funcionamiento del endpoint.
- La dirección para probar este endpoint es 'localhost:3000/upload'. En el Body, insertar una key 'image', y en la misma key desplegar el menú para seleccionar 'File'. En el value de la key, seleccionamos el archivo que queremos probar de subir al servidor.
- Al darle click a Send, la imagen debería subirse en la carpeta img, o enviar un mensaje de error si no es un tipo de archivo válido.

POST nivel2-ejercicio1/2:
- La dirección base para probar este endpoint es 'localhost:3000/time'
- En params, hay que insertar como key 'name', y su value cualquier nombre que queramos.
- En Authorization, seleccionamos en el Type 'Basic Auth', y a la izquierda insertamos un username y una password (cualquiera).
- Al clickar Send, postman debería devolvernos un json con un mensaje y la fecha actual.

GET nivel3:
- La url para probar este endpoint es 'localhost:3000/pokemon/{id}
- {id} lo sustituimos por el pokemon que queramos ver. Por ejemplo: 'localhost:3000/pokemon/150'
- El pokemon 1500 no existe (de momento), intentalo para probar los límites.
- Si el pokemon existe, al darle a Send postman debería devolvernos un mensaje con el nombre, la altura y el peso del bicho.