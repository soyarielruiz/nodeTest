# Test Fizzmod

#### Este trabajo consiste en la validación de items, devolución de files del servidor, creación y visualización de blogs

>Para poder lanzar el contenedor se debe buildear previamente el contenedor con:

+ `docker-compose build`

>Al terminar de descargar lo necesario para la imagen de docker, se puede lanzar la api con:
+ `docker-compose up`

>Para la validación de items se debe hacer un POST a `localhost:4005/api/item` <br/>
>Para que devuelva el contenido de los archivos debe hacer un GET a `localhost:4005/api/{filename}` <br/>
>Para ver/guardar los blogs debe hacerse un GET/POST a `localhost:4005/api/blog/post/{id}`/`localhost:4005/api/blog/post` <br/>

>La estructura del json via POST para los items debe ser:<br> 
{<br>
&nbsp;"id": 50,<br>
&nbsp;"name": "Coca"<br>
&nbsp;"keywords": ["coca", "cola", "coca"]<br>
}<br>

>La estructura del json via POST para los blogs debe ser:<br> 
{<br>
&nbsp;"title": "My Post Title",<br>
&nbsp;"content": "Post content"<br>
}<br>


>Si se desea lanzar los tests guardados, debe usar el comando:

+ `docker-compose run app npm test`

***
 
[Repositorio](https://github.com/soyarielruiz/nodeTest.git)

***
**Hecho por Ariel Ruiz.**