import { getClients } from './api/api_client.js';

async function afficherClients() {
    try {
        const clients = await getClients();
        var lesClients = clients["hydra:member"];
        var olClients = document.getElementById('olClients');
        for (let client of lesClients) {
            var li = document.createElement("li");
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start")

            var div = document.createElement("div");
            div.classList.add("ms-2", "me-auto");

            var div2 = document.createElement("div");
            div2.innerHTML = '<span class="material-symbols-outlined m-2">person</span>' + client.nom + ' ' + client.prenom;

            li.appendChild(div);
            div.appendChild(div2);

            olClients.appendChild(li);
        }
    }
    catch (erreur) {
        console.log('Erreur :', erreur);
    }
}
afficherClients();

const clients = await getClients();
var lesClients = clients["hydra:member"];

var nom = document.getElementById("nom");
nom.addEventListener("click", nomClick, false);
function nomClick() {
    for (let client of lesClients) {
    alert("réussiNom");
    client.nom.sort();
    console.log(client.nom);
    }
};

var prenom = document.getElementById("prenom");
prenom.addEventListener("click", prenomClick, false);
function prenomClick() {
    for (let client of lesClients) {
    alert("réussiPrenom");
    client.prenom.sort();
    console.log(client.prenom);
    }
};