const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch('https://6lahwmgs54.execute-api.ap-southeast-2.amazonaws.com/dev/resume-function-final');
    let data = await response.json();
    counter.innerHTML = `Website Visits: ${data.views}`;
}

updateCounter();
