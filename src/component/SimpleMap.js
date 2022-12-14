import React from 'react'
import Map from 'react-map-gl';

const SimpleMap = () => {

    return (
        <Map
            mapboxAccessToken="pk.eyJ1IjoibmhpZW5kb2FuaGFvMjIyIiwiYSI6ImNsYm50cXlrbzBnODgzd2w1c3NhN2NyZXQifQ.-3UDrvlPmMeWFJHJpTnsxA"
            initialViewState={{
                longitude: 106.68323046720074,
                latitude: 10.841686030434191,
                zoom: 11
            }}
            style={{ width: "100vw", height: "600px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
        />
    )
}

export default SimpleMap