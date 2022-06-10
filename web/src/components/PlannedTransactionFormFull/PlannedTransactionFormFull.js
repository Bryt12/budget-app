import { useState } from 'react'

import CreatePlannedTransactionCell from 'src/components/CreatePlannedTransactionCell'
import CreateCategoryForm from 'src/components/CreateCategoryForm'

const PlannedTransactionFormFull = () => {
  let [isOpenCategory, setIsOpenCategory] = useState(false)

  return (
    <>
      <div className="flex pl-5 pt-5">
        <div className="pr-3">
          <CreatePlannedTransactionCell
            updateCategoryForm={setIsOpenCategory}
            isOpenCategory={isOpenCategory}
          />
        </div>
        {isOpenCategory ? (
          <CreateCategoryForm updateCategoryForm={setIsOpenCategory} />
        ) : null}
      </div>
    </>
  )
}

export default PlannedTransactionFormFull
