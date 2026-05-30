const tilesContainer = document.querySelector(".tiles-container");

const values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

values.sort(() => Math.random() - 0.5);

let firstTile = null;
let lockBoard = false;

values.forEach(val => {
  const tile = document.createElement("div");
  tile.classList.add("tile", "hidden");
  tile.dataset.value = val;
  tile.textContent = val;

  tile.addEventListener("click", () => {
    
    if (lockBoard || !tile.classList.contains("hidden")) return;

    tile.classList.remove("hidden");

    if (!firstTile) {
      firstTile = tile;
    } else {
      if (firstTile.dataset.value === tile.dataset.value) {
        firstTile = null; 
      } else {
        lockBoard = true; 
        setTimeout(() => {
          firstTile.classList.add("hidden");
          tile.classList.add("hidden");
          firstTile = null;
          lockBoard = false;
        }, 1000);
      }
    }
  });

  tilesContainer.appendChild(tile);
});