import { StyledContainer } from './Loader.styled';

type LoaderPropType = {
  isDarkTheme: boolean
};

function Loader({ isDarkTheme }: LoaderPropType) {  
  return (
    <StyledContainer $darkTheme={isDarkTheme}/>
  );
}

export default Loader;
