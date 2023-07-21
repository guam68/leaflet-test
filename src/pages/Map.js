import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Polyline, Popup, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { locations } from 'utils/constants/locations'
import Sidebar from '../components/Sidebar'

let lastKnownLoc;
let today = new Date(new Date().toDateString()).getTime();
let nextLoc = locations.find(location => {
  if (new Date(location.dates[location.dates.length - 1]).getTime() > today
    && new Date(location.dates[0]).getTime() > today) {
    return true
  }
  return false
})

if (nextLoc.id !== 0) {
  lastKnownLoc = locations[(nextLoc.id - 1)]
}

const getPreviousLocationMarkers = (id) => {
  let previousLocArr = []
  let linePositions = []

  for (let i = 0; i < id; i++) {
    previousLocArr.push(
      <CircleMarker
        center={[locations[i].lat, locations[i].long]}
        pathOptions={{ color: 'blue' }}
        radius={3}>
        <Popup>Last Seen: {locations[i].dates[locations[i].dates.length - 1]}</Popup>
      </CircleMarker>)
    linePositions.push([locations[i].lat, locations[i].long])
  }
  linePositions.push([lastKnownLoc.lat, lastKnownLoc.long])
  previousLocArr.unshift(<Polyline pathOptions={{ color: 'blue' }} positions={linePositions} />)
  return previousLocArr
}

const getProjectedLocations = (projLocs) => {
  let projLocArr = []
  let linePositions = [[lastKnownLoc.lat, lastKnownLoc.long]]

  projLocs.forEach(loc => {
    projLocArr.push(
      <Circle
        center={[loc.lat, loc.long]}
        pathOptions={{ color: 'red' }}
        radius={40000}>
        <Popup>Projected Arrival: {loc.dates[0]}</Popup>
      </Circle>
    )
    linePositions.push([loc.lat, loc.long])
  })
  if (linePositions.length > 1) {
    projLocArr.unshift(<Polyline pathOptions={{ color: 'red' }} positions={linePositions} />)
  }
  return projLocArr
}

const Map = () => {
  const [map, setMap] = useState()
  const [projLocs, setProjLocs] = useState([])
  const [checked, toggleChecked] = useState(false)
  const [previousLocations, setPreviousLocations] = useState([])
  const [projectedLocations, setProjectedLocations] = useState([])

  useEffect(() => {
    if (checked) {
      let updatedPreviousLocations = getPreviousLocationMarkers(lastKnownLoc.id)
      setPreviousLocations(updatedPreviousLocations)
    }
    else {
      setPreviousLocations([])
    }
  }, [checked])

  useEffect(() => {
    let updatedProjLocations = getProjectedLocations(projLocs)
    setProjectedLocations(updatedProjLocations)
  }, [projLocs])


  const mapContainer =
    <>
      <MapContainer id="map" center={[lastKnownLoc.lat, lastKnownLoc.long]} zoom={4} ref={setMap} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[lastKnownLoc.lat, lastKnownLoc.long]} pathOptions={{ color: 'black' }} radius={40000}>
          <Popup>Last Seen: {lastKnownLoc.dates[lastKnownLoc.dates.length - 1]}</Popup>
        </Circle>
        {previousLocations.length > 0 && previousLocations}
        {projectedLocations.length > 0 && projectedLocations}
      </MapContainer>
    </>

  return (
    <div id='App'>
      {
        map &&
        <Sidebar
          map={map}
          lastKnownLoc={lastKnownLoc}
          checked={checked}
          toggleChecked={toggleChecked}
          projLocs={projLocs}
          setProjLocs={setProjLocs} />
      }
      {mapContainer}
    </div>
  )
}

export default Map