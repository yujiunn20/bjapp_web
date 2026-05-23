(function () {
  function makeAbsoluteUrl(src) {
    try {
      return new URL(src, window.location.href).href;
    } catch (error) {
      return src;
    }
  }

  function imageLabel(image) {
    const figure = image.closest("figure");
    const caption = figure ? figure.querySelector("figcaption") : null;
    return (caption && caption.textContent.trim()) || image.alt || "";
  }

  document.querySelectorAll(".content-figure img, .app-screenshot-card img").forEach((image) => {
    image.dataset.lightboxImage = "true";
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", image.alt ? `放大圖片：${image.alt}` : "放大圖片");

    function openImage() {
      window.parent.postMessage({
        type: "open-image-lightbox",
        src: makeAbsoluteUrl(image.getAttribute("src")),
        alt: image.alt || "",
        caption: imageLabel(image)
      }, "*");
    }

    image.addEventListener("click", openImage);
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImage();
      }
    });
  });
})();
