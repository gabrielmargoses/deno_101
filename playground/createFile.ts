const encoder = new TextEncoder();

const helloText = encoder.encode("Hello Gabo 👨‍🎤\nDid you enjoy Deno ?");

await Deno.writeFile("hello.txt", helloText);
