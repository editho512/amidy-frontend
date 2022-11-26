import login from './fr/login'
import collaborator from './fr/collaborator'
import button from './fr/button'


export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenu',
    sidebar: {
      home: 'Accueil',
      communication: 'Communications',
      notification: 'Notifications',
      collaborator: 'Collaborateurs',
      setting: 'paramètres'
    },
    button : button,
    login: login,
    collaborator : collaborator
  })
}

