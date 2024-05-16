module.exports = [
  {
    name: "isSideBarRequired",
    type: "list",
    message: "Choose the menu type required",
    choices: ["Horizontal Menu", "Vertical Menu"],
    default: 0,
  },
  {
    name: "version",
    type: "input",
    message: "Enter initial version of your application",
  },
  {
    name: "authRequired",
    type: "list",
    message: "Choose the auth type required",
    choices: [
              "No Authentication",
              "Authentication using MIAMI (OAuth)",
            ],
    default: 0,
  }
];