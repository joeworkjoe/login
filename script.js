document.getElementById('phone-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    
    // Get the phone number from the input field
    var phoneNumber = document.getElementById('phone-input').value;
    identifier: phoneNumber;
    // Make an HTTP request here using the phoneNumber variable
    // Example code to make an HTTP request using Fetch API:
    fetch('https://aidademo.apliclouds.com/AIDA_API/API/assistant/addScheduled?identifier=' , {
        method: 'POST',
        headers: {
          'token': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2MjE5ODBjYS1kNzUxLTQ4ZDgtYTRjMS0yMWI5N2UyOTZmY2EiLCJzdWIiOiJzeXN1c2VyQGFwbGltYW4uY29tIiwiaWF0IjoxNjI0MDAwNTE0LCJleHAiOjg4MDIzOTU3MzE0fQ.vviuftdd5NynBvt3i-yyTsSxlBAfxqJevvwxUs6Ow3mSGdYCOuH5-mfIK3RC4f8ZhiMzPBOVEbYFLLVA-E_4uQ',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          journeyId: 1686559274519,
          journeyName: 'AVC_1',
          date: '2020-10-15 13:05:34'
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data); // Handle the response data
        })
        .catch(error => {
          console.error(error); // Handle any errors
        });
      
  });
  