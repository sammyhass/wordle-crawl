export const WORDLE_URL = 'https://www.nytimes.com/games/wordle/index.html';

export const REPO_NAME = process.env.REPO_NAME;
export const REPO_OWNER = process.env.REPO_OWNER;
export const GITHUB_TOKEN = process.env.GH_TOKEN;

// WORDLE DAY
// On Feb 13 2022 it was wordle day 239, so we'll count from there
export const WORDLE_DAY = new Date(2022, 2, 13).getDay() + 239;
