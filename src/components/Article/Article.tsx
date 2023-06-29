import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import moment from "moment";

import { fetchData } from '../../common.api';
import { BASE_URL } from "../../common.constant";
import { IData } from '../../common.type';

import Loader from '../Loader/Loader';
import Fallback from '../Fallback/Fallback';
import ThemeButton from '../ThemeButton/ThemeButton';

import { StyledContainer, StyledAuthorName, StyledArticle, StyledDate, StyledHeading, StyledImage } from './Article.styled';

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
    <StyledDate aria-label='The date of publication'>Published {moment(data.date.value).utc().format('LL')}</StyledDate>
    <StyledHeading aria-label='The article title'>{data.heading.value}</StyledHeading>
    <StyledAuthorName aria-label='The author name'>{data.author.value}</StyledAuthorName>
    <StyledArticle aria-label='The main text of the article'>
      {data.body.values.map((item, index) => <div key={index}>{parse(item)}</div>)}
    </StyledArticle>
    <StyledImage src={BASE_URL + data.mainImage.value.leadImage.url} alt={data.mainImage.value.leadImageCaption.value}></StyledImage>
  </>;
  
  const hasLoader = isLoading && <Loader isDarkTheme={isDarkTheme} />;

  const hasError = isError && <Fallback isDarkTheme={isDarkTheme} />;

  return (
    <StyledContainer $darkTheme={isDarkTheme}>
        <ThemeButton isDarkTheme={isDarkTheme} onChangeTheme={onChangeTheme} />
        {hasContent}
        {hasLoader}
        {hasError}
    </StyledContainer>
  );
}

export default App;
