import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

const PRODUCTS_API_PATH = "/api/v1/products";

router.get(PRODUCTS_API_PATH, ({ response }: { response: any }) => {
	response.body = "Hello Gabo";
});

export default router;
