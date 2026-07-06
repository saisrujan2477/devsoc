const modal = document.getElementById("event-modal");

const closeBtn = document.getElementById("close-modal");

const modalImage =
document.getElementById("modal-image");

const modalTitle =
document.getElementById("modal-title");

const modalVenue =
document.getElementById("modal-venue");

const modalDate =
document.getElementById("modal-date");

const modalCategory =
document.getElementById("modal-category");

const modalDescription =
document.getElementById("modal-description");

function openModal(event){

    modalImage.src = event.image;

    modalTitle.textContent = event.title;

    modalVenue.textContent =
    "📍 " + event.venue;

    modalDate.textContent =
    "📅 " + event.date;

    modalCategory.textContent =
    "Category: " + event.category;

    modalDescription.textContent =
    event.description;

    modal.style.display = "flex";

}

closeBtn.addEventListener("click",()=>{

    modal.style.display="none";

});

function attachModalEvents(){

    document.querySelectorAll(".read-more").forEach(button=>{

        button.addEventListener("click",()=>{

            const id = Number(button.dataset.id);

            const selectedEvent =
            events.find(event=>event.id===id);

            openModal(selectedEvent);

        });

    });

}

/*window.addEventListener("click",(e)=>{
if(e.target===modal){
modal.style.display="none";
}
}); */