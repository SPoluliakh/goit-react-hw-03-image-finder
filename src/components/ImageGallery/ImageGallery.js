import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';

export const ImageGallery = ({
  searchInfo,
  openModal,
  isModalOpen,
  showModalInfo,
  closeModal,
}) => {
  return (
    <>
      <ul>
        <ImageGalleryItem
          searchInfo={searchInfo}
          onClick={openModal}
          isModalOpen={isModalOpen}
        />
      </ul>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <img
            src={showModalInfo[0].largeImageURL}
            alt={showModalInfo[0].tags}
          />
        </Modal>
      )}
    </>
  );
};
