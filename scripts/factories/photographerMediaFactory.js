function createImageDomElement(src, title) {
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", src);
  imageElement.setAttribute("alt", title);
  imageElement.setAttribute("tabindex", 2);
  imageElement.classList.add("photographer__main__gallery__ul__li__Media");

  return imageElement;
}

function createVideoDomElement(src, title) {
  const videoElement = document.createElement("video");
  /*videoElement.setAttribute("width", "500px");
  videoElement.setAttribute("height", "500px");*/
  videoElement.setAttribute("controls", true);
  videoElement.setAttribute("tabindex", 2);
  videoElement.setAttribute("src", src);
  videoElement.classList.add("photographer__main__gallery__ul__li__Media");

  videoElement.textContent =
    "Sorry, your browser doesn't support embedded videos.";

  return videoElement;
}

function photographerMediaCardFactory(media) {
  const { title, image, likes, photographerId, video } = media;

  function getMediaCardDom() {
    const list = document.createElement("li");
    list.classList.add("photographer__main__gallery__ul__li");
    list.setAttribute(
      "aria-label",
      "Liste des photos et vidéos du photographe"
    );
    list.setAttribute("tabindex", -1);

    let media = null;
    if (image) {
      const srcMedia = `assets/photos/${photographerId}/${image}`;
      media = createImageDomElement(srcMedia, title);
    } else if (video) {
      const srcMedia = `assets/photos/${photographerId}/${video}`;
      media = createVideoDomElement(srcMedia, title);
    }

    const legend = document.createElement("div");
    legend.classList.add("photographer__main__gallery__ul__li__legend");

    const titleMedia = document.createElement("p");
    titleMedia.textContent = title;
    titleMedia.setAttribute("tabindex", 2);
    titleMedia.classList.add(
      "photographer__main__gallery__ul__li__legend__title"
    );

    const likesNumber = document.createElement("p");
    likesNumber.textContent = likes;
    likesNumber.setAttribute("aria-label", "nombre de j'aime " + likes);
    likesNumber.setAttribute("tabindex", 2);
    likesNumber.classList.add(
      "photographer__main__gallery__ul__li__legend__numberLikes"
    );

    const iconLikes = document.createElement("button");
    iconLikes.innerHTML = '<i class="fas fa-heart"></i>';
    iconLikes.setAttribute("aria-label", "Cliquez pour liker la photo.");
    iconLikes.setAttribute("tabindex", 2);
    iconLikes.classList.add(
      "photographer__main__gallery__ul__li__legend__iconLikes"
    );
    console.log("media", media);
    list.appendChild(media);
    list.appendChild(legend);
    legend.appendChild(titleMedia);
    legend.appendChild(likesNumber);
    legend.appendChild(iconLikes);

    return list;
  }

  return { getMediaCardDom };
}
