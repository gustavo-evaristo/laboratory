import app from './app';
import { PORT } from '@utils';

const port = PORT || 3000;

app.listen(port, () => console.log('server is running at port', port));
