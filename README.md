# SearchForm
Configura un nuevo proyecto React utilizando Create React App o una configuración similar si lo prefieres.

Crea un componente llamado SearchForm que contenga un formulario con un campo de entrada de texto y un botón de búsqueda.

Cuando el usuario ingrese un término de búsqueda en el campo de entrada de texto y haga clic en el botón de búsqueda, realiza una solicitud a la API pública de "JSONPlaceholder" (https://jsonplaceholder.typicode.com/posts) utilizando el término de búsqueda como consulta.

Muestra los resultados de la búsqueda en una lista debajo del formulario. Cada resultado debe mostrar el título del post y el cuerpo del post.

Implementa manejo de errores para tratar las respuestas incorrectas de la API (por ejemplo, si no se encuentra ningún resultado).

Crea un componente de formulario adicional llamado PostForm que permita al usuario enviar datos a la API. El formulario debe contener campos para el título y el cuerpo del post.

Cuando el usuario envíe el formulario, debe realizar una solicitud POST a la API de "JSONPlaceholder" para crear un nuevo post con los datos proporcionados.