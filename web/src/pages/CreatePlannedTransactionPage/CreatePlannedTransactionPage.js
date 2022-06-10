import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

import PlannedTransactionFormFull from 'src/components/PlannedTransactionFormFull'

const CreatePlannedTransactionPage = () => {
  return (
    <>
      <MetaTags
        title="CreatePlannedTransaction"
        description="CreatePlannedTransaction page"
      />
      <PlannedTransactionFormFull />
    </>
  )
}

export default CreatePlannedTransactionPage
