import { Box, Stack } from "@mui/material";
import { AppRouter } from "./AppRouter";
import { TopMenu } from "./components/TopMenu";
import { BrowserRouter } from "react-router-dom";

export function App() {

  return (
    <BrowserRouter>
      <Stack direction='column'>
        <TopMenu />
        <Box sx={{mx: 4, my: 4}}>
          <AppRouter />
        </Box>
      </Stack>
    </BrowserRouter>
  )
}
