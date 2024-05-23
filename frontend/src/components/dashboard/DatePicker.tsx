import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import { useDashboardContext } from '../../context/Context';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const DatePicker = () => {
    const [fromDate, setFromDate] = useState<string>();;
    const [toDate, setToDate] = useState<string>();;
    const { clientGridFilterParams, setClientGridFilterParams } = useDashboardContext();
    const { clientId } = useDashboardContext();

    const handleDateFilter = () => {
        setClientGridFilterParams({
            idClient: clientId,
            dateFrom: fromDate ? fromDate : clientGridFilterParams.dateFrom,
            dateTo: toDate ? toDate : clientGridFilterParams.dateTo
        });
    };
    return (
    <Box>
        <TextField
            id="fromDate"
            label="Desde"
            type="date"
            defaultValue="2021-03-01"
            size="small"
            InputProps={{ sx: { borderRadius: '4px 0px 0px 4px' } }}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFromDate(event.target.value);
            }}
        />
        <TextField
            id="toDate"
            label="Hasta"
            type="date"
            defaultValue="2021-12-30"
            size="small"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{ sx: { borderRadius: 0 } }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setToDate(event.target.value);
            }}
        />
        <Button variant="contained" size='large' onClick={()=> handleDateFilter ()} sx={{borderRadius: '0px 4px 4px 0px'}}>
            <SearchIcon />
        </Button>
    </Box>
  )
}

export default DatePicker