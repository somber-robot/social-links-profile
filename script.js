const linkBox = document.querySelector(".links")

const links = linkBox.children;
let current = null;
let previous = null

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "g": select(0); break;
        case "f": select(1); break;
        case "i": select(2); break;
        case "t": select(3); break;
        case "n": select(4); break;
        case "ArrowUp":
            if (current == null) select(0);
            else select(previous-1);
            break;
        case "ArrowDown": 
            if (current == null) select(0);
            else select(previous+1);
            break;
        case "Enter": if (current != null) links[current].click(); break;
        default: break;
    }
});

for (let i = 0; i < links.length; i++){
    links[i].addEventListener("mouseover", () => {
        select(i);
    });

    links[i].addEventListener("mouseout", () => {
        current = null;
        clearSelections();
    });
}

function select(idx){
    if (idx < 0) idx = links.length + idx;
    if (idx > links.length-1) idx = idx % links.length; 
    links[idx].className = "selected";
    current = idx;
    previous = idx;
    clearSelections();
}

function clearSelections(){
    for (let i = 0; i < links.length; i++) {
        if (current != i) links[i].className = "";
    }
}