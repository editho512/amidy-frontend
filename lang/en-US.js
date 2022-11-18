import login from './en/login'

export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    sidebar: {
      home: 'Home',
      communication: 'Communications',
      notification: 'Notifications',
      user: 'Users',
      setting : 'Settings'
    },
    login : login
  })
}

