const dataApi = (data) => {
  console.log('Se estan recibiendo los datos')
  return fetch('//localhost:4000/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default dataApi;
