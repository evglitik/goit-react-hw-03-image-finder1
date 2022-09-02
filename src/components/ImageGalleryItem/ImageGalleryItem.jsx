export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li key={id}>
      <img src={webformatURL} alt={id} />
    </li>
  );
};
