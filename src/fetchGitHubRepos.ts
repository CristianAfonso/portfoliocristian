import axios from 'axios';
import { RepoModel } from './models';
const fetchGitHubRepos = async (): Promise<RepoModel[]> => {
    const username = process.env.REACT_APP_USERNAME;
    const token = process.env.REACT_APP_TOKEN;
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const repos = await Promise.all(response.data.map(async (repo: any) => ({
      name: repo.name,
      url: repo.html_url,
      languages: await getLanguages(repo.languages_url),
      last_update: new Date(repo.updated_at),
    })));

    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

const getLanguages = async (url: string) => {
    const token = process.env.REACT_APP_TOKEN;
    try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        return Object.entries(response.data).map(([key, value]) => ({ [key]: value }));

      } catch (error) {
        console.error('Error fetching repository languages:', error);
        return [];
      }
}

fetchGitHubRepos();

export default fetchGitHubRepos;
