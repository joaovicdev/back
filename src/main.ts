import http from 'node:http';
import { ROUTES } from './routes';
import { dateLikeUbuntu } from './utils/dateFormat';

const PORT = 8001;

const server = http.createServer(function(req, res) {
  if(req.url === ROUTES.home) {
    res.write(`Your date time like ubuntu is: ${dateLikeUbuntu()}`);
    res.end();
  }

  if(req.url === ROUTES.users) {
    res.write('users route');
    res.end();
  }
});

server.on('error', (e: NodeJS.ErrnoException) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Server already in use!');
    setTimeout(() => {
      server.close();
    }, 1000);
  }
});

server.listen(PORT, () => console.log(`Server started at: ${PORT}`));
