import { Searchbar } from '../../Searchbar/Searchbar';
import sadCat from '../RejectedVew/sad-cat-15.jpg';
import { SadCat } from './Rejected.styled';

export const Rejected = ({ onSubmit }) => {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <SadCat src={sadCat} alt="sad-cat" />
    </>
  );
};
