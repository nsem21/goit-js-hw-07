import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createPictureCards(galleryItems);
let lightbox;

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener("click", (e) => {
    e.preventDefault();
    if (toCheckTarget(e)) {
        const lightboxImg = e.target.dataset.source;
        createLightbox(lightboxImg);
        toAct(true);



    }

})



function createPictureCards(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
                <a
                class="gallery__link"
                href="${original}"
                >
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
            </div>`;

        })
        .join('');

}

function createLightbox(image) {
    lightbox = basicLightbox.create(`
        <div class="modal">
        
        <img src="${image}" width="800" >

        </div>
    `);
    return;
}

function toCheckTarget(event) {
    const isPicture = event.target.classList.contains('gallery__image');
    if (!isPicture) {
        return;
    } else {
        return true;
    }

}

function toAct(isActive = false) {
    if (isActive) {
        lightbox.show();
        window.addEventListener('keydown', onKeyPress);
    } else {
        lightbox.close();
        window.removeEventListener('keydown', onKeyPress);
    }
}


function onKeyPress(event) {

    if (event.code === "Escape") {
        toAct();
    }


}