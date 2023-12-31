import styled, { css } from 'styled-components';
import { PALETTE } from '../../common.constant';

export const StyledThemeButton = styled.button<{ $darkTheme?: boolean; }>`
  width: 70px;
  height: 70px;
  position: absolute;
  right: 50px;
  top: 50px;
  background-color: ${PALETTE.LIGHT_MAIN_COLOR};
  border: 0;
  border-radius: 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  cursor: pointer;
      
  ${props => !props.$darkTheme && css`
    background-color: ${PALETTE.DARK_MAIN_COLOR};
  `}

  @media screen and (max-width: 900px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 700px) {
    width: 55px;
    height: 55px;
    right: 35px;
    top: 35px;
  }

  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
    right: 25px;
    top: 25px;
  }
`;
