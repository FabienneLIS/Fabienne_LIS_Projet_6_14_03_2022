function mediaFactoryPage(media) {
  const { image, photographerId } = media;
  const mediaPicture = `photos/${photographerId}/${image}`;

  function getDataDOM() {
    const sectionElement = document.createElement("section");
    sectionElement.classList.add("item__section");

    const photoList = document.createElement("ul");
    photoList.classList.add("item__section__ul");

    const pictureItem = document.createElement("li");
    pictureItem.classList.add("item__section__ul");

    const picture = document.createElement("img"); // crée l'élément image
    picture.setAttribute("src", mediaPicture); //attribute de l'image de la data
    picture.classList.add("photographer__section__ul__li__a__img");

    main.appendChild(sectionElement);

    return sectionElement;
  }
  return getDataDOM;
}
