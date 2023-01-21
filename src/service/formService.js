
export async function postFormData(postForm) {
  return fetch("https://frontend-take-home.fetchrewards.com/form", postForm)
    .then((res) => res.json())
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
}
export async function submitForm(inputs, setSuccess, setError, setInputs) {
  const postForm = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(inputs)
  };
  return postFormData(postForm)
    .then(result => {
      if(result) {
        setSuccess(prevState => true);
      } else {
        setError(prevState => true);
      }
      setInputs({
          name: "",
          email: "",
          password: "",
          occupation: "",
          state: "",
      });
    });
}