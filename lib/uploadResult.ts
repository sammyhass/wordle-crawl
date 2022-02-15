import { Octokit } from '@octokit/rest';
import { GITHUB_TOKEN, REPO_NAME, REPO_OWNER } from './constants';

const octo = new Octokit({ auth: GITHUB_TOKEN });

export const uploadResult = async (solution: string) => {
  const date = new Date();

  const wordleString = `1/6 🟩 🟩 🟩 🟩 🟩`;

  const { data, status } = await octo.issues.create({
    owner: REPO_OWNER || '',
    repo: REPO_NAME || '',
    title: `Wordle Solution - ${date.toDateString()}`,
    body: `## Wordle ${date.toDateString()}\n${wordleString}\n### \`solution: ${solution}\``,
    labels: ['solution', 'wordle', date.toDateString()],
  });

  return data;
};
