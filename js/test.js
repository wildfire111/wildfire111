const url = 'https://script.google.com/macros/s/AKfycbx8MfwOg5GSNLWwMAoSqLD7wCiqlvCrtGmn6LSrua2XOwt0tuNAe5u-W8WU0fUn0WsR9w/exec'; // Replace with your actual URL

const data = {
  key1: 'value1',
  key2: 'value2'
  // Add more key-value pairs as needed
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log('Response:', data);
    // Handle the response data
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });
