import { glob } from 'glob';
import path from 'path';
import m2s from 'mongoose-to-swagger';
import { fileURLToPath, pathToFileURL } from 'url';

async function loadSchemas() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dir = path.join(__dirname, '..', '..', 'models');

  const schemas = {};

  const files = glob.sync(`${dir}/*.js`);
  for (const file of files) {
    const schemaDefinition = (await import(pathToFileURL(file))).default;

    if (schemaDefinition) {
      schemas[schemaDefinition.modelName] = m2s(schemaDefinition);
    }
  }

  return schemas;
}

export default loadSchemas;
