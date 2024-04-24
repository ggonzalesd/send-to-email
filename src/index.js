import app from './app.js';
import config from './config/config.js';

const { PORT } = config;

app.listen(PORT, () => {
  console.log(`Server Listening at port ${PORT}`);
});
