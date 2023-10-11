const mainBox = document.querySelector(".main__box");
const ratingBox = document.querySelector(".wrapper__rating");
const items = document.querySelectorAll(".list__item");
const submit = document.querySelector(".submit");

// Add or remove class selected after click
items.forEach((item) => {
    item.addEventListener("click", () => {
        items.forEach((otherItems) => {
            otherItems.classList.remove("selected");
        });
        item.classList.add("selected");
    });

    // Confirming the rating and showing the new box with new elements
    submit.addEventListener("click", () => {
        let rating = item.classList.contains("selected")
        let ratingNumber = item.textContent
        if (rating) {
            const newBox = document.createElement("div");
            newBox.className = "relative p-9 w-[420px] bg-gray-800 text-white rounded-3xl";
            const newRatingBox = document.createElement("div");
            newRatingBox.className = "flex flex-col items-center text-center space-y-5";
            const img = document.createElement("img");
            img.setAttribute("src", "../public/img/vote.svg");
            img.className = "w-24 h-24"
            const yourVote = document.createElement("div");
            yourVote.className = "py-2 px-4 bg-gray-900 text-orange-600 rounded-full";
            yourVote.textContent = `You selected ${ratingNumber} out of ${items.length}.`;
            const h1 = document.createElement("h1");
            h1.className = "text-2xl font-bold";
            h1.textContent = "Thank you!";
            const desc = document.createElement("p")
            desc.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
            const closeBtn = document.createElement("div");
            closeBtn.className = "absolute -top-4 -right-4 w-14 h-14 flex justify-center items-start text-5xl bg-orange-600 rounded-full cursor-pointer";
            closeBtn.innerHTML = "&times;";

            mainBox.appendChild(newBox);
            newBox.appendChild(closeBtn);
            newBox.appendChild(newRatingBox);
            newRatingBox.appendChild(img);
            newRatingBox.appendChild(yourVote);
            newRatingBox.appendChild(h1);
            newRatingBox.appendChild(desc);

            // Hide main rating box
            ratingBox.classList.add("hidden");
            closeBtn.addEventListener("click", () => {
                newBox.remove();
                ratingBox.classList.remove("hidden");
                item.classList.remove("selected");
            });
        }
    });
});


