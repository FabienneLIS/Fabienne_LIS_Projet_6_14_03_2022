/*let url = new url(window.location.href);
let photographerid = URLSearchParams.get("id");*/

//Mettre le code JavaScript lié à la page photographer.html
const getPagePhotographer = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      return data.media;
    });
};

/*async function displayDataMedia(pagePhotographer) {
  //fonction pour intégrer les données au html
  const mainElement = document.querySelector(".item"); //lit le DOM de la class photographers

  pagePhotographer.forEach((media) => {
    // fais une boucle foreach pour  intégrer les données du factory patters
    const pagePhotographerModel = mediaFactoryPage(media); //la cons rècupère  la fonction avec photo nom
    const pagePhotographerCardDOM = pagePhotographerModel.getDataDOM(); //la cons rècupère  la fonction avec la desciption
    mainElement.appendChild(pagePhotographerCardDOM); //intégre userCard en tant que enfant en tant à photographersSection
  });
}*/

async function init() {
  // Récupère les datas des photographes
  const pagePhotographer = await getPagePhotographer();
  console.log("pagePhotographer", pagePhotographer); //la const de l'objet photographers appelle getphotographers
  displayDataMedia(pagePhotographer); // intègre la data à display photographer
}

init();
