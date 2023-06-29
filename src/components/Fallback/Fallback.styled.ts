import styled, { css } from 'styled-components';
import { PALETTE } from '../../common.constant';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${PALETTE.LIGHT_MAIN_COLOR};
`;

export const StyledTitle = styled.p<{ $darkTheme?: boolean; }>`
  color: ${PALETTE.LIGHT_MAIN_COLOR};

  ${props => !props.$darkTheme && css`
    color: ${PALETTE.DARK_MAIN_COLOR};
  `}
`;
