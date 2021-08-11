import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { LabelImportant, ExpandLess, ExpandMore } from "@material-ui/icons";

import { useState } from "react";
import "./Menu.scss";

export default function CheckboxList() {
  const [products, setProducts] = useState([
    { id: 0, name: "Sushi" },
    { id: 1, name: "Pizza" },
    { id: 2, name: "Hamburguer" },
    { id: 3, name: "Bebidas" },
  ]);

  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List>
      {products.map((product, value) => {
        return (
          <List component="nav">
            <ListItem button onClick={handleToggle(value)}>
              <ListItemIcon>
                <LabelImportant />
              </ListItemIcon>
              <ListItemText primary={product.name} />
            </ListItem>
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            {checked.indexOf(value) !== -1 ? (
              <Collapse in={true} timeout="auto" unmountOnExit>
                <ListItem button>
                  <ListItemText primary="Item" />
                </ListItem>
              </Collapse>
            ) : (
              false
            )}
          </List>
        );
      })}
    </List>
  );
}
