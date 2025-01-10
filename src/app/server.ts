import config from "../config";
import app from "./app";

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
try{
    await mongoose.connect(config.database_url);
    
    app.listen(config.port, ()=>{
      console.log(`zod validation server is listning ${config.port}`)
  })
  
}catch(err){

  console.log(err);

}


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}