import { Box, InputAdornment, TextField } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "../Menu/Menu";

import "./Body.scss";

export default function Body() {
  return (
    <Box className="Body">
      <Box className="Category">
        <Box className="input-and-filter">
          <TextField
            className="input-outlined"
            label="Buscar no cardápio"
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <FilterListIcon className="filter-list-icon" fontSize="large" />
        </Box>
        <Menu />
      </Box>
      <Box className="Cart">Carrinho</Box>
    </Box>
  );
}
