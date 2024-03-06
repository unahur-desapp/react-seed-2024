import { createTheme } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

export const customMuiTheme = createTheme({
  typography: {
    h4: {
      fontWeight: 'bold',
      color: lightBlue[700],
    },
    subtitle1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 'bold',
          fontSize: '1rem',
          color: lightBlue[900]
        }
      }
    }
  }
});
