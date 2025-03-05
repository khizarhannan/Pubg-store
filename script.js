const accountsContainer = document.getElementById('accounts');
const modal = document.getElementById('accountModal');
const modalName = document.getElementById('modalName');
const modalRank = document.getElementById('modalRank');
const modalKills = document.getElementById('modalKills');
const modalMatches = document.getElementById('modalMatches');

// Function to Add Account
function addAccount() {
    const username = document.getElementById('username').value;
    const rank = document.getElementById('rank').value;
    const kills = document.getElementById('kills').value;
    const matches = document.getElementById('matches').value;

    if (username && rank && kills && matches) {
        const accountDiv = document.createElement('div');
        accountDiv.classList.add('account');
        accountDiv.innerHTML = `<h3>${username}</h3><p>Rank: ${rank}</p>`;
        accountDiv.onclick = () => showDetails(username, rank, kills, matches);
        accountsContainer.appendChild(accountDiv);
    }
}

// Function to Show Details
function showDetails(username, rank, kills, matches) {
    modal.style.display = "block";
    modalName.innerText = username;
    modalRank.innerText = `Rank: ${rank}`;
    modalKills.innerText = `Total Kills: ${kills}`;
    modalMatches.innerText = `Total Matches: ${matches}`;
}

// Function to Close Modal
function closeModal() {
    modal.style.display = "none";
}

// GSAP Animations
gsap.from(".logo", { duration: 1.5, y: -50, opacity: 0 });
gsap.from(".guns img", { duration: 1, scale: 0.5, opacity: 0, stagger: 0.2 });
gsap.from(".add-account", { duration: 1, y: 50, opacity: 0 });