const photographerCurrentIdbis = photographerCurrentId;
//Mettre le code JavaScript lié à la page photographer.html
const getMedia = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      console.log("mediaAvant", data.media);
      const photographerMedia = data.media.find(
        (media) => photographerCurrentIdbis === photographerId.toString()
      );
      console.log("media", photographerMedia);
    });
};

getMedia();

/*return data.media;*/
