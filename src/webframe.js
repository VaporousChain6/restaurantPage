const navbar = (()=>{
    const content = document.querySelector("#content");
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    const buttonMaker = function(name, page){
        const button = document.createElement("div");
        button.classList.add("navButton");
        button.textContent = name.toString();
        button.addEventListener("click", ()=>{
            loadPage(page);
        })
        return button;
        
    }
    navbar.appendChild(buttonMaker("Home", "home"));
    navbar.appendChild(buttonMaker("Menu", "menu"));
    navbar.appendChild(buttonMaker("Contact", "contact"));
    content.appendChild(navbar);


})();


export default navbar;