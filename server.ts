import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";

const port = 2626;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server launch on http://localhost:${port}`);

await app.listen({ port });
