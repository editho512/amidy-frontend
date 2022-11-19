import login from './en/login'
import collaborator from './en/collaborator'
import button from './en/button'


export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    sidebar: {
      home: 'Home',
      communication: 'Communications',
      notification: 'Notifications',
      collaborator: 'Collaborators',
      setting : 'Settings'
    },
    button : button,
    login: login,
    collaborator : collaborator
  })
}

