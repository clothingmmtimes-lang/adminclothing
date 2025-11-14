function loadSettings() {
  const title = localStorage.getItem("welcomeTitle") || "Welcome to MM Times Clothing";
  const text = localStorage.getItem("welcomeText") || "Your trusted place for custom printing on T-shirts, hoodies, caps & more.";
  const btn  = localStorage.getItem("homeButtonText") || "Explore Products";

  document.getElementById("welcomeTitle").value = title;
  document.getElementById("welcomeText").value = text;
  document.getElementById("homeButtonText").value = btn;
}

function saveSettings(e) {
  e.preventDefault();

  const title = document.getElementById("welcomeTitle").value;
  const text  = document.getElementById("welcomeText").value;
  const btn   = document.getElementById("homeButtonText").value;

  localStorage.setItem("welcomeTitle", title);
  localStorage.setItem("welcomeText", text);
  localStorage.setItem("homeButtonText", btn);

  document.getElementById("settings-status").textContent =
    "Saved locally. Next step: connect to Google Sheets.";
}

document.addEventListener("DOMContentLoaded", loadSettings);
