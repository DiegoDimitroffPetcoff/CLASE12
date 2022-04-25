const socket= io();
alert("hola")
socket.on('myMessage', (data)=>{
    alert("escuchando");
})