import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons'

import { PALETTE } from '../../common.constant';

import { StyledContainer, StyledTitle } from './Fallback.styled';

type FallbackPropType = {
  isDarkTheme: boolean
};

function Fallback({ isDarkTheme }: FallbackPropType) {  
  return (
    <StyledContainer>
      <FontAwesomeIcon style={{ 'color': isDarkTheme ? PALETTE.LIGHT_MAIN_COLOR : PALETTE.DARK_MAIN_COLOR, 'width': '30%', 'height': '30%' }} icon={faBug} />
      <StyledTitle $darkTheme={isDarkTheme}>Something went wrong!</StyledTitle>
    </StyledContainer>
  );
}

export default Fallback;
