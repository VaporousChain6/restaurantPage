import home from "./homePage";
import menu from "./menuPage";
import contact from "./contactPage";
const loadPage =  (page)=>{
    const back = document.querySelector(".back");
    back.innerHTML = "";
    
    if(page == "contact"){
        contact.page();
    }
    else if (page =="menu"){
        menu.page();
    }
    else if(page =="home"){
        home.page();
    }
};
const frame = {


    bckgrnd: (()=>{
        const content = document.querySelector("#content");
        const back = document.createElement("div");
        back.classList.add("back");
        content.appendChild(back);
    })(),
    

    navbar: (()=>{
    const content = document.querySelector("#content");
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    const buttonMaker = function(name, page){
        const button = document.createElement("div");
        const pg = page;
        button.classList.add("navButton");
        button.textContent = name.toString();
        button.addEventListener("click", ()=>{
            loadPage(pg);
        });
        return button;
        
    }
    navbar.appendChild(buttonMaker("Home", "home"));
    navbar.appendChild(buttonMaker("Menu", "menu"));
    navbar.appendChild(buttonMaker("Contact", "contact"));
    content.appendChild(navbar);

    
})(),
}

export default frame;
