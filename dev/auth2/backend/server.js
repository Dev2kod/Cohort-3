
import connectdb from "./src/config/database.js";
import app from "./src/app.js";


connectdb()


app.listen(3000,()=>{console.log("server running on port 3000")})