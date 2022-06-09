import { db } from 'src/lib/db'

export const timeframes = () => {
  return db.timeframe.findMany()
}

export const timeframe = ({ id }) => {
  return db.timeframe.findUnique({
    where: { id },
  })
}

export const createTimeframe = ({ input }) => {
  return db.timeframe.create({
    data: input,
  })
}

export const updateTimeframe = ({ id, input }) => {
  return db.timeframe.update({
    data: input,
    where: { id },
  })
}

export const deleteTimeframe = ({ id }) => {
  return db.timeframe.delete({
    where: { id },
  })
}

export const Timeframe = {
  PlannedTransaction: (_obj, { root }) =>
    db.timeframe.findUnique({ where: { id: root.id } }).PlannedTransaction(),
}
