import requests
import json

# GitHub API token
with open(".gh-token", "r") as f:
    token = f.read().strip()

# Organizations
organizations = ["zalando", "zalando-incubator", "zalando-nakadi"]

# API endpoint
endpoint = "https://api.github.com/graphql"

# Query to fetch repository data
query = """
query ($organization: String!, $cursor: String) {
  organization(login: $organization) {
    repositories(first: 100, after: $cursor) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        id
        name
        description
        primaryLanguage { name }
        createdAt
        updatedAt
        stargazers {
          totalCount
        }
        forks {
          totalCount
        }
        issues(states: OPEN) {
          totalCount
        }
        watchers {
          totalCount
        }
        isPrivate
        isFork
        isArchived
      }
    }
  }
}
"""

# Function to fetch repository data
def fetch_repositories(organization, cursor=None):
    variables = {
        "organization": organization,
        "cursor": cursor
    }
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }
    response = requests.post(endpoint, headers=headers, json={"query": query, "variables": variables})
    data = response.json()
    return data["data"]["organization"]

# Function to fetch all repositories for an organization
def fetch_all_repositories(organization):
    repositories = []
    has_next_page = True
    cursor = None
    while has_next_page:
        data = fetch_repositories(organization, cursor)
        for repo in data["repositories"]["nodes"]:
            repo_data = {
                "id": repo["id"],
                "name": repo['name'],
                "owner": organization,
                "description": repo["description"],
                "full_name": f"{organization}/{repo['name']}",
                "language": repo["primaryLanguage"]["name"] if repo["primaryLanguage"] else None,
                "created_at": repo["createdAt"],
                "updated_at": repo["updatedAt"],
                "stars": repo["stargazers"]["totalCount"],
                "forks": repo["forks"]["totalCount"],
                "open_issues": repo["issues"]["totalCount"],
                "watchers": repo["watchers"]["totalCount"],
                "type": "private" if repo["isPrivate"] else "public",
                "fork": repo["isFork"],
                "archived": repo["isArchived"],
            }
            # skip archived and private repos
            if repo_data["type"] != "private" and not repo_data["archived"]:
                repositories.append(repo_data)
        has_next_page = data["repositories"]["pageInfo"]["hasNextPage"]
        cursor = data["repositories"]["pageInfo"]["endCursor"]
    return repositories

# Function to calculate statistics
def calculate_statistics(repositories):
    stars = sum(repository["stars"] for repository in repositories)
    projects = len(repositories)
    languages = len(set(repository["language"] for repository in repositories if repository["language"]))
    forks = sum(repository["forks"] for repository in repositories)
    return {
        "stars": stars,
        "projects": projects,
        "languages": languages,
        "forks": forks,
    }

# Fetch repositories for each organization
repositories = []
for organization in organizations:
    repositories.extend(fetch_all_repositories(organization))

# Sort by stars descending
repositories.sort(key=lambda x: x["stars"], reverse=True)

# Calculate statistics
statistics = calculate_statistics(repositories)

# Save data to JSON files
with open("repositories.json", "w") as f:
    json.dump(repositories, f, indent=2)

with open("statistics.json", "w") as f:
    json.dump(statistics, f, indent=2)

print(f"Processed {len(organizations)} organizations with {len(repositories)} repositories.")
