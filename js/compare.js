document.addEventListener("DOMContentLoaded", () => {
  const data = window.PhoneMatchData || window.products || [];
  const products = Array.isArray(data) ? data : data.products || [];

  const selectA = document.getElementById("compareA");
  const selectB = document.getElementById("compareB");
  const result = document.getElementById("compareResult");

  if (!selectA || !selectB || !result) return;

  function price(price) {
    if (typeof price === "number") {
      return new Intl.NumberFormat("vi-VN").format(price) + " ₫";
    }

    return price || "Giá tham khảo";
  }

  function productById(id) {
    return products.find(product => String(product.id) === String(id));
  }

  function addOptions(select) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      select.appendChild(option);
    });
  }

  function renderCompare() {
    const productA = productById(selectA.value);
    const productB = productById(selectB.value);

    if (!productA || !productB) {
      result.innerHTML = `
        <p>Vui lòng chọn hai điện thoại để bắt đầu so sánh.</p>
      `;
      return;
    }

    const rows = [
      ["Hãng", "brand"],
      ["Giá", "price"],
      ["RAM", "ram"],
      ["Bộ nhớ", "storage"],
      ["Chip", "chip"],
      ["Màn hình", "display"],
      ["Camera", "camera"],
      ["Pin", "battery"],
      ["Sạc", "charging"],
      ["Hệ điều hành", "os"]
    ];

    result.innerHTML = `
      <div class="compare-table-wrapper">
        <table class="compare-table">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>${productA.name}</th>
              <th>${productB.name}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(([label, field]) => `
              <tr>
                <th>${label}</th>
                <td>${field === "price" ? price(productA[field]) : productA[field] || "—"}</td>
                <td>${field === "price" ? price(productB[field]) : productB[field] || "—"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  addOptions(selectA);
  addOptions(selectB);

  selectA.addEventListener("change", renderCompare);
  selectB.addEventListener("change", renderCompare);

  const saved = JSON.parse(localStorage.getItem("compareList") || "[]");

  if (saved[0]) selectA.value = saved[0];
  if (saved[1]) selectB.value = saved[1];

  renderCompare();
});