const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const uri = process.env.MONGODB_URI;

/* `mongodb+srv://fullstackopen:${password}@fsocluster.pjgu0f8.mongodb.net/noteApp?retryWrites=true&w=majority&appName=FSOCluster`; */

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to DATABASE");
  })
  .catch((error) => {
    console.log(`This is the error message, ${error.message}`);
  });

const noteSchema = mongoose.Schema({
  content: String,
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
