import React, { useEffect } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { useDashboardContext } from '../../context/Context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RestoreIcon from '@mui/icons-material/Restore';
import { getInboundCase } from '../../services/ClientService';
import { InboundCaseResultsInterface, ClientGridProps, testClient } from '../../services/Interfaces';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
}));

const ClientGrid = () => {
  const theme = useTheme();
  const [inboundCase, setInboundCase] = React.useState<InboundCaseResultsInterface[] | null>();
  const [selectedStatus, setSelectedStatus] = React.useState<string>('Todos');
  const { clientId, clientGridFilterParams } = useDashboardContext();
  const { dateFrom, dateTo } = clientGridFilterParams;

  useEffect(() => {
    let selectedStatusCases : any = []

    const getData = async ({idClient, dateFrom, dateTo} : ClientGridProps ) => {
      
      // -- idClient = Cliente test creado para demostrar menu lateral -- //
      if (idClient == 0){
        setInboundCase(testClient.results)
      }
      if (!idClient) {
        return
      }
      try {
        const data = (await getInboundCase({ idClient, dateFrom, dateTo })).results;
        if (!selectedStatus || selectedStatus == 'Todos') {
          setInboundCase(data)
        } else {
          data.forEach(element => {
            if ((element.case_result.name.toLowerCase()).includes(selectedStatus.toLowerCase())){
              selectedStatusCases.push(element)
            }
          })
          setInboundCase(selectedStatusCases)
        }
      } catch (error) {
        console.error('Error al cargar el caso:', error);
      }
    };

    getData({ idClient: clientId, dateFrom: dateFrom, dateTo: dateTo });
  }, [clientId, dateFrom, dateTo, selectedStatus]);

  const tableHeadInfo = ['Gestionado', 'ID Caso', 'Telefono', 'Dni', 'Grupo', 'Orden', 'Llamada', 'Estado']
  const caseStatus = ['Todos', 'Transferido', 'Niega confirmación datos', 'Cliente no encontrado en DB', 'Llamando', 'Cortó cliente', 'Mail enviado', 'Indefinido']

  return (
    <Box sx={{mt:5}}>
      <Typography color={theme.palette.primary.main} display={inboundCase ? 'none' : 'block'}>Seleccione un cliente del menu</Typography>
      <Box className='statusFilter'>
        <List disablePadding sx={{display: 'flex', height:'30px', mt:3 }} >
          { caseStatus.map((status) => (
            <ListItem key={status} sx={{width: "fit-content"}}>
              <ListItemButton onClick={() => setSelectedStatus(status)} sx={{padding: 0}}>
                <ListItemText primary={status} primaryTypographyProps={{fontSize: '12px', textTransform: 'uppercase', color: selectedStatus === status ? theme.palette.text.primary : theme.palette.text.disabled }} />
              </ListItemButton>
            </ListItem>
            ))
          }
        </List>
      </Box>
      <TableContainer component={Paper} sx={{mt:1}}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {tableHeadInfo.map((cell) => (
                  <StyledTableCell align={tableHeadInfo.indexOf(cell) == 0 ? "left" : "right"} key={tableHeadInfo.indexOf(cell)}>{cell}</StyledTableCell>
                  ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {inboundCase && inboundCase.map((result) => (
              <TableRow
                key={result.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" alignItems="center" gap={1}>
                      <DateRangeIcon sx={{color: theme.palette.primary.dark}} fontSize='small'/>
                      {result.last_updated}
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{result.case_uuid}</TableCell>
                  <TableCell align="right">{result.phone}</TableCell>
                  <TableCell align="right">{result.extra_metadata.dni}</TableCell>
                  <TableCell align="right">{result.extra_metadata.grupo}</TableCell>
                  <TableCell align="right">{result.extra_metadata.orden}</TableCell>
                  <TableCell align="right">
                    <Stack direction="row" alignItems="center" gap={1}>
                      <RestoreIcon sx={{ color: theme.palette.primary.dark}} fontSize='small'/>
                      {result.case_duration}
                    </Stack>
                  </TableCell>
                  <TableCell align="right">{result.case_result.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography color={theme.palette.primary.main} display={clientId == 0 ? 'block' : 'none'} sx={{pt:1, fontSize: '12px'}}>
        Los datos del cliente test no provienen de la API, por lo que no admiten filtrado
      </Typography>
    </Box>
  )
}

export default ClientGrid