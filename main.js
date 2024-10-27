<<<<<<< HEAD
// Configuración inicial
const url = "./recetas.json";
=======
/*         
{
    "id": "ceviche-clasico",
    "titulo": "Ceviche Clásico",
    "imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Ceviche_de_corvina_%28Peru%29.jpg/800px-Ceviche_de_corvina_%28Peru%29.jpg",
    "descripcion": "El ceviche es el plato bandera de la gastronomía peruana. Consiste en pescado fresco marinado en limón, con cebolla, ají, cilantro y choclo.",
    "preparacion": "Se corta el pescado en cubos, se marina en jugo de limón con cebolla, ají y cilantro. Se sirve con choclo, camote y lechuga.",
    "adicional": "Es considerado Patrimonio Cultural de la Nación y se celebra el Día Nacional del Ceviche el 28 de junio."
}

*/


>>>>>>> refs/remotes/origin/main
let recetas = [];

// Elementos del DOM
const elementos = {
    popularContainer: document.querySelector("#contCards"),
    newContainer: document.querySelector("#newCards"),
    recipeContainer: document.querySelector(".recipe"),
    menu: document.querySelector(".nav_menu"),
    navLinks: document.querySelector(".nav_links"),
    header: document.querySelector("#header"),
    footer: document.querySelector("#footer")
};


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

// Función para mostrar las recetas populares
function addCard(agregarRecetas) {
    if (!elementos.popularContainer) return;
    
    elementos.popularContainer.innerHTML = "";
    agregarRecetas.forEach((receta, index) => {
        const article = document.createElement("article");
        article.classList.add("card_recipes");
<<<<<<< HEAD
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
=======
        article.innerHTML= `
                        <div class="img_container">
                            <img id="imgCard" src="${receta.imagen}" alt="Img_Card" class="card_img">
                        </div>
                        <div class="card_recipes_info">
                            <h3 class="textCard">${receta.titulo}</h3>
                            <p class="desCard">${receta.descripcion}</p>
                            <button class="btn_card"><a href="#">Ver mas</a></button>
                        </div>
        `;
        popularContainer.appendChild(article);
    });
    newContainer.innerHTML="";
    agregarRecetas.forEach(receta => {

        const newArticle = document.createElement("div");
        newArticle.classList.add("card_new")
        newArticle.innerHTML=`
                        <img  src="${receta.imagen}" alt="Img_Card" class="card_img">
                        <div class="card_new_info">
                            <h3 class="card_title">${receta.titulo}</h3>
                            <button class="btn_card"><a href="#">${showRecipe()}Ver mas</a></button>
                        </div>
        `;
        newContainer.appendChild(newArticle);
>>>>>>> refs/remotes/origin/main
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
    if (!elementos.recipeContainer) return;
    
    const ingredientesLista = receta.ingredientes.principales.map(ingrediente => 
        `<li class="recipe_ingredients">${ingrediente.item}: ${ingrediente.cantidad}</li>`
    ).join("");

<<<<<<< HEAD
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
=======

const main = document.querySelector(".main");
const btnCard = document.querySelectorAll(".btn_card")

function showRecipe(){
    btnCard.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild=`<section class="recipe">
                <div class="recipe_container">
                    <h2 class="recipe_title">Titulo</h2>
                    <p class="recipe_description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed illum assumenda dolor, 
                        vitae, eos nihil dignissimos, animi unde voluptate eius temporibus quaerat placeat repudiandae nam impedit quod. Molestias, itaque maiores.</p>
                    <div class="container_img">
                        <img class="recipe_img" src="https://via.placeholder.com/800x600" alt="">
                    </div>
                    <p class="recipe_aditional">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse a harum vero quaerat distinctio, r
                        epellat, aliquid velit ratione assumenda minima nostrum magni tenetur illum qui iusto magnam voluptatibus perspiciatis.</p>
                    <h3>Ingredientes</h3>
                    <ul class="recipe_list">
                        <li class="recipe_ingredients">Ingrediente</li>
                        <li class="recipe_ingredients">Ingrediente</li>
                        <li class="recipe_ingredients">Ingrediente</li>
                        <li class="recipe_ingredients">Ingrediente</li>
                        <li class="recipe_ingredients">Ingrediente</li>
                        <li class="recipe_ingredients">Ingrediente</li>
                        <li class="recipe_ingredients">Ingrediente</li>

                    </ul>
                    <h3>Preparacion</h3>
                    <p class="recipe_prepared">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident ex sapiente totam consectetur molestiae eius accusamus dignissimos vitae iusto. Placeat quam architecto earum soluta, et eveniet voluptatem fuga praesentium perferendis?
                    Facilis excepturi ea molestiae doloremque. Tempore aliquid ullam enim adipisci non iure doloribus corrupti nostrum ab fuga culpa animi, dolores ex ducimus facilis. Corrupti, voluptas sequi odio laboriosam illum consequuntur!
                    Excepturi ipsum dignissimos veniam molestias odio aut molestiae vel esse ea culpa id ipsa totam, voluptatibus deserunt maiores eius. Accusantium cupiditate nostrum tempora quia unde, eligendi atque laboriosam tempore dolores.</p>
                    <h3>Valor Nutricional</h3>
                    <table class="recipe_values">
                        <tr>
                            <td>calorias</td>
                            <td>20kg</td>
                        </tr>
                        <tr>
                            <td>calorias</td>
                            <td>20kg</td>
                        </tr>
                        <tr>
                            <td>calorias</td>
                            <td>20kg</td>
                        </tr>
                    </table>
                </div>
            </section>`
    })
>>>>>>> refs/remotes/origin/main
}