import React from 'react'
import {screen, render, fireEvent, waitFor} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'

import {Form} from './form'

const server = setupServer(
  rest.post('/products', (req, res, ctx) => res(ctx.status(201))),
)

beforeAll(() => server.listen())

afterAll(() => server.close())

beforeEach(() => render(<Form />))

describe('when the form is mounted', () => {
  it('There must be a create product form page', () => {
    expect(
      screen.getByRole('heading', {name: /create product/i}),
    ).toBeInTheDocument()
  })

  it('should exists the fileds: name, size and type', () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument()

    expect(screen.queryByText(/electronic/i)).toBeInTheDocument()
    expect(screen.queryByText(/furniture/i)).toBeInTheDocument()
    expect(screen.queryByText(/clothing/i)).toBeInTheDocument()
  })
  it('should exists the submit button', () => {
    expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
  })
})
describe('when the user submits the form without values', () => {
  it('should display validation messages', async () => {
    expect(screen.queryByText(/the name is required/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/the size is required/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/the type is required/i)).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()
    expect(screen.queryByText(/the size is required/i)).toBeInTheDocument()
    expect(screen.queryByText(/the type is required/i)).toBeInTheDocument()

    await waitFor(() =>
      expect(screen.getByRole('button', {name: /submit/i})).not.toBeDisabled(),
    )
  })
})
describe('when the user blurs and empty field', () => {
  it('should display validation messages for the input name', () => {
    render(<Form />)

    fireEvent.blur(screen.getByLabelText(/name/i), {
      target: {name: 'name', value: ''},
    })

    expect(screen.queryByText(/the name is required/i)).toBeInTheDocument()
  })
  it('should display validation messages for the input size', () => {
    render(<Form />)

    fireEvent.blur(screen.getByLabelText(/size/i), {
      target: {name: 'size', value: ''},
    })

    expect(screen.queryByText(/the size is required/i)).toBeInTheDocument()
  })
})

describe('when the user submits the form', () => {
  it('should the submit button be disabled until the request is done', async () => {
    expect(screen.getByRole('button', {name: /submit/i})).not.toBeDisabled()

    fireEvent.click(screen.getByRole('button', {name: /submit/i}))

    expect(screen.getByRole('button', {name: /submit/i})).toBeDisabled()

    await waitFor(() =>
      expect(screen.getByRole('button', {name: /submit/i})).not.toBeDisabled(),
    )
  })
})
