const fs = require("fs");

export const main = async ({ rootDirectory, templateDirectory }) => {
  const appFile = fs.readFileSync(
    `${templateDirectory}/src/base/app.js.dt`,
    "utf-8"
  );

  fs.writeFileSync(`${rootDirectory}/app.js`, appFile);
};
