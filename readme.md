# Pulga Store

## Descripción del Proyecto

Este proyecto es el desarrollo de una página web para "Pulga Store", un emprendimiento dedicado a la venta de productos en línea. La página está construida con HTML, CSS y JavaScript, utilizando el framework **Bootstrap 5.3** para el diseño responsivo y **Fancybox** para la visualización de galerías/videos.

El proyecto fue inicialmente proporcionado por la compañera Daniela Garrido. El equipo colaboró para añadir nuevas funcionalidades, mejorar la estructura y la presentación de la página.

## Colaboradores

Este proyecto fue desarrollado en colaboración por el Equipo 2:

* **Daniela Garrido Olivares** (@Daniela-Garrido)
* **Carlos Ibáñez Monsalve** (@keyzonroland)
* **Paula Reyes Díaz** (@PaulaReyesD)
* **Juan Rodríguez Acevedo** (@DevSataAlbo)
* **Daniela Rodríguez Durán** (@Ardana98)

## Tecnologías Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript**
* **Bootstrap 5.3**: Framework CSS para el diseño y componentes.
* **Fancybox v6.0**: Librería JavaScript para lightboxes y galerías.
* **Toastify.js**: Librería JavaScript para notificaciones tipo "toast".

## Cómo Clonar y Ejecutar el Proyecto

Para obtener una copia local del proyecto y ejecutarlo en tu máquina:

1.  **Clonar el Repositorio:**
    Abre tu terminal (o Git Bash) y ejecuta el siguiente comando:
    ```bash
    git clone https://github.com/Daniela-Garrido/pulga-boostrap.git
    ```
    Esto creará una carpeta `pulga-boostrap` en tu directorio actual.


2.  **Acceder al Directorio del Proyecto:**
    ```bash
    cd pulga-boostrap
    ```

3.  **Abrir el Proyecto:**
    Puedes abrir los archivos `index.html` o `contacto.html` directamente en tu navegador web. No se requiere un servidor local para la mayoría de las funcionalidades.

## Estructura del Proyecto

La estructura final del proyecto se organizó para mejorar la modularidad y el orden. Esto incluyó la creación de una carpeta `assets` para recursos, dejando los archivos principales HTML en la raíz.
```bash
pulga-boostrap/
├── assets/
│   ├── img/                  # Contiene imágenes del proyecto
│   ├── script/               # Contiene archivos JavaScript
│   │   ├── formulario.js     # Lógica específica del formulario de contacto (incluye Toastify).
│   │   └── script.js         # Scripts generales del sitio (como la función de fecha/hora y Fancybox).
│   └── style/                # Contiene archivos CSS
│       └── style.css         # Estilos personalizados del proyecto.
├── contacto.html             # Página de contacto con formulario.
├── index.html                # Página principal del sitio web.
└── README.md                 # Este documento.
```
## Flujo de Trabajo con Git (Para Colaboradores)

Durante el desarrollo, el equipo utilizó un flujo de trabajo enfocado en la rama principal:

* **Rama Principal (`main`):** Todos los miembros del equipo trabajaron y subieron sus cambios directamente a la rama `main` del repositorio. Se consideró innecesario crear ramas de característica separadas dada la escala del proyecto, aunque un compañero creó una rama `release` como prueba.
* **Sincronización:** Se utilizó `git pull origin main` antes de empezar a trabajar para obtener los últimos cambios y `git push origin main` para subir las contribuciones al repositorio remoto.
* **Resolución de Conflictos:** Los conflictos de fusión, como el surgido en `pulga-bootstrap.html` al añadir el mapa, se resolvieron de forma manual en VS Code.
* **Desuso de `pulga-bootstrap.html`:** Tras la reorganización de archivos y la creación de `index.html` como página principal, el archivo original `pulga-bootstrap.html` se dejó de rastrear en el repositorio principal.

---

¡Esperamos que disfrutes explorando Pulga Store!