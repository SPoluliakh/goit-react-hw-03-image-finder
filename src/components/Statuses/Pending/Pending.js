import { Searchbar } from '../../Searchbar/Searchbar';
import { PendingVew } from '../PendingVew/PendingVew';
import { ImageGallery } from '../../ImageGallery/ImageGallery';

export const Pending = ({ onSubmit, ...otherProps }) => {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery {...otherProps} />
      <PendingVew />
    </>
  );
};
