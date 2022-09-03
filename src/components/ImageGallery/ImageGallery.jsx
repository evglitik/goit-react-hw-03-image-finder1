import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {

  }

  render() {
    const { images, onModal } = this.props;

    return (
      <ImageGalleryList onClick={e => onModal(e.target.dataset.id)}>
        {images.map(({ id, webformatURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
            />
          );
        })}
      </ImageGalleryList>
    );
  }
};
