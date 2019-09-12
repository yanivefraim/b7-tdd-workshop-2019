const startNewGame = async (p1, p2) => {
  await page.type('[data-testid="p1-input"]', p1);
  await page.type('[data-testid="p2-input"]', p2);
  expect(
    await page.$eval('[data-testid="player1-title"]', ttl => ttl.innerText)
  ).toBe(``);
  await page.click('[data-testid="new-game"]');
};
const getPlayer1Title = () =>
  page.$eval('[data-testid="player1-title"]', ttl => ttl.innerText);
const getPlayer2Title = () =>
  page.$eval('[data-testid="player2-title"]', ttl => ttl.innerText);
const clickACellAt = index =>
  page.$$eval('td', (cells, _index) => cells[_index].click(), index);
const getACellAt = index =>
  page.$$eval('td', (cells, _index) => cells[_index].innerText, index);
const getWinner = () =>
  page.$eval('[data-testid="winner"]', el => el.innerText);
const hasWinner = async () => !!(await page.$('[data-testid="winner"]'));
test('should register a new game', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Computer';
  await page.goto('http://localhost:3000');
  await startNewGame(p1, p2);
  expect(await getPlayer1Title()).toBe(p1);
  expect(await getPlayer2Title()).toBe(p2);
});

test('should have an "X" when first user clicks', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Computer';
  await page.goto('http://localhost:3000');
  await startNewGame(p1, p2);
  expect(await getACellAt(0)).toBe('');
  await clickACellAt(0);
  expect(await getACellAt(0)).toBe('X');
});

test('first player should win', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Computer';
  await page.goto('http://localhost:3000');
  await startNewGame(p1, p2);

  expect(await hasWinner()).toBe(false);
  await clickACellAt(0);
  await clickACellAt(3);
  await clickACellAt(1);
  await clickACellAt(4);
  await clickACellAt(2);

  expect(await getWinner()).toBe('Yaniv');
});
