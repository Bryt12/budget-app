import { render } from '@redwoodjs/testing/web'

import BudgetLayout from './BudgetLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BudgetLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BudgetLayout />)
    }).not.toThrow()
  })
})
