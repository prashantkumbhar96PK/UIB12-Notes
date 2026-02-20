let express=require('express');
const connectDB = require('./config/db');
const app=express();
let userRoutes=require('./routes/userRoutes');
//Connection with DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/',userRoutes);

app.listen(8001,()=>{console.log("Server is running on Port no 8001");
})
