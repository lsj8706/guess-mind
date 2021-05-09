const body = document.querySelector("body");

const fireNotifiation = (text, color) =>{
    const notification = document.createElement("div");
    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className  ="notification";
    body.appendChild(notification);
};

export const handleNewUser = ({nickname}) =>{
    fireNotifiation(`${nickname} just joined!!`,"rgb(0, 122, 255)");
};

export const handleDisconnected = ({nickname}) =>{
    fireNotifiation(`${nickname} just left!!`,"rgb(255, 149, 0)");
}

