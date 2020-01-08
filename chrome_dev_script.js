var data = new FormData();
data.append('text', 'This is a syntax highlighter for English. It uses natural language processing to determine the part of speech for each word and highlights accordingly. It works with tricky sentences too, e.g. The man we saw saw a saw.');

fetch('https://english.edward.io/parse', {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'no-cors', // no-cors, *cors, same-origin
  // credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    // 'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // redirect: 'follow', // manual, *follow, error
  // referrerPolicy: 'no-referrer', // no-referrer, *client
  body: data
}).then(response => response.text()).then(data => { alert(data); });
