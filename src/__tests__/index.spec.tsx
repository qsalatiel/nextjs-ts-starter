import { render, screen } from '@testing-library/react'
import Home from '@pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('home-title')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('NextJS Typescript Starter')
  })
})
