import React, { useEffect, useState } from 'react';
import datafile from './eventdata';
import {useParams} from "react-router-dom"
const Eventdisplay = ()=> {
    const {id}=useParams();
    const eventname=["annualmeet","ipr","tedx","techtalks","indac"];
    
    const [event,setevent]=useState(eventname[id-1]);
    const [data,setdata]=useState();
    useEffect(
		() => {
			setdata(datafile.filter(data1 => data1.event === event));
		},[event]
	);

    return (
        <div>
        <TagButton name="annualmeet" eventActive={event === 'annualmeet' ? true : false} handlevent={setevent} />
        <TagButton name="ipr" eventActive={event === 'ipr' ? true : false} handlevent={setevent} />
        <TagButton name="tedx" eventActive={event === 'tedx' ? true : false} handlevent={setevent} />  
        <TagButton name="techtalks" eventActive={event === 'techtalks' ? true : false} handlevent={setevent} />  
        <TagButton name="indac" eventActive={event === 'indac' ? true : false} handlevent={setevent} />  
        

        <div>{data[0].heading}</div>
        <div>{data[0].content}</div>
        
</div>


    )
    
};
const TagButton = ({ name, handlevent, eventActive }) => {
	return (
		<button className={`event5 ${eventActive ? 'active' : null}`} onClick={() => handlevent(name)}>
			{name.toUpperCase()}
		</button>
	);
};
export default Eventdisplay;