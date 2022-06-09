import {
  usersToPlannedTransactionses,
  usersToPlannedTransactions,
  createUsersToPlannedTransactions,
  updateUsersToPlannedTransactions,
  deleteUsersToPlannedTransactions,
} from './usersToPlannedTransactionses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('usersToPlannedTransactionses', () => {
  scenario('returns all usersToPlannedTransactionses', async (scenario) => {
    const result = await usersToPlannedTransactionses()

    expect(result.length).toEqual(
      Object.keys(scenario.usersToPlannedTransactions).length
    )
  })

  scenario('returns a single usersToPlannedTransactions', async (scenario) => {
    const result = await usersToPlannedTransactions({
      id: scenario.usersToPlannedTransactions.one.id,
    })

    expect(result).toEqual(scenario.usersToPlannedTransactions.one)
  })

  scenario('creates a usersToPlannedTransactions', async (scenario) => {
    const result = await createUsersToPlannedTransactions({
      input: {
        userId: scenario.usersToPlannedTransactions.two.userId,
        plannedTransactionId:
          scenario.usersToPlannedTransactions.two.plannedTransactionId,
      },
    })

    expect(result.userId).toEqual(
      scenario.usersToPlannedTransactions.two.userId
    )

    expect(result.plannedTransactionId).toEqual(
      scenario.usersToPlannedTransactions.two.plannedTransactionId
    )
  })

  scenario('updates a usersToPlannedTransactions', async (scenario) => {
    const original = await usersToPlannedTransactions({
      id: scenario.usersToPlannedTransactions.one.id,
    })

    const result = await updateUsersToPlannedTransactions({
      id: original.id,
      input: { userId: scenario.usersToPlannedTransactions.two.userId },
    })

    expect(result.userId).toEqual(
      scenario.usersToPlannedTransactions.two.userId
    )
  })

  scenario('deletes a usersToPlannedTransactions', async (scenario) => {
    const original = await deleteUsersToPlannedTransactions({
      id: scenario.usersToPlannedTransactions.one.id,
    })

    const result = await usersToPlannedTransactions({ id: original.id })

    expect(result).toEqual(null)
  })
})
