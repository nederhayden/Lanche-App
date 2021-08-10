import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useState } from "react";
import "./Menu.scss";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List component="nav">
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LabelImportantIcon />
        </ListItemIcon>
        <ListItemText primary="Sushi" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Temaki" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
