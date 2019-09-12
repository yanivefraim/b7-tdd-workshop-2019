test('should be cool', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);

  expect(await getPlayer1Title()).toBe(player1);
  expect(await getPlayer2Title()).toBe(player2);
});

test('should have an "X" after first player clicks', async () => {
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);
  expect(await getACellAt(0)).toBe('');
  await clickACellAt(0);

  expect(await getACellAt(0)).toBe('X');
});

test('First player should win the game', async () => {
  debugger;
  const player1 = 'Yaniv';
  const player2 = 'Computer';

  await navigate();
  await newGame(player1, player2);

  await clickACellAt(0);
  await clickACellAt(3);
  await clickACellAt(1);
  expect(await hasWinner()).toBeFalsy();
  await clickACellAt(4);
  await clickACellAt(2);

  await page.screenshot({ path: './sc.png' });

  expect(await getWinner()).toBe(`${player1} won!!!`);
});

async function hasWinner() {
  return !!(await page.$('.winner'));
}

function getWinner() {
  return page.$eval('[data-testid="winner"]', el => el.innerText);
}

function clickACellAt(index) {
  return page.$$eval('td', (tds, i) => tds[i].click(), index);
}

function getACellAt(index) {
  return page.$$eval(
    'td',
    (tds, i) => {
      debugger;
      return tds[i].innerText;
    },
    index
  );
}

function getPlayer2Title() {
  return page.$eval('.p2-title', el => el.innerText);
}

function getPlayer1Title() {
  return page.$eval('.p1-title', el => el.innerText);
}

async function newGame(player1, player2) {
  await page.type('.p1-input', player1);
  await page.type('.p2-input', player2);
  expect(await page.$eval('.p1-title', el => el.innerText)).toBe('');
  await page.click('.new-game');
}

function navigate() {
  return page.goto('http://localhost:3000');
}
