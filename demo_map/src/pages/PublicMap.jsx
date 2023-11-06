import React, {useContext, useEffect} from 'react'
import {observer} from "mobx-react-lite";

import FilterMap from "../components/UI/filterMap/FilterMap"
import Footer from "../components/UI/footer/Footer"
import Carta from "../components/UI/map/Carta"
import Navbar from "../components/UI/navbar/Navbar"
import NavbarAdmin from "../components/UI/navbar/NavbarAdmin"
import {Context} from "../index";
import { fetchCategory, fetchLocality, fetchPlaceMark, fetchType } from '../http/orgAPI';

const PublicMap = observer(() => {
    const {organization} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => organization.setCategory(data))
        fetchType().then(data => organization.setType(data))
        fetchLocality().then(data => organization.setLocality(data))
        fetchPlaceMark().then(data => organization.setOrg(data))
    }, [])



    const isAuth = false;
    return (
        isAuth 
            ?
                <div> 
                    <NavbarAdmin/>
                    <div className="carta_page" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Carta/>
                        <FilterMap/>
                    </div>
                </div>
            :
                <div> 
                    <Navbar/>
                    <div className="carta_page" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Carta/>
                        <FilterMap/>
                    </div>
                    <Footer/>
                </div>

    )
})

export default PublicMap