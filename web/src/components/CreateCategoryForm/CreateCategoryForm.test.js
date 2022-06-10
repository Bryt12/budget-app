import { render } from '@redwoodjs/testing/web'

import CreateCategoryForm from './CreateCategoryForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateCategoryForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateCategoryForm />)
    }).not.toThrow()
  })
})
