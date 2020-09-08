:doughnut: Componente Formulario de Ingreso | Login #1 
====
![](https://img.shields.io/badge/tag-v1.0-blue) 


**Contenido**
-------------

Sintáxis html para crear un formulario. Este componente es un login que contiene una casilla de registro para correo electrónico y una casilla para colocar un password.

Agregando Javascript muestra al usuario si no se ha ingresado correctamente la casilla de correo. Por otro lado la casilla de contraseña cambia de color de rojo a verde si cumple con el mínimo de caracteres requeridos.

**¿Cómo lo puedes hacer?**
-------------
                
1. Declarando variable globales para utilizar dentro de la función de un método.
2. Agregamos la variable del elemento html, en este caso queremos obtener el evento click del botón Enviar.

   En el ejemplo nuestro elemento del botón está declarada en la variable ***buttonSubmit***. A esta variable le pasamos el método ***addEventListener***.

3. Dentro del método ***addEventListener*** colocamos el evento ***click*** y la ***función*** que definirá que pasará al aplicar este evento.
4. En la función utilizamos las variables globales de los elementos html de la casilla de correo y password.
5. Luego utilizamos dos condiciones. Esto cambiará nuestro estilos css a través de la propiedad ***style***.

   Y eso es todo :D

**Demo**
-------------

Si quieres ver la demo de este proyecto desplegada, puedes visitar [Demo del proyecto](https://larrykevin.github.io/form-component1/)


**Clona este repositorio utilizando la línea de comando**
-------------
                
1. En GitHub, visita la página principal del repositorio.
2. Sobre la lista de archivos, da clic en Código.
3. Para clonar el repositorio utilizando HTTPS, elige la opción "Clonar con HTTPS". 
   Para clonar el repositorio utilizando una llave SSH , incluyendo un certificado que emita la autoridad de certificados SSH de tu organización, da clic en Utilizar SSH y luego en el icono de copiar.
4. Abre Git Bash.
5. Cambia el directorio de trabajo actual a la ubicación en donde quieres clonar el directorio.
6. Escribe `git clone` , y luego pega la URL que copiaste antes.

   > $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

7. Presiona Enter para crear tu clon local.

   > $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

   > Cloning into `Spoon-Knife`...

   > remote: Counting objects: 10, done.

   > remote: Compressing objects: 100% (8/8), done.

   > remove: Total 10 (delta 1), reused 10 (delta 1)

   > Unpacking objects: 100% (10/10), done.

