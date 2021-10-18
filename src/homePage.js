const home = {

"page": function(){
    const home = document.createElement("div");
    home.innerHTML = "";
    const _back = document.querySelector(".back");
    home.classList.add("home");
    const hometitle = document.createElement("h2");
    hometitle.textContent = "The Hollow Tree";
    home.appendChild(hometitle);
    _back.appendChild(home);
}
}
export default home;