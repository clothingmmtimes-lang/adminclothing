const apiURL = "https://script.google.com/macros/s/AKfycbw2JFvVFP6CaSEKnKNWbTrPg5q2e1JiZyqitiQniVNawHdKTADDb0Go8g78q078CuoUcQ/exec";  // same URL used for orders

// Load existing content into the form
async function loadSettings() {
  try {
    const res = await fetch(apiURL + "?resource=content");
    const data = await res.json();

    document.getElementById("welcomeTitle").value = data.welcomeTitle || "";
    document.getElementById("welcomeText").value = data.welcomeText || "";
    document.getElementById("homeButtonText").value = data.homeBtnText || "";

  } catch (err) {
    console.error("Error loading settings:", err);
    document.getElementById("settings-status").textContent =
      "Error loading content.";
  }
}

// Save form values back to Google Sheet
async function saveSettings(event) {
  event.preventDefault();

  const body = {
    welcomeTitle: document.getElementById("welcomeTitle").value,
    welcomeText: document.getElementById("welcomeText").value,
    homeBtnText: document.getElementById("homeButtonText").value
  };

  document.getElementById("settings-status").textContent = "Saving...";

  try {
    const res = await fetch(apiURL + "?resource=content", {
      method: "POST",
      body: JSON.stringify(body)
    });

    const json = await res.json();

    if (json.status === "success") {
      document.getElementById("settings-status").textContent =
        "Updated successfully!";
    } else {
      document.getElementById("settings-status").textContent =
        "Save failed.";
    }

  } catch (err) {
    console.error("Error saving:", err);
    document.getElementById("settings-status").textContent =
      "Error while saving.";
  }
}

document.addEventListener("DOMContentLoaded", loadSettings);
