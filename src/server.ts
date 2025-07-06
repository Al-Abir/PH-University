import app from './app';
import confiq from './app/confiq';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(confiq.database_url as string);
    app.listen(confiq.port, () => {
      console.log(`Example hi app listening on port ${confiq.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
