import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api"

require('dotenv').config();

const app = express()
const port = process.env.PORT || 2009;

var morgan = require('morgan')
app.use(morgan('combined'))

app.use(express.urlencoded({extended: true}));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app)

// handle 404 not found
app.use((req, res) => {
  return res.render('404.ejs')
})

app.listen(port, () => {
  console.log(`click: http://localhost:${port}/`)
})