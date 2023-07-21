import React from 'react'


const Home = () => {

  return (
    <div className='home'>
      <h2>Overview:</h2>
      <p>
        During my chat with [REDACTED] on Tuesday (7/18), we discussed how development of applications
        there with [REDACTED] are obfuscated by developing under different guises (ie. pizza delivery).
        <br /><br />
        I saw in the gig listing that the team uses Leaflet and decided it would be
        cool to experiment with it a bit in a way that mimics how I see the team using it.
        <br /><br />
        Instead of going the pizza tracker route, I've created Taylor Swift Tour Tracker (TSTT).
        Here a user can see the last know location, previous locations, and step through projected locations.
        A user can also hover over a location to see the last/projected seen date. The tour data has been hard 
        coded into a json file.
      </p>

      <h2>Technologies Used:</h2>
      <ul>
        <li>React.js</li>
        <li>React Leaflet</li>
        <li>Keycloak</li>
        <li>Material UI</li>
        <li>Docker</li>
      </ul>

      <h2>Feature Goals:</h2>
      <ul>
        <li>Google auth</li>
        <li>UI</li>
        <ul>
          <li>Header</li>
          <ul>
            <li>✅ show auth user</li>
            <li>✅ log out option</li>
          </ul>
          <li>Side Panel</li>
          <ul>
            <li>✅ button to snap to current location</li>
            <li>✅ toggle on/off past locations</li>
            <li>show locations in date range filter</li>
          </ul>
          <li>Map view</li>
          <ul>
            <li>✅ color coded</li>
            <ul>
              <li>blue: past dates</li>
              <li>red: future dates</li>
              <li>grey: last known location</li>
            </ul>
            <li>✅ point markers for locations</li>
            <ul>
              <li>hover on point for dates at location</li>
            </ul>
            <li>✅ radius view for last known location and next predicted location</li>
          </ul>
        </ul>
        <li>Stretch Goals</li>
        <ul>
            <li>user added points</li>
            <li>user added paths</li>
            <li>user adustable paths/polygons</li>
            <li>✅ update auth to keycloak</li>
            <li>serve up the data from an api</li>
            <li>deploy online</li>
          </ul>
      </ul>
    </div>
  )
}

export default Home