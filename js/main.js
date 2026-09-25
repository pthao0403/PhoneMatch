document.addEventListener("DOMContentLoaded", () => {
  const rawData = window.PhoneMatchData || window.products || [];
  const products = Array.isArray(rawData)
    ? rawData
    : rawData.products || [];

  const productGrid = document.getElementById("productGrid");
  const searchInput = document.getElementById("searchInput");
  const brandFilter = document.getElementById("brandFilter");
  const priceFilter = document.getElementById("priceFilter");
  const sortSelect = document.getElementById("sortSelect");

  const menuBtn = document.getElementById("menuBtn");
  const mainNav = document.getElementById("mainNav");

 function priceValue(price) {
  if (typeof price === "number") {
    return price;
  }

  return Number(
    String(price || "").replace(/[^\d]/g, "")
  ) || 0;
}
  function formatPrice(price) {
    const value = priceValue(price);
    return value
      ? new Intl.NumberFormat("vi-VN").format(value) + " ₫"
      : "Liên hệ";
  }

  function productLink(product) {
    return `product-detail.html?id=${encodeURIComponent(product.id)}`;
  }

  function getProductCard(product) {
    const link = productLink(product);
const image =
  product.image ||
  "https://placehold.co/600x700/f1f5f9/334155?text=Phone";    const display = product.display || "Đang cập nhật";
    const chip = product.chip || "Đang cập nhật";

    return `
      <article class="product-card">
        <a href="${link}" class="product-image">
        <img
  src="${image}"
  alt="${product.name || "Điện thoại"}"
  width="300"
  height="300"
  loading="lazy"
  onerror="this.onerror=null;this.src='https://placehold.co/600x600/f1f5f9/334155?text=Phone';"
>
        </a>

        <div class="product-info">
          <span class="product-brand">${product.brand || ""}</span>

          <h3>
            <a href="${link}">
              ${product.name || "Điện thoại chưa có tên"}
            </a>
          </h3>

          <p class="product-price">${formatPrice(product.price)}</p>

          <div class="product-specs">
            <span>${product.ram || "N/A"} RAM</span>
            <span>${display}</span>
            <span>${chip}</span>
          </div>

          <div class="product-actions">
            <a href="${link}" class="btn btn-primary">
              Xem chi tiết
            </a>

            <button class="btn btn-compare" data-id="${product.id}">
              So sánh
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function renderProducts(list) {
    if (!productGrid) return;

    if (!list.length) {
      productGrid.innerHTML = `
        <div class="empty-state">
          <h3>Không tìm thấy điện thoại</h3>
          <p>Thử thay đổi từ khóa hoặc bộ lọc nhé.</p>
        </div>
      `;
      return;
    }

    productGrid.innerHTML = list.map(getProductCard).join("");
    bindCompareButtons();
  }

  function filterByPrice(list, value) {
    if (!value) return list;

    const prices = list.map(product => ({
      product,
      price: priceValue(product.price)
    }));

    if (value === "under10") {
      return prices
        .filter(item => item.price < 10000000)
        .map(item => item.product);
    }

    if (value === "10to20") {
      return prices
        .filter(item => item.price >= 10000000 && item.price <= 20000000)
        .map(item => item.product);
    }

    if (value === "over20") {
      return prices
        .filter(item => item.price > 20000000)
        .map(item => item.product);
    }

    const limit = Number(value) * 1000000;

    if (value === "5") {
      return prices
        .filter(item => item.price < limit)
        .map(item => item.product);
    }

    if (value === "10") {
      return prices
        .filter(item => item.price >= 5000000 && item.price <= limit)
        .map(item => item.product);
    }

    if (value === "15") {
      return prices
        .filter(item => item.price > 10000000 && item.price <= limit)
        .map(item => item.product);
    }

    if (value === "999") {
      return prices
        .filter(item => item.price > 15000000)
        .map(item => item.product);
    }

    return list;
  }

  function filterProducts() {
    let result = [...products];

    const keyword = searchInput?.value.trim().toLowerCase() || "";
    const brand = brandFilter?.value || "";
    const price = priceFilter?.value || "";
    const sort = sortSelect?.value || "";

    if (keyword) {
      result = result.filter(product =>
        [
          product.name,
          product.brand,
          product.chip,
          product.display
        ]
          .join(" ")
          .toLowerCase()
          .includes(keyword)
      );
    }

    if (brand) {
      result = result.filter(product => product.brand === brand);
    }

    result = filterByPrice(result, price);

    if (sort === "priceAsc" || sort === "price-asc") {
      result.sort((a, b) => priceValue(a.price) - priceValue(b.price));
    }

    if (sort === "priceDesc" || sort === "price-desc") {
      result.sort((a, b) => priceValue(b.price) - priceValue(a.price));
    }

    if (sort === "name") {
      result.sort((a, b) =>
        String(a.name).localeCompare(String(b.name), "vi")
      );
    }

    renderProducts(result);
  }

  function populateBrands() {
    if (!brandFilter) return;

    const brands = [...new Set(
      products
        .map(product => product.brand)
        .filter(Boolean)
    )].sort((a, b) => a.localeCompare(b, "vi"));

    brands.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandFilter.appendChild(option);
    });
  }

  function bindCompareButtons() {
    document.querySelectorAll(".btn-compare").forEach(button => {
      button.addEventListener("click", () => {
        const id = String(button.dataset.id);
        let compareList = JSON.parse(
          localStorage.getItem("compareList") || "[]"
        ).map(String);

        if (compareList.includes(id)) {
          compareList = compareList.filter(item => item !== id);
          button.textContent = "So sánh";
          button.classList.remove("active");
        } else {
          if (compareList.length >= 3) {
            alert("Chỉ có thể so sánh tối đa 3 điện thoại.");
            return;
          }

          compareList.push(id);
          button.textContent = "Đã thêm";
          button.classList.add("active");
        }

        localStorage.setItem(
          "compareList",
          JSON.stringify(compareList)
        );
      });
    });
  }

  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  searchInput?.addEventListener("input", filterProducts);
  brandFilter?.addEventListener("change", filterProducts);
  priceFilter?.addEventListener("change", filterProducts);
  sortSelect?.addEventListener("change", filterProducts);

  populateBrands();
  renderProducts(products);
});