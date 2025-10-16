const nameEl = document.querySelector(".employer-name");
const locationEl = document.querySelector(".employer-location");
const occupationEl = document.querySelector(".employer-occupation");
const imgEl = document.querySelector(".employer-image");

nameEl.contentEditable = true;
locationEl.contentEditable = true;
occupationEl.contentEditable = true;
nameEl.spellcheck = false;

document.querySelectorAll("[contenteditable]").forEach((el) => {
  el.addEventListener("blur", () => {
    if (el.textContent.trim() === "") {
      if (el === nameEl) el.textContent = "Jessica, Randall";
      if (el === locationEl) el.textContent = "London, United Kingdom";
      if (el === occupationEl)
        el.textContent = "Front-end developer and Avid reader.";
    }

    if (el === nameEl && el.textContent.length > 25) {
      el.textContent = el.textContent.slice(0, 25) + "...";
    }

    localStorage.setItem(el.className, el.textContent);
  });

  const savedData = localStorage.getItem(el.className);
  if (savedData) {
    el.textContent = savedData;
  }

  imgEl.addEventListener("load", () => {
    imgEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      nameEl.textContent
    )}&background=random`;
    localStorage.setItem("employer-image", imgEl.src);
  });
});
