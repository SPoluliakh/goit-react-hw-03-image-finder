import { ImBinoculars } from 'react-icons/im';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      Load_ <ImBinoculars size="22" />
      _more
    </button>
  );
};
