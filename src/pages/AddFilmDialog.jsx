import { Button, Dialog, DialogTitle, Stack, TextField } from "@mui/material";
import { useState } from "react";

const commonFieldProps = { variant: 'outlined', size: 'small', sx: {mb: 3} };

function yearMessage(value) {
  if (value.length === 0) { return null; }

  const year = Number(value);
  return isNaN(year) 
    ? 'El año tiene que ser un número'
    : (year < 1880 || year > 2050)
    ? 'El año debe estar entre 1880 y 2050'
    : null;
}

export function AddFilmDialog({ open, closeAction }) {
  const [newFilmData, setNewFilmData] = useState({ name: '', year: '' });

  return <Dialog open={open}>
    <DialogTitle>Agregar película</DialogTitle>
    <Stack direction='column' sx={{ mx: 2, my: 2}}>
      <TextField {...commonFieldProps}
        label='Nombre'
        value={newFilmData.name} 
        onChange={event => setNewFilmData(current => ({...current, name: event.target.value}))} 
      />
      <TextField {...commonFieldProps}
        label='Año'
        value={newFilmData.year} 
        onChange={event => setNewFilmData(current => ({...current, year: event.target.value}))} 
        error={!!yearMessage(newFilmData.year)}
        helperText={yearMessage(newFilmData.year)}
      />
      <Stack direction='row' justifyContent='flex-end' spacing={2} sx={{mt: 2}}>
        <Button variant='contained' color='success' size='small' onClick={closeAction}>Agregar</Button>
      </Stack>
    </Stack>
  </Dialog>;
}