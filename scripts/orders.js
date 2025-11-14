async function loadOrders() {
  const tbody = document.getElementById("orders-body");
  if (!tbody) return;

  tbody.innerHTML = "<tr><td colspan='6'>Loading orders...</td></tr>";

  const apiURL = "https://script.google.com/macros/s/AKfycbw2JFvVFP6CaSEKnKNWbTrPg5q2e1JiZyqitiQniVNawHdKTADDb0Go8g78q078CuoUcQ/exec";  // same URL

  try {
    const res = await fetch(apiURL + "?resource=orders");
    const orders = await res.json();

    tbody.innerHTML = "";

    if (!orders.length) {
      tbody.innerHTML = "<tr><td colspan='6'>No orders found.</td></tr>";
      return;
    }

    orders.forEach(order => {
      tbody.innerHTML += `
        <tr>
          <td>${order.order_id}</td>
          <td>${order.name}</td>
          <td>${order.phone}</td>
          <td>${order.product}</td>
          <td>₹${order.price}</td>
          <td>${new Date(order.date).toLocaleString()}</td>
        </tr>
      `;
    });

  } catch (err) {
    console.error("Error loading orders:", err);
    tbody.innerHTML = "<tr><td colspan='6'>Error loading orders.</td></tr>";
  }
}

document.addEventListener("DOMContentLoaded", loadOrders);
