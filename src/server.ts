import fastify from 'fastify';

const app = fastify({ logger: true });

app.get('/', async () => ({
  message: 'Hello, world!'
}));

const start = async () => {
  try {
    const port = Number(process.env.PORT || 3000);
    const address = await app.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening on ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

void start();
