let express = require("express");
let users = require("./MOCK_DATA.json");
let app = express();
let fs = require("fs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let user = users.find((u) => u.id === id);
  if (user) {
    return res.json(user);
  } else {
    return res.json({ error: "User is Not Exist" });
  }
});
app.post("/api/users", (req, res) => {
  let body = req.body;
  users.push({ ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "successfully added" });
  })});

  app.patch("/api/users/:id", (req, res) => {
    let body = req.body;
    let userId = req.params.id;

    let index = users.findIndex((u) => u.id === userId);
    if (!index) {
      return res.json({ error: "User Not Exist" });
    }
    users[index] = {
      ...users[index],
      ...body,
    };
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
      return res.json({
        status: "Successfully updated",
        updatedUser: users[index],
      });
    });
  });

  app.delete("/api/users/:id", (req, res) => {
    let userId = req.params.id;
    let users = JSON.parse(fs.readFileSync("./MOCK_DATA.json", "utf-8"));
    let newUsers = users.filter((u) => u.id !== userId);
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(newUsers));
    return res.json({ status: "successfully deleted" });
  });

app.listen(8001, () => console.log(`Server is running on port 8001`));
