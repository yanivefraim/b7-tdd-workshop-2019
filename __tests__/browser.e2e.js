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

test('should register a new game', async () => {
  const p1 = 'Yaniv';
  const p2 = 'Computer';
  await page.goto('http://localhost:3000');
  await startNewGame(p1, p2);
  expect(await getPlayer1Title()).toBe(p1);
  expect(await getPlayer2Title()).toBe(p2);
});
