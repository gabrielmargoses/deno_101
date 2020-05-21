import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 1234 });
console.log("http://localhost:1234/");

for await (const req of server) {
	req.respond({ body: "Hello Gabo\n" });
}
