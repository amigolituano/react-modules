import React from 'react';
import { render } from '@testing-library/react';

import Contacts from './contacts';

describe('contacts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contacts />);
    expect(baseElement).toBeTruthy();
  });
});
