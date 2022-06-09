export const standard = defineScenario({
  usersToPlannedTransactions: {
    one: {
      data: {
        User: {
          create: {
            email: 'String3625569',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        PlannedTransaction: {
          create: {
            name: 'String',
            amount: 5079156.738606827,
            icon: 'String',
            Category: {
              create: {
                name: 'String',
                color: 'String',
                icon: 'String',
                User: {
                  create: {
                    email: 'String3833894',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },

            Timeframe: { create: { name: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        User: {
          create: {
            email: 'String5904061',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        PlannedTransaction: {
          create: {
            name: 'String',
            amount: 7014438.951017878,
            icon: 'String',
            Category: {
              create: {
                name: 'String',
                color: 'String',
                icon: 'String',
                User: {
                  create: {
                    email: 'String6386091',
                    hashedPassword: 'String',
                    salt: 'String',
                  },
                },
              },
            },

            Timeframe: { create: { name: 'String' } },
          },
        },
      },
    },
  },
})
