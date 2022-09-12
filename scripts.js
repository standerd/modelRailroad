let insidelocos = [
    {
      name: "Beige Loco",
      dccvalue: "08",
      minspeed: "20",
      cruisespeed: "50",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    },
    {
      name: "Diesel Loco",
      dccvalue: "20",
      minspeed: "20",
      cruisespeed: "40",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    },
    {
      name: "Blue Loco",
      dccvalue: "40",
      minspeed: "20",
      cruisespeed: "50",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    },
    {
      name: "Steam Loco",
      dccvalue: "01",
      minspeed: "20",
      cruisespeed: "80",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    }
  ];

  let outsidelocos = [
    {
      name: "Railbus",
      dccvalue: "103",
      minspeed: "40",
      cruisespeed: "100",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    },
    {
      name: "Fleisch St",
      dccvalue: "02",
      minspeed: "20",
      cruisespeed: "50",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    },
    {
      name: "BR44",
      dccvalue: "44",
      minspeed: "20",
      cruisespeed: "50",
      light: "0",
      f1: "1",
      f2: "2",
      f3: "3",
      f4: "4",
      f5: "5"
    },
    {
        name: "Green Elec",
        dccvalue: "03",
        minspeed: "20",
        cruisespeed: "50",
        light: "0",
        f1: "1",
        f2: "2",
        f3: "3",
        f4: "4",
        f5: "5"
    }
  ];

  let locos = document.querySelector(".iLoco");
  let locolist = "insidelocos";
  let clikedID = 0;
  

  
  const locoListing = document.querySelector('.cars');
  locoListing.addEventListener('change', (event) => {
    let iLoco = document.querySelector(".indivLoco");
    locolist = event.target.value;
    console.log(locolist);
    locos.innerHTML = ""
    loadContent();
  })

  console.log(locolist);

  function loadContent() {
    for (let i = 0; i < insidelocos.length; i++) {
      let locoIndex = insidelocos[i];
      let loco =
      '<div class="indivLoco"><h3>' + 
      locoIndex.name +
      '</h3><div class="driveButtons">' +
      '<button onclick="goMin(this)" id="' +
      locoIndex.dccvalue +
      '" value="' +
      locoIndex.minspeed +
      '">Slow</button><button onclick="goCruise(this)" id="' +
      locoIndex.dccvalue +
      '" value="' +
      locoIndex.cruisespeed +
      '">Cruise</button>' +
      '<button onclick="goRev(this)" id="' +
      locoIndex.dccvalue +
      '" value="' +
      locoIndex.cruisespeed +
      '">Revers</button>' +
      '</div><div class="functions"><div class="locoFunc"><label class="switch3">' +
      '<input value="' + 
      locoIndex.light+
      '" id="' +
      locoIndex.dccvalue +
      '" type="checkbox" onchange="setFunction(this)">' +
      '<span class="slider3 round3"></span></label><label>Light</label></div>' +
      '<div class="locoFunc"><label class="switch3">' + 
      '<input value="' + 
      locoIndex.f1 +
      '" id="' +
      locoIndex.dccvalue +
      '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
      '</label><label>F1</label></div><div class="locoFunc"><label class="switch3">' +
      '<input value="' + 
      locoIndex.f2 +
      '" id="' + 
      locoIndex.dccvalue +
      '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3">' +
      '</span></label><label>F2</label></div><div class="locoFunc"><label class="switch3">' +
      '<input value="' + 
      locoIndex.f3 +
      '" id="' + 
      locoIndex.dccvalue +
      '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
      '</label><label>F3</label></div><div class="locoFunc"><label class="switch3">' +
      '<input value="' + 
      locoIndex.f4 +
      '" id="' + 
      locoIndex.dccvalue +
      '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
      '</label><label>F4</label></div><div class="locoFunc"><label class="switch3">' +
      '<input value="' + 
      locoIndex.f5 +
      '" id="' + 
      locoIndex.dccvalue +
      '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
      '</label><label>F5</label></div></div><button id="' +
      locoIndex.dccvalue +
      '"class="stopLoc" onclick="stopLoco(this)">STOP</button></div>'

      if (locolist === "insidelocos") {
        locos.insertAdjacentHTML("beforeend", loco);
    }
}
for (let i = 0; i < outsidelocos.length; i++) {
    let locoIndex = outsidelocos[i];
    let loco2 =
    '<div class="indivLoco"><h3>' + 
    locoIndex.name +
    '</h3><div class="driveButtons">' +
    '<button onclick="goMin(this)" id="' +
    locoIndex.dccvalue +
    '" value="' +
    locoIndex.minspeed +
    '">Slow</button><button onclick="goCruise(this)" id="' +
    locoIndex.dccvalue +
    '" value="' +
    locoIndex.cruisespeed +
    '">Cruise</button>' +
    '<button onclick="goRev(this)" id="' +
    locoIndex.dccvalue +
    '" value="' +
    locoIndex.cruisespeed +
    '">Revers</button>' +
    '</div><div class="functions"><div class="locoFunc"><label class="switch3">' +
    '<input value="' + 
    locoIndex.light+
    '" id="' +
    locoIndex.dccvalue +
    '" type="checkbox" onchange="setFunction(this)">' +
    '<span class="slider3 round3"></span></label><label>Light</label></div>' +
    '<div class="locoFunc"><label class="switch3">' + 
    '<input value="' + 
    locoIndex.f1 +
    '" id="' +
    locoIndex.dccvalue +
    '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
    '</label><label>F1</label></div><div class="locoFunc"><label class="switch3">' +
    '<input value="' + 
    locoIndex.f2 +
    '" id="' + 
    locoIndex.dccvalue +
    '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3">' +
    '</span></label><label>F2</label></div><div class="locoFunc"><label class="switch3">' +
    '<input value="' + 
    locoIndex.f3 +
    '" id="' + 
    locoIndex.dccvalue +
    '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
    '</label><label>F3</label></div><div class="locoFunc"><label class="switch3">' +
    '<input value="' + 
    locoIndex.f4 +
    '" id="' + 
    locoIndex.dccvalue +
    '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
    '</label><label>F4</label></div><div class="locoFunc"><label class="switch3">' +
    '<input value="' + 
    locoIndex.f5 +
    '" id="' + 
    locoIndex.dccvalue +
    '" type="checkbox" onchange="setFunction(this)"><span class="slider3 round3"></span>' +     
    '</label><label>F5</label></div></div><button id="' +
    locoIndex.dccvalue +
    '"class="stopLoc" onclick="stopLoco(this)">STOP</button></div>'

    if (locolist === "outsidelocos") {
      locos.insertAdjacentHTML("beforeend", loco2);
  }
}
console.log("I Have Run");
  }

function setClickId(clicked_id){
    console.log("LocoClick" + clicked_id);
}  

function turnOut(value){
    let idTurn = value.id;
    let secondId = Number(idTurn)+1;
    if(value.checked === false){
        socket.emit('command', { "status":"<T " + secondId + " 1>" });
        setTimeout(function(){
        socket.emit('command', { "status":"<T " + secondId + " 0>" });
        },100)
    } else {
        socket.emit('command', { "status":"<T " + idTurn + " 1>" });
        setTimeout(function(){
        socket.emit('command', { "status":"<T " + idTurn + " 0>" });
        },100)
    }
}

function mainPower(value){
    if(value.checked === false){
        socket.emit('command', { "status":"<0 MAIN>" });
    } else {
        socket.emit('command', { "status":"<1 MAIN>" });
    }
}

function progPower(value){
    if(value.checked === false){
        socket.emit('command', { "status":"<0 PROG>" });
    } else {
        socket.emit('command', { "status":"<1 PROG>" });
    }
}

function goMin(val){
    socket.emit('command', {"status":"<t 1 " + val.id + " " + val.value + " 1>"});
}

function goCruise(val){   
    socket.emit('command', {"status":"<t 1 " + val.id + " " + val.value + " 1>"});
}

function goRev(val){   
    socket.emit('command', {"status":"<t 1 " + val.id + " " + val.value + " 0>"});
}

function setFunction(val){
     if(val.checked === false){
        socket.emit('command', {"status":"<F " + val.id + " " + val.value + " 0>"});
    } else {
        socket.emit('command', {"status":"<F " + val.id + " " + val.value + " 1>"});
    }
}

function stopLoco(val){
    socket.emit('command', {"status":"<t 1 " + val.id + " 0 1>"});    
}

// Send Typed In Command to Arduino
function sendCommand(){
    let commandVal = document.getElementById('inputValue').value;
    socket.emit('command', { "status": commandVal });
}



// Console Log the data that is received back from the Arduino
socket.on('data', function(data) {
 console.log(data);
 if(data === "<Q 4>"){
     document.getElementById('dCruise').style.backgroundColor = "red"; 
 } else{
     document.getElementById('dCruise').style.backgroundColor = "buttonface"; 
 }
});






// CANVAS DRAWING


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
const coords = document.querySelector('.display-coords');

let x = "orange";

/*LINE NUMBER 1*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(100, 5, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(200, 5, 50, 20);
ctx.stroke();

//Line 1 Black Path
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(150, 15);
ctx.lineTo(200, 15);
ctx.moveTo(20, 15);
ctx.lineTo(100, 15);
ctx.moveTo(20, 15);
ctx.lineTo(20, 485);
ctx.moveTo(20, 485);
ctx.lineTo(70, 485);
ctx.moveTo(250, 15);
ctx.lineTo(480, 15);
ctx.moveTo(480, 15);
ctx.lineTo(480, 365);
ctx.moveTo(480, 365);
ctx.lineTo(310, 365);
ctx.stroke();

/*LINE NUMBER 2*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(100, 30, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(200,30, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(150, 40);
ctx.lineTo(200, 40);
ctx.moveTo(30, 40);
ctx.lineTo(100, 40);
ctx.moveTo(30, 40);
ctx.lineTo(30, 440);
ctx.moveTo(30, 440);
ctx.lineTo(70, 440);
ctx.moveTo(250, 40);
ctx.lineTo(440, 40);
ctx.moveTo(440, 40);
ctx.lineTo(440, 340);
ctx.moveTo(440, 340);
ctx.lineTo(310, 340);
ctx.stroke();

/*LINE NUMBER 3*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(120, 65, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(220,65, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(170, 75);
ctx.lineTo(220, 75);
ctx.moveTo(50, 75);
ctx.lineTo(120, 75);
ctx.moveTo(270, 75);
ctx.lineTo(350, 75);
ctx.moveTo(50, 75);
ctx.lineTo(50, 365);
ctx.moveTo(50, 365);
ctx.lineTo(160, 365);
ctx.moveTo(210, 365);
ctx.lineTo(260, 365);
ctx.stroke();

/*LINE NUMBER 4*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(120, 90, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(220,90, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(170, 100);
ctx.lineTo(220, 100);
ctx.moveTo(60, 100);
ctx.lineTo(120, 100);
ctx.moveTo(270, 100);
ctx.lineTo(320, 100);
ctx.moveTo(60, 100);
ctx.lineTo(60, 340);
ctx.moveTo(60, 340);
ctx.lineTo(160, 340);
ctx.stroke();

/*LINE NUMBER 5*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(170, 125, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(270,125, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(220, 135);
ctx.lineTo(270, 135);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(120, 160);
ctx.lineTo(170, 135);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(320, 135);
ctx.lineTo(370, 160);
ctx.stroke();

/*LINE NUMBER 6*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(170, 150, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(270,150, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(220, 160);
ctx.lineTo(270, 160);
ctx.moveTo(120, 160);
ctx.lineTo(170, 160);
ctx.moveTo(110, 160);
ctx.lineTo(80, 160);
ctx.moveTo(80, 160);
ctx.lineTo(80, 280);
ctx.moveTo(80, 280);
ctx.lineTo(120, 280);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(320, 160);
ctx.lineTo(370, 160);
ctx.stroke();

/*LINE NUMBER 7*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(170, 195, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(270,195, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(220, 205);
ctx.lineTo(270, 205);
ctx.moveTo(120, 205);
ctx.lineTo(170, 205);
ctx.moveTo(110, 205);
ctx.lineTo(90, 205);
ctx.moveTo(90, 205);
ctx.lineTo(90, 260);
ctx.moveTo(90, 260);
ctx.lineTo(150, 260);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(320, 205);
ctx.lineTo(370, 205);
ctx.stroke();

/*LINE NUMBER 8*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(170, 220, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(270,220, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(220, 230);
ctx.lineTo(270, 230);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(120, 205);
ctx.lineTo(170, 230);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(320, 230);
ctx.lineTo(370, 205);
ctx.stroke();

/*LINE NUMBER 9*/
// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(150,250, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(200, 260);
ctx.lineTo(230, 260);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(230, 260);
ctx.lineTo(230, 280);
ctx.moveTo(230, 280);
ctx.lineTo(120, 280);

ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(320, 135);
ctx.lineTo(370, 160);
ctx.stroke();

/*LINE NUMBER 11*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(160, 330, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(260, 330, 50, 20);
ctx.stroke();

/*LINE NUMBER 12*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(160, 355, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(260, 355, 50, 20);
ctx.stroke();

/*LINE NUMBER 13*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(130, 405, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(220,405, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(380,430, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(220, 135);
ctx.lineTo(270, 135);
ctx.moveTo(180, 415);
ctx.lineTo(220, 415);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(80, 440);
ctx.lineTo(130, 415);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(270, 415);
ctx.lineTo(330, 440);
ctx.stroke();

/*LINE NUMBER 14*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(130, 430, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(220,430, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(180, 440);
ctx.lineTo(220, 440);
ctx.moveTo(80, 440);
ctx.lineTo(130, 440);
ctx.moveTo(340, 440);
ctx.lineTo(380, 440);
ctx.moveTo(450, 440);
ctx.lineTo(450, 485);
ctx.moveTo(430, 440);
ctx.lineTo(450, 440);
ctx.moveTo(400, 485);
ctx.lineTo(450, 485);
ctx.moveTo(400, 485);
ctx.lineTo(340, 485);
ctx.moveTo(210, 340);
ctx.lineTo(260, 340);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(270, 440);
ctx.lineTo(330, 440);
ctx.stroke();

/*LINE NUMBER 15*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(140, 475, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(220,475, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(190, 485);
ctx.lineTo(220, 485);
ctx.moveTo(80, 485);
ctx.lineTo(130, 485);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(270, 485);
ctx.lineTo(330, 485);
ctx.moveTo(190, 510);
ctx.lineTo(220, 510);
ctx.stroke();

/*LINE NUMBER 16*/
// Red rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "red";
ctx.rect(140, 500, 50, 20);
ctx.stroke();

// Green rectangle
ctx.beginPath();
ctx.lineWidth = "4";
ctx.strokeStyle = "green";
ctx.rect(220,500, 50, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(80, 485);
ctx.lineTo(130, 510);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(270, 510);
ctx.lineTo(330, 485);
ctx.stroke();


//Various Connecting
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(380, 160);
ctx.lineTo(400, 160);
ctx.moveTo(380, 205);
ctx.lineTo(420, 205);
ctx.moveTo(400, 100);
ctx.lineTo(400, 160);
ctx.moveTo(420, 75);
ctx.lineTo(420, 205);
ctx.moveTo(400, 100);
ctx.lineTo(320, 100);
ctx.moveTo(420, 75);
ctx.lineTo(320, 75);
ctx.stroke();


function turnOut1(color1, color2, x1, x2, y1,y2,y3,y4,id){
    console.log("ID" + id);
 ctx.beginPath();
 ctx.strokeStyle = color1;
 ctx.moveTo(x1, y1);
 ctx.lineTo(x2, y2);
 ctx.stroke();
 ctx.beginPath();
 ctx.strokeStyle = color2;
 ctx.moveTo(x1, y3);
 ctx.lineTo(x2, y4);
 ctx.stroke();
 socket.emit('command', { "status":"<T " + id + " 0>" });
        setTimeout(function(){
        socket.emit('command', { "status":"<T " + id + " 1>" });
        },100)
}

//Circle Number 1
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(370, 160, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(370, 205, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(120, 160, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(120, 205, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(80, 440, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(80, 485, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(330, 440, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(330, 485, 20, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(125, 485, 10, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(125, 510, 10, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

let turn1 = 1;
let turn2 = 1;
let turn3 = 1;
let turn4 = 1;
let turn5 = 1;
let turn6 = 1;
let turn7 = 1;
let turn8 = 1;

let sig8 ="red";


// Blue rectangle
function myFunction(color){
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = color;
    ctx.rect(215, 5, 50, 50);
    ctx.stroke();    
}

function getMousePos(c, evt) {
    var rect = c.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

const draw = (evt) => {
    var pos = getMousePos(c, evt);
    console.log(pos);
    if(pos.x >= 350 && pos.x <=390 && pos.y >=140 && pos.y <=180 && turn1 === 1 ){
        turnOut1("black", "white", "320", "370", "135", "160","160","160","164");
        turn1=2;
        console.log("You Clicked the TurnOut");
    }else if(pos.x >= 350 && pos.x <=390 && pos.y >=140 && pos.y <=180 && turn1 === 2 ){
        turnOut1("white", "black", "320", "370", "135", "160","160","160","165");
        turn1=1;
        console.log("You Clicked the TurnOut");
    } else if(pos.x >= 350 && pos.x <=390 && pos.y >=185 && pos.y <=225 && turn2 === 1 ){
        turnOut1("white", "black", "320", "370", "205", "205","225","205","166");
        turn2=2;
        console.log("You Clicked the TurnOut2");
    }else if(pos.x >= 350 && pos.x <=390 && pos.y >=185 && pos.y <=225 && turn2 === 2 ){
        turnOut1("black", "white", "320", "370", "205", "205","225","205","167");
        turn2=1;
        console.log("You Clicked the TurnOut2");
    } else if(pos.x >= 100 && pos.x <=140 && pos.y >=140 && pos.y <=180 && turn3 === 1 ){
        turnOut1("white", "black", "120", "170","160","160","160","135","7" );
        turn3=2;
        console.log("You Clicked the TurnOut3");
    }else if(pos.x >= 100 && pos.x <=140 && pos.y >=140 && pos.y <=180 && turn3 === 2 ){
        turnOut1("black", "white", "120", "170","160","160","160","135","6");
        turn3=1;
        console.log("You Clicked the TurnOut3");
    } else if(pos.x >= 100 && pos.x <=140 && pos.y >=185 && pos.y <=225 && turn4 === 1 ){
        turnOut1("black", "white","120","170","205","230","205","205","168");
        turn4=2;
        console.log("You Clicked the TurnOut4");
    }else if(pos.x >= 100 && pos.x <=140 && pos.y >=185 && pos.y <=225 && turn4 === 2 ){
        turnOut1("white", "black","120","170","205","230","205","205","169");
        turn4=1;
        console.log("You Clicked the TurnOut4");
    }else if(pos.x >= 60 && pos.x <=100 && pos.y >=420 && pos.y <=460 && turn5 === 1 ){
        turnOut1("black", "white","80","130","440","415","440","440","174");
        turn5=2;
        console.log("You Clicked the TurnOut5");
    }else if(pos.x >= 60 && pos.x <=100 && pos.y >=420 && pos.y <=460 && turn5 === 2 ){
        turnOut1("white", "black","80","130","440","415","440","440","175");
        turn5=1;
        console.log("You Clicked the TurnOut5");   
    }else if(pos.x >= 60 && pos.x <=100 && pos.y >=465 && pos.y <=505 && turn6 === 1 ){
        turnOut1("black", "white","80","130","485","510","485","485","172");
        turn6=2;
        console.log("You Clicked the TurnOut6");
    }else if(pos.x >= 60 && pos.x <=100 && pos.y >=465 && pos.y <=505 && turn6 === 2 ){
        turnOut1("white", "black","80","130","485","510","485","485","173");
        turn6=1;
        console.log("You Clicked the TurnOut6");   
    }if(pos.x >= 310 && pos.x <=350 && pos.y >=420 && pos.y <=460 && turn7 === 1 ){
        turnOut1("black", "white", "270", "330", "415", "440","440","440","178");
        turn7=2;
        console.log("You Clicked the TurnOut7");
    }else if(pos.x >= 310 && pos.x <=350 && pos.y >=420 && pos.y <=460 && turn7 === 2 ){
        turnOut1("white", "black", "270", "330", "415", "440","440","440","179");
        turn7=1;
        console.log("You Clicked the TurnOut7");
    }else if(pos.x >= 310 && pos.x <=350 && pos.y >=465 && pos.y <=505 && turn8 === 1 ){
        turnOut1("white", "black", "270", "335", "485", "485","510","485","176");
        turn8=2;
        console.log("You Clicked the TurnOut8");
    }else if(pos.x >= 310 && pos.x <=350 && pos.y >=465 && pos.y <=505 && turn8 === 2 ){
        turnOut1("black", "white", "270", "335", "485", "485","510","485","177");
        turn8=1;
        console.log("You Clicked the TurnOut8");
    }else if(pos.x >= 120 && pos.x <=140 && pos.y >=505 && pos.y <=525 && sig8 === "red" ){
        ctx.beginPath();
        ctx.arc(125, 510, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        sig8="green";
    }else if(pos.x >= 120 && pos.x <=140 && pos.y >=505 && pos.y <=525 && sig8 === "green" ){
        ctx.beginPath();
        ctx.arc(125, 510, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
        sig8="red";
    }
}

const getCoords = (event) => {
  const container = canvas.getBoundingClientRect();
  const x = (event.clientX - container.left) - container.width/2;
  const y = (event.clientY - container.top) - container.height/2;

  coords.textContent = `${x}, ${y}`;
};

canvas.addEventListener('click', draw);
