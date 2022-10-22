import { ImSpinner } from 'react-icons/im';
import { Box } from 'components/Box';

export const PendingVew = () => {
  return (
    <Box pt="60px" margin="0 auto" display="flex" justifyContent="center">
      <ImSpinner size="32" />
    </Box>
  );
};
