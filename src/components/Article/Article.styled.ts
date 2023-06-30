
import styled, { css } from 'styled-components';
import { PALETTE } from "../../common.constant";

export const StyledContainer = styled.div<{ $darkTheme?: boolean; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 700px;
  height: fit-content;
  padding: 4em;
  margin: 0 2em 2em 2em;
  position: relative;
  background-color: ${PALETTE.DARK_MAIN_COLOR};
  color: ${PALETTE.LIGHT_MAIN_COLOR};
  border-radius: 0 0 40px 40px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  ${props => !props.$darkTheme && css`
    background-color: ${PALETTE.LIGHT_MAIN_COLOR};
    color: ${PALETTE.DARK_MAIN_COLOR};
`}
`;

export const StyledAuthorName = styled.span`
  margin: 0 auto;
  padding: 0.25em 1em;
`;

export const StyledArticle = styled.div`
  margin: 0.5em 0;
  padding: 0.25em 0;
  text-align: justify
`;

export const StyledDate = styled.span`
  margin: 0 auto;
  padding: 0.5em 1em;
  font-size: 20px;

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 64px;
  margin: 0 auto;
  padding: 0.1em 1em;

  @media screen and (max-width: 900px) {
    font-size: 40px;
  }

  @media screen and (max-width: 700px) {
    font-size: 32px;
  }

  @media screen and (max-width: 500px) {
    font-size: 26px;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;
