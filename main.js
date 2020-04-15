// fetch messages from https://curriculum-api.codesmith.io/messages

fetch('https://curriculum-api.codesmith.io/messages')
  .then((response) => {
    return response.json();
  })
  .then((messages) => {
    console.log(messages);
    const chatMessage = document.getElementById('chatMessage');
    messages.forEach((message) => {
      const p = document.createElement('p');
      p.innerHTML = `${message.created_by}: ${message.message}`;
      chatMessage.appendChild(p);
      // chatMessage.appendChild(document.createElement('p').innerHTML = `${message.created_by}: ${message.message}`)
    });
  });

// for each message, create a p tag that has the username and message
// messages is an array of arrays
// each array in messages is an array of objects
// each object has a message and a created_by property
// messages.forEach((arrayOfMessages) => {});
// append(add child to) that p tag to the div

// add submit button handler
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  const sendMessage = {
    created_by: document.getElementById('username').value,
    message: document.getElementById('message').value
  };
  const chatMessage = document.getElementById('chatMessage');
  const p = document.createElement('p');
  p.innerHTML = `${sendMessage.created_by}: ${sendMessage.message}`;
  chatMessage.appendChild(p);
  const stringMessage = JSON.stringify(sendMessage);

  fetch('https://curriculum-api.codesmith.io/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: stringMessage
  }).then((response) => {
    console.log('post response: ', response);
  });
});

// onsubmit, package the username and message into an object
// append that message to our text box
// stringify that object
// post that message to the server
