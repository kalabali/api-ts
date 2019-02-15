import './lib/env';
import app from './app';

app.listen(process.env.PORT, () => {
    console.log({
        PORT: process.env.PORT,
        DATABASE_URI: process.env.DATABASE_URI
    })
    console.log(`app listen on port ${process.env.PORT}`);
})