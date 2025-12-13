import { useEffect, useState } from "react";
import { Github } from "lucide-react";

const USERNAME = "chouhan-abhi";

export default function GitHubActivity() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const profileRes = await fetch(
          `https://api.github.com/users/${USERNAME}`
        );
        const reposRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=5`
        );

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData);
      } catch (e) {
        console.error("GitHub API error", e);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <p className="text-green-600 text-sm">
        &gt; fetching git activity...
      </p>
    );
  }

  if (!profile) return null;

  return (
    <div className="space-y-6 text-sm text-green-400">
      {/* Header */}
      <div className="flex mt-8 text-green-500">
        Github Activity
      </div>

      {/* Profile stats */}
      <div className="bg-[#0f0f0f] p-2 rounded">
        <p>
          user: <span className="text-green-300">{profile.login}</span>
        </p>
        <p>public repos: {profile.public_repos}</p>
        <p>followers: {profile.followers}</p>
        <p>following: {profile.following}</p>
      </div>

      {/* Recent repos */}
      <div className="bg-[#0f0f0f] p-2 rounded">
        <p className="mb-2 text-green-500">
            Recent repositories
        </p>

        <ul className="space-y-1">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-200"
              >
                {repo.name}
              </a>
              <span className="text-green-600">
                {" "}
                — ★ {repo.stargazers_count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Heatmap */}
      <div className="bg-[#0f0f0f] p-2 rounded">
        <p className="mb-2 text-green-500">
          Git commit log --calendar
        </p>

        <div className="overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/00ff88/${USERNAME}`}
            alt="GitHub contribution heatmap"
            className="min-w-[700px]"
          />
        </div>
      </div>
    </div>
  );
}
