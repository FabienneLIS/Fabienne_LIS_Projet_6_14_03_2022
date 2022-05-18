//Mettre le code JavaScript lié à la page photographer.html
const getMedia = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      /*console.log("mediaAvant", data.media);*/
      const photographerMedia = data.media.filter(
        (media) => photographerCurrentID() === media.photographerId.toString()
      );
      /*console.log("mediaAprès", photographerMedia);*/
      return photographerMedia;
    });
};

async function displayDataMedia(selectMedia) {
  const listElementMedia = document.querySelector(
    ".photographer__main__gallery__ul"
  );

  selectMedia.forEach((media) => {
    const mediaModel = photographerMediaCardFactory(media); //la cons rècupère  la fonction avec photo
    /*console.log("mediaModel", mediaModel);*/
    const mediaCardDOM = mediaModel.getMediaCardDom(); //la cons rècupère  la fonction avec la desciption
    /*console.log("mediaCardDOM", mediaCardDOM);*/
    listElementMedia.appendChild(mediaCardDOM);
  });
}
async function getMediaData() {
  const selectMedia = await getMedia();
  console.log("selectMedia", selectMedia);
  displayDataMedia(selectMedia);
}

getMediaData();
