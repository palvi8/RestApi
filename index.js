import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.all("/", (req, res) => {
  console.log("request==", req);
  console.log("response===", res);

  res.send("I'm Up!");
});

const todos = [
  {
    id: 1,
    title: "title1",
    completed: false,
  },
  {
    id: 2,
    title: "title2",
    completed: true,
  },
  {
    id: 3,
    title: "title3",
    completed: false,
  },
];

//READ
app.get('/todos', (req, res) => res.json(todos));

//CREATE

app.post('/todos', (req, res) => {
    const newResponse = req.body;
    todos.push(newResponse);
    res.json({messga: "New Todo Added"});
})

//UPDATE
app.put('/todos/:id', (req, res) => {
    const newResponse = req.body;
    const newTodoId = Number(req.params.id);

    const todoIndex = todos.findIndex((todo) => todo.id === newTodoId);
    if(todoIndex !== -1){
        todos[todoIndex] = {
            id: newTodoId,
            ...newResponse
        }
    }

    res.json({messga: "Todo successfully updated"});
});

//DELETE

app.delete('/todos/:id', (req, res) => {
    const deleteId = Number(req.params.id);

    const todoIndex = todos.findIndex((todo) => todo.id === deleteId)
    todos.splice(todoIndex, 1);
    res.json({messga: "Todo deleted successfully"});
})

const PORT = 5111;
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
