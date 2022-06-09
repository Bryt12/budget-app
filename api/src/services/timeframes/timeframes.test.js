import {
  timeframes,
  timeframe,
  createTimeframe,
  updateTimeframe,
  deleteTimeframe,
} from './timeframes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('timeframes', () => {
  scenario('returns all timeframes', async (scenario) => {
    const result = await timeframes()

    expect(result.length).toEqual(Object.keys(scenario.timeframe).length)
  })

  scenario('returns a single timeframe', async (scenario) => {
    const result = await timeframe({ id: scenario.timeframe.one.id })

    expect(result).toEqual(scenario.timeframe.one)
  })

  scenario('creates a timeframe', async () => {
    const result = await createTimeframe({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a timeframe', async (scenario) => {
    const original = await timeframe({ id: scenario.timeframe.one.id })
    const result = await updateTimeframe({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a timeframe', async (scenario) => {
    const original = await deleteTimeframe({ id: scenario.timeframe.one.id })
    const result = await timeframe({ id: original.id })

    expect(result).toEqual(null)
  })
})
