document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const cells = document.querySelectorAll('.cell');
  const statusBanner = document.getElementById('status-banner');
  const statusText = document.getElementById('status-text');
  const scoreXEl = document.getElementById('score-x');
  const scoreOEl = document.getElementById('score-o');
  const scoreTiesEl = document.getElementById('score-ties');
  const labelOEl = document.getElementById('label-o');
  const modePvpBtn = document.getElementById('mode-pvp');
  const modePveBtn = document.getElementById('mode-pve');
  const restartBtn = document.getElementById('restart-btn');
  const resetScoresBtn = document.getElementById('reset-scores-btn');

  // Game Constants & State
  const WINNING_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  let boardState = Array(9).fill(null);
  let currentPlayer = 'X';
  let gameActive = true;
  let gameMode = 'pvp'; // 'pvp' or 'pve'
  let scores = { X: 0, O: 0, ties: 0 };

  // Initialize Game
  function init() {
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });

    modePvpBtn.addEventListener('click', () => setMode('pvp'));
    modePveBtn.addEventListener('click', () => setMode('pve'));
    restartBtn.addEventListener('click', restartMatch);
    resetScoresBtn.addEventListener('click', resetAll);

    updateUI();
  }

  // Set Game Mode
  function setMode(mode) {
    if (gameMode === mode) return;

    gameMode = mode;
    modePvpBtn.classList.toggle('active', mode === 'pvp');
    modePveBtn.classList.toggle('active', mode === 'pve');
    labelOEl.textContent = mode === 'pve' ? 'COMPUTER' : 'PLAYER O';
    
    resetAll();
  }

  // Handle Cell Click Event
  function handleCellClick(e) {
    const cell = e.target;
    const index = parseInt(cell.dataset.index);

    if (boardState[index] !== null || !gameActive) return;

    makeMove(index, currentPlayer);

    if (gameActive && gameMode === 'pve' && currentPlayer === 'O') {
      // Disable player clicks briefly while computer makes a move
      setTimeout(makeComputerMove, 400);
    }
  }

  // Execute Move
  function makeMove(index, player) {
    boardState[index] = player;
    
    const cell = cells[index];
    cell.textContent = player;
    cell.classList.add(player.toLowerCase());
    cell.setAttribute('disabled', 'true');

    const winCombo = checkWin(player);

    if (winCombo) {
      gameActive = false;
      scores[player]++;
      highlightWinningCells(winCombo);
      setStatus(`Winner! ${player === 'X' ? 'Player X' : (gameMode === 'pve' ? 'Computer' : 'Player O')} wins!`, `win-${player.toLowerCase()}`);
      updateScoreboard();
    } else if (checkDraw()) {
      gameActive = false;
      scores.ties++;
      setStatus("It's a Draw!", 'draw');
      updateScoreboard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      const playerText = currentPlayer === 'X' ? "Player X's turn" : (gameMode === 'pve' ? "Computer's turn..." : "Player O's turn");
      setStatus(playerText, `turn-${currentPlayer.toLowerCase()}`);
    }
  }

  // Smart Computer AI Move Logic
  function makeComputerMove() {
    if (!gameActive) return;

    let targetIndex = findBestMove();
    if (targetIndex !== -1) {
      makeMove(targetIndex, 'O');
    }
  }

  function findBestMove() {
    // 1. Check if AI ('O') can win in 1 move
    for (let i = 0; i < 9; i++) {
      if (boardState[i] === null) {
        boardState[i] = 'O';
        if (checkWin('O')) {
          boardState[i] = null;
          return i;
        }
        boardState[i] = null;
      }
    }

    // 2. Check if Player ('X') can win in 1 move -> Block them
    for (let i = 0; i < 9; i++) {
      if (boardState[i] === null) {
        boardState[i] = 'X';
        if (checkWin('X')) {
          boardState[i] = null;
          return i;
        }
        boardState[i] = null;
      }
    }

    // 3. Prefer Center cell (index 4)
    if (boardState[4] === null) return 4;

    // 4. Prefer Corner cells (0, 2, 6, 8)
    const corners = [0, 2, 6, 8].filter(idx => boardState[idx] === null);
    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)];
    }

    // 5. Select any remaining empty cell
    const available = boardState.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
    if (available.length > 0) {
      return available[Math.floor(Math.random() * available.length)];
    }

    return -1;
  }

  // Check Win Condition
  function checkWin(player) {
    return WINNING_COMBINATIONS.find(combo => {
      return combo.every(index => boardState[index] === player);
    });
  }

  // Check Draw Condition
  function checkDraw() {
    return boardState.every(cell => cell !== null);
  }

  // Highlight Winning Combination
  function highlightWinningCells(combo) {
    combo.forEach(index => {
      cells[index].classList.add('winning-cell');
    });
  }

  // Update Status Banner
  function setStatus(text, statusClass) {
    statusText.textContent = text;
    statusBanner.className = `status-banner ${statusClass}`;
  }

  // Update Scoreboard Values
  function updateScoreboard() {
    scoreXEl.textContent = scores.X;
    scoreOEl.textContent = scores.O;
    scoreTiesEl.textContent = scores.ties;
  }

  // Restart Current Match
  function restartMatch() {
    boardState = Array(9).fill(null);
    currentPlayer = 'X';
    gameActive = true;

    cells.forEach(cell => {
      cell.textContent = '';
      cell.className = 'cell';
      cell.removeAttribute('disabled');
    });

    setStatus("Player X's turn", 'turn-x');
  }

  // Reset All (Match + Scores)
  function resetAll() {
    scores = { X: 0, O: 0, ties: 0 };
    updateScoreboard();
    restartMatch();
  }

  // Update UI Elements
  function updateUI() {
    updateScoreboard();
    restartMatch();
  }

  init();
});
