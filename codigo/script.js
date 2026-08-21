// Base de datos ficticia de colegios
const colegios = [
  {
    nombre: "Colegio Tolkien",
    zona: "San Miguel, Buenos Aires",
    orientacion: "Idiomas",
    imagen: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    descripcion: "Enfoque bilingüe, desarrollo creativo y un ambiente ideal para los estudiantes.",
    extracurricular: "Teatro, Bilingüe Intensivo, Informática"
  },
  {
    nombre: "Instituto Técnico San José",
    zona: "San Miguel, Buenos Aires",
    orientacion: "Tecnología",
    imagen: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    descripcion: "Especializado en robótica, programación y proyectos de innovación científica.",
    extracurricular: "Taller de Robótica, Programación Web, Club de Ciencias"
  },
  {
    nombre: "Colegio Deportivo & Arte",
    zona: "Bella Vista, Buenos Aires",
    orientacion: "Deportes",
    imagen: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    descripcion: "Infraestructura deportiva de alto nivel y programas de expresión artística.",
    extracurricular: "Fútbol, Natación, Atletismo, Pintura"
  },
  {
    nombre: "Escuela de Bellas Artes",
    zona: "Muñiz, Buenos Aires",
    orientacion: "Arte",
    imagen: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    descripcion: "Fomentamos el talento musical, artes plásticas y diseño gráfico digital.",
    extracurricular: "Música, Teatro, Fotografías, Diseño 3D"
  }
];

// Función para renderizar tarjetas de colegios
function renderizarColegios(lista) {
  const grid = document.getElementById("schoolGrid");
  grid.innerHTML = "";

  if (lista.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 20px;">No se encontraron colegios que coincidan con la búsqueda.</p>`;
    return;
  }

  lista.forEach(colegio => {
    const cardHTML = `
      <div class="card">
        <img src="${colegio.imagen}" alt="${colegio.nombre}" class="card-img">
        <div class="card-body">
          <h3 class="card-title">${colegio.nombre}</h3>
          <p class="card-location">📍 ${colegio.zona}</p>
          <div>
            <span class="badge">${colegio.orientacion}</span>
          </div>
          <p class="card-desc">${colegio.descripcion}</p>
          <p class="card-extra"><strong>Actividades:</strong> ${colegio.extracurricular}</p>
          <button class="card-btn" onclick="alert('Solicitando información de ${colegio.nombre}...')">Más Información / Contacto</button>
        </div>
      </div>
    `;
    grid.innerHTML += cardHTML;
  });
}

// Filtrar por barra de búsqueda
function filtrarColegios() {
  const texto = document.getElementById("searchInput").value.toLowerCase();
  const filtrados = colegios.filter(c => 
    c.nombre.toLowerCase().includes(texto) || 
    c.zona.toLowerCase().includes(texto)
  );
  renderizarColegios(filtrados);
}

// Filtrar por el test de orientación
function filtrarPorInteres() {
  const interes = document.getElementById("quizInterest").value;
  if (interes === "todos" || interes === "") {
    renderizarColegios(colegios);
  } else {
    const filtrados = colegios.filter(c => c.orientacion === interes);
    renderizarColegios(filtrados);
  }
}

// Cargar colegios al iniciar
renderizarColegios(colegios);