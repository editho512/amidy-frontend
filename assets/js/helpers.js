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


