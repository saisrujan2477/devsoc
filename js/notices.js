const loading = document.getElementById("loading");
const error = document.getElementById("error");

const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const noticesGrid = document.getElementById("notices-grid");

function displayNotices(noticeList){

    noticesGrid.innerHTML = "";

    if(noticeList.length === 0){

        noticesGrid.innerHTML = `
            <p class="no-results">
                No notices found.
            </p>
        `;

        return;

    }

    noticeList.forEach(notice=>{

        noticesGrid.innerHTML += `

        <div class="card">

            <div class="card-content">

                <h3>${notice.title}</h3>

                <p><strong>Category:</strong> ${notice.category}</p>

                <p><strong>Date:</strong> ${notice.date}</p>

                <button
                    class="read-notice"
                    data-id="${notice.id}">
                    Read More
                </button>

            </div>

        </div>

        `;

    });

    attachNoticeModalEvents();

}

loading.style.display = "block";
noticesGrid.style.display = "none";
error.style.display = "none";

setTimeout(() => {

    try{

        loading.style.display = "none";

        noticesGrid.style.display = "grid";

        displayNotices(notices);

    }
    catch{

        loading.style.display = "none";

        error.style.display = "block";

    }

},1000);

function filterNotices(){

    const keyword = searchInput.value.toLowerCase();

    const category = categoryFilter.value;

    const filtered = notices.filter(notice=>{

        const matchesSearch =
            notice.title.toLowerCase().includes(keyword);

        const matchesCategory =
            category==="All" || notice.category===category;

        return matchesSearch && matchesCategory;

    });

    displayNotices(filtered);

}

searchInput.addEventListener("input",filterNotices);

categoryFilter.addEventListener("change",filterNotices);