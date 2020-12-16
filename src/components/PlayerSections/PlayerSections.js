import { useState } from 'react';
import playerListArr from './PlayerListArr';
import playerSectionsArr from './PlayerSectionArr';
import char_images from '../../assets/char_images/index';
import './PlayerSections.scss';

function PlayerSections() {
    const [ players, setPlayers ] = useState(playerListArr);

    const resetPlayerSections = () => {
        const result = players.map(player => {
            player.category = 'neutral';
            return player;
        })
        setPlayers(result);
    }

    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    const onDragOver = (ev) => {
        ev.preventDefault();
    }

    const onDrop = (ev, categ) => {
        let id = ev.dataTransfer.getData("id");

        let updatePlayer = players.filter((currentPlayer) => {
            if (currentPlayer.color === id) {
                currentPlayer.category = categ;
            }
            return currentPlayer;
        });
        setPlayers(updatePlayer);
    }

    const displayPlayers = (status) => {
        return players.filter(currStatus => currStatus.category === status).map(currentPlayer => {
            let currentColor = currentPlayer.color;
            return(
                <div className="character-wrapper" key={currentColor} onDragStart = { (e) => onDragStart(e, currentColor) } draggable>
                    <div className="character-img"><img src={char_images[currentColor]} alt={currentColor} width="36" height="36"/></div>
                    <div className={"character " + currentColor} >{currentColor}</div>
                </div>
            )
        });
    }

    return (

        <div className="player-sections">
            <button className="custom-btn" onClick={()=> resetPlayerSections()}>Reset Players</button>
            {playerSectionsArr.map(section => {
                return(
                    <div className={`drop-box ${section.cname}`} key={section.cname}>
                        <div className="drop-box-title">{section.title}</div>
                        <div className={`${section.cname} droppable`}
                            onDragOver={ (e)=> onDragOver(e) }
                            onDrop={ (e)=> onDrop(e, section.cname) }>

                            {displayPlayers(section.cname)}

                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default PlayerSections;