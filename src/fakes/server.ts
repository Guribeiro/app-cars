import { create, router } from 'json-server';
import db from './db.json';

const PORT = 3000;

const server = create();

const route = router(db);

route.db._.id = '_id';

server.use(route);

server.listen(PORT, () => {
  console.log(`json-server is running at port ${PORT}`);
});
