import express from 'express';

const app = express();

app.get("/test", (req, res) => {
    console.log("hit")
    res.send("Connected to Server");
});
app.listen(8081, () => {
    console.log('Server is running on port 8081');
});