const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://lafaietepedro3:jBxhPx1Zs2KzwBjt@cluster0.8axpmzu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado com sucesso!");
  } catch (error) {
    console.log(`Erro : ${error}`);
  }
}

module.exports = main;