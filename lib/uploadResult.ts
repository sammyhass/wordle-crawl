import { Octokit } from '@octokit/rest';
import { GITHUB_TOKEN, REPO_NAME, REPO_OWNER } from '../constants';

const octo = new Octokit({ auth: GITHUB_TOKEN });

export const uploadResult = async (solution: string) => {
  const date = new Date();

  const wordleString = `🟩🟩🟩🟩🟩`;

  const { data, status } = await octo.issues.create({
    owner: REPO_OWNER || '',
    repo: REPO_NAME || '',
    title: `${date.toDateString()}`,
    body: `## Worldle Solution for ${date.toDateString()}\n${wordleString}\n## Solution: **${solution}**`,
    labels: ['solution', 'wordle', date.toDateString()],
  });

  return data;
};
