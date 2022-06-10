import { render } from '@redwoodjs/testing/web'

import CategoryField from './CategoryField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoryField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryField />)
    }).not.toThrow()
  })
})
