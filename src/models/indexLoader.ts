// models/index.ts
import { readdirSync } from "fs";
import path, { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

// Use import.meta to resolve paths in ESM context
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const modelsDir = path.resolve(__dirname);

// Read all `.model.ts` files in the models folder
const modelFiles = readdirSync(modelsDir).filter(
  file =>
    file.endsWith(".model.ts") ||
    file.endsWith(".model.js") // useful for compiled JS too
);

// Dynamically import each model to register it with Mongoose
for (const file of modelFiles) {
  const fullPath = path.join(modelsDir, file);
  await import(pathToFileURL(fullPath).toString());
}
