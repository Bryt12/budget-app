import { SelectField } from '@redwoodjs/forms'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const CategoryField = ({
  validation,
  errorClassName,
  categories,
  updateCategoryForm,
  isOpenCategory,
}) => {
  const onSubmit = () => {
    updateCategoryForm(!isOpenCategory)
  }

  return (
    <>
      <div>
        <SelectField
          name="categoryId"
          validation={validation}
          errorClassName={errorClassName}
        >
          <option value="">Select a category</option>
          {categories.length > 0
            ? categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.icon
                    ? String.fromCodePoint('0x' + category.icon)
                    : ''}{' '}
                  {category.name}
                </option>
              ))
            : null}
        </SelectField>
        <button
          type="button"
          onClick={onSubmit}
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
        >
          {isOpenCategory ? (
            <FontAwesomeIcon color="gray" icon={faMinus} />
          ) : (
            <FontAwesomeIcon color="gray" icon={faPlus} />
          )}
        </button>
      </div>
    </>
  )
}

export default CategoryField
