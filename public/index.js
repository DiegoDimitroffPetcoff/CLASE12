const socket = io.connect();

function addMessage(e) {
  const mensaje = {
    title: document.getElementById("object_searched").value,
    price: document.getElementById("price_searched").value,
  };

  socket.emit("new-message", mensaje);
  return false;
}

function render(data) {
  const id = data
  .map((elem, index) => {
    return `<div>${elem.id}</div>`;
  })
  .join("  ");
document.getElementById("id").innerHTML = id;

  const object = data
    .map((elem, index) => {
      return `<div>${elem.title}</div>`;
    })
    .join("  ");
  document.getElementById("object").innerHTML = object;

  const price = data
    .map((elem, index) => {
      return `
    <div>${elem.price}</div>`;
    })
    .join(" ");
  document.getElementById("price").innerHTML = price;
}

socket.on("messages", (data) => {
  render(data);
});

// // --------------------
// function renderChat(data) {
//   const html = data
//     .map((elem, index) => {
//       return `<div>
//           <strong>${elem.author}</strong>:
//           <em>${elem.text}</em>
//       </div>`;
//     })
//     .join(" ");

//   document.getElementById("filaTexto").innerHTML = html;
// }
// function addMessagechat(e) {
//   const mensaje = {
//     author: document.getElementById("username").value,

//     text: document.getElementById("texto").value,
//   };

//   socket.emit("newChat", mensaje);
//   return false;
// }
// socket.on("chat", (data) => {

//   renderChat(data);
// });
