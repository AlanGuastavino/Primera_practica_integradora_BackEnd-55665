const socket = io();

socket.on("producto", (data) => {
  console.log(data);
  socket.emit("mensaje2", "unmensaje2");
});

const addMessages = () => {
  const msj = {
    nombre: document.getElementById("nombre").value,
    text: document.getElementById("texto").value,
  };
  console.log(msj);

  socket.emit("msjnuevo", msj);

  return false;
};
