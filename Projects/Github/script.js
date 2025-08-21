const navSearchInput = document.getElementById("navSearchInput");
const pageSearchInput = document.getElementById("pageSearchInput");
const navSearchButton = document.getElementById("navSearchButton");
const pageSearchButton = document.getElementById("pageSearchButton");

const profile_image = document.querySelector('.profile-image');
const username = document.querySelector('.username-text');
const Name = document.querySelector('.Name');
const bio = document.querySelector('.bio');
const follower_count = document.querySelector('.follower-count');
const trophy_image = document.querySelector('.trophy-image');
const stats_image = document.querySelector('.stats-image');
const top_langs = document.querySelector('.top-langs');
const streak_image = document.querySelector('.streak-image');
const form_container = document.querySelector('.form-container');
const profile_container = document.querySelector('.profile-container');
const repos_container = document.querySelector('.repos-container');
const search_page = document.querySelector('.search-page');
const loading_container = document.querySelector('.loading-container');
const home_page = document.querySelector('.home-page');

navSearchButton.addEventListener("click", () => searchrepo(navSearchInput.value));
pageSearchButton.addEventListener("click", () => searchrepo(pageSearchInput.value));

initial();

function initial() {
    profile_container.style.display = "none";
    repos_container.style.display = 'none';
    search_page.style.display = 'flex';
    form_container.style.display = 'none';
}

home_page.addEventListener('click' , initial);

async function searchrepo(search_input) {

    profile_container.style.display = "none";
    repos_container.style.display = 'none';
    search_page.style.display = 'none';
    loading_container.style.display = 'flex';

    if (!search_input) {
        alert("Please enter a username.");
        return;
    }

    let response = await fetch(`https://api.github.com/users/${search_input}`);
    if (!response.ok) {
        alert("User not found. Please try again.");
        return;
    }
    let result = await response.json();

    profile_image.src = result.avatar_url;
    username.innerText = result.login;
    Name.innerText = result.name;
    bio.innerText = result.bio;
    follower_count.innerText = `Followers: ${result.followers}`;

    trophy_image.src = `https://github-profile-trophy.vercel.app/?username=${result.login}&theme=tokyonight&title=Repositories,Commits,Stars,Followers,PullRequest,Issues&margin-w=15&no-bg=true&no-frame=true`;
    stats_image.src = `https://github-readme-stats.vercel.app/api?username=${result.login}&show_icons=true&theme=tokyonight&hide_border=true`;
    top_langs.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${result.login}&layout=compact&theme=tokyonight&hide_border=true`;
    streak_image.src = `https://streak-stats.demolab.com/?user=${result.login}&theme=tokyonight&hide_border=true`;

    let reposResponse = await fetch(`https://api.github.com/users/${search_input}/repos`);
    let repos = await reposResponse.json();

    repos_container.innerHTML = `<p style="color: white; font-size: 3rem; padding: 1.5rem;">Repositories List</p>`;

    repos.forEach(repo => {

    const repoCard = `
        <div class="repo">
            <!-- Top box -->
            <div class="repo-header">
                <p class="repo-name">${repo.name}</p>
                <p class="repo-visibility">${repo.visibility}</p>
            </div>

            <!-- Bottom box -->
            <div class="repo-details">
                <p class="language-used">${repo.language || "N/A"}</p>
                <p class="created-time">Created: ${new Date(repo.created_at).toLocaleDateString()}</p>
                <p class="updated-time">Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                <p class="stars">Stars : ${repo.stargazers_count}</p>
                <p class="forks">Forks : ${repo.forks_count}</p>
            </div>
        </div>
    `;
    repos_container.innerHTML += repoCard;


    });

    search_page.style.display = 'none';
    loading_container.style.display = 'none';
    profile_container.style.display = "flex";
    repos_container.style.display = 'flex';
    form_container.style.display = 'flex'; 
}
