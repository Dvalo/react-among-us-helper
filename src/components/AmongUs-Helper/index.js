import PlayerSections from '../PlayerSections/PlayerSections';
import Notepad from '../Notepad/Notepad';
import Tasks from '../Tasks/Tasks';

function AmongUsHelper() {

    return (
        <div className="among-us-helper">
            <PlayerSections />
            <Notepad />
            <Tasks />
        </div>
    )
}

export default AmongUsHelper;