import mongoose, { ConnectOptions } from "mongoose";
require('dotenv').config();

const database_user = process.env.DATABASE_USER;

export function dbConnect(){
  mongoose.connect(`mongodb+srv://${database_user}@alleycats.lbni1ic.mongodb.net/alleycats`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions)
}