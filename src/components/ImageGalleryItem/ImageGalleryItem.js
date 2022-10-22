import PropTypes from 'prop-types';
import { GalleryItems, Photo } from './ImageGaleryItem.styled';

export const ImageGalleryItem = ({ tags, webformatURL, onClick }) => {
  return (
    <>
      <GalleryItems>
        <Photo src={webformatURL} alt={tags} onClick={onClick} />
      </GalleryItems>
    </>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
