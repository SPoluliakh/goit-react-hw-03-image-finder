import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';
import { Box } from 'components/Box';
import { ImageGalleryList, LargeImg } from './ImageGallery.Styled';

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
          <LargeImg
            src={showModalInfo[0].largeImageURL}
            alt={showModalInfo[0].tags}
          />
        </Modal>
      )}
    </Box>
  );
};
