import { render } from '@redwoodjs/testing/web'

import EmojiField from './EmojiField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmojiField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmojiField />)
    }).not.toThrow()
  })
})
