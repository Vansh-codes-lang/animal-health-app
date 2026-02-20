function showTab(tabId) {
  const tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(tabId).classList.add("active");
}

// Simulated real-time data update
function updateData() {
  let temperature = (37 + Math.random() * 4).toFixed(1);
  let activity = Math.floor(30 + Math.random() * 50);

  let status = "Normal ✅";
  let statusClass = "normal";
  let alertMessage = "No critical alerts";

  if (temperature > 39.5 || activity < 35) {
    status = "Critical 🚨";
    statusClass = "critical";
    alertMessage = "🚨 Critical condition detected!";
  }
  else if (temperature > 38.8 || activity < 50) {
    status = "Warning ⚠";
    statusClass = "warning";
    alertMessage = "⚠ Warning: Monitor animal closely";
  }
  if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

  document.getElementById("temp").innerText = temperature + " °C";
  document.getElementById("activity").innerText = activity + " %";
  document.getElementById("status").innerText = status;
  document.getElementById("time").innerText = new Date().toLocaleTimeString();
  document.getElementById("alertText").innerText = alertMessage;

  let card = document.getElementById("statusCard");
  card.className = "card " + statusClass;
}

// Update every 2 seconds
setInterval(updateData, 2000);