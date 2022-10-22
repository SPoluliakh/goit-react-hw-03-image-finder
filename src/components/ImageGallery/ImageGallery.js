import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';
import { Box } from 'components/Box';
import { ImageGalleryList, LargeImg, SadCat } from './ImageGallery.Styled';
import { PendingVew } from '../Statuses/PendingVew/PendingVew';
import sadCat from '../Statuses/RejectedVew/sad-cat-15.jpg';
import { LoadMoreBtn } from '../LoadMorBtn/LoadMoreBtn';

export const ImageGallery = ({
  searchInfo,
  openModal,
  isModalOpen,
  showModalInfo,
  closeModal,
  status,
  loadMoreBtn,
  handleCount,
}) => {
  return (
    <>
      {status === 'pending' && <PendingVew />}
      {status === 'rejected' && <SadCat src={sadCat} alt="sad-cat" />}
      {status === 'resolved' && (
        <Box padding="0 15px" margin=" 0 auto" width="1200px">
          <ImageGalleryList>
            {searchInfo.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                onClick={openModal}
              />
            ))}
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
      )}
      {loadMoreBtn && <LoadMoreBtn onClick={handleCount} />}
    </>
  );
};

ImageGallery.propTypes = {
  searchInfo: PropTypes.array.isRequired,
  openModal: PropTypes.func,
  isModalOpen: PropTypes.bool.isRequired,
  showModalInfo: PropTypes.array,
  closeModal: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  loadMoreBtn: PropTypes.bool,
  handleCount: PropTypes.func,
};
