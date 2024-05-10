import app from './app.js';
import config from './config/config.js';

const { APP_PORT } = config;

app.listen(APP_PORT, () => {
  console.log(`Server Listening at port ${APP_PORT}`);
});
