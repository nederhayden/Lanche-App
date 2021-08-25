import { useState, useEffect } from "react";
import { Collapse, List, ListItem, ListItemIcon } from "@material-ui/core";
import { AddShoppingCart, LabelImportant } from "@material-ui/icons";
import api from "../../../services/api";
import "./Menu.scss";

export default function CheckboxList() {
  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [urlCategory, setUrlCategory] = useState("/categoria");
  const [urlProducts, setUrlProducts] = useState("/produto");
  const [checked, setChecked] = useState([0]);

  async function fetchDataCategories() {
    const response = await api.get(urlCategory);

    setCategories(response.data.categorias);
  }

  async function fetchDataProducts() {
    const response = await api.get(urlProducts);

    setProducts(response.data.produtos);
  }

  useEffect(() => {
    fetchDataCategories();
    fetchDataProducts();
  }, []);

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
      {categories.map((category, value) => {
        return (
          <List key={category.id} component="nav">
            <ListItem button onClick={handleToggle(value)}>
              <ListItemIcon>
                <LabelImportant />
              </ListItemIcon>
              <strong className="title-category">{category.nome}</strong>
            </ListItem>
            {checked.indexOf(value) !== -1 ? (
              <Collapse
                className="collapse"
                in={true}
                timeout="auto"
                unmountOnExit
              >
                <div className="card">
                  {products.map((product) => {
                    return (
                      <div key={product.id} className="item">
                        <div className="img">
                          <img
                            src="https://image.freepik.com/vetores-gratis/astronauta-bonito-abraco-donut-dos-desenhos-animados-icone-ilustracao-vetorial-conceito-de-icone-de-comida-de-ciencia-isolado-vetor-premium-estilo-flat-cartoon_138676-3329.jpg"
                            alt=""
                          />
                        </div>
                        <div className="item-details">
                          <h3>{product.identificacao}</h3>
                          <dl>{product.descricao}</dl>
                          <div className="price-and-button">
                            <span>{`R$ ${product.valor}`}</span>
                            <AddShoppingCart style={{ color: "#56be72" }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
