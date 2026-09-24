document.addEventListener("DOMContentLoaded", () => {
  const rawData = window.PhoneMatchData || window.products || [];
  const products = Array.isArray(rawData)
    ? rawData
    : rawData.products || [];

  const budgetSelect = document.getElementById("finderBudget");
  const needSelect = document.getElementById("finderNeed");
  const findButton = document.getElementById("findBtn");
  const resultBox = document.getElementById("finderResult");
  const form = document.getElementById("finderForm");

  if (!resultBox) return;

  function getPrice(value) {
    return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
  }

  function formatPrice(value) {
    const price = getPrice(value);
    return price
      ? new Intl.NumberFormat("vi-VN").format(price) + " ₫"
      : "Giá tham khảo";
  }

  function matchesBudget(product, budget) {
    const price = getPrice(product.price);

    // Sản phẩm chưa có giá số không thể lọc chính xác theo ngân sách.
    if (!price || !budget || budget === "999") return true;

    if (budget === "5") return price < 5000000;
    if (budget === "10") return price < 10000000;
    if (budget === "15") return price < 15000000;

    if (budget === "under10") return price < 10000000;
    if (budget === "10to20") {
      return price >= 10000000 && price <= 20000000;
    }
    if (budget === "over20") return price > 20000000;

    return true;
  }

  function renderResults(list) {
    if (!list.length) {
      resultBox.innerHTML = `
        <div class="finder-empty">
          <h3>Chưa tìm thấy sản phẩm phù hợp</h3>
          <p>Hãy thử chọn ngân sách rộng hơn hoặc nhu cầu khác.</p>
        </div>
      `;
      return;
    }

    resultBox.innerHTML = `
      <div class="finder-results">
        <h2>Điện thoại phù hợp với bạn</h2>
        <div class="finder-grid">
          ${list.slice(0, 6).map(product => `
            <article class="finder-card">
              <div>
                <span>${product.brand || ""}</span>
                <h3>${product.name || "Điện thoại"}</h3>
                <strong>${formatPrice(product.price)}</strong>
                <p>${product.description || "Phù hợp với nhu cầu của bạn."}</p>
                <a
                  href="product-detail.html?id=${encodeURIComponent(product.id)}"
                  class="btn btn-primary"
                >
                  Xem chi tiết
                </a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  function findProducts(event) {
    event?.preventDefault();

    const budget = budgetSelect?.value || "999";
    const need = needSelect?.value || "";

    const result = products.filter(product => {
      const budgetOk = matchesBudget(product, budget);
      const needOk =
        !need ||
        !Array.isArray(product.needs) ||
        product.needs.includes(need);

      return budgetOk && needOk;
    });

    renderResults(result);
  }

  form?.addEventListener("submit", findProducts);
  findButton?.addEventListener("click", findProducts);
});