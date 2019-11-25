import axios from 'axios'

export async function getRepoDetails(org, repo) {
  const url = `https://api.github.com/repos/${org}/${repo}`

  const { data } = await axios.get(url)
  return data
}
