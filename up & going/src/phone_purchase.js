const tax = 0.07

const addTax = (amount) => {
  return amount + (amount * tax)
}

const dollarFormatter = (unformattedValue) => {
  const formatDecimals = unformattedValue.toFixed(2)
  return `$${formatDecimals}`
}

const phonePurchase = (bankAccount) => {
  // const bankAccount = 1000
  const phonePrice = 199
  const phoneAccessories = 50

  let subTotal

  subTotal = 0
  
  while ((subTotal + phonePrice + phoneAccessories) * (1 + tax) <= bankAccount) {
    subTotal += phonePrice + phoneAccessories
  }
  
  const totalAfterTax = addTax(subTotal)
  const formattedTotal = dollarFormatter(totalAfterTax)
  
  console.log(formattedTotal)

  return formattedTotal
}

module.exports = (bankAccount) => {
  return new Promise((resolve, reject) => {
    resolve(phonePurchase(bankAccount))
  })
}