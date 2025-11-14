// TODO: Replace dummy data with real API call to Google Sheets

function loadOrdersDummy() {
  const tbody = document.getElementById("orders-body");
  if (!tbody) return;

  // Example dummy order row
  const example = {
    order_id: "ORD-123456",
    name: "Test User",
    phone: "9876543210",
    product: "Basic T-Shirt",
    price: 199,
    date: "2025-11-15"
  };

  tbody.innerHTML = `
    <tr>
      <td>${example.order_id}</td>
      <td>${example.name}</td>
      <td>${example.phone}</td>
      <td>${example.product}</td>
      <td>₹${example.price}</td>
      <td>${example.date}</td>
    </tr>
  `;
}

document.addEventListener("DOMContentLoaded", loadOrdersDummy);
