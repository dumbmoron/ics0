export const headerDefaults = () => ({
  productId: 'dumbmoron/ics0',
  method: 'PUBLISH'
})

export const eventDefaults = () => ({
  title: 'Untitled event',
  uid: Math.random().toString(36).substring(2),
  timestamp: Date.now()
})
