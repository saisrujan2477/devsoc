const noticeModal = document.getElementById("notice-modal");

const closeNoticeBtn =
document.getElementById("close-notice-modal");

const noticeTitle =
document.getElementById("notice-title");

const noticeDate =
document.getElementById("notice-date");

const noticeCategory =
document.getElementById("notice-category");

const noticeContent =
document.getElementById("notice-content");

function openNoticeModal(notice){

    noticeTitle.textContent = notice.title;

    noticeDate.textContent =
    "📅 " + notice.date;

    noticeCategory.textContent =
    "Category: " + notice.category;

    noticeContent.textContent =
    notice.content;

    noticeModal.style.display = "flex";

}

closeNoticeBtn.addEventListener("click",()=>{

    noticeModal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===noticeModal){

        noticeModal.style.display="none";

    }

});

function attachNoticeModalEvents(){

    document.querySelectorAll(".read-notice").forEach(button=>{

        button.addEventListener("click",()=>{

            const id = Number(button.dataset.id);

            const selectedNotice =
            notices.find(notice=>notice.id===id);

            openNoticeModal(selectedNotice);

        });

    });

}