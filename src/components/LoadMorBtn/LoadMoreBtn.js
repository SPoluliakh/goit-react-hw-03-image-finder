import PropTypes from 'prop-types';
import { FcBinoculars } from 'react-icons/fc';
import { LoadMore } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={() => onClick()}>
      Load_ <FcBinoculars size="22" />
      _more
    </LoadMore>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func,
};
