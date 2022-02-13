import { Octokit } from '@octokit/rest';

const octo = new Octokit({ auth: process.env.GITHUB_TOKEN });

export const uploadResult = async (solution: string) => {
  const date = new Date();

  const wordleString = `🟩🟩🟩🟩🟩`;

  const { data, status } = await octo.issues.create({
    owner: process.env.REPO_OWNER || '',
    repo: process.env.REPO_NAME || '',
    title: `${date.toDateString()}`,
    body: `## Worldle Solution for ${date.toDateString()}\n${wordleString}\n## Solution: **${solution}**`,
    labels: ['solution', 'wordle', date.toDateString()],
  });

  return data;
};
