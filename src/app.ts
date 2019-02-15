import express from 'express';
import { connect } from 'mongoose';

import v1Router from './routers/v1';

const app:express.Application = express();

connect(process.env.DATABASE_URI , { useNewUrlParser: true, keepAlive: true })
.then(() => {
    app.get('/', (req, res) => {
        res.send("Hello fellas :D");
    });
    
    app.use('/v1', v1Router);
})

export default app;