import React from 'react';
import { screen, render } from '@testing-library/react';

import {Form} from './form';

describe('when the form is mounted', () => {
  beforeEach(() => render(<Form />));
  
  it('There must be a create product form page', () => {
    expect(screen.getByRole('heading', {name: /create product/i})).toBeInTheDocument();
  })

  it('should exists the fileds: name, size and type', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument()

    expect(screen.queryByText(/electronic/i)).toBeInTheDocument()
    expect(screen.queryByText(/furniture/i)).toBeInTheDocument()
    expect(screen.queryByText(/clothing/i)).toBeInTheDocument()

  })
})