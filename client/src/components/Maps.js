import React from "react";

export default function Maps() {
    
        var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:5,
    };
        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    
    
    return (
        <div id="googleMap" style="width:50%;height:400px;"></div>
    );
}
