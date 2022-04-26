const getPhotographers = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      return data.photographers;
    });
};

async function init() {
  // Récupère les datas des photographes
  const photographers = await getPhotographers();
  console.log("photographers", photographers); //la const de l'objet photographers appelle getphotographers
  /*displayData(photographers); // intègre la data à display photographer*/
}

init();

function urlID() {
  return new URL(location.href).searchParams.get("id");
}

urlID();
