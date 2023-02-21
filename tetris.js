// Variáveis do jogo
let canvas;
let ctx;
let board;
let currentPiece;
let nextPiece;
let score;
let intervalId;
let isPaused;

// Cores das peças
const colors = [
  null,
  "#00FFFF",
  "#FF00FF",
  "#FFFF00",
  "#00FF00",
  "#FFA500",
  "#0000FF",
  "#FF0000"
];

// Peças do jogo
const pieces = [
  [],
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0]
  ],
  [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0]
  ],
  [
    [4, 4],
    [4, 4]
  ],
  [
    [0, 5, 5],
    [5, 5, 0],
    [0, 0, 0]
  ],
  [
    [0, 6, 0],
    [6, 6, 6],
    [0, 0, 0]
  ],
  [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0]
  ]
];

// Função para criar uma nova peça
function newPiece() {
  const index = Math.floor(Math.random() * 7) + 1;
  const piece = pieces[index];
  const row = 0;
  const col = Math.floor((board[0].length - piece[0].length) / 2);
  return { piece, row, col };
}

// Função para desenhar uma peça no canvas
function drawPiece(piece, row, col) {
  piece.forEach((rowArr, i) => {
    rowArr.forEach((val, j) => {
      if (val !== 0) {
        ctx.fillStyle = colors[val];
        const x =


