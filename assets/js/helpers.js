export const ObjectToFormData = (myObj) => {
  let formData = new FormData();

  for (var key in myObj) {
    if(myObj[key] !== "") formData.append(key, myObj[key]);
  }

  return formData
}

export const getObjectExceptKey = (obj, key) => {

  const asArray = Object.entries(obj);

  const filtered = asArray.filter(([k, value]) => k != key);

  return  Object.fromEntries(filtered);

}

export const getObjectKeyBegin = (obj, get) => {
  let asArray = Object.entries(obj);

  let filtered = asArray.filter(([k, value]) => k.includes(get));

  return filtered
}

export const convertToPrice = (price) => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return USDollar.format(price)
}

export const amount_ttc = (price, quantity, tva) => {
  let tax_amount = (parseFloat(price) * parseFloat(tva)) / 100

      return (parseFloat(quantity) * (parseFloat(price) + tax_amount))
}


