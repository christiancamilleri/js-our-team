//  creo array di oggetti
let team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg"

    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];

console.log(team)

// bersaglio container html
let containerEl = document.getElementById("container");
let listEl = document.getElementById("list");

for (let chiave in team) {
    // creo elemento li
    let newElementMembro = document.createElement("li");

    // appendo membro alla lista
    listEl.append(newElementMembro);
    
    // lbersaglio key img
    let imgMembro = document.createElement("div");
    newElementMembro.append(imgMembro)
    // imgMembro.innerText = team[chiave].img;
    // inserisco immagine in html
    imgMembro.innerHTML = '<img src="../img/'+ team[chiave].img + '"alt="">'
    
    // bersaglio key nome in arrey
    let nomeMembro = document.createElement("div");
    // aggiungo classe
    nomeMembro.classList.add("center")
    newElementMembro.append(nomeMembro)
    nomeMembro.innerText = team[chiave].nome;

    // bersaglio key ruolo
    let ruoloMembro = document.createElement("div");
    newElementMembro.append(ruoloMembro)
    // aggiungo classe
    ruoloMembro.classList.add("center")
    ruoloMembro.innerText = team[chiave].ruolo;

}


