import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


function Todo(props) {
    return(
        <List>
            <ListItem>
                <ListItemText primary={props.text} secondary="☎️ Dummy Deadline" />
            {/* <li>{props.text}</li> */}
            </ListItem>
        </List>
    )
}

export default Todo;