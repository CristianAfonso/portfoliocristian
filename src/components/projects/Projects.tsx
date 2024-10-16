import React, { useEffect, useState } from 'react';
import fetchGitHubRepos from '../../fetchGitHubRepos';
import Repository from '../../atoms/Repository/Repository';
import { RepoModel } from '../../models';
const Projects: React.FC = () => {
    const [repos, setRepos] = useState<RepoModel[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchGitHubRepos();
            data.sort((a, b) => {
                return b.last_update.getTime() - a.last_update.getTime();
            });
            setRepos(data);
          } catch (error) {
            console.error("Error fetching repositories:", error); 
          }
        };
        fetchData();
      }, []);
    return(
        
        <section>
        {repos.map((element, index) => {
          return (
            <Repository
              key={index}
              name={element.name}
              url={element.url}
              languages={element.languages}
              last_update={element.last_update}
            />
          );
        })}
        </section>
    )
}
export default Projects;