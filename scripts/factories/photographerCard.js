function photographerCardFactory(photographer) {
  // traitement de la data
  const { name, portrait, city, country, tagline, price, id } = photographer;

  const picture = `photos/photographers_portraits/${portrait}`; //lien photo de profil de la data

  function getUserCardDOM() {
    const listElement = document.createElement("ul");
    listElement.classList.add("photographer__section__ul");

    const liElement = document.createElement("li"); // crée l'élément article
    liElement.classList.add("photographer__section__ul__li");

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `./Photographer.html?${id}`);
    linkElement.classList.add("photographer__section__ul__li__a");

    const img = document.createElement("img"); // crée l'élément image
    img.setAttribute("src", picture); //attribute de l'image de la data
    img.classList.add("photographer__section__ul__li__a__img");

    const h2 = document.createElement("h2"); //crée l'élément le titre h2
    h2.textContent = name; //done le contenu élement name de data
    h2.classList.add("photographer__section__ul__li__a__h2");
    h2.ariaLabel = "nom du photographe";

    const locationElement = document.createElement("p");
    locationElement.textContent = `${city}, ${country}`;
    locationElement.classList.add("photographer__section__ul__li__location");

    const taglineElement = document.createElement("p");
    taglineElement.textContent = tagline;
    taglineElement.classList.add("photographer__section__ul__li__tagline");

    const priceElement = document.createElement("p");
    priceElement.textContent = price + "€/jour";
    priceElement.classList.add("photographer__section__ul__li__price");

    listElement.appendChild(liElement);
    liElement.appendChild(linkElement);
    linkElement.appendChild(img); // créer un enfant d'article : image
    linkElement.appendChild(h2); // créer un enfant d'article : image
    liElement.appendChild(locationElement);
    liElement.appendChild(taglineElement);
    liElement.appendChild(priceElement);

    return listElement; // retoune donnée article
  }

  return { name, picture, getUserCardDOM }; //retourne création élement
}
