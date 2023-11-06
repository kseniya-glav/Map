import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import { Placemark } from '@pbe/react-yandex-maps';

const PlacemarkUI = observer( () => {
    const {organization} = useContext(Context)

    
    return (

        <div>
            {organization.org.map(org => 
                <Placemark geometry={org.coordinates} 
                   
                />
            )}
            
        </div>

    )

})

export default PlacemarkUI