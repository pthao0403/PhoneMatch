// PhoneMatch - verified product dataset
// Specs are taken from official manufacturer pages.
// Prices marked 'Giá tham khảo' should be updated from a Vietnamese retailer at demo/report time.

const products = [
  {
    "id": "iphone-17",
    "name": "iPhone 17",
    "brand": "Apple",
    "price": "Từ 24.999.000đ",
    "ram": "8GB",
    "storage": "256GB / 512GB",
    "chip": "Apple A19",
    "display": "6.3” OLED, ProMotion 120Hz",
    "camera": "48MP Fusion + 48MP Fusion Ultra Wide",
    "battery": "Xem video tối đa 30 giờ",
    "charging": "USB-C",
    "os": "iOS",
    "needs": [
      "camera",
      "daily",
      "student"
    ],
    "source": "Apple Việt Nam",
    "sourceUrl": "https://www.apple.com/vn/iphone-17/specs/",
    "description": "iPhone 17 hướng tới người dùng cần một máy cao cấp, màn hình 120Hz và hệ sinh thái iOS."
  },
  {
    "id": "galaxy-s26",
    "name": "Samsung Galaxy S26",
    "brand": "Samsung",
    "price": "Giá tham khảo",
    "ram": "12GB",
    "storage": "256GB / 512GB",
    "chip": "Snapdragon 8 Elite Gen 5 for Galaxy",
    "display": "6.3” Dynamic AMOLED 2X",
    "camera": "50MP + 12MP Ultra Wide + 10MP Tele",
    "battery": "4300mAh",
    "charging": "Sạc nhanh có dây / không dây",
    "os": "Android / One UI",
    "needs": [
      "camera",
      "gaming",
      "daily"
    ],
    "source": "Samsung Việt Nam",
    "sourceUrl": "https://www.samsung.com/vn/smartphones/galaxy-s26/specs/",
    "description": "Galaxy S26 là smartphone flagship nhỏ gọn với camera đa tiêu cự, 12GB RAM và pin 4300mAh."
  },
  {
    "id": "galaxy-s26-ultra",
    "name": "Samsung Galaxy S26 Ultra",
    "brand": "Samsung",
    "price": "Giá tham khảo",
    "ram": "12GB",
    "storage": "256GB / 512GB / 1TB",
    "chip": "Snapdragon 8 Elite Gen 5 for Galaxy",
    "display": "6.9” Dynamic AMOLED 2X",
    "camera": "200MP Wide + 50MP Ultra Wide + Tele",
    "battery": "5000mAh",
    "charging": "Sạc nhanh có dây / không dây",
    "os": "Android / One UI",
    "needs": [
      "camera",
      "gaming",
      "power"
    ],
    "source": "Samsung Việt Nam",
    "sourceUrl": "https://www.samsung.com/vn/smartphones/galaxy-s26/",
    "description": "Galaxy S26 Ultra tập trung vào camera, màn hình lớn, hiệu năng flagship và nhu cầu sử dụng chuyên sâu."
  },
  {
    "id": "xiaomi-15",
    "name": "Xiaomi 15",
    "brand": "Xiaomi",
    "price": "Giá tham khảo",
    "ram": "12GB",
    "storage": "512GB",
    "chip": "Snapdragon 8 Elite",
    "display": "6.36” CrystalRes AMOLED, 1–120Hz",
    "camera": "Hệ thống camera Leica",
    "battery": "5240mAh",
    "charging": "HyperCharge 90W, không dây 50W",
    "os": "Xiaomi HyperOS",
    "needs": [
      "camera",
      "gaming",
      "power"
    ],
    "source": "Xiaomi Việt Nam",
    "sourceUrl": "https://www.mi.com/vn/product/xiaomi-15/specs/",
    "description": "Xiaomi 15 kết hợp thiết kế nhỏ gọn với Snapdragon 8 Elite, 12GB RAM, 512GB và sạc 90W."
  },
  {
    "id": "xiaomi-15t",
    "name": "Xiaomi 15T",
    "brand": "Xiaomi",
    "price": "Giá tham khảo",
    "ram": "12GB",
    "storage": "256GB / 512GB",
    "chip": "MediaTek Dimensity 8400-Ultra",
    "display": "6.83” AMOLED, 120Hz",
    "camera": "Hệ thống camera đa tiêu cự",
    "battery": "Pin dung lượng lớn",
    "charging": "Sạc nhanh HyperCharge",
    "os": "Xiaomi HyperOS",
    "needs": [
      "gaming",
      "daily",
      "power"
    ],
    "source": "Xiaomi Việt Nam",
    "sourceUrl": "https://www.mi.com/vn/product/xiaomi-15t/specs/",
    "description": "Xiaomi 15T có màn hình lớn 120Hz, 12GB RAM và chip Dimensity 8400-Ultra."
  },
  {
    "id": "oppo-reno13",
    "name": "OPPO Reno13 5G",
    "brand": "OPPO",
    "price": "Giá tham khảo",
    "ram": "12GB",
    "storage": "256GB / 512GB",
    "chip": "MediaTek Dimensity 8350",
    "display": "6.59” AMOLED, 120Hz",
    "camera": "50MP chính + 8MP Ultra Wide + 2MP Mono; selfie 50MP",
    "battery": "5600mAh",
    "charging": "80W SUPERVOOC",
    "os": "ColorOS 15",
    "needs": [
      "camera",
      "student",
      "daily"
    ],
    "source": "OPPO Việt Nam",
    "sourceUrl": "https://www.oppo.com/vn/smartphones/series-reno/reno13/specs/",
    "description": "Reno13 5G thiên về camera, thiết kế mỏng nhẹ, pin 5600mAh và sạc nhanh 80W."
  },
  {
    "id": "oppo-reno13-f",
    "name": "OPPO Reno13 F 4G",
    "brand": "OPPO",
    "price": "Giá tham khảo",
    "ram": "8GB / 12GB tùy phiên bản",
    "storage": "256GB / 512GB tùy phiên bản",
    "chip": "Qualcomm Snapdragon 6 Gen 1",
    "display": "6.67” AMOLED, 120Hz",
    "camera": "Camera chính độ phân giải cao + camera góc siêu rộng",
    "battery": "5800mAh",
    "charging": "45W SUPERVOOC",
    "os": "ColorOS",
    "needs": [
      "student",
      "daily",
      "battery"
    ],
    "source": "OPPO Việt Nam",
    "sourceUrl": "https://www.oppo.com/vn/smartphones/series-reno/reno13-f-4g/",
    "description": "Reno13 F 4G tập trung vào thời lượng pin, màn hình 120Hz và nhu cầu sử dụng hằng ngày."
  }
];
const productImages = {
  "iphone-17": "asset/iphone17.jpg",
  "galaxy-s26": "asset/galaxys26.jpg",
  "galaxy-s26-ultra": "asset/Galaxy-S26-Ultra.jpg",
  "xiaomi-15": "asset/xiaomi15.jpg",
  "xiaomi-15t": "asset/xiaomi-15t.jpg",
  "oppo-reno13": "asset/oppo reno13.jpg",
  "oppo-reno13-f": asset/opporeno13f.jpg"
};
products.forEach(product => {
  product.image = productImages[product.id] ||
    "https://placehold.co/600x700/f1f5f9/334155?text=Phone";
});

window.PhoneMatchData = products;
window.products = products;
