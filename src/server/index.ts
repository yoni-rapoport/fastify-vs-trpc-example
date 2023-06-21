import Fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { addFastifyRoutes } from './fastify-router';
import { trpcRouter } from './trpc-router';
import { trpcRouter1 } from './trpc-another-router';

const server = Fastify().withTypeProvider<TypeBoxTypeProvider>()

addFastifyRoutes(server);

server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: trpcRouter },
});

server.register(fastifyTRPCPlugin, {
    prefix: '/trpc1',
    trpcOptions: { router: trpcRouter1 },
});

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        //  process.exit(0)
    }
    console.log(`Server listening at ${address}`)
})