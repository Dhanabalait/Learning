// Using express
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of express
const app = express();
app.use(express.json());


// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/mern-app')
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('DB error' + err);
    });

// Create a Schema
const toDoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: String
})

// Create a model
const todoModel = mongoose.model('Todo', toDoSchema);

// Create a new item
app.post('/todos', async (req, res) => {
    const { title, description } = req.body;
    // const newTodo = {
    //     id: todos.length + 1,
    //     title,
    //     description
    // };
    // todos.push(newTodo);
    // console.log(todos);
    try {
        const newTodo = new todoModel({ title, description });
        await newTodo.save();
        res.status(200).json(newTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

app.get('/todos', async (req, res) => {
    try {
        const todos = await todoModel.find();
        res.json(todos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

// Update item
app.put('/todos/:id', async (req, res) => {
    try {
        const { title, description } = req.body;
        const id = req.params.id;
        const updatedTodo = await todoModel.findByIdAndUpdate(
            id,
            { title, description },
            {new:true}
        )
        if (!updatedTodo) {
            return res.status(404).json({ message: "Record is not found" })
        }
        res.json(updatedTodo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

})

// Delete item
app.delete('/todos/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        await todoModel.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log('Server port no. is' + port);

})