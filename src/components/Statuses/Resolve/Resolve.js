import { Searchbar } from '../../Searchbar/Searchbar';
import { ImageGallery } from '../../ImageGallery/ImageGallery';
import { LoadMoreBtn } from '../../LoadMorBtn/LoadMoreBtn';

export const Resolve = ({
  onSubmit,
  loadMoreBtn,
  handleCount,
  ...otherProps
}) => {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery {...otherProps} />
      {loadMoreBtn && <LoadMoreBtn onClick={handleCount} />}
    </>
  );
};
