import dotenv from 'dotenv';
import app from './app';

import { PORT } from './helpers/customs-validation';

app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`);
})