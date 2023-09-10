const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  #myDIV {
    width: 100%;
    padding: 50px 0;
    text-align: center;
    background-color: lightblue;
    margin-top: 20px;
  }
  </style>
  </head>
  <body>
  
  <p>Click the "Try it" button to toggle between hiding and showing the DIV element:</p>
  
  <button onclick="myFunction()">Try it</button>
  
  <div id="myDIV">
  This is my DIV element.
  </div>
  
  <p><b>Note:</b> The element will not take up any space when the display property 
  is set to "none".</p>
  
  <script>
  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  </script>
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});