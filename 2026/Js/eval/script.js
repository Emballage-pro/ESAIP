"use strict";

// DONNÉES ET CHARGEMENT FOURNIS : cette partie n'est pas évaluée.
// Source : https://fakestoreapi.noksha.dev/api/products
// Capture du 28/09/2026. Prix affichés en euros par convention d'exercice.
// Garder le mode décidé par l'enseignant, identique pour toute la classe.
const MODE_DONNEES = "capture"; // alternative enseignant : "reseau"
const PRODUITS_CAPTURE = [
  {
    "_id": 1,
    "title": "Long sleeve Jacket",
    "price": 150,
    "category": "women",
    "image": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg"
  },
  {
    "_id": 2,
    "title": "Jacket with wollen hat",
    "price": 65,
    "category": "women",
    "image": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg"
  },
  {
    "_id": 3,
    "title": "Compact fashion t-shirt",
    "price": 55.99,
    "category": "women",
    "image": "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg"
  },
  {
    "_id": 4,
    "title": "Blue jins",
    "price": 50,
    "category": "women",
    "image": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg"
  },
  {
    "_id": 5,
    "title": "Skirts with full setup",
    "price": 695,
    "category": "women",
    "image": "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg"
  },
  {
    "_id": 6,
    "title": "Yellow Hoody",
    "price": 180,
    "category": "men",
    "image": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
  }
];

let Produits = [];

// VOTRE TRAVAIL COMMENCE ICI.
const liste_produits = document.querySelector('#liste_produits')
const add = document.querySelector('#add')
const rm = document.querySelector('#rm')

let mem =[]
function demarrer() {
  // Le tableau produits contient maintenant les six produits.
  // Construisez le catalogue et initialisez l'affichage du panier.
   
 PRODUITS_CAPTURE.forEach(produits => {
    liste_produits.insertAdjacentHTML('beforeend',` 
    <div class="card bg-base-100 w-96 shadow-sm">

  <figure>
    <img
      src="${produits.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${produits.title}</h2>
    <p>${produits.category}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Ajouter au panier</button>
    </div>
  </div>
</div>`)

add.addEventListener('click',()=>{
 table.insertAdjacentHTML('beforeend',PRODUITS_CAPTURE
    //quantity += 1
    )
rm.addEventListener('click',()=>{
    table.remove()
})    
})
});  
}
  

// Ajoutez vos variables et vos fonctions ici.


function calculer_panier(panier_client){
    let sous_total = 0
    let total = 0
    if(panier_client !==0){
        sous_total.produits += price.produits * quantity
        total += sous_total.produits  
    }
    else(console.log("panier vide"))
}


demarrer()

const toggleSideBar = () => {
  const panier = document.querySelector('.panier')
  const sideBar = document.querySelector('.sidebar')
  panier.addEventListener('click', () => {
    sideBar.classList.toggle('w-[600px]')
  })
}

toggleSideBar()


const addToCard = () => {
 
}


const displaySideBar = () => {
  
}

const deleteArticle = () => {
 
}






