import Coin from "../models/actors/Coin.js";
import Lava from "../models/actors/Lava.js";
import Player from "../models/actors/Player.js";

const levelChars = {
    ".": "empty",
    "#": "wall",
    "+": "lava",
    "@": Player,
    "o": Coin,
    "=": Lava,
    "|": Lava,
    "v": Lava
};

export default levelChars;