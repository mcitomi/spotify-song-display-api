import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
export function saveUserData(userObject: object) {
    if(!existsSync(join(process.cwd(), "data"))) {
        mkdirSync(join(process.cwd(), "data"));
    }
    writeFileSync(join(process.cwd(), "data", "user.json"), JSON.stringify(userObject, null, 4), "utf-8");
}