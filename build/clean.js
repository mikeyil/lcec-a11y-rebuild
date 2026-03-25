import { rmSync, existsSync } from "fs";

if (existsSync("dist")) {
  rmSync("dist", { recursive: true, force: true });
  console.log("Cleaned dist/");
}
