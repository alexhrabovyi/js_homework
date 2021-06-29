const input_1_lat = document.querySelector("#input-1");
const input_1_long = document.querySelector("#input-2");
const input_2_lat = document.querySelector("#input-3");
const input_2_long = document.querySelector("#input-4");

const button_geo = document.querySelector("#button-geo");
const button_route = document.querySelector("#button-route");

// ---------------------

const mapWrapper = document.querySelector("#map");

const map = new google.maps.Map(mapWrapper, {
    center: { lat: 48.487486, lng: 32.541504 },
    zoom: 6,
});

const directionsService = new google.maps.DirectionsService();

// ---------------------

function showRoute(from, to) {
    const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
    });

    directionsRenderer.setMap(map);

    directionsService.route(
        {
            origin: from,
            destination: to,
            travelMode: "DRIVING",
        },
        (result, status) => {
            if (status == "OK") {
                directionsRenderer.setDirections(result);
            }
        }
    );
}

function getCoord() {
    let all_coord = {
        lat_1: null,
        long_1: null,
        lat_2: null,
        long_2: null,
    }

    all_coord.lat_1 = input_1_lat.value;
    all_coord.long_1 = input_1_long.value;

    all_coord.lat_2 = input_2_lat.value;
    all_coord.long_2 = input_2_long.value;

    return all_coord;
}

// ---------------------

button_geo.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(
        (position) => {
            let self_coord = position;
            let self_lat = self_coord.coords.latitude;
            let self_long = self_coord.coords.longitude;

            input_1_lat.value = self_lat;
            input_1_long.value = self_long;
        },
        (err) => {
            console.log(err);
        }
    );
})

button_route.addEventListener("click", () => {
    let all_coord = getCoord();

    let from = {
        lat: Number(all_coord.lat_1),
        lng: Number(all_coord.long_1),
    };

    let to = {
        lat: Number(all_coord.lat_2),
        lng: Number(all_coord.long_2),
    };

    new google.maps.Marker({
        position: from,
        map,
        title: "Первая точка",
    });

    new google.maps.Marker({
        position: to,
        map,
        title: "Вторая точка",
    });

    showRoute(from, to);
})