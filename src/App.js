import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const saveEdit = (index) => {
    if (editValue.trim() === "") return;
    const newTodos = [...todos];
    newTodos[index].text = editValue;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        MUI Todo App
      </Typography>

      {/* Input + Button Row */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // force row
          flexWrap: "nowrap",   // no wrapping
          gap: 1,
          mb: 2,
        }}
      >
        <TextField
          fullWidth
          label="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <Button
          variant="contained"
          onClick={addTodo}
          sx={{ whiteSpace: "nowrap" }}
        >
          ADD TODO
        </Button>
      </Box>

      {/* Todo List */}
      <List>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <>
                {editIndex === index ? (
                  <IconButton edge="end" onClick={() => saveEdit(index)}>
                    <CheckIcon />
                  </IconButton>
                ) : (
                  <IconButton edge="end" onClick={() => startEdit(index)}>
                    <EditIcon />
                  </IconButton>
                )}
                <IconButton edge="end" onClick={() => deleteTodo(index)}>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </>
            }
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            {editIndex === index ? (
              <TextField
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                size="small"
                autoFocus
              />
            ) : (
              <ListItemText
                primary={todo.text}
                sx={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  )}
