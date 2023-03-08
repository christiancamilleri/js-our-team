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
        nome:"Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo:"Developer",
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

printArray(team, listEl)

// ----------------------------------------------------
// creo funzione che mi stampa in pagina il mio array 
function printArray(array, genitore) {
    for(let i = 0; i < array.length;i++) {
        const members = array[i];
        let newElement = document.createElement("li");
        genitore.append(newElement);
        for ( let chiave in members) {
            newElement.innerText = `${chiave}: ${members[chiave]}`
            console.log(chiave + ":" + members[chiave]);

        }
        
    }
}
