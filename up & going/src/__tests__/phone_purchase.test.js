const phonePurchase = require('../phone_purchase')

describe('purchase phone with bank account funds', () => {
  let bankAccountAmmount
  let result

  beforeEach(() => {
    bankAccountAmmount = 1000
    result = "$799.29"
  })

  it('should purchase phone', () => {
    return phonePurchase(bankAccountAmmount)
    .then((response) => {
      expect(response).toEqual(result)
    })
  })

  it('should handle error when non-number passed in', () => {
    bankAccountAmmount = "not a number"
    return phonePurchase(bankAccountAmmount)
    .then((response) => {
      expect(response).toEqual(`You paid with ${bankAccountAmmount}. You can only use numbers.`)
    })
  })
})