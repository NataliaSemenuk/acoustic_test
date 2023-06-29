import { render, screen, fireEvent } from '@testing-library/react';

import { PALETTE } from '../../common.constant';

import ThemeButton from './ThemeButton';

test('onChangeTheme works', async () => {
  const onChangeTheme = jest.fn();
  
  render(<ThemeButton onChangeTheme={onChangeTheme} isDarkTheme={true}/>);

  const button = screen.getByLabelText('The button to change the page theme');

  fireEvent.click(button);

  // TODO
  // expect(button).toHaveStyle(`background-color: ${PALETTE.DARK_MAIN_COLOR}`);
  expect(button).toBeInTheDocument();
  expect(onChangeTheme).toBeCalled();
});
