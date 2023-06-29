import { StyledContainer } from './Loader.styled';

type LoaderPropType = {
  isDarkTheme: boolean
};

function Loader({ isDarkTheme }: LoaderPropType) {  
  return (
    <StyledContainer aria-label='Loading content' $darkTheme={isDarkTheme}/>
  );
}

export default Loader;
