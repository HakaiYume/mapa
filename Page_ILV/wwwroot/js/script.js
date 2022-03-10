function initMap() {
    let lugarinfo = []
    const ubicacion = new Localizacion(() => {
        const coordenadas = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        }
        const options = {
            center: coordenadas,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var mapa = new google.maps.Map(document.getElementById("map"), options);
        var marker = new google.maps.Marker({
            position: coordenadas,
            map: mapa,
            draggable: true,
            title: "Drag me!"
        });

        marker.addListener('dragend', function (event) {
            document.getElementById("latitud").value = String(this.getPosition().lat());
            document.getElementById("longitud").value = String(this.getPosition().lng().toString());
        });
    });
}
function getMap(datos) {
    let lugarinfo = []
    const ubicacion = new Localizacion(() => {
        const coordenadas = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        }
        const options = {
            center: coordenadas,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var mapa = new google.maps.Map(document.getElementById("getmap"), options);

        datos.forEach(x => {
            return new google.maps.Marker({
                title: x.ubicacion,
                position: { lat: parseFloat(x.lat), lng: parseFloat(x.lon) },
                map: mapa
            });
        })

        /*
            
        */
    });
}
function getByIdMap(dato) {
    const coordenadas = {
        lat: parseFloat(dato.lat),
        lng: parseFloat(dato.lon)
    }
    const options = {
        center: coordenadas,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var mapa = new google.maps.Map(document.getElementById("getbyidmap"), options);
    var marker = new google.maps.Marker({
        position: coordenadas,
        title: dato.ubicacion,
        map: mapa
    });

    marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
    });
}

/*
let Form = document.querySelector(".location-form");

Form.addEventListener("submit", sendLocation);

const sendLocation = (e) => {
    e.preventDefault();
    conolse.log(e.target.element.latitud)
    fetch('https://localhost:44316/api/ubis', {
        method: 'POST',
        body: {
            ubicacion: e.target.elements.ubicacion,
            lat: e.target.elements.latitud,
            lon: e.target.elements.longitud
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}*/