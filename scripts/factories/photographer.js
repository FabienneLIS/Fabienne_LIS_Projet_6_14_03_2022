function photographerFactory(photographer) {
  // traitement de la data
  const { name, portrait, city, country, tagline, price, id } = photographer;

  const picture = `assets/photos/photographers_portraits/${portrait}`; //lien photo de profil de la data

  function getUserCardDOM() {
    const liElement = document.createElement("li"); // crée l'élément article
    liElement.setAttribute("aria-label", "fiche du photographe " + name);
    liElement.setAttribute("href", "#imagePhotographe");
    liElement.setAttribute("tabindex", 1);
    liElement.classList.add("photographer__section__ul__li");

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", `./photographer.html?id=${id}`);
    liElement.setAttribute("tabindex", 1);
    /*linkElement.setAttribute("aria-label", "lien vers la page du photographe");*/
    linkElement.classList.add("photographer__section__ul__li__a");

    const img = document.createElement("img"); // crée l'élément image
    img.setAttribute("src", picture); //attribute de l'image de la data
    img.setAttribute("alt", "portrait du photographe " + name);
    img.setAttribute("tabindex", 2);
    img.setAttribute("id", "imagePhotographe");
    img.classList.add("photographer__section__ul__li__a__picture");

    const h2 = document.createElement("h2"); //crée l'élément le titre h2
    h2.textContent = name; //done le contenu élement name de data
    /*h2.setAttribute("aria-label", name);*/
    h2.setAttribute("tabindex", 2);
    h2.classList.add("photographer__section__ul__li__a__name");

    const locationElement = document.createElement("p");
    locationElement.textContent = `${city}, ${country}`;
    locationElement.setAttribute("tabindex", 2);
    locationElement.setAttribute(
      "aria-label",
      "localisation du photographe");
    locationElement.classList.add("photographer__section__ul__li__location");

    const taglineElement = document.createElement("p");
    taglineElement.textContent = tagline;
    taglineElement.setAttribute("aria-label", "citation");
    taglineElement.setAttribute("tabindex", 2);
    taglineElement.classList.add("photographer__section__ul__li__tagline");

    const priceElement = document.createElement("p");
    priceElement.textContent = price + "€/jour";
    priceElement.setAttribute(
      "arialabel",
      "Le tarif du photographe à la journée.");
    priceElement.setAttribute("tabindex", 2);
    priceElement.classList.add("photographer__section__ul__li__price");

    liElement.appendChild(linkElement);
    linkElement.appendChild(img); // créer un enfant d'article : image
    linkElement.appendChild(h2); // créer un enfant d'article : image
    liElement.appendChild(locationElement);
    liElement.appendChild(taglineElement);
    liElement.appendChild(priceElement);

    return liElement; // retoune donnée article
  }

  return { name, picture, getUserCardDOM }; //retourne création élement
}

/*linkElement.addEventListener("click", () => {
  window.open("id".html);
});*/
