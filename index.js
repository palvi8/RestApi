import express  from "express";

const app = express();

app.all('/', (req, res) => {
    console.log("request==", req);
    console.log("response===", res);

    res.send("I'm Up!");
});

const PORT = 5111;
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})