// Configuración inicial
const url = "./recetas.json";
let recetas = [];

// Elementos del DOM
const elementos = {
    popularContainer: document.querySelector("#contCards"),
    newContainer: document.querySelector("#newCards"),
    recipeContainer: document.querySelector(".recipe"),
    menu: document.querySelector(".nav_menu"),
    navLinks: document.querySelector(".nav_links"),
    header: document.querySelector("#header"),
    footer: document.querySelector("#footer"),
    mainContent: document.querySelector(".main_content"),
    recipesPopularContent: document.querySelector(".popular_recipes"),
    recipesNewContent: document.querySelector(".new_recipes")
};


function navWeb(){
    const nav =document.createElement("nav");
    nav.classList.add("nav")
    nav.innerHTML=`
                        <div class="nav_logo">
                    <h1><a href="index.html">Nombre</a></h1>
                </div>
                <div class="nav_links">
                    <div class="nav_links_container">
                        <a class="links">Recetas</a>
                        <a class="links">Postre</a>
                        <a class="links">Bebidas</a>
                        <a class="links">Categorias</a>
                    </div>
                </div>
                <div class="nav_search">
                    <input type="text" placeholder="Buscador">
                    <button type="button"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div class="nav_menu"><i class="fa-solid fa-bars"></i></div>
    `
    elementos.header.appendChild(nav)
}

function footerWeb(){
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer_content")
    footerDiv.innerHTML=`
                        <div class="info_footer">
                <h2 class="title_footer">Nombre</h2>
                <hr>
                <span>Todos los derechos reservados ©</span>
                </div>
                <div class="icon_footer">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                </div>
    `
    elementos.footer.appendChild(footerDiv)
}



// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Determinar en qué página estamos
    const isRecipePage = window.location.pathname.includes('recipes.html');
    
    // Cargar datos y ejecutar funciones correspondientes
    fetch(url)
        .then(response => response.json())
        .then(data => {
            recetas = data;
            
            if (isRecipePage) {
                // Estamos en recipes.html
                const params = new URLSearchParams(window.location.search);
                const recetaId = params.get('id');
                
                if (recetaId && elementos.recipeContainer) {
                    pageRecipe(recetas[recetaId]);
                }
                
                // Mostrar recetas populares en recipes.html
                if (elementos.popularContainer) {
                    addCard(recetas);
                }
            } else {
                // Estamos en index.html
                if (elementos.popularContainer) {
                    addCard(recetas);
                    
                }
                if (elementos.newContainer) {
                    newCard(recetas);
                }
            }
        })
        .catch(error => {
            console.error('Error cargando las recetas:', error);
            alert('Hubo un error al cargar las recetas. Por favor, intenta más tarde.');
        });
});

//  Filtrar Por categoria


// Función para mostrar las recetas populares
function addCard(agregarRecetas) {
    if (!elementos.popularContainer) return;
    
    elementos.popularContainer.innerHTML = "";
    agregarRecetas.forEach((receta, index) => {
        const article = document.createElement("article");
        article.classList.add("card_recipes");
        article.innerHTML = `
            <div class="img_container">
                <img id="imgCard" src="${receta.imagen}" alt="Img_Card" class="card_img">
            </div>
            <div class="card_recipes_info">
                <h3 class="textCard">${receta.titulo}</h3>
                <p class="desCard">${receta.descripcion || receta.titulo}</p>
                <button class="btn_card" data-index="${index}">Ver más</button>
            </div>
        `;
        elementos.popularContainer.appendChild(article);
    });

    // Event listeners para los botones
    document.querySelectorAll(".btn_card").forEach(button => {
        button.addEventListener("click", (e) => {
            const recetaIndex = e.target.getAttribute('data-index');
            window.location.href = `recipes.html?id=${recetaIndex}`;
        });
    });
}

// Función para mostrar las recetas nuevas
function newCard(nuevasRecetas) {
    if (!elementos.newContainer) return;
    
    elementos.newContainer.innerHTML = "";
    nuevasRecetas.forEach((receta, index) => {
        const newArticle = document.createElement("div");
        newArticle.classList.add("card_new");
        newArticle.innerHTML = `
            <img src="${receta.imagen}" alt="${receta.id}" class="card_img">
            <div class="card_new_info">
                <h3 class="card_title">${receta.titulo}</h3>
                <button class="btn_card">
                    <a href="recipes.html?id=${index}">Ver más</a>
                </button>
            </div>
        `;
        elementos.newContainer.appendChild(newArticle);
    });
}

// Función para mostrar el detalle de una receta
function pageRecipe(receta) {
    mostrarCategorias();
    if (!elementos.recipeContainer) return;
    
    const ingredientesLista = receta.ingredientes.principales.map(ingrediente => 
        `<li class="recipe_ingredients">${ingrediente.item}: ${ingrediente.cantidad}</li>`
    ).join("");

    const preparacionLista = receta.preparacion.map(paso => 
        `<li>${paso}</li>`
    ).join("");

    elementos.recipeContainer.innerHTML = `
        <div class="recipe_container">
            <h2 class="recipe_title">${receta.titulo}</h2>
            <p class="recipe_description">${receta.descripcion}</p>
            <div class="container_img">
                <img class="recipe_img" src="${receta.imagen}" alt="${receta.titulo}">
            </div>
            <p class="recipe_aditional">${receta.adicional}</p>
            <h3>Ingredientes</h3>
            <ul class="recipe_list">
                ${ingredientesLista}
            </ul>
            <h3>Preparación</h3>
            <ul class="recipe_prepared">
                ${preparacionLista}
            </ul>
            <h3>Valor Nutricional</h3>
            <table class="recipe_values">
                <tr>
                    <td>Calorías:</td>
                    <td>${receta.valor_nutricional.calorias}</td>
                </tr>
                <tr>
                    <td>Proteínas:</td>
                    <td>${receta.valor_nutricional.proteinas}</td>
                </tr>
                <tr>
                    <td>Carbohidratos:</td>
                    <td>${receta.valor_nutricional.carbohidratos}</td>
                </tr>
                <tr>
                    <td>Grasas:</td>
                    <td>${receta.valor_nutricional.grasas}</td>
                </tr>
                <tr>
                    <td>Fibra:</td>
                    <td>${receta.valor_nutricional.fibra}</td>
                </tr>
                <tr>
                    <td>Sodio:</td>
                    <td>${receta.valor_nutricional.sodio}</td>
                </tr>
            </table>
        </div>
    `;
}

// Manejo del menú móvil
if (elementos.menu && elementos.navLinks) {
    elementos.menu.addEventListener("click", () => {
        elementos.navLinks.classList.toggle("active");
    });
}



navWeb();
footerWeb();
mostrarCategorias();


function mostrarCategorias(){
    let comida = [];
    const navCategoria = document.querySelectorAll(".links");
navCategoria.forEach((cate) => {
    cate.addEventListener("click", () => {

        const nomCategoria = cate.textContent;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                comida = data;
                // Filtra las recetas que pertenecen a la categoría clickeada
                const recetasFiltradas = comida.filter(receta => receta.categoria === nomCategoria);
                if (recetasFiltradas.length > 0) {

                    if(elementos.mainContent.classList.contains("main_content")){
                        elementos.mainContent.classList.remove("main_content");
                        elementos.mainContent.classList.add("disable");
                        elementos.recipesPopularContent.classList.add("popular_recipes")
                        elementos.recipesPopularContent.classList.remove("disable")
                        elementos.recipesNewContent.classList.add("new_recipes")
                        elementos.recipesNewContent.classList.remove("disable")
                    }
                    newCard(recetasFiltradas);
                    addCard(recetasFiltradas)

                } else {
                    elementos.mainContent.classList.add("main_content");
                    elementos.mainContent.classList.remove("disable");
                    elementos.recipesPopularContent.classList.remove("popular_recipes")
                    elementos.recipesPopularContent.classList.add("disable")
                    elementos.recipesNewContent.classList.remove("new_recipes")
                    elementos.recipesNewContent.classList.add("disable")
                    elementos.mainContent.innerHTML=`<h2 class="popular_title">No se encontraron recetas para esta categoria U.U</h2>`
                }
            })
            .catch(error => console.error("Error al obtener los datos o en la categoría:", error));
    });
});
}