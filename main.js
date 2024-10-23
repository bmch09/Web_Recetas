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


let recetas = [];

fetch("./recetas.json")
    .then(response => response.json())
    .then(data =>{
        recetas = data;
        addCard(recetas);
    })

const popularContainer = document.querySelector("#contCards");
const newContainer = document.querySelector("#newCards");


function addCard(agregarRecetas){

    popularContainer.innerHTML="";
    agregarRecetas.forEach(receta => {

        const article = document.createElement("article");
        article.classList.add("card_recipes");
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
    });

}

const menu = document.querySelector(".nav_menu");
const navLinks = document.querySelector(".nav_links")

menu.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
    }else
    navLinks.classList.add("active")
} )


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
}