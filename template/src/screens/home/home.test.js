import React from 'react';
import {render} from '@testing-library/react-native';
import Home from './home';

describe('Home Screen', () => {
  it('should render the title', () => {
    const {getByText} = render(<Home />);

    const label = getByText('Hello World');
    expect(label).toBeTruthy();
  });
});
