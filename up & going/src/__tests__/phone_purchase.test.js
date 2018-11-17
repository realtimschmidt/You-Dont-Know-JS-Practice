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
})