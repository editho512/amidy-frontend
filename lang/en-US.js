import login from './en/login'
import collaborator from './en/collaborator'
import button from './en/button'
import setting from './en/setting'
import tag from './en/tag'
import category from './en/category'
import product from './en/product'
import dropfile from './en/dropfile'

export default async (context, locale) => {
  return await Promise.resolve({
    welcome: 'Welcome',
    sidebar: {
      home: 'Home',
      communication: 'Communications',
      notification: 'Notifications',
      collaborator: 'Collaborators',
      setting: 'Settings',
      tag: 'Tags',
      category: 'Categories',
      product : 'Products'
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

