import login from './fr/login'

export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenu',
    sidebar: {
      home: 'Accueil',
      communication: 'Communications',
      notification: 'Notifications',
      user: 'Utilisateurs',
      setting: 'paramètres'
    },
    login : login
  })
}

