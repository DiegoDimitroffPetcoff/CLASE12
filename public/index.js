const socket= io.connect();

socket.on('myMessage', (data)=>{
    console.log(data);
    alert("escuchando");
})

function addMessage(e){
    const mensaje ={
 author: document.getElementById('object_searched').value,
 text: document.getElementById('price_searched').value
    };
    socket.emit('new-message', mensaje);
    return false;
}

function render(data){
    const html = data.map((elem,index)=>{
        return (`
        <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Object</th>
                <th scope="col">Price</th>
                
              </tr>
            </thead>

            
            <tbody>
              <tr>
                <th scope="row">${elem.author}</th>
                <td>${elem.author}</td>
                <td>${elem.text}</td>
            </tbody>
            
          </table>`)
    }).join(" ");

    document.getElementById('messages').innerHTML = html;
}


socket.on('messages',data=>{render(data)});



// --------------------
function renderChat(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.author}</strong>:
          <em>${elem.text}</em>
      </div>`)
  }).join(" ");

 document.getElementById('filaTexto').innerHTML = html;
  
}
function addMessagechat(e) {
  const mensaje = {
    author: document.getElementById("username").value,
    
    text: document.getElementById("texto").value,
  };
  
  socket.emit("newChat", mensaje);
  return false;
}
socket.on('chat',data=>{renderChat(data)});