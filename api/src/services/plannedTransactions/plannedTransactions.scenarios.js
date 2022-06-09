export const standard = defineScenario({
  plannedTransaction: {
    one: {
      data: {
        name: 'String',
        amount: 3264337.213110773,
        icon: 'String',
        Category: {
          create: {
            name: 'String',
            color: 'String',
            icon: 'String',
            User: {
              create: {
                email: 'String3512607',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },

        Timeframe: { create: { name: 'String' } },
      },
    },

    two: {
      data: {
        name: 'String',
        amount: 9413785.701870043,
        icon: 'String',
        Category: {
          create: {
            name: 'String',
            color: 'String',
            icon: 'String',
            User: {
              create: {
                email: 'String4042675',
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
})
