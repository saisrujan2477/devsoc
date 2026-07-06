const loading = document.getElementById("loading");
const error = document.getElementById("error");

const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const eventsGrid = document.getElementById("events-grid");

// Display Events
function displayEvents(eventList) {

    eventsGrid.innerHTML = "";

    if (eventList.length === 0) {
        eventsGrid.innerHTML = `
            <p class="no-results">
                No events found.
            </p>
        `;
        return;
    }

    eventList.forEach(event => {

        eventsGrid.innerHTML += `
            <div class="card">

                <img src="${event.image}" alt="${event.title}">

                <div class="card-content">

                    <h3>${event.title}</h3>

                    <p><strong>Venue:</strong> ${event.venue}</p>

                    <p><strong>Date:</strong> ${event.date}</p>

                    <button class="read-more" data-id="${event.id}">
                        Read More
                    </button>

                </div>

            </div>
        `;

    });

    // Attach modal click events after cards are created
    attachModalEvents();
}

// Combined Search + Category Filter
function filterEvents() {

    const keyword = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredEvents = events.filter(event => {

        const matchesSearch =
            event.title.toLowerCase().includes(keyword);

        const matchesCategory =
            category === "All" || event.category === category;

        return matchesSearch && matchesCategory;

    });

    displayEvents(filteredEvents);

}

// Initial Load
loading.style.display = "block";
eventsGrid.style.display = "none";
error.style.display = "none";

setTimeout(() => {

    try {

        loading.style.display = "none";

        eventsGrid.style.display = "grid";

        displayEvents(events);

    } catch {

        loading.style.display = "none";

        error.style.display = "block";

    }

}, 1000);

// Event Listeners
searchInput.addEventListener("input", filterEvents);
categoryFilter.addEventListener("change", filterEvents);