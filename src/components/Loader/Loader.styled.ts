import styled, { css } from 'styled-components';
import { PALETTE } from '../../common.constant';

export const StyledContainer = styled.div<{ $darkTheme?: boolean; }>`
  border: 10px dotted ${PALETTE.LIGHT_MAIN_COLOR};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 5s linear infinite;

  ${props => !props.$darkTheme && css`
    border: 10px dotted ${PALETTE.DARK_MAIN_COLOR};
  `}

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`;
