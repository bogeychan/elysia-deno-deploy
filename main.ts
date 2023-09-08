import { Elysia, swagger } from './deps.ts';

const app = new Elysia()
  .use(swagger())
  .get('/', () => ({ hello: 'Deno Deploy👋' }))
  .get('/:world', (ctx) => `Hello ${ctx.params.world}`)
  .listen(8080);

console.log(`Listening on http://127.0.0.1:${app.server!.port}`);

