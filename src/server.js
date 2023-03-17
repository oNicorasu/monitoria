const express = require("express");
const app = express();
const db = require("./database/db");
const cors = require('cors');

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }

const routes = require("./routes/routes");

app.use(cors(corsOptions))
app.use(express.json());

app.use("/", routes);

db.sync().then(() => { console.log("A conexão com o banco de dados foi bem-sucedida.")}).catch((error) => console.log(error));

const port = 3001 || 3333;
app.listen(port, () => {
    console.log("Executando na porta: " + port);
});

module.exports = app;