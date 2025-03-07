const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch('https://kbat9glkqb.execute-api.us-east-1.amazonaws.com/dev/cloud-resume-test-api');
    let data = await response.json();
    counter.innerHTML = `Website Visits: ${data.views}`;
}

updateCounter();
