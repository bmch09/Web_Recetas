function navWeb(){
    const nav =document.createElement("nav");
    nav.classList.add("nav")
    nav.innerHTML=`
                        <div class="nav_logo">
                    <h1><a href="index.html">Nombre</a></h1>
                </div>
                <div class="nav_links">
                    <div class="nav_links_container">
                        <a href="">Recetas</a>
                        <a href="">Postre</a>
                        <a href="">Bebidas</a>
                        <a href="">Categorias</a>
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

navWeb();
footerWeb();
