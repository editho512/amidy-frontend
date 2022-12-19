import login from './fr/login'
import collaborator from './fr/collaborator'
import button from './fr/button'
import setting from './fr/setting'
import tag from './fr/tag'
import category from './fr/category'
import product from './fr/product'
import dropfile from './fr/dropfile'

export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Bienvenu',
    sidebar: {
      home: 'Accueil',
      communication: 'Communications',
      notification: 'Notifications',
      collaborator: 'Collaborateurs',
      setting: 'Paramètres',
      tag: 'Etiquettes',
      category: 'Catégories',
      product : 'Produits'
    },
    button : button,
    login: login,
    collaborator: collaborator,
    setting: setting,
    tag: tag,
    category: category,
    product: product,
    dropfile : dropfile
  })
}

