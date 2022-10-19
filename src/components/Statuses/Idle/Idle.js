import { Searchbar } from '../../Searchbar/Searchbar';
import { IdleText } from './Idle.styled';

export const Idle = ({ onSubmit }) => {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <IdleText>Enter keyword.</IdleText>
    </>
  );
};
