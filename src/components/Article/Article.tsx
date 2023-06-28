import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb as faSolidLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as faRegularLightbulb} from '@fortawesome/free-regular-svg-icons'
import parse from 'html-react-parser';
import moment from "moment";
import { fetchData } from '../../common.api';
import { BASE_URL } from "../../common.constant";
import { IData } from '../../common.type';
import { StyledContainer, StyledAuthorName, StyledArticle, StyledDate, StyledHeading, StyledImage, StyledThemeButton } from './Article.styled';
import Loader from '../Loader/Loader';

function App() {
  const [data, setData] = useState<IData | null>(null);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setIsLoading(false);
    });
    
  }, []);

  const onChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const hasContent = data && !isLoading && <>
    <StyledDate>Published {moment(data.date.value).utc().format('LL')}</StyledDate>
    <StyledHeading>{data.heading.value}</StyledHeading>
    <StyledAuthorName>{data.author.value}</StyledAuthorName>
    <StyledArticle>
      {data.body.values.map(item => <>{parse(item)}</>)}
    </StyledArticle>
    <StyledImage src={BASE_URL + data.mainImage.value.leadImage.url} alt={data.mainImage.value.leadImageCaption.value}></StyledImage>
  </>;
  
  const hasLoader = isLoading && <Loader isDarkTheme={isDarkTheme} />;

  return (
    <StyledContainer $darkTheme={isDarkTheme}>
        <StyledThemeButton $darkTheme={isDarkTheme} onClick={onChangeTheme}>
        <FontAwesomeIcon style={{ 'color': isDarkTheme ? 'rgb(41, 46, 56)' : 'white', 'width': '50%', 'height': '50%' }} icon={isDarkTheme ? faSolidLightbulb : faRegularLightbulb } />
        </StyledThemeButton>
        {hasContent}
        {hasLoader}
    </StyledContainer>
  );
}

export default App;
