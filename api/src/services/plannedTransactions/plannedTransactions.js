import { db } from 'src/lib/db'

export const plannedTransactions = () => {
  return db.plannedTransaction.findMany()
}

export const plannedTransaction = ({ id }) => {
  return db.plannedTransaction.findUnique({
    where: { id },
  })
}

export const createPlannedTransaction = ({ input }) => {
  return db.plannedTransaction.create({
    data: input,
  })
}

export const updatePlannedTransaction = ({ id, input }) => {
  return db.plannedTransaction.update({
    data: input,
    where: { id },
  })
}

export const deletePlannedTransaction = ({ id }) => {
  return db.plannedTransaction.delete({
    where: { id },
  })
}

export const PlannedTransaction = {
  Category: (_obj, { root }) =>
    db.plannedTransaction.findUnique({ where: { id: root.id } }).Category(),
  Timeframe: (_obj, { root }) =>
    db.plannedTransaction.findUnique({ where: { id: root.id } }).Timeframe(),
  UsersToPlannedTransactions: (_obj, { root }) =>
    db.plannedTransaction
      .findUnique({ where: { id: root.id } })
      .UsersToPlannedTransactions(),
}
