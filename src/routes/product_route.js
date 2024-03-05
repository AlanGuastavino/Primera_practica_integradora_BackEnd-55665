const express = require("express");

const { Router } = express;

const router = new Router();

let products = [
  {
    title: "GeForce RTX 4070",
    price: 2500000,
    description:
      "Nvidia GeForce RTX 4070, PCI-Express 4.0, 12GB GDDR6X, OC 2580 MHz, 21Gbps, HDMI 2.1 nativo x1, DisplayPort 1.4a nativo x3, 800W",
    thumbnails:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelmfj3v-YCTUzcesm_bobvG3r8-XunuN1hVloAuUZ1lyJjzuC9rV9zqpyUlqpLUPSNWU&usqp=CAU",
    stock: 25,
  },
  {
    title: "GeForce RTX 3060 Ti",
    price: 970350,
    description:
      "Nvidia GeForce RTX 3060, 12 GB RAM, OC 1710 MHz, DisplayPort x3 (v1.4a), HDMI 2.1 x1, 600w",
    thumbnails:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv8b8CfssAMwG849KPVR_J8ERU5NBW-PvrA&usqp=CAU",
    stock: 34,
  },
  {
    title: "GeForce RTX 3090",
    price: 1320000,
    description:
      "Nvidia GeForce RTX 3090 MSI, 24 GB RAM, 1725 MHz,  DisplayPort x3 (v1.4a), HDMI 2.1 x1, 750w",
    thumbnails:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslcdXVEJgj3ny6NgFOBiu-qbpJBGZS8VjN0ZXlHeT6JZCR4j2mgF6tOTmj5l-EeyYvtY&usqp=CAU",
    stock: 13,
  },
];

router.get("./home", (req, res) => {
  res.render("home");
});

router.get("/ProductsDetails", (req, res) => {
  res.render("home", products[Math.floor(Math.random() * products.length)]);
});

router.get("/allProducts", (req, res) => {
  res.render("allproducts", {
    IsAdmin: true,
    products: products,
  });
});

module.exports = router;
