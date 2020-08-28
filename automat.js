const SerialPort = require('serialport')
const port = new SerialPort("/dev/ttyUSB0", { baudRate: 9600 })

port.write('s')
//> ROBOT ONLINE


const express = require('express')
const app = express()
const httpport = 3000


const html =`

<html>
  <head>
    <style>
      center {
      color:blue;
      font-size: 50px;
      }
      .green button {
         color:green;
         background-color: #90ff90;
         height: 200px;
         width: 400px;
         font-size: 2.5cm;
         border-width: 10px;
         border-color: black;
         border-style: solid;
         display: flex;
         flex-direction: row;
         justify-content: space-evenly;
         align-items: center; 
         position: absolute;
         right: 40px;
         top: 100px;
        }

      .red button {
         color: #a20000;
         background-color: #ff8181;
         height: 200px;
         width: 400px;
         font-size: 2.5cm;
         border-width: 10px;
         border-color: black;
         border-style: solid;
         display: flex;
         flex-direction: row-reverse;
         justify-content: space-evenly;
         align-items: center;
         position: absolute;
         left: 40px;
         top: 100px;
         }

    </style>
  </head>

<body>
   <center> Hallo, ich bin die Startseite ;) </center>
      <form action="/a" method="post" class="green">
         <button type="submit">LED an</button>
      </form>
      <form action="/s" method="post" class="red">
        <button type="submit">LED aus</button>
      </form>
</body>
`;


app.get('/', (req, res) => {
  res.send(html)
})

app.post('/a', (req, res) => {
    res.redirect('/')
    port.write('a')

  })

  app.post('/s', (req, res) => {
    res.redirect('/')
    port.write('s')

  })

app.listen(httpport, () => {
  console.log(`Example app listening at http://localhost:${httpport}`)
})