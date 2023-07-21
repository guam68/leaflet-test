## Overview:

During my chat with [REDACTED] on Tuesday (7/18), we discussed how development of applications there with [REDACTED] are obfuscated by developing under different guises (ie. pizza delivery).

I saw in the gig listing that the team uses Leaflet and decided it would be cool to experiment with it a bit in a way that mimics how I see the team using it.

Instead of going the pizza tracker route, I've created Taylor Swift Tour Tracker (TSTT). Here a user can see the last know location, previous locations, and step through projected locations. A user can also hover over a location to see the last/projected seen date. The tour data has been hard coded into a json file.


## Technologies Used:
- React.js
- React Leaflet
- Keycloak
- Material UI
- Docker

## Feature Goals:

- Google auth
- UI
    - Header
        - ✅ show auth user
        - ✅ log out option
    - Side Panel
        - ✅ button to snap to current location
        - ✅ toggle on/off past locations
        - show locations in date range filter
    - Map view
        - ✅ color coded
            - blue: past dates
            - red: future dates
            - grey: last known location
        - ✅ point markers for locations
            - hover on point for dates at location
        - ✅ radius view for last known location and next predicted location
- Stretch Goals
    - user added points
    - user added paths
    - user adustable paths/polygons
    - ✅ update auth to keycloak
    - serve up the data from an api
    - deploy online