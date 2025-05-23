document.addEventListener("DOMContentLoaded", function () {


    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateusername(username) {
        if (username.trim() == '') {
            alert("UserName should not be empty");
            return false;
        }

        const regex = /^[a-zA-Z](?!.*[-_]{2})[a-zA-Z0-9-_]{2,14}[a-zA-Z0-9]$/;

        const isMatching = regex.test(username);

        if (!isMatching) {
            alert("Invalid UserName");
        }

        return isMatching;
    }

    async function fetchUserDetails(username) {

        // This is also working
        // const url = `https://leetcode-stats-api.herokuapp.com/${username}`;


        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            // statsContainer.style.display = "none";  

            // const response = await fetch(url); when using the first method


            // Start -> The above line can replace this whole contaniner from start to final
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const targetUrl = 'https://leetcode.com/graphql/';
            // concatenated URl : https://cors-anywhere.herokuapp.com/https://leetcode.com/graphql/

            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: `
                query userSessionProgress($username: String!) {
                allQuestionsCount {
                    difficulty
                    count
                }
                matchedUser(username: $username) {
                    submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    }
                }
                }
            `,
                variables: { "username": `${username}` }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            };

            const response = await fetch(proxyUrl + targetUrl, requestOptions);
            // Final 


            if (!response.ok) {
                throw new Error("Unable to fetch the User Details");
            }
            const parsedData = await response.json();

            console.log("Logging Data: ", parsedData);


            displayUserData(parsedData);


        }
        catch (error) {
            statsContainer.innerHTML = "<p>No Data Found</p>";
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }

    }

    function updateProgress(solved, total, label, circle) {

        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData) { // These are from json file
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;


        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasyTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMediumTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHardTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;


        updateProgress(solvedEasyTotalQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedMediumTotalQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHardTotalQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            { label: "Overall Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            { label: "Overall  Easy Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            { label: "Overall Medium Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            { label: "Overall Hard Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },

        ];

        cardStatsContainer.innerHTML = cardsData.map(

            data =>
                    `<div class = "card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
               
    ).join("")
    }


    searchButton.addEventListener('click', function () {

        const username = usernameInput.value;
        console.log("Username : ", username);

        if (validateusername(username)) {
            fetchUserDetails(username);
        }

    })


})