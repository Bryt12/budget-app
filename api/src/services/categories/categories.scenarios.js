export const standard = defineScenario({
  category: {
    one: {
      data: {
        name: 'String',
        color: 'String',
        icon: 'String',
        User: {
          create: {
            email: 'String8798052',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        name: 'String',
        color: 'String',
        icon: 'String',
        User: {
          create: {
            email: 'String5045658',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
