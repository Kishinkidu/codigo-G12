# PRIMER DIA CON GIT Y GITHUB

Lista de comando de git
* para poder ver la version de git ejecutamos en nuestra terminal:

```bash 
git --version
git -v
```
* para configurar el correo y el nombre(solo una primera vez por dispositivo).

```bash
git config --global user.email "erick.revoredo58@gmail.com"
git config --global user.name "Kishinkidu"
```
* Para ver la configuracion de git.
```bash 
git config --list
```
* Para inicialicar nuestro repositorio en git.
```bash 
git init ( se hace  una sola vez por proyecto)
```
*  para ver el estado de nuetro cmabio
```bash
git status
```
* para preparar para dar commint a los archivos.

```bash
git add . (para dar commit  toda la carpeta)
git add "nombre del archivo.extension o archivos a dar commit)
```
* Crear el registro de los cambios realizado.
```bash 
git commit -m "comentario corto y conciso"
```
* para ver una linea de tiempo de los commits que hemos realizado.
```bash
git log ( da informacion de hora y fecha de la modificacion)
```
* para poder ver el detalle de un commit en especifico :
```bash 
git show "id del commit"
```
