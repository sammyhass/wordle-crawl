import { test } from '@playwright/test';
import { WORDLE_URL } from './constants';
import { uploadResult } from './lib/uploadResult';

test('get wordle result', async ({ page }) => {
  await page.goto(WORDLE_URL);

  await page.waitForLoadState('networkidle');

  const result = await page.evaluate(() => {
    // @ts-ignore
    const wordle = window.wordle;

    const game = new wordle.bundle.GameApp();
    const solution = game.solution;
    return solution as string;
  });

  // Create a new gh issue with the solution
  await uploadResult(result);
});
