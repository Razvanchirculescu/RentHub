import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Maps.css";

export default function Maps(){
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyB3I0_AonpTHy5LAvcaBIRkJ6pz3eyabzo',
    });
    const center = useMemo(() => ({ lat: 44.439663, lng: 26.096306 }), []);

    return (
        <div className="maps">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}
                >
                    <Marker
                        position={{ lat: 44.439663, lng: 26.096306 }}
                        icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                    />
                </GoogleMap>

            )}
        </div>
    );
};
