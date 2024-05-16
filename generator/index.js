const { consoleLogger } = require("../consoleLogger");

module.exports = function (api, options) {
  let promptResults = options;
  consoleLogger(promptResults);
  /**mandatory dependencies */
  let dependencies = {
    "@ifxglobal/my-global-design-tokens": "^1.4.0",
    "@infineon/infineon-design-system-react": "^21.8.3",
    "babel-eslint": "^10.1.0",
    "core-js": "^3.8.3",
    sass: "^1.69.5",
    "sass-loader": "^13.3.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "react-router": "^6.23.1",
    "react-router-dom": "^6.23.1",
    "web-vitals": "^2.1.4"
  };

  if(promptResults.authRequired === "Authentication using MIAMI (OAuth)") {
    dependencies["@miami/miami"] = "^1.1.0"
  }

    /**mandatory dev dependencies */
    let devDependencies = {
      "@babel/core": "^7.23.5",
      "@babel/eslint-parser": "^7.23.3",
      "@babel/preset-react": "^7.24.1",
      "eslint": "^7.32.0",
      "eslint-plugin-react": "^7.34.1"
    };

    if(promptResults.authRequired != "No Authentication") {
      devDependencies["axios"] = "^1.6.4";
      devDependencies["react-toastify"] = "^10.0.5";
      devDependencies["concurrently"]= "^8.2.2";
    }

  api.extendPackage({
    version: promptResults.version || "0.1.0",
    dependencies: dependencies,
    devDependencies: devDependencies,

    /*adding scripts for jest and jsdoc */
    scripts: {
      doc: "./node_modules/.bin/jsdoc src -r -c jsdoc_config.json -d documents",
      ...(promptResults.authRequired === "Authentication using MIAMI (OAuth)" ? {
        "start:dev": "PORT=8080 react-scripts start",
        "start:serve": "docker compose up",
        "start:both": "concurrently \"npm run start:dev\" \"npm run start:serve\"",
        start: "npm run start:both",
      } : {start:"PORT=8081 react-scripts start"}),
      build: "react-scripts build",
      "test:e2e": "playwright test",
      lint: "eslint . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore",
      format: "prettier --write src/",
    },
  });

  if(promptResults.authRequired != "No Authentication") {
    api.render("./templateFiles", {
      promptResults,
    });
  }
  
  api.render("./templates", {
    promptResults,
  });
};
