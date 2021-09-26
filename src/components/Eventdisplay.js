import React, { useEffect, useState } from 'react'
import datafile from './Eventdata'
import { useParams } from "react-router-dom"
import Navbare from './Navbare'
import Eventhead from './EventHead'
import { auto } from '@popperjs/core'
import Footer from './Footer'
import '../style/main.css'


const Eventdisplay = () => {
    const { id } = useParams();
    const eventname = ["Annual Research Meet", "IPR", "TEDxIITKharagpur", "TechTalks", "INDAC"];

    const [event, setevent] = useState(eventname[id - 1]);
    const [data, setdata] = useState(null);
    useEffect(
        () => {
            setdata(datafile.filter(data1 => data1.event === event));
        }, [event]
    );

    return (
        <div>
            <Navbare />
            <Eventhead />

            <div className="container" style={{ textAlign: "center" },{margin:"20px auto"}}>
                <TagButton name="Annual Research Meet" eventActive={event === 'Annual Research Meet' ? true : false} handlevent={setevent} />
                <TagButton name="IPR" eventActive={event === 'IPR' ? true : false} handlevent={setevent} />
                <TagButton name="TEDxIITKharagpur" eventActive={event === 'TEDxIITKharagpur' ? true : false} handlevent={setevent} />
                <TagButton name="TechTalks" eventActive={event === 'TechTalks' ? true : false} handlevent={setevent} />
                <TagButton name="INDAC" eventActive={event === 'INDAC' ? true : false} handlevent={setevent} />
            </div>


            {data && <div className="evhead">{data[0].heading}</div>}
            {data && <div className="evcontent">{data[0].content}</div>}

            <Footer />

        </div>


    )

};
const TagButton = ({ name, handlevent, eventActive }) => {
    return (
        <button className={`event5 ${eventActive ? 'active' : null}`} className="btne btne-6 btne-6e" onClick={() => handlevent(name)}>
            {name.toUpperCase()}
        </button>
    );
};
export default Eventdisplay;