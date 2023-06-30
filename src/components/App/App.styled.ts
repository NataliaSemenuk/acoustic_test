import styled from 'styled-components';

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  background-color: rgb(41, 46, 56, 0.6);
  min-height: 100vh;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (max-width: 700px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
