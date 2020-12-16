import { useState } from 'react';
import taskListArr from './TaskListArr';
import './Tasks.scss';

function Tasks() {
    const [ activeMap, setActiveMap] = useState("Skeld");

    const switchMaps = (newMap) => {
        setActiveMap(newMap);
    }

    let currentMap = taskListArr[0][activeMap];
    return (
        <div className="task-list">
            <div className={"map-task-tabs active_" + activeMap}>
                <div className="map-task skeld" onClick={()=> switchMaps("Skeld")}>Skeld</div>
                <div className="map-task mirahq" onClick={()=> switchMaps("MiraHQ")}>Mira HQ</div>
                <div className="map-task polus" onClick={()=> switchMaps("Polus")}>Polus</div>
            </div>
            <div className="task-list-wrapper">
                {Object.entries(currentMap).map((data, i) => {
                    return(
                        <ul key={data[0]}>
                            <li className="map-location">{data[0]}</li>
                                <ul>
                                    {data[1].map((tasks, i) => {
                                        return(<li key={i}>{tasks}</li>)
                                    })}
                                </ul>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Tasks;