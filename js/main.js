// js/main.js

function loadPage(page) {
    const mainContent = document.getElementById("main-content");

    // Eliminar la clase activa de todos los enlaces de navegación
    document.querySelectorAll(".header nav a").forEach(link => {
        link.classList.remove("active");
    });

    // Agregar la clase activa al enlace actual
    const activeLink = document.querySelector(`.header nav a[href="#${page}"]`);
    if (activeLink) activeLink.classList.add("active");

    // Cargar el contenido según la sección seleccionada
    if (page === 'home') {
        mainContent.innerHTML = `
        <div class="intro-text">
            <h1> <span class="highlightt"> Mi Perfil -- AGUSTIN WIDMAN</span></h1>
            <p>Transformando ideas en soluciones tecnológicas y apasionado por el aprendizaje continuo.</p>
            <p style="font-size: 1.5em; font-style: italic; color: #666; margin-top: 15px;">
                "Si he logrado ver más lejos, es porque estoy parado sobre los hombros de gigantes."
                <span style="font-size: 0.8em; font-style: normal; color: #333;">- Isaac Newton</span>
            </p>
            <a href="assets/WidmanCV.pdf" download="Agustin_Widman_CV" class="ant-btn ant-btn-primary">Descargar CV</a>
        </div>
        
        <div class="profile-photo">
            <img src="assets/images/profile.jpg" alt="Profile Photo">
        </div>
        
    `;
    } else if (page === 'about') {
        mainContent.innerHTML = `
            <div class="about-section">
                <div class="bio-card">
                    <h2>ACERCA DE MI</h2>
                    <p>Soy Agustín Widman Aguayo, originario de Yucatán, México. Desde pequeño me ha apasionado la tecnología. Estudié Ingeniería en Sistemas Computacionales en el Instituto Tecnológico de Mérida, y a lo largo de mi carrera he combinado el emprendimiento con mi pasión por la programación, creando negocios tecnológicos y desarrollando aplicaciones que facilitan la vida de sus usuarios.</p>
                    
                    <p>Durante más de una década, he tenido la oportunidad de desempeñarme en diferentes roles en el ámbito de la tecnología, desde la administración de bases de datos hasta el desarrollo de aplicaciones. Como fundador y administrador en Soporte WM SA de CV, tuve la oportunidad de crear soluciones en facturación electrónica y seguridad para servidores, experiencia que me ha formado como un profesional versátil y orientado a resolver problemas.</p>
                    
                    <p>Ahora me encuentro en Oviedo, España, persiguiendo una Maestría en Ingeniería Web, con el objetivo de actualizarme en las nuevas tecnologías y ampliar mi conocimiento en el desarrollo de aplicaciones web. Soy un apasionado del aprendizaje continuo y de enfrentar nuevos retos, especialmente en el ámbito de la tecnología y la innovación.</p>

                    <!-- Línea azul de separación -->
                    <hr class="divider">

                    <!-- Datos de contacto organizados en una sola línea -->
                    <div class="contact-info">
                        <span><i class="anticon anticon-mail"></i> <a href="mailto:agustinwidman@gmail.com">UO308677@UNIOVI.ES</a></span>
                        <span><i class="anticon anticon-phone"></i> 624411952</span>
                        <span><i class="anticon anticon-linkedin"></i> <a href="https://www.linkedin.com/in/agustinwidman" target="_blank">LinkedIn</a></span>
                    </div>
                </div>
            </div>
        `;
    } else if (page === 'portfolio') {
        mainContent.innerHTML = `
            <div class="portfolio-section">
                <h2>Trabajos</h2>
                
                <!-- Perfil Personal -->
                <div class="profile-section">
                    <h3>Agustín Widman Aguayo</h3>
                    <h4>Ingeniero en Sistemas Computacionales</h4>
                    <p>Soy Ingeniero en Sistemas con experiencia en la creación de negocios en el rubro de la Tecnología. También he sido Fundador y empleado en la industria tecnológica desde el 2010, con posiciones múltiples como administrador de base de datos y desarrollador.</p>
                </div>

                <!-- Experiencia Laboral -->
                <div class="experience-section">
                    <h3>Experiencia Laboral</h3>
                    <div class="experience-item">
                        <h4>Administrador de Base de Datos / Desarrollador</h4>
                        <p><strong>Febrero 2022 – Septiembre 2023</strong> - ACDY (Empresa Camionera)</p>
                        <p>Responsabilidades:</p>
                        <ul>
                            <li>Agregar funciones a módulos existentes y mejorar procesos desarrollados en la aplicación.</li>
                            <li>Resolución de incidencias con evidencias de usuarios y análisis de logs.</li>
                            <li>Administración de la base de datos.</li>
                        </ul>
                        <p><strong>Herramientas:</strong> JavaScript, Python, Java, MySQL 6.7, PostgreSQL</p>
                    </div>
                    <div class="experience-item">
                        <h4>Fundador y Administrador</h4>
                        <p><strong>Julio 2010 - Diciembre 2021</strong> - Soporte WM SA de CV</p>
                        <p>Responsabilidades:</p>
                        <ul>
                            <li>Proveer asistencia remota en sistemas de cómputo a oficinas de clientes.</li>
                            <li>Programación e implementación de sistemas de facturación electrónica.</li>
                            <li>Gestión de seguridad en servidores y bases de datos.</li>
                        </ul>
                    </div>
                </div>
                
                <!-- Educación -->
                <div class="education-section">
                    <h3>Estudios Académicos</h3>
                    <p>Ingeniero en Sistemas Computacionales, Instituto Tecnológico de Mérida, Yucatán, México</p>
                    <p><strong>Fecha de Graduación:</strong> Agosto 2008</p>
                </div>
            </div>
        `;
    } else if (page === 'contact') {
        mainContent.innerHTML = `
            <div class="ant-card ant-card-bordered" style="max-width: 600px; margin: 20px auto;">
                <div class="ant-card-head">
                    <h2 style="color: #0074cc; text-align: center;">Contáctame</h2>
                </div>
                <div class="ant-card-body" style="font-size: 1.2em; line-height: 1.6;">
                    <p><strong>Correo:</strong> <a href="mailto:UO308677@GMAIL.COM">UO308677@UNIOVI.ES</a></p>
                    <p><strong>Teléfono:</strong> 624411952</p>
                    <p><strong>Dirección:</strong> Calle Falsa 123, Oviedo, España</p>
                    <p><strong>Horario de Contacto:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                    <p><strong>Redes Sociales:</strong></p>
                    <ul style="list-style: none; padding: 0;">
                        <li><a href="https://linkedin.com/in/agustinwidman" target="_blank">LinkedIn</a></li>
                        <li><a href="https://github.com/agustinwidman" target="_blank">GitHub</a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}


// Seleccionar la página "Home" por defecto al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadPage('home');
});

$(document).ready(function () {
    // Evento del botón de búsqueda
    $("#search-button").on("click", function () {
        const value = $("#search-input").val().toLowerCase().trim(); // Obtener el valor del input

        // Eliminar cualquier resaltado previo
        removeHighlights();

        if (value) {
            // Crear expresión regular que incluya espacios
            const regex = new RegExp(value, "gi");

            // Buscar y resaltar coincidencias en todo el contenido
            $(".content *").contents().each(function () {
                if (this.nodeType === 3) { // NodeType 3: Nodo de texto
                    const text = $(this).text();
                    if (regex.test(text)) {
                        const highlightedText = text.replace(regex, function (match) {
                            return `<span class="highlight">${match}</span>`; // Envolver coincidencias en un span
                        });
                        $(this).replaceWith(highlightedText); // Reemplazar solo el texto
                    }
                }
            });
        }
    });

    // Función para eliminar el resaltado previo
    function removeHighlights() {
        $(".highlight").each(function () {
            $(this).replaceWith($(this).text()); // Reemplazar el span por su texto original
        });
    }
});
