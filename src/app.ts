import express, { Express } from "express";
import { salaryCalculatorRoutes } from "./routes/salaryCalculator.route";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger-output.json";

const app: Express = express();
const port = process.env.PORT || 3002;

app.use("/salary-calculator", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(express.json());
app.use(salaryCalculatorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
