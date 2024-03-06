import { Box } from "@mui/material";
import { ListOfFilms } from "./pages/ListOfFilms";
// import { ListOfFilms } from "./pages/ListOfFilmsReduxStyle";

export function App() {

  return (
    <Box sx={{mx: 4, my: 4}}>
      <ListOfFilms />
    </Box>
  )
}
