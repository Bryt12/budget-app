import { render } from '@redwoodjs/testing/web'

import CreatePlannedTransactionForm from './CreatePlannedTransactionForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreatePlannedTransactionForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePlannedTransactionForm />)
    }).not.toThrow()
  })
})
