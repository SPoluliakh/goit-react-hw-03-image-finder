import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';
import { ImageGalleryList } from './ImageGallery.Styled';
import { Box } from 'components/Box';

export const ImageGallery = ({
  searchInfo,
  openModal,
  isModalOpen,
  showModalInfo,
  closeModal,
}) => {
  return (
    <Box padding="0 15px" margin=" 0 auto" width="1200px">
      <ImageGalleryList>
        <ImageGalleryItem
          searchInfo={searchInfo}
          onClick={openModal}
          isModalOpen={isModalOpen}
        />
      </ImageGalleryList>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <img
            src={showModalInfo[0].largeImageURL}
            alt={showModalInfo[0].tags}
          />
        </Modal>
      )}
    </Box>
  );
};
