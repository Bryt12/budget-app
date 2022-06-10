import { render } from '@redwoodjs/testing/web'

import CreatePlannedTransactionPage from './CreatePlannedTransactionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreatePlannedTransactionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePlannedTransactionPage />)
    }).not.toThrow()
  })
})
