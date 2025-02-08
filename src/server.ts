import mongoose from 'mongoose';
import { config } from './app/config';
import app from './app';

async function connectToDB() {
  try {
    //Connect server to the MongoDB database.
    await mongoose.connect(config.mongo_uri as string);
    app.listen(process.env.PORT, () => {
      console.log(`⚙️ Server is running on port :${config.port} `);
    });
  } catch (error) {
    console.log(error);
  }
}
connectToDB();
