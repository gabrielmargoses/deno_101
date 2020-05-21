import { dayOfYear, currentDayOfYear } from "https://deno.land/std/datetime/mod.ts";

console.log(dayOfYear(new Date("1983-10-21")));
console.log(currentDayOfYear());
