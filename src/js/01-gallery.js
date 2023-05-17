import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="Image description" />
   </a>
</li>`;
    })
    .join('');
}

const galleryItemMarkup = createGalleryItemsMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItemMarkup);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});
