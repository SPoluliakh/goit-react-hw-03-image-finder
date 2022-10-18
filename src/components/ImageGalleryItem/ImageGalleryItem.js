import { GalleryItems, Photo } from './ImageGaleryItem.styled';

export const ImageGalleryItem = ({ searchInfo, onClick }) => {
  return (
    <>
      {searchInfo.map(({ id, webformatURL, tags }) => {
        return (
          <GalleryItems key={id}>
            <Photo src={webformatURL} alt={tags} onClick={onClick} />
          </GalleryItems>
        );
      })}
    </>
  );
};
