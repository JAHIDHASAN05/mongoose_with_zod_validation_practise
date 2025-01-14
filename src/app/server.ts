import config from "../config";
import app from "./app";

import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
try{
    await mongoose.connect(config.database_url as string);
    
    app.listen(config.port, ()=>{
      console.log(`zod validation server is listning ${config.port}`)
  })
  
}catch(err){

  console.log(err);

}
}