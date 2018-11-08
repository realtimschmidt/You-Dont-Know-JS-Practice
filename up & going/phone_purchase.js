const bankAccount = 950
const phonePrice = 199
const phoneAccessories = 50
const tax = 0.07

let subTotal

subTotal = 0

const addTax = (amount) => {
  return amount + (amount * tax)
}

const dollarFormatter = (unformattedValue) => {
  const formatDecimals = unformattedValue.toFixed(2)
  return `$${formatDecimals}`
}

while (subTotal + phonePrice + phoneAccessories <= bankAccount) {
  subTotal += phonePrice + phoneAccessories
}

const totalAfterTax = addTax(subTotal)

const formattedTotal = dollarFormatter(totalAfterTax)

console.log(formattedTotal)