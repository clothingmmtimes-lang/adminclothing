// Replace this with your new Apps Script Web App URL
const apiURL = "https://script.google.com/macros/s/AKfycbw2JFvVFP6CaSEKnKNWbTrPg5q2e1JiZyqitiQniVNawHdKTADDb0Go8g78q078CuoUcQ/exec";

// ===== LOAD CONTENT FROM GOOGLE SHEET =====
async function loadSettings() {
  try {
    const res = await fetch(apiURL + "?action=get");
    const data = await res.json();

    document.getElementById("welcomeTitle").value = data.welcomeTitle || "";
    document.getElementById("welcomeText").value = data.welcomeText || "";
    document.getElementById("homeButtonText").value = data.homeBtnText || "";

  } catch (err) {
    console.error("Error loading settings:", err);
    document.getElementById("settings-status").textContent =
      "Error loading content!";
  }
}

// ===== SAVE CONTENT TO GOOGLE SHEET =====
async function saveSettings(event) {
  event.preventDefault();

  const body = {
    welcomeTitle: document.getElementById("welcomeTitle").value,
    welcomeText: document.getElementById("welcomeText").value,
    homeBtnText: document.getElementById("homeButtonText").value
  };

  document.getElementById("settings-status").textContent = "Saving...";

  try {
    const res = await fetch(apiURL + "?action=save", {
      method: "POST",
      body: JSON.stringify(body)
    });

    const json = await res.json();

    if (json.status === "success") {
      document.getElementById("settings-status").textContent =
        "Updated successfully!";
    }

  } catch (err) {
    console.error("Error saving:", err);
    document.getElementById("settings-status").textContent =
      "Failed to save.";
  }
}

// Run when page loads
document.addEventListener("DOMContentLoaded", loadSettings);
