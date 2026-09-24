document.addEventListener("DOMContentLoaded", () => {
  const rawData = window.PhoneMatchData || window.products || [];
  const products = Array.isArray(rawData)
    ? rawData
    : rawData.products || [];

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const productContainer = document.getElementById("productDetail");

  if (!productContainer) return;

  const product = products.find(
    item => String(item.id) === String(productId)
  );

  const fallbackImage =
    "https://placehold.co/600x700/f1f5f9/334155?text=Phone";

  function getPrice(value) {
    const number = Number(String(value || "").replace(/[^\d]/g, ""));
    return number || 0;
  }

  function formatPrice(value) {
    const price = getPrice(value);
    return price
      ? `${new Intl.NumberFormat("vi-VN").format(price)} ₫`
      : "Giá tham khảo";
  }

  function specItem(label, value) {
    return `
      <div class="spec-item">
        <span>${label}</span>
        <strong>${value || "Đang cập nhật"}</strong>
      </div>
    `;
  }

  if (!product) {
    productContainer.innerHTML = `
      <section class="section">
        <div class="container empty-state">
          <h2>Không tìm thấy sản phẩm</h2>
          <p>Sản phẩm có thể đã bị xóa hoặc đường dẫn không đúng.</p>
          <a href="products.html" class="btn btn-primary">
            Quay lại danh sách
          </a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${product.name} | PhoneMatch`;

  const image = product.image || fallbackImage;
  const sourceUrl = product.sourceUrl || "#";

  productContainer.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="product-detail">
          <div class="product-detail-image">
           <img
  src="${image}"
  alt="${product.name || "Điện thoại"}"
  width="300"
  height="350"
  loading="lazy"
  onerror="this.onerror=null;this.src='https://placehold.co/600x700/f1f5f9/334155?text=Phone';"
>
          </div>

          <div class="product-detail-info">
            <span class="product-brand">${product.brand || ""}</span>
            <h1>${product.name}</h1>

            <div class="product-detail-price">
              ${formatPrice(product.price)}
            </div>

            <p class="product-description">
              ${product.description || "Thông tin sản phẩm đang được cập nhật."}
            </p>

            <div class="product-detail-actions">
              <button id="addCompare" class="btn btn-primary" type="button">
                Thêm vào so sánh
              </button>

              <a
                href="${sourceUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="official-source"
              >
                Xem nguồn chính thức ↗
              </a>
            </div>
          </div>
        </div>

        <section class="spec-section">
          <h2>Thông số kỹ thuật</h2>
          <div class="spec-grid">
            ${specItem("Thương hiệu", product.brand)}
            ${specItem("Chip", product.chip)}
            ${specItem("RAM", product.ram)}
            ${specItem("Bộ nhớ", product.storage)}
            ${specItem("Màn hình", product.display)}
            ${specItem("Camera", product.camera)}
            ${specItem("Pin", product.battery)}
            ${specItem("Sạc", product.charging)}
            ${specItem("Hệ điều hành", product.os)}
          </div>
        </section>

        <section class="needs-section">
          <h2>Phù hợp với</h2>
          <div class="need-tags">
            ${
              Array.isArray(product.needs) && product.needs.length
                ? product.needs
                    .map(need => `<span class="need-tag">${need}</span>`)
                    .join("")
                : "<span>Đang cập nhật</span>"
            }
          </div>
        </section>
      </div>
    </section>
  `;

  document.getElementById("addCompare")?.addEventListener("click", () => {
    let compareList = JSON.parse(
      localStorage.getItem("compareList") || "[]"
    ).map(String);

    const id = String(product.id);

    if (compareList.includes(id)) {
      alert("Điện thoại này đã có trong danh sách so sánh.");
      return;
    }

    if (compareList.length >= 3) {
      alert("Chỉ có thể so sánh tối đa 3 điện thoại.");
      return;
    }

    compareList.push(id);
    localStorage.setItem("compareList", JSON.stringify(compareList));
    alert("Đã thêm điện thoại vào danh sách so sánh.");
  });
});