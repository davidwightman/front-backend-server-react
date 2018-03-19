const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'david',
      name: 'David John',
      email: 'djohn@email.com',
      avatarURL: config.origin + '/david.jpg'
    },
    {
      id: 'mark',
      name: 'Mark Thomas',
      email: 'mthomas@email.com',
      avatarURL: config.origin + '/mark.jpg'
    },
    {
      id: 'sam',
      name: 'Sam Taylor',
      email: 'staylor@gmail.com',
      avatarURL: config.origin + '/sam.jpg'
    },
    {
      id: 'karen',
      name: 'Karen Tamour',
      email: 'kcarl@email.com',
      avatarURL: config.origin + '/karen.jpg'
    },
    {
      id: 'Joseph',
      name: 'Joseph Thompson',
      email: 'jthompson@email.com',
      avatarURL: config.origin + '/joseph.jpg'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

module.exports = { get }