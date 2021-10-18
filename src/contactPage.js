const contact = {

"page": function(){
    console.log("hiiii")
    const contact = document.createElement("div");
    contact.innerHTML = "";
    const _back = document.querySelector(".back");
    contact.classList.add("contact");
    const contactTest = document.createElement("h2");
    contactTest.textContent = "This is us";
    contact.appendChild(contactTest);
    _back.appendChild(contact);
}
}

export default contact;