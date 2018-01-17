import phones from './mockPhones'

export const fetchData = async () => {
  return new Promise(resolve => {
    resolve(phones)
  })
}