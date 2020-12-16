import './Notepad.scss';

function Notepad() {

    const resetNotePad = () => {
        document.getElementById("player-notes").value = "";
    }

    return (
        <div className="notepad">
            <button className="custom-btn" onClick={()=> resetNotePad()}>Reset Notepad</button>
            <textarea id="player-notes" name="player-notes" spellCheck="false" defaultValue="Red faked a task?!">
            </textarea>
        </div>
    )
}

export default Notepad;