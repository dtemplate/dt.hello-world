const fs = require("fs");

export const main = async ({ rootDirectory, templateDirectory }) => {
  const gitignoreFile = fs.readFileSync(
    `${templateDirectory}/src/base/.gitignore.dt`,
    "utf-8"
  );

  fs.writeFileSync(`${rootDirectory}/.gitignore`, gitignoreFile);
};
