const fs = require("fs");

export const main = async ({ rootDirectory, templateDirectory }) => {
  const dotenvFile = fs.readFileSync(
    `${templateDirectory}/src/base/.env.dt`,
    "utf-8"
  );

  fs.writeFileSync(`${rootDirectory}/.env`, dotenvFile);
};
