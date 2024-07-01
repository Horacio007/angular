const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const path = './src/environments/';

const targetPath = `${path}/environments.ts`;
const envFileContent = `
export const environment = {
  mapbox_key: "${process.env['MAPBOX_KEY']}"
};
`;

mkdirSync(path, {recursive: true});
writeFileSync(targetPath, envFileContent);
