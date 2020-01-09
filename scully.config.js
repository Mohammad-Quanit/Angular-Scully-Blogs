exports.config = {
  projectRoot: "./src/app",
  routes: {
    "/users/:userId": {
      type: "json",
      userId: {
        url: "https://jsonplaceholder.typicode.com/users",
        property: "id"
      }
    }
  }
};