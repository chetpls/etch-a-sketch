const container = document.querySelector(".container");
const gridSizeInput = document.getElementById("gridSize");
const gridSizeValue = document.getElementById("gridSizeValue");
const clearButton = document.getElementById("clear")
const classicButton = document.getElementById("classic-mode")
const rainbowButton = document.getElementById("rainbow-mode")
let currentMode = 'classic';

function makeGrid(size) {
    container.innerHTML = ''; // Clear existing tiles
    const tileSize = 700 / size; // Size of each tile based on container size

    for (let i = 0; i < size * size; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;
        tile.style.backgroundColor = "#fff";
        tile.style.boxShadow = "inset -1px 0 0 gray, inset 0 -1px 0 gray, inset 1px 0 0 gray, inset 0 1px 0 gray"; // Add border to each tile
        tile.addEventListener("mouseover", function() {
            if (currentMode === 'classic') {
                tile.style.backgroundColor = "#000"; // Change color to black on hover
            } else if (currentMode === 'rainbow') {
                tile.style.backgroundColor = getRandomColor(); // Change to random color on hover
            }
        });
        container.appendChild(tile);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initialize the grid with the default value
makeGrid(gridSizeInput.value);

clearButton.addEventListener("click", function() {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => {
        tile.style.backgroundColor = "#fff";
    });
});

classicButton.addEventListener("click", function() {
    currentMode = 'classic';
});

rainbowButton.addEventListener("click", function() {
    currentMode = 'rainbow';
});

gridSizeInput.addEventListener("input", function() {
    const size = gridSizeInput.value;
    gridSizeValue.textContent = size;
    makeGrid(size);
});
