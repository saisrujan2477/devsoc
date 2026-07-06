const themeButton = document.getElementById("theme-toggle");

// Load saved theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeButton.textContent = "☀️";

}

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.textContent = "☀️";

    }

    else{

        localStorage.setItem("theme","light");

        themeButton.textContent = "🌙";

    }

});