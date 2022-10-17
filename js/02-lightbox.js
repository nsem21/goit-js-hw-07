import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createPictureCards(galleryItems);


galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', (e) => {
    e.preventDefault();
})

function createPictureCards(gallery) {
    return gallery
        .map(({ preview, original, description }) => {
            return `<a
                class="gallery__item"
                href="${original}"
                >
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
                </a>
            </div>`;

        })
        .join('');

}
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});