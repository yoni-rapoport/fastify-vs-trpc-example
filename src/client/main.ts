import axios from "axios";
import { MY_ROUTE, UserType } from "../shared";
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { TrpcRouter } from "../server/trpc-router";

const trpc = createTRPCProxyClient<TrpcRouter>({ links: [httpBatchLink({ url: '/trpc' })] });

async function test() {
  
  const { data } = await axios.post<UserType, { data: UserType }, UserType>(MY_ROUTE, { name: 'yoni', mail: 'yoni@yoni.com' });
  
  alert("fastify route: " + data.name + " " + data.mail);

  const { name, mail } = await trpc.myRoute.mutate({ name: 'yoni', mail: 'yoni@yoni.com' })
  
  alert("trpc route: " +  name + " " + mail);
}

test();