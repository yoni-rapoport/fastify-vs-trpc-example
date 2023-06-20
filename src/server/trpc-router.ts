import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const trpcRouter = t.router({
    myRoute: t.procedure.input(
        z.object({
            name: z.string(),
            mail: z.string().nullable()
        })).mutation(({ input: { name, mail } }) => {
            console.log(name + " " + mail);
            return { name, mail };
        })
});

export type TrpcRouter = typeof trpcRouter;
