import { test } from '@playwright/test';
import { WORDLE_URL } from './constants';
import { uploadResult } from './lib/uploadResult';

test('get wordle result', async ({ page }) => {
  await page.goto(WORDLE_URL);

  // Accept Cookies
  await page.waitForSelector('#pz-gdpr-btn-accept');
  await page.click('#pz-gdpr-btn-accept');

  let sol;

  const result = await page.evaluate(() => {
    // @ts-ignore
    const wordle = window.wordle;

    const game = new wordle.bundle.GameApp();
    const solution = game.solution;
    return solution as string;
  });

  await page.waitForTimeout(4000);

  // Create a new gh issue with the solution
  await uploadResult(result);
});
