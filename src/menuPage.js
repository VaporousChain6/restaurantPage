const menu = {

    "page": function(){

        const menu = document.createElement("div");
        menu.innerHTML = "";
        const _back = document.querySelector(".back");
        menu.classList.add("menu");
        const menutitle = document.createElement("h2");
        menutitle.textContent = "Our dishes";
        menu.appendChild(menutitle);
        _back.appendChild(menu);
    }
    }
    export default menu;