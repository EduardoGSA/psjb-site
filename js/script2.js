function clickMenu() {
    const menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none"; // Oculta o menu
    } else {
        menu.style.display = "block"; // Mostra o menu
    }
}
