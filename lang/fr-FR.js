import login from './fr/login'
import collaborator from './fr/collaborator'


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
    login: login,
    collaborator : collaborator
  })
}

