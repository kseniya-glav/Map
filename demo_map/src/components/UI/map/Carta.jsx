import "./Carta.css";
import { Map, YMaps, withYMaps } from "@pbe/react-yandex-maps";
import { useContext, useEffect } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { fetchLocality } from "../../../http/orgAPI";
import PlacemarkUI from "../placemark/PlacemarkUI";

const Carta = observer(() => {
  const { organization } = useContext(Context);

  //console.log(organization.selectedLocality.coordinates)
  return (
    <YMaps>
      <div id="carta-test" className="carta">
        <Map
          className="map"
          defaultState={{
            center: [58.0105, 56.2502],
            zoom: 10,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <PlacemarkUI />
        </Map>
      </div>
    </YMaps>
  );
});

export default Carta;
