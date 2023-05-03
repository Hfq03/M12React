function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  export function getRoutines() {
    return fetch('http://127.0.0.1:8000/api/exercises')
      .then(handleErrors)
      .then(response => response.json())
      .then(data => data.routines)
      .catch(error => console.log(error));
  }  