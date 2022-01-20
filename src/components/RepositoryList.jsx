import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "github-explorer",
    description: "Web app in React to consume Github API",
    link: "https://github.com/lucasleonardobs/github-explorer.git",
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Repository List</h1>

            <ul>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}