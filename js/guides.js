document.addEventListener("DOMContentLoaded", () => {
  const guides = [
    {
      id: "student",
      title: "Điện thoại nào phù hợp cho sinh viên?",
      description: "Các tiêu chí quan trọng khi chọn điện thoại cho sinh viên như giá, pin, hiệu năng và độ bền.",
      keywords: ["điện thoại cho sinh viên", "điện thoại học tập"],
      content: "Sinh viên nên ưu tiên điện thoại có giá phù hợp, pin tốt, hiệu năng ổn định và bộ nhớ đủ dùng cho học tập, giải trí."
    },
    {
      id: "under10",
      title: "Điện thoại nào tốt dưới 10 triệu?",
      description: "Các tiêu chí cần cân nhắc khi chọn điện thoại trong ngân sách dưới 10 triệu đồng.",
      keywords: ["điện thoại dưới 10 triệu", "điện thoại tầm trung"],
      content: "Trong tầm giá dưới 10 triệu, hãy ưu tiên màn hình tốt, chip đủ mạnh, camera ổn định và chính sách bảo hành rõ ràng."
    },
    {
      id: "camera",
      title: "Điện thoại nào chụp ảnh đẹp?",
      description: "Các yếu tố ảnh hưởng đến chất lượng camera điện thoại.",
      keywords: ["điện thoại chụp ảnh đẹp", "camera điện thoại"],
      content: "Chất lượng ảnh phụ thuộc vào cảm biến, ống kính, khả năng chống rung và phần mềm xử lý ảnh, không chỉ dựa vào số megapixel."
    },
    {
      id: "gaming",
      title: "Điện thoại nào chơi game tốt?",
      description: "Những thông số cần quan tâm khi chọn điện thoại gaming.",
      keywords: ["điện thoại chơi game", "gaming phone"],
      content: "Điện thoại chơi game nên có chipset mạnh, màn hình tần số quét cao, hệ thống tản nhiệt tốt và pin dung lượng lớn."
    },
    {
      id: "iphone-vs-samsung",
      title: "iPhone hay Samsung?",
      description: "So sánh các khác biệt chính giữa hệ sinh thái iPhone và Samsung.",
      keywords: ["iPhone hay Samsung", "iPhone vs Samsung"],
      content: "iPhone phù hợp với người thích iOS và hệ sinh thái Apple. Samsung phù hợp với người muốn Android linh hoạt, màn hình đẹp và nhiều lựa chọn phần cứng."
    },
    {
      id: "storage",
      title: "128GB hay 256GB?",
      description: "Hướng dẫn lựa chọn dung lượng bộ nhớ phù hợp.",
      keywords: ["128GB hay 256GB", "bộ nhớ điện thoại"],
      content: "128GB phù hợp nhu cầu cơ bản. Nếu thường quay video, chơi game hoặc muốn sử dụng lâu dài, nên chọn 256GB."
    },
    {
      id: "battery",
      title: "Điện thoại nào pin tốt?",
      description: "Các yếu tố ảnh hưởng đến thời lượng pin thực tế.",
      keywords: ["điện thoại pin tốt", "điện thoại pin trâu"],
      content: "Thời lượng pin phụ thuộc vào dung lượng pin, chip, màn hình, mạng di động và cách sử dụng thực tế."
    },
    {
      id: "how-to-choose",
      title: "Cách chọn điện thoại phù hợp nhu cầu",
      description: "Quy trình xác định điện thoại phù hợp dựa trên ngân sách và mục đích sử dụng.",
      keywords: ["cách chọn điện thoại", "tư vấn điện thoại"],
      content: "Hãy xác định ngân sách trước, sau đó chọn nhu cầu chính như camera, gaming, pin, học tập hoặc công việc."
    }
  ];

  const listContainer =
    document.getElementById("guideContainer") ||
    (location.pathname.endsWith("guides.html")
      ? document.querySelector("main .section .container")
      : null);

  const detailContainer = document.getElementById("guideContent");

  if (listContainer) {
    listContainer.innerHTML = `
      <div class="guide-grid">
        ${guides.map(guide => `
          <article class="guide-card">
            <div class="guide-content">
              <span class="guide-label">GEO Guide</span>
              <h2>${guide.title}</h2>
              <p>${guide.description}</p>
              <div class="guide-keywords">
                ${guide.keywords.map(keyword => `<span>${keyword}</span>`).join("")}
              </div>
              <a href="guide.html?id=${guide.id}" class="btn btn-primary">
                Đọc hướng dẫn
              </a>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }

  if (detailContainer) {
    const params = new URLSearchParams(location.search);
    const id = params.get("id") || params.get("topic");
    const guide = guides.find(item => item.id === id);

    if (!guide) {
      detailContainer.innerHTML = `
        <section class="section">
          <h1>Không tìm thấy bài hướng dẫn</h1>
          <a href="guides.html" class="btn btn-primary">Quay lại</a>
        </section>
      `;
      return;
    }

    document.title = `${guide.title} | PhoneMatch`;

    detailContainer.innerHTML = `
      <section class="page-hero">
        <span class="eyebrow">GEO Guide</span>
        <h1>${guide.title}</h1>
        <p>${guide.description}</p>
      </section>

      <section class="section">
        <p>${guide.content}</p>
        <a href="guides.html" class="btn btn-primary">
          Xem các bài khác
        </a>
      </section>
    `;
  }
});