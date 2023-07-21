import { useState, useCallback } from 'react'
import { Button, Switch, FormControlLabel, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { locations } from 'utils/constants/locations'

const Sidebar = ({ map, lastKnownLoc, checked, toggleChecked, projLocs, setProjLocs}) => {
    const [startDate, setStartDate] = useState()

    const togglePreviousLocs = showPrevious => {
        toggleChecked(!showPrevious)
    }

    const onClick = useCallback(() => {
        map.setView([lastKnownLoc.lat, lastKnownLoc.long], 10)
    }, [map, lastKnownLoc.lat, lastKnownLoc.long])

    const decreaseProjLocs = () => {
        let updatedProjLocs = projLocs
        if (projLocs.length > 0 && projLocs[projLocs.length - 1].id > lastKnownLoc.id) {
            updatedProjLocs = updatedProjLocs.slice(0, -1)
            setProjLocs(updatedProjLocs)
        }
    }

    const increaseProjLocs = () => {
        let updatedProjLocs = projLocs
        let nextProjId = projLocs.length > 0 
            ? projLocs[projLocs.length - 1].id + 1
            : lastKnownLoc.id + 1
        let nextLoc = locations.find(location => location.id === nextProjId)
        if (nextLoc) {
            updatedProjLocs.push(nextLoc)
            setProjLocs([...updatedProjLocs])
        }
    }

    return (
        <div id='sidebar'>
            <Button variant="contained" sx={{ margin: 2, whiteSpace: 'nowrap', }} onClick={onClick}>Last Known Location</Button>
            <FormControlLabel control={
                <Switch
                    sx={{ marginLeft: 2, }}
                    checked={checked}
                    onChange={() => togglePreviousLocs(checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            }
                label="Show Previous Locations" />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{ margin: 2 }}
                    label="Start Date"
                    value={startDate}
                    onChange={(newDate) => setStartDate(newDate)}
                />
            </LocalizationProvider> */}
            <div className='button-pair'>
                <IconButton variant="contained" onClick={decreaseProjLocs}><ArrowCircleLeftIcon /></IconButton>
                <IconButton variant="contained" onClick={increaseProjLocs}><ArrowCircleRightIcon /></IconButton>
            </div>
        </div>
    )
}

export default Sidebar;