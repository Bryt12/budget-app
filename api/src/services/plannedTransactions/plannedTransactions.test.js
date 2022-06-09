import {
  plannedTransactions,
  plannedTransaction,
  createPlannedTransaction,
  updatePlannedTransaction,
  deletePlannedTransaction,
} from './plannedTransactions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plannedTransactions', () => {
  scenario('returns all plannedTransactions', async (scenario) => {
    const result = await plannedTransactions()

    expect(result.length).toEqual(
      Object.keys(scenario.plannedTransaction).length
    )
  })

  scenario('returns a single plannedTransaction', async (scenario) => {
    const result = await plannedTransaction({
      id: scenario.plannedTransaction.one.id,
    })

    expect(result).toEqual(scenario.plannedTransaction.one)
  })

  scenario('creates a plannedTransaction', async (scenario) => {
    const result = await createPlannedTransaction({
      input: {
        name: 'String',
        amount: 4220017.035308945,
        categoryId: scenario.plannedTransaction.two.categoryId,
        icon: 'String',
        timeframeId: scenario.plannedTransaction.two.timeframeId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.amount).toEqual(4220017.035308945)
    expect(result.categoryId).toEqual(
      scenario.plannedTransaction.two.categoryId
    )

    expect(result.icon).toEqual('String')
    expect(result.timeframeId).toEqual(
      scenario.plannedTransaction.two.timeframeId
    )
  })

  scenario('updates a plannedTransaction', async (scenario) => {
    const original = await plannedTransaction({
      id: scenario.plannedTransaction.one.id,
    })

    const result = await updatePlannedTransaction({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a plannedTransaction', async (scenario) => {
    const original = await deletePlannedTransaction({
      id: scenario.plannedTransaction.one.id,
    })

    const result = await plannedTransaction({ id: original.id })

    expect(result).toEqual(null)
  })
})
