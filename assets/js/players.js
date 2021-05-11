import { disableCanvas, enableCanvas, hideControls, resetCanvas, showControls } from "./paint";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) =>{
    board.innerHTML="";
    players.forEach(player => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname}: ${player.points}`;
        board.appendChild(playerElement);
    });
}
const setNotif = (text) => {
    notifs.innerText = "";
    notifs.innerText = text;
}

export const handlePlayerUpdate = ({sockets}) => addPlayers(sockets);
export const handleGameStarted = () => {
    setNotif("");
    disableCanvas();
    hideControls();
};

export const handleLeaderNotif = ({ word }) => {
    enableCanvas();
    showControls();   
    notifs.innerText = `You are the leader, paint : ${word}`;
};

export const handleGameEnded = () => {
    setNotif("Game ended.");
    disableCanvas();
    hideControls();
    resetCanvas();
}