import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as faSolidLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faRegularLightbulb} from '@fortawesome/free-regular-svg-icons'
import parse from 'html-react-parser';
import moment from "moment";

import { fetchData } from '../../common.api';
import { BASE_URL, PALETTE } from "../../common.constant";
import { IData } from '../../common.type';

import Loader from '../Loader/Loader';
import Fallback from '../Fallback/Fallback';

import { StyledContainer, StyledAuthorName, StyledArticle, StyledDate, StyledHeading, StyledImage, StyledThemeButton } from './Article.styled';

function App() {
  const [data, setData] = useState<IData | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchData().then(({data, isError}) => {
      setData(data);
      setIsError(isError);
      setIsLoading(false);
    });
    
  }, []);

  const onChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const hasContent = data && !isLoading && !isError && <>
    <StyledDate>Published {moment(data.date.value).utc().format('LL')}</StyledDate>
    <StyledHeading>{data.heading.value}</StyledHeading>
    <StyledAuthorName>{data.author.value}</StyledAuthorName>
    <StyledArticle>
      {data.body.values.map(item => <>{parse(item)}</>)}
    </StyledArticle>
    <StyledImage src={BASE_URL + data.mainImage.value.leadImage.url} alt={data.mainImage.value.leadImageCaption.value}></StyledImage>
  </>;
  
  const hasLoader = isLoading && <Loader isDarkTheme={isDarkTheme} />;

  const hasError = isError && <Fallback isDarkTheme={isDarkTheme} />;

  return (
    <StyledContainer $darkTheme={isDarkTheme}>
        <StyledThemeButton $darkTheme={isDarkTheme} onClick={onChangeTheme}>
        <FontAwesomeIcon style={{ 'color': isDarkTheme ? PALETTE.DARK_MAIN_COLOR : PALETTE.LIGHT_MAIN_COLOR, 'width': '50%', 'height': '50%' }} icon={isDarkTheme ? faSolidLightbulb : faRegularLightbulb } />
        </StyledThemeButton>
        {hasContent}
        {hasLoader}
        {hasError}
    </StyledContainer>
  );
}

export default App;
