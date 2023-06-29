import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BASE_URL, API_PATH } from '../../common.constant';

import Article from './Article';

const mocksData = {
  elements: {
    author: {
        value: '',
    },
    body: {
        values: ['<p>Lorem ipsum</p>'],
    },
    date: {
        value: "2020-09-06T22:00:00Z",
    },
    heading: {
        value: '',
    },
    mainImage: {
      value: {
        leadImage: {
            url: "/resources/0874.jpg",
        }, 
        leadImageCaption: {
            value: '',
        },
      }
    }
  }
};

describe('Article component', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('renders Article elements', async () => {
    render(<Article />);
  
    const date = screen.findByLabelText('The date of publication');
    const heading = screen.findByLabelText('The article title');
    const authorName = screen.findByLabelText('The author name');
    const article = screen.findByLabelText('The main text of the article');
  
    expect(await date).toBeInTheDocument();
    expect(await heading).toBeInTheDocument();
    expect(await authorName).toBeInTheDocument();
    expect(await article).toBeInTheDocument();
  });
  
  test('fetches data from the API successfully', async () => {
    const mockJsonPromise = Promise.resolve(mocksData);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise, ok: true, status: 200 });
    
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  
    render(<Article />);
  
    const article = screen.findByLabelText('The main text of the article');
  
    expect(await article).toBeInTheDocument();
    expect(global.fetch).toBeCalled();
    expect(global.fetch).toBeCalledWith(BASE_URL + API_PATH);
  });
  
  test('fetches data from the API with an error', async () => {
    const mockFetchPromise = Promise.reject(new Error());

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  
    render(<Article />);
  
    const errorMessage = screen.findByText('Something went wrong!');
  
    expect(await errorMessage).toBeInTheDocument();
  });


  test('Changing theme', () => {
    render(<Article />);

    const onChangeTheme = jest.fn();
    const button = screen.getByLabelText(/The button to change the page theme. The current theme is/i);
    
    button.onclick = onChangeTheme;

    userEvent.click(button);

    expect(onChangeTheme).toBeCalled();
  });
});
