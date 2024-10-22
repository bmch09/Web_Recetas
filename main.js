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
                            <button class="btn_card"><a href="recipes.html">Ver mas</a></button>
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
                            <button class="btn_card"><a href="recipes.html">Ver mas</a></button>
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

