import { render } from '@redwoodjs/testing/web'

import PlannedTransactionFormFull from './PlannedTransactionFormFull'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlannedTransactionFormFull', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannedTransactionFormFull />)
    }).not.toThrow()
  })
})
