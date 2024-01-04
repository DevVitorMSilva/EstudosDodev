function Get() {

    return fetch('https://apigenerator.dronahq.com/api/Fzj32k-m/Carros')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }

  async function postData(url = '', data = {}) {

    const response = await fetch(url, {
  
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  postData('https://apigenerator.dronahq.com/api/Fzj32k-m/Carros', cep /* OBJETO A SER USADO */)
  
    .then((data) => {
  
      console.log(data);  
  
  });