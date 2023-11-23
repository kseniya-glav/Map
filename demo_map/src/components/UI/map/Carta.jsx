import "./Carta.css";
import { Map, YMaps, withYMaps } from "@pbe/react-yandex-maps";
import { useContext, useRef } from "react";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { fetchLocality } from "../../../http/orgAPI";
import PlacemarkUI from "../placemark/PlacemarkUI";

const Carta = observer(() => {
  const { organization } = useContext(Context);

  const centerLocality =
    organization.selectedLocality.length !== 0
      ? organization.selectedLocality
      : [58.0105, 56.2502];

  const map = useRef(null);
  if (map.current !== null && organization.selectedLocality) {
    map.current.panTo(organization.selectedLocality);
  }

  return (
    <YMaps>
      <div id="carta-test" className="carta">
        <Map
          className="map"
          instanceRef={map}
          defaultState={{
            center: centerLocality,
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={[
            "control.ZoomControl",
            "control.FullscreenControl",
            "geoObject.addon.balloon",
            "geoObject.addon.hint",
          ]}
        >
          <PlacemarkUI />
        </Map>
      </div>
    </YMaps>
  );
});

export default Carta;
