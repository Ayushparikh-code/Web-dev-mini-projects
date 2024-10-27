const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const uploadFile = document.getElementById("upload-file");
const revertBtn = document.getElementById("revert-btn");

// Filter & Effect Handlers
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    const filterAction = e.target.classList.item(1); // Get the second class which indicates the filter
    Caman("#canvas", img, function () {
      switch (filterAction) {
        case "brightness-add":
          this.brightness(5).render();
          break;
        case "brightness-remove":
          this.brightness(-5).render();
          break;
        case "contrast-add":
          this.contrast(5).render();
          break;
        case "contrast-remove":
          this.contrast(-5).render();
          break;
        case "saturation-add":
          this.saturation(5).render();
          break;
        case "saturation-remove":
          this.saturation(-5).render();
          break;
        case "vibrance-add":
          this.vibrance(5).render();
          break;
        case "vibrance-remove":
          this.vibrance(-5).render();
          break;
        case "vintage-add":
          this.vintage().render();
          break;
        case "lomo-add":
          this.lomo().render();
          break;
        case "clarity-add":
          this.clarity().render();
          break;
        case "sincity-add":
          this.sinCity().render();
          break;
        case "crossprocess-add":
          this.crossProcess().render();
          break;
        case "pinhole-add":
          this.pinhole().render();
          break;
        case "nostalgia-add":
          this.nostalgia().render();
          break;
        case "hermajesty-add":
          this.herMajesty().render();
          break;
        default:
          break;
      }
    });
  }
});

// Revert Filters
revertBtn.addEventListener("click", () => {
  Caman("#canvas", img, function () {
    this.revert();
  });
});

// Upload File
uploadFile.addEventListener("change", () => {
  const file = uploadFile.files[0];
  const reader = new FileReader();

  if (file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
    fileName = file.name;
    reader.readAsDataURL(file);
  }

  reader.addEventListener("load", () => {
    img = new Image();
    img.src = reader.result;
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
  }, false);
});

// Download Event
downloadBtn.addEventListener("click", () => {
  const fileExtension = fileName.slice(-4);
  let newFilename;

  if (fileExtension === ".jpg" || fileExtension === ".png") {
    newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
  } else {
    alert("Unsupported file type. Please upload a .jpg or .png file.");
    return;
  }

  download(canvas, newFilename);
});

// Download Function
function download(canvas, filename) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/jpeg", 0.8);
  link.click(); // Simulate a click to download
}
