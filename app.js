import express from "express";
import { startDB } from "./src/config/database.js";
import { userRouter } from "./src/routes/user.routes.js";
import { taskRouter } from "./src/routes/task.routes.js";
// import { Product } from "./src/models/product.model.js";

const app = express();
const PORT = 3000;

// para que entienda el formato json
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", taskRouter);

// app.use("/", (req, res) => {
//   return res.json({ message: "servidor todo listo" });
// });

app.listen(PORT, async () => {
  await startDB();
  console.log(`Servidor listo http://localhost:${PORT}`);
});