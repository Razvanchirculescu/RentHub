import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Maps.css";

export default function Maps({ location }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBHbK2B61CDcunXnylZS4aZ_xdH43H36-Q',
    });

    const center = useMemo(() => location, [location]);

    const onLoad = (marker) => {
        console.log("marker: ", marker);
    };

    return (
        <div className="maps">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap mapContainerClassName="map-container" center={center} zoom={12}>
                    <MarkerF onLoad={onLoad} position={center} />
                </GoogleMap>
            )}
        </div>
    );
}






