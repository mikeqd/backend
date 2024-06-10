const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const username = "fullstackopen";
const password = encodeURIComponent(process.argv[2]);

const uri = `mongodb+srv://${username}:${password}@fsocluster.pjgu0f8.mongodb.net/noteApp?retryWrites=true&w=majority&appName=FSOCluster`;

mongoose.set("strictQuery", false);

mongoose.connect(uri);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note3 = new Note({
  content: "I bet they didn't see that one coming.",
  important: true,
});

/* note3.save().then((result) => {
  console.log("note saved!");
  mongoose.connection.close();
}); */

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
