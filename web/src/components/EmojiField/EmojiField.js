import { HiddenField } from '@redwoodjs/forms'

import { useState } from 'react'
import Picker from 'emoji-picker-react'

const EmojiField = ({ name, validation, errorClassName, formMethods }) => {
  const [emoji, setEmoji] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const updateEmoji = (event, emojiObject) => {
    formMethods.setValue('icon', emojiObject.emoji.codePointAt(0).toString(16))
    setEmoji(emojiObject.emoji.codePointAt(0).toString(16))
    setIsOpen(false)
  }
  return (
    <>
      <HiddenField
        name={name}
        validation={validation}
        errorClassName={errorClassName}
      />
      <div className="flex justify-center pb-2">
        {emoji ? String.fromCodePoint('0x' + emoji) : '(Pick an emoji)'}
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen ? <Picker onEmojiClick={updateEmoji} /> : null}
    </>
  )
}

export default EmojiField
