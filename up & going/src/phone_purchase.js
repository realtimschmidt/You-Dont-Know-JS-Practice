const tax = 0.07

const addTax = (amount) => {
  return amount + (amount * tax)
}

const dollarFormatter = (unformattedValue) => {
  const formatDecimals = unformattedValue.toFixed(2)
  return `$${formatDecimals}`
}

const phonePurchase = (bankAccount) => {
  const phonePrice = 199
  const phoneAccessories = 50

  let subTotal

  subTotal = 0
  
  if(typeof bankAccount !== "number"){
    return Promise.reject(`You paid with ${bankAccount}. You can only use numbers.`)
  }

  while ((subTotal + phonePrice + phoneAccessories) * (1 + tax) <= bankAccount) {
    subTotal += phonePrice + phoneAccessories
  }
  
  const totalAfterTax = addTax(subTotal)
  const formattedTotal = dollarFormatter(totalAfterTax)

  return formattedTotal
}

module.exports = (bankAccount) => {
  return new Promise((resolve, reject) => {
    resolve(phonePurchase(bankAccount))
  })
  .catch((error) => {
    return Promise.reject(error)
  })
}