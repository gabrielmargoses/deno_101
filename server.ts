import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 2626;
const PRODUCTS_API_PATH = "/api/v1/products";

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get(PRODUCTS_API_PATH, ({ response }: { response: any }) => {
	response.body = "Hello Gabo";
});

console.log(`Server launch on http://localhost:${port}`);

await app.listen({ port });
