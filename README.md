# Despliegue Automático en Azure

* Nombre: Esvin Gonzalez
* Universidad: Universidad Mariano Gálvez
* Curso: Ingeniería de Software
* Tema: CI/CD con Azure y GitHub

Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web sencilla utilizando Node.js y Express, la cual muestra un mensaje de bienvenida en el navegador.

El objetivo principal es implementar un proceso de despliegue automático (CI/CD) mediante la integración de un repositorio en GitHub con un servicio en la nube de Azure (App Service).

Cada vez que se realiza un cambio en el código y se envía al repositorio remoto, la aplicación se despliega automáticamente en Azure.


## Tecnologías Utilizadas

* Node.js
* Express
* Git
* GitHub
* Azure App Service
* GitHub Actions

---

## ⚙️ Funcionamiento del CI/CD

El proyecto utiliza GitHub Actions para automatizar el proceso de despliegue:

1. Se realiza un cambio en el código fuente.
2. Se ejecuta un `git push` al repositorio en GitHub.
3. GitHub Actions detecta el cambio.
4. Se ejecuta el flujo de trabajo (workflow).
5. La aplicación se construye y despliega automáticamente en Azure.






