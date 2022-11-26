export const ObjectToFormData = (myObj) => {
  let formData = new FormData();

  for (var key in myObj) {
    if(myObj[key] !== "") formData.append(key, myObj[key]);
  }

  return formData
}


