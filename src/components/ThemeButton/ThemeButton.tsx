import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as faSolidLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faRegularLightbulb} from '@fortawesome/free-regular-svg-icons'

import { PALETTE } from '../../common.constant';

import { StyledThemeButton } from './ThemeButton.styled';

type ThemeButtonPropType = {
  isDarkTheme: boolean,
  onChangeTheme: () => void
};

function ThemeButton({ isDarkTheme, onChangeTheme }: ThemeButtonPropType) {  
  return (
    <StyledThemeButton aria-label='The button to change the page theme' $darkTheme={isDarkTheme} onClick={onChangeTheme}>
      <FontAwesomeIcon style={{ 'color': isDarkTheme ? PALETTE.DARK_MAIN_COLOR : PALETTE.LIGHT_MAIN_COLOR, 'width': '50%', 'height': '50%' }} icon={isDarkTheme ? faSolidLightbulb : faRegularLightbulb } />
  </StyledThemeButton>
  );
}

export default ThemeButton;
