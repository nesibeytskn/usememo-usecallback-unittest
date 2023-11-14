import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('title and card render correctly', () => {
    const {getByText, getByTestId} = render(<HomeScreen />);

    //const titleElement = getByTestId('AppTitle');
    const appTitle = getByText('Kişi Listesi');
    expect(appTitle).toBeTruthy();

    const titleElement = getByTestId('appTitle');
    expect(titleElement).not.toBeNull();

    const initialColor = titleElement.props.style[1].color;
    console.log(initialColor);
    expect(initialColor).toBe('white');

    fireEvent.press(titleElement);
    const updatedColor = titleElement.props.style[1].color;
    expect(updatedColor).toBe('#16c784');
  });
});
