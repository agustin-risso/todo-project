const input = document.querySelector(".board-name-input");
const newBoardButton = document.querySelector(".new-board-button");
const boardsTabsContainer = document.querySelector(".boards-tabs-container");

const newBoardTab = document.createElement("div");
newBoardTab.classList.add("board-tab");
const boardName = document.createElement("p");
boardName.textContent = "Nuevo tablero creado";
newBoardTab.appendChild(boardName)

newBoardButton.addEventListener("click", () => {
    const newBoardTab = document.createElement("div");
    newBoardTab.classList.add("board-tab");

    const boardName = document.createElement("p");
    boardName.classList.add("board-name");
    boardName.textContent = input.value.trim();
    input.value = "";

    const deleteBoardButton = document.createElement("button");
    deleteBoardButton.classList.add("delete-board-button")

    const deleteBoardButtonIcon = document.createElement("i");
    deleteBoardButtonIcon.classList.add("fa-solid", "fa-xmark");

    deleteBoardButton.appendChild(deleteBoardButtonIcon);

    deleteBoardButton.addEventListener("click", () => {
        newBoardTab.remove();
    });

    newBoardTab.appendChild(boardName);
    newBoardTab.appendChild(deleteBoardButton);

    boardsTabsContainer.appendChild(newBoardTab);
});