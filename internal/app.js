import express from 'express';
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
    console.log("hit")
    res.send("Connected to Server");
});

app.use("api/users", userRoutes);

app.listen(8081, () => {
    console.log('Server is running on port 8081');
});