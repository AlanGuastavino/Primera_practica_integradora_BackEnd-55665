import express from "express";
import { productsRouter } from "../routes/productRoutes.js";
import { cartsRouter } from "../routes/cartRoutes.js";
const http = require("http");
const { Server } = require("socket.io");

const routerProducts = require("./src/routes/product_route.js");
const handlebars = require("express-handlebars");
const routerHome = require("./src/routes/index.js");
const app = express();
const PORT = 8080;
const server = http.createServer(app);

let msjs;
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/src/views");
app.set("view engine", "handlebars");
app.use("/", routerProducts);
app.get("/", (req, res) => {
  res.send("Bienvenido al eccomerce");
});

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api", routerHome);

const io = new Server();
io.on("connection", (socket) => {
  console.log("User Conectado");
  socket.emit("mensaje", "unmensaje");

  socket.on("mensaje2", (data) => {
    console.log(data);
  });

  socket.on("msjnuevo", (data) => {
    console.log(data);
    msjs.push(data);
    createSocket.emir("mensajesmensajes");
    render(data);
  });
});

const render = (data) => {
  let html = data
    .map((elem) => {
      return (
        <div>
          <strong> ${elem.nombre}</strong>
          <em>${elem.text}</em>
        </div>
      );
    })
    .join("");
  document.getElementById("caja").innerHTML = html;
};
app.listen(PORT, () => {
  console.log("Server run on port 8080");
});
