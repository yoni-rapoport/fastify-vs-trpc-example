import { FastifyInstance } from "fastify";
import { MY_ROUTE, User, UserType } from "../shared";

export function addFastifyRoutes(server: FastifyInstance) {

    server.post<{ Body: UserType, Reply: UserType }>(
        MY_ROUTE,
        {
            schema: {
                body: User,
                response: {
                    200: User
                },
            },
        },
        (request, reply) => {
            const { name, mail } = request.body;
            console.log(name + " " + mail);
            reply.status(200).send({ name, mail });
        }
    )

}