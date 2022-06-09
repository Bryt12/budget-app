import { db } from 'src/lib/db'

export const usersToPlannedTransactionses = () => {
  return db.usersToPlannedTransactions.findMany()
}

export const usersToPlannedTransactions = ({ id }) => {
  return db.usersToPlannedTransactions.findUnique({
    where: { id },
  })
}

export const createUsersToPlannedTransactions = ({ input }) => {
  return db.usersToPlannedTransactions.create({
    data: input,
  })
}

export const updateUsersToPlannedTransactions = ({ id, input }) => {
  return db.usersToPlannedTransactions.update({
    data: input,
    where: { id },
  })
}

export const deleteUsersToPlannedTransactions = ({ id }) => {
  return db.usersToPlannedTransactions.delete({
    where: { id },
  })
}

export const UsersToPlannedTransactions = {
  User: (_obj, { root }) =>
    db.usersToPlannedTransactions.findUnique({ where: { id: root.id } }).User(),
  PlannedTransaction: (_obj, { root }) =>
    db.usersToPlannedTransactions
      .findUnique({ where: { id: root.id } })
      .PlannedTransaction(),
}
