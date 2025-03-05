// GSAP Animations
gsap.to(".account-card", { opacity: 1, duration: 1, stagger: 0.2 });

// Function to Filter Accounts
function filterAccounts() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let accounts = document.querySelectorAll(".account-card");

    accounts.forEach(account => {
        let name = account.querySelector("h3").innerText.toLowerCase();
        if (name.includes(input)) {
            account.style.display = "block";
        } else {
            account.style.display = "none";
        }
    });
}

// Function to Show Account Details
function showDetails(name, rank, kills, matches, price, imgSrc) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalRank").innerText = `Rank: ${rank}`;
    document.getElementById("modalKills").innerText = `Kills: ${kills}`;
    document.getElementById("modalMatches").innerText = `Matches: ${matches}`;
    document.getElementById("modalPrice").innerText = `Price: ${price}`;
    document.getElementById("modalImg").src = imgSrc;

    document.getElementById("accountModal").style.display = "block";
}

// Function to Close Modal
function closeModal() {
    document.getElementById("accountModal").style.display = "none";
}