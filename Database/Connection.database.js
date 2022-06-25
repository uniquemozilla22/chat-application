const ConnectionDatabase = (mongoose) => {
  const database = mongoose.connection;

  const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.hhuxg9t.mongodb.net/?retryWrites=true&w=majority`;

  console.log(uri);
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  database.once("open", () => {
    console.log("Database Connected with :", process.env.DATABASE_USER);
  });
};

export default ConnectionDatabase;
