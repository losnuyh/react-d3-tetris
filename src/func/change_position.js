export default function changePosition(id, command){
    let position = id.replace('px','').split("-").map(v=> Number(v));
    switch(command){
    case 'DOWN':
        return "px" + String(position[0]) + "-" +String(++position[1]);
    case 'LEFT':
        return "px" + String(--position[0]) + "-" +String(position[1]);
    case 'RIGHT':
        return "px" + String(++position[0]) + "-" +String(position[1]);
    }
};

