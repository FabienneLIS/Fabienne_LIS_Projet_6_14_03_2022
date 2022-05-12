const getPhotographers = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      return data;
      /*return data.photographers;*/
    });
};

async function displayData(photographers) {
  //fonction pour intégrer les données au html
  const photographersSectionUl = document.querySelector(
    ".photographer__section__ul"
  ); //lit le DOM de la class photographers

  photographers.forEach((photographer) => {
    // fais une boucle foreach pour  intégrer les données du factory patters
    const photographerModel = photographerFactory(photographer); //la cons rècupère  la fonction avec photo
    console.log("photographerModel", photographerModel);
    const photographerCardDOM = photographerModel.getUserCardDOM(); //la cons rècupère  la fonction avec la desciption
    console.log("photographerCardDOM", photographerCardDOM);
    photographersSectionUl.appendChild(photographerCardDOM); //intégre userCard en tant que enfant en tant à photographersSection
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  console.log("photographers", photographers); //la const de l'objet photographers appelle getphotographers
  displayData(photographers); // intègre la data à display photographer
}

init();
