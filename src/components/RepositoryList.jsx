import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
    name: "github-explorer",
    description: "Web app in React to consume Github API",
    link: "https://github.com/lucasleonardobs/github-explorer.git",
};

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/lucasleonardobs/repos")
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    consoe.log(repositories)

    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
};
