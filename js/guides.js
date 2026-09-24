document.addEventListener("DOMContentLoaded", () => {
  const guides = {
    student: {
      title: "Điện thoại nào phù hợp cho sinh viên?",
      description: "Tư vấn chọn điện thoại cho học tập, giải trí và sử dụng hằng ngày.",
      content: `
        <p><strong>Sinh viên nên chọn điện thoại có giá hợp lý, pin tốt, hiệu năng ổn định và bộ nhớ từ 128GB.</strong></p>
        <h2>Tiêu chí nên ưu tiên</h2>
        <ul>
          <li>Giá phù hợp với ngân sách.</li>
          <li>Pin đủ dùng trong cả ngày.</li>
          <li>RAM từ 8GB, bộ nhớ từ 128GB.</li>
          <li>Màn hình dễ nhìn, hiệu năng ổn định.</li>
        </ul>
        <h2>Gợi ý nhanh</h2>
        <table>
          <tr><th>Nhu cầu</th><th>Nên ưu tiên</th></tr>
          <tr><td>Học tập</td><td>Pin tốt, màn hình dễ nhìn</td></tr>
          <tr><td>Giải trí</td><td>Chip ổn định, màn hình 120Hz</td></tr>
          <tr><td>Chụp ảnh</td><td>Camera chính tốt, chống rung</td></tr>
        </table>
        <p><a class="btn btn-primary" href="finder.html">Tìm điện thoại phù hợp</a></p>
      `
    },

    under10: {
      title: "Điện thoại nào tốt dưới 10 triệu?",
      description: "Các tiêu chí cần cân nhắc khi chọn điện thoại trong tầm giá dưới 10 triệu.",
      content: `
        <p><strong>Điện thoại dưới 10 triệu nên có chip ổn định, màn hình tốt, pin lớn và bộ nhớ ít nhất 128GB.</strong></p>
        <h2>Tiêu chí lựa chọn</h2>
        <ul>
          <li>RAM từ 8GB.</li>
          <li>Bộ nhớ từ 128GB.</li>
          <li>Màn hình AMOLED hoặc tần số quét cao.</li>
          <li>Pin lớn và hỗ trợ sạc nhanh.</li>
        </ul>
        <table>
          <tr><th>Tiêu chí</th><th>Mức nên chọn</th></tr>
          <tr><td>RAM</td><td>Từ 8GB</td></tr>
          <tr><td>Bộ nhớ</td><td>128GB trở lên</td></tr>
          <tr><td>Màn hình</td><td>AMOLED, 90Hz hoặc 120Hz</td></tr>
        </table>
        <p><a class="btn btn-primary" href="products.html">Xem sản phẩm</a></p>
      `
    },

    camera: {
      title: "Điện thoại nào chụp ảnh đẹp?",
      description: "Cách đánh giá camera điện thoại ngoài thông số megapixel.",
      content: `
        <p><strong>Điện thoại chụp ảnh đẹp cần cảm biến tốt, chống rung và phần mềm xử lý ảnh hiệu quả.</strong></p>
        <h2>Không nên chỉ nhìn megapixel</h2>
        <ul>
          <li>Cảm biến lớn giúp thu sáng tốt hơn.</li>
          <li>Chống rung giúp ảnh và video ổn định.</li>
          <li>Camera góc rộng phù hợp chụp phong cảnh.</li>
          <li>Khả năng chụp đêm phụ thuộc nhiều vào phần mềm.</li>
        </ul>
        <table>
          <tr><th>Nhu cầu</th><th>Nên ưu tiên</th></tr>
          <tr><td>Chụp người</td><td>Camera chính và xử lý màu da</td></tr>
          <tr><td>Phong cảnh</td><td>Camera góc siêu rộng</td></tr>
          <tr><td>Quay video</td><td>Chống rung và quay 4K</td></tr>
        </table>
        <p><a class="btn btn-primary" href="finder.html">Tìm máy chụp ảnh tốt</a></p>
      `
    },

    gaming: {
      title: "Điện thoại nào chơi game tốt?",
      description: "Những thông số quan trọng khi chọn điện thoại gaming.",
      content: `
        <p><strong>Điện thoại chơi game tốt cần chip mạnh, GPU tốt, màn hình 120Hz, pin lớn và tản nhiệt hiệu quả.</strong></p>
        <h2>Thông số quan trọng</h2>
        <ul>
          <li>Chipset mạnh để giữ tốc độ khung hình ổn định.</li>
          <li>RAM từ 8GB cho game nặng.</li>
          <li>Màn hình 120Hz cho thao tác mượt.</li>
          <li>Tản nhiệt tốt khi chơi lâu.</li>
        </ul>
        <table>
          <tr><th>Yếu tố</th><th>Lợi ích</th></tr>
          <tr><td>GPU mạnh</td><td>Tăng chất lượng đồ họa</td></tr>
          <tr><td>Pin lớn</td><td>Chơi lâu hơn</td></tr>
          <tr><td>Sạc nhanh</td><td>Giảm thời gian chờ</td></tr>
        </table>
        <p><a class="btn btn-primary" href="finder.html">Tìm điện thoại gaming</a></p>
      `
    },

    "iphone-vs-samsung": {
      title: "Nên mua iPhone hay Samsung?",
      description: "So sánh iPhone và Samsung theo hệ điều hành, camera và hệ sinh thái.",
      content: `
        <p><strong>iPhone phù hợp với người thích iOS và hệ sinh thái Apple; Samsung phù hợp với người muốn Android linh hoạt.</strong></p>
        <table>
          <tr><th>Tiêu chí</th><th>iPhone</th><th>Samsung</th></tr>
          <tr><td>Hệ điều hành</td><td>iOS ổn định</td><td>Android linh hoạt</td></tr>
          <tr><td>Hệ sinh thái</td><td>Mac, iPad, Apple Watch</td><td>Galaxy, Windows, Tab</td></tr>
          <tr><td>Tùy biến</td><td>Ít tùy biến</td><td>Nhiều tùy biến</td></tr>
          <tr><td>Camera</td><td>Video ổn định</td><td>Nhiều tiêu cự, zoom linh hoạt</td></tr>
        </table>
        <p>Hãy chọn hệ sinh thái phù hợp với các thiết bị bạn đang sử dụng.</p>
        <p><a class="btn btn-primary" href="compare.html">Mở trang so sánh</a></p>
      `
    },

    storage: {
      title: "Nên chọn 128GB hay 256GB?",
      description: "Hướng dẫn chọn dung lượng bộ nhớ phù hợp.",
      content: `
        <p><strong>128GB phù hợp nhu cầu cơ bản; 256GB phù hợp nếu thường quay video, chơi game hoặc muốn dùng lâu dài.</strong></p>
        <table>
          <tr><th>Dung lượng</th><th>Phù hợp với</th></tr>
          <tr><td>128GB</td><td>Ứng dụng, ảnh và nhu cầu cơ bản</td></tr>
          <tr><td>256GB</td><td>Video, game và lưu nhiều ảnh</td></tr>
          <tr><td>512GB</td><td>Nhu cầu lưu trữ chuyên sâu</td></tr>
        </table>
        <ul>
          <li>Game hiện đại có thể chiếm nhiều GB.</li>
          <li>Video 4K làm đầy bộ nhớ nhanh.</li>
          <li>Nếu dùng lâu dài, 256GB là lựa chọn an toàn hơn.</li>
        </ul>
      `
    },

    battery: {
      title: "Điện thoại nào có pin tốt?",
      description: "Các yếu tố ảnh hưởng đến thời lượng pin thực tế.",
      content: `
        <p><strong>Điện thoại pin tốt cần dung lượng pin lớn, chip tiết kiệm điện, màn hình hiệu quả và sạc nhanh.</strong></p>
        <h2>Cách đánh giá pin</h2>
        <ul>
          <li>Pin khoảng 5.000mAh phù hợp nhu cầu dùng cả ngày.</li>
          <li>Chip tiết kiệm điện giúp kéo dài thời lượng.</li>
          <li>Màn hình thích ứng giúp giảm tiêu thụ pin.</li>
          <li>Sạc nhanh hữu ích khi cần nạp pin gấp.</li>
        </ul>
        <table>
          <tr><th>Nhu cầu</th><th>Nên chọn</th></tr>
          <tr><td>Dùng cơ bản</td><td>Pin từ 4.500mAh</td></tr>
          <tr><td>Di chuyển nhiều</td><td>Pin từ 5.000mAh</td></tr>
          <tr><td>Chơi game</td><td>Pin lớn, tản nhiệt, sạc nhanh</td></tr>
        </table>
        <p><a class="btn btn-primary" href="finder.html">Tìm máy pin tốt</a></p>
      `
    },

    "how-to-choose": {
      title: "Cách chọn điện thoại phù hợp",
      description: "Hướng dẫn chọn điện thoại theo ngân sách và nhu cầu.",
      content: `
        <p><strong>Hãy xác định ngân sách trước, sau đó ưu tiên nhu cầu chính như camera, gaming, pin, học tập hoặc công việc.</strong></p>
        <h2>Quy trình chọn điện thoại</h2>
        <ol>
          <li>Xác định ngân sách tối đa.</li>
          <li>Chọn nhu cầu sử dụng chính.</li>
          <li>So sánh chip, màn hình, camera và pin.</li>
          <li>Kiểm tra bộ nhớ, bảo hành và nguồn gốc.</li>
        </ol>
        <table>
          <tr><th>Nhu cầu</th><th>Tiêu chí ưu tiên</th></tr>
          <tr><td>Sinh viên</td><td>Giá, pin, hiệu năng</td></tr>
          <tr><td>Chụp ảnh</td><td>Cảm biến, chống rung</td></tr>
          <tr><td>Gaming</td><td>Chip, GPU, tản nhiệt</td></tr>
          <tr><td>Dùng lâu dài</td><td>Bộ nhớ, cập nhật phần mềm</td></tr>
        </table>
        <p><a class="btn btn-primary" href="finder.html">Tìm điện thoại phù hợp</a></p>
      `
    }
  };

  const currentFile = location.pathname.split("/").pop().toLowerCase();
  const detailBox = document.getElementById("guideContent");

  if (detailBox) {
    const params = new URLSearchParams(location.search);
    const requestedId = params.get("id") || params.get("topic") || "how-to-choose";
    const guide = guides[requestedId] || guides["how-to-choose"];

    document.title = `${guide.title} | PhoneMatch`;

    detailBox.innerHTML = `
      <section class="page-hero">
        <span class="eyebrow">GEO Guide</span>
        <h1>${guide.title}</h1>
        <p>${guide.description}</p>
      </section>

      <section class="section guide-body">
        ${guide.content}
        <p>
          <a class="btn btn-primary" href="guides.html">Xem các bài khác</a>
        </p>
      </section>
    `;

    return;
  }

  if (currentFile === "guides.html") {
    const listBox =
      document.getElementById("guideContainer") ||
      document.querySelector("main .section .container");

    if (!listBox) return;

    listBox.innerHTML = `
      <div class="guide-grid">
        ${Object.entries(guides).map(([id, guide]) => `
          <article class="guide-card">
            <div class="guide-content">
              <span class="guide-label">GEO Guide</span>
              <h2>${guide.title}</h2>
              <p>${guide.description}</p>
              <a class="btn btn-primary" href="guide.html?id=${id}">
                Đọc bài viết
              </a>
            </div>
          </article>
        `).join("")}
      </div>
    `;
  }
});