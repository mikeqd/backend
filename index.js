const app = require("./app.js");

const logger = require("./utils/logger");

const config = require("./utils/config");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${config.PORT}`);
});
