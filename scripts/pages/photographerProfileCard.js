function photographerCurrentID() {
  const photographerCurrentId = new URL(document.location).searchParams.get(
    "id"
  );
  return photographerCurrentId;
}

const getPhotographer = async () => {
  // Penser à remplacer par les données récupérées dans le json
  return await fetch("https://api.jsonbin.io/b/6255748ed20ace068f972804")
    .then((response) => response.json())
    //récupère la requête au format json, ce resultat est une promise
    .then((data) => {
      // on récupère sa vrai valeur ici
      /*console.log("avant", data.photographers);*/
      const photographer = data.photographers.find(
        (photographer) => photographerCurrentID() === photographer.id.toString()
      );
      /*console.log("après", photographer);*/
      return photographer;
    });
};

async function getPhotographerProfileCard() {
  const photographerData = await getPhotographer();
  /*console.log("photographerData", photographerData);*/
  const { name, city, country, tagline, portrait, price } = photographerData;

  const inputName = document.querySelector(".photographer__main__header__name");
  inputName.innerHTML = name;
  /*inputName.setAttribute("aria-label", name);*/
  const inputLocation = document.querySelector(
    ".photographer__main__header__location"
  );
  inputLocation.innerHTML = `${city}, ${country}`;
  /*inputLocation.setAttribute("aria-label", `${city}, ${country}`);*/
  const inputTagline = document.querySelector(
    ".photographer__main__header__tagline"
  );
  inputTagline.textContent = `${tagline}`;
  const picture = `assets/photos/photographers_portraits/${portrait}`;
  const inputPicture = document.querySelector(
    ".photographer__main__header__picture"
  );
  inputPicture.setAttribute("src", picture);
  inputPicture.setAttribute("alt", "photo du photographe" + name);

  const inputTitle = document.querySelector("title");
  inputTitle.textContent = "Fisheye - " + name;

  const inputPrice = document.querySelector(".photographer__main__tag__price");
  inputPrice.textContent = price + "€/jour";

  const inputModalName = document.querySelector(".modal__header__name");
  inputModalName.textContent = name;
}

getPhotographerProfileCard();
