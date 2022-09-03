import {
  ImageGalleryItems,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <ImageGalleryItems key={id}>
      <ImageGalleryItemImage src={webformatURL} alt={id} data-id={id} />
    </ImageGalleryItems>
  );
};
