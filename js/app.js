const eventContainer = document.getElementById("events-grid");
const noticeContainer = document.getElementById("notice-container");

events.forEach(event => {

    eventContainer.innerHTML += `

    <div class="card">

        <img src="${event.image}" alt="${event.title}">

        <div class="card-content">

            <h3>${event.title}</h3>

            <p><strong>Venue:</strong> ${event.venue}</p>

            <p><strong>Date:</strong> ${event.date}</p>

            
        </div>

    </div>

    `;

});


notices.forEach(notice => {

    noticeContainer.innerHTML += `

    <div class="notice-card">

        <h3>${notice.title}</h3>

        <p>${notice.category}</p>

        <p>${notice.date}</p>

    </div>

    `;

});