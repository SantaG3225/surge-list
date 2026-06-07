import { writeFileSync, mkdirSync } from "fs";

export function saveFile(path: string, content: string) {
  mkdirSync(path.split("/").slice(0, -1).join("/"), { recursive: true });
  writeFileSync(path, content);
}
