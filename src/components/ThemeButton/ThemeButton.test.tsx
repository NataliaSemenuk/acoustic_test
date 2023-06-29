import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeNames } from '../../common.enum';

import ThemeButton from './ThemeButton';

describe('ThemeButton component', () => {
  test('onChangeTheme works', () => {
    const onChangeTheme = jest.fn();
    
    render(<ThemeButton onChangeTheme={onChangeTheme} isDarkTheme={true}/>);

    const button = screen.getByLabelText(`The button to change the page theme. The current theme is ${ThemeNames.DARK}`);

    userEvent.click(button);

    expect(onChangeTheme).toBeCalled();
  });

  test('The current theme is dark', () => {
    const onChangeTheme = jest.fn();
    
    render(<ThemeButton onChangeTheme={onChangeTheme} isDarkTheme={true}/>);

    const darkThemeButton = screen.getByLabelText(`The button to change the page theme. The current theme is ${ThemeNames.DARK}`);
    
    expect(darkThemeButton).toBeInTheDocument();
  });

  test('The current theme is light', () => {
    const onChangeTheme = jest.fn();
    
    render(<ThemeButton onChangeTheme={onChangeTheme} isDarkTheme={false}/>);

    const lightThemeButton = screen.getByLabelText(`The button to change the page theme. The current theme is ${ThemeNames.LIGHT}`);
    
    expect(lightThemeButton).toBeInTheDocument();
  });
});
