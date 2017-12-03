import { writeFile } from 'fs';

const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {
  production: ${process.env.PRODUCTION},
  superSecretKey: "${process.env.SUPER_SECRET_CRED1}",
  superDoubleSecret: "${process.env.SUPER_SECRET_CRED2}"
};
`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
