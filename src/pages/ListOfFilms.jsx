import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Stack, Typography, Box, styled, Button } from "@mui/material";
import { cyan, teal } from "@mui/material/colors";
import { range } from 'lodash';
import { getAllFilms } from "../services/FilmService";
import { AddFilmDialog } from "./AddFilmDialog";

function ColoredLineTableCell(props) {
  return <TableCell sx={{ borderBottomColor: teal[300], borderBottomWidth: 2, ...(props.sx || {}) }} {...props} />;
}

function pairOfActorsRendering(pairOfActors) {
  return pairOfActors.join(' / ');
}

function FilmRow({ film, isLast }) {
  const CellClass = isLast ? TableCell : ColoredLineTableCell;

  
  const actorRendering = film.mainActors.length === 0 
    ? '-----'
    : film.mainActors.length < 3
    ? pairOfActorsRendering(film.mainActors)
    : <Stack direction='column'>
      {range(0, film.mainActors.length, 2).map(n => (
        <Box key={n}>{pairOfActorsRendering(film.mainActors.slice(n, n+2))}</Box>
      ))}
    </Stack>;

  return <TableRow>
    <CellClass>{ film.name }</CellClass>
    <CellClass>{ film.year }</CellClass>
    <CellClass>{ film.genre }</CellClass>
    <CellClass>{ film.director }</CellClass>
    <CellClass>{ actorRendering }</CellClass>
  </TableRow>
}

function TableOfFilms({ films }) {
  return <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <ColoredLineTableCell>Nombre</ColoredLineTableCell>
          <ColoredLineTableCell>Año</ColoredLineTableCell>
          <ColoredLineTableCell>Género</ColoredLineTableCell>
          <ColoredLineTableCell>Director</ColoredLineTableCell>
          <ColoredLineTableCell>Actores</ColoredLineTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { films.map((film, ix) => (
          <FilmRow key={film.id} film={film} isLast={ix === films.length - 1} />
        )) }
      </TableBody>
    </Table>
  </TableContainer>;
}

export function ListOfFilms() {
  const [allFilms, setAllFilms] = useState();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchAllFilms = async () => {
      const obtainedFilms = await getAllFilms();
      setAllFilms(obtainedFilms);
    }
    fetchAllFilms();
  }, []);

  return allFilms && <>
    <AddFilmDialog open={isAdding} closeAction={() => setIsAdding(false)} />
    <Stack direction='column'>
      <Stack direction='row' justifyContent='space-between' alignItems='flex-end'>
        <Typography variant='h4'>Películas</Typography>
        <Button variant='contained' color='info' onClick={() => setIsAdding(true)}>
          <Box sx={{ px: 2 }}>Agregar</Box>
        </Button>
      </Stack>
      <Box sx={{ mt: 4 }}>
        <Paper elevation={4} sx={{ borderStyle: 'solid', borderWidth: '4px', borderColor: cyan[700]}}>
          <TableOfFilms films={allFilms} />
        </Paper>
      </Box>
    </Stack>
  </>
  ;
}

