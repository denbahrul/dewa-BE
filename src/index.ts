import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Server dewa persewaan tenda");
});

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
