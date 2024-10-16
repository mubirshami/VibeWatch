import ConnectDB from "./db/index.js";
import app from "./app.js";

const port = process.env.PORT;

ConnectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port:${port}`);
    });
  })
  .catch((Error) => {
    console.log(Error);
  });