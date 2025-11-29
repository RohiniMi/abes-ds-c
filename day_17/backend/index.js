import express from "express";
import fs from "fs";

const app = express();
const PORT = 8800;

app.use(express.json());

const readData = () => {
    const data = fs.readFileSync("./data.json", "utf-8");
    return JSON.parse(data);
}
const writeData = (data) => {
    fs.writeFileSync("./data.json", JSON.stringify(data,null,2))
}
app.get("/users", (req, res) => {
    res.json(readData());
})
app.post("/users", async (req, res) => {
    const usersData = await readData();
    const data = req.body;
    const newData = {id:usersData.length, data}
    usersData.push(newData);
    writeData(usersData);
    res.status(200).json({
        "message": "Data has been sent successfully."
    })
})
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});