const photographerCurrentId = new URL(document.location).searchParams.get("id");

const getPhotographer = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      console.log("avant", data.photographers);
      const photographer = data.photographers.find(
        (photographer) => photographerCurrentId === photographer.id.toString()
      );
      console.log("après", photographer);
      document.querySelector(".photographer__main__header__name").textContent =
        photographer.name;

      document.querySelector(
        ".photographer__main__header__location"
      ).textContent = `${photographer.city}, ${photographer.country}`;

      document.querySelector(
        ".photographer__main__header__tagline"
      ).textContent = photographer.tagline;

      const picture = `photos/photographers_portraits/${photographer.portrait}`;

      document
        .querySelector(".photographer__main__header__picture")
        .setAttribute("src", picture);
    });
};

getPhotographer();

async function getPhotographerProfileCard() {
  const photographerData = getPhotographer();
  console.log("photographerData", photographerData);

  /*const { name, city, country, tagline, portrait } = photographerData;

  document.querySelector(".photographer__main__header__name").innerHTML = name;
  document.querySelector(
    ".photographer__main__header__location"
  ).innerHTML = `${city}, ${country}`;
  document.querySelector(
    ".photographer__main__header__tagline"
  ).textContent = `${tagline}`;
  const picture = `photos/photographers_portraits/${portrait}`;
  document
    .querySelector(".photographer__main__header__picture")
    .setAttribute("src", picture);*/
}

getPhotographerProfileCard();

/*async function init() {
  // Récupère les datas des photographes
  const photographer = await getPhotographer();
  console.log("photographer", photographer); //la const de l'objet photographers appelle getphotographers
  DisplayDataProfileCard(photographer); // intègre la data à display photographer
}

init();*/
