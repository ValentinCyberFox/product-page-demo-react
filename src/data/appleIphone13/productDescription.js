

let cost = 75990
let sale = 8
let newCost = Math.trunc(cost - (cost * sale / 100)).toLocaleString()


export const productDescription = {
  id: 2342562,
  productName: 'Смартфон Apple iPhone 13',
  cost: Math.trunc(cost).toLocaleString(),
  sale,
  newCost
}
