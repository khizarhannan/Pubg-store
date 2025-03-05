document.addEventListener("DOMContentLoaded", function () {
    const accountsContainer = document.querySelector(".accounts-container");

    let dummyAccounts = "";
    for (let i = 1; i <= 30; i++) {
        dummyAccounts += `
            <div class="account">
                <img src="pubg-gun.png" alt="PUBG Gun">
                <h3>Account ${i}</h3>
                <p>Level: ${Math.floor(Math.random() * 100)}</p>
                <p>Rank: ${["Bronze", "Silver", "Gold", "Platinum", "Diamond"][Math.floor(Math.random() * 5)]}</p>
            </div>
        `;
    }
    accountsContainer.innerHTML = dummyAccounts;
});