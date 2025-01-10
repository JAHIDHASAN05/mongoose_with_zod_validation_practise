import app from "./app";

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
try{
    await mongoose.connect('mongodb+srv://mongoose_revise:Ap6jeiUXmE3DG28Y@cluster0.qm82exp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    
    app.listen(5000, ()=>{
      console.log(`zod validation server is listning 5000`)
  })
  
}catch(err){

  console.log(err);

}


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}