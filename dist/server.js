import fastify from 'fastify';
const app = fastify({ logger: true });
app.get('/', async () => ({
    message: 'Hello, world!'
}));
const start = async () => {
    try {
        const address = await app.listen({ port: 3000, host: '0.0.0.0' });
        console.log(`Server listening on ${address}`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
void start();
