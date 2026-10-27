const products = document.getElementById("products");
const addButton = document.getElementById("addProduct");
const invoice = document.getElementById("invoice");
const couponInput = document.getElementById("coupon");
const hasCoupon = document.getElementById("hasCoupon");
const createButton = document.getElementById("createInvoice");
const closeBorderButton = document.getElementById("closeBorder");

let increased = false;


function addProduct() {
  const row = document.createElement("div");
  row.className = "flex gap-2";

  row.innerHTML = `
    <input type="text" placeholder="اسم المنتج"
      class="product-name w-1/2 rounded-lg border p-3">

    <input type="number" placeholder="السعر" min="0" step="0.01"
      class="product-price w-1/2 rounded-lg border p-3">
  `;

  products.appendChild(row);
}


function createInvoice() {
  const rows = products.querySelectorAll("div");
  let total = 0;
  let itemsHTML = "";

  for (const row of rows) {
    const name = row.querySelector(".product-name").value.trim();
    const priceInput = row.querySelector(".product-price");
    const price = Number(priceInput.value);

    if (
      name === "" ||
      priceInput.value.trim() === "" ||
      !Number.isFinite(price) ||
      price < 0
    ) {
      invoice.textContent = "أدخلي اسم وسعر كل منتج بشكل صحيح.";
      return;
    }

    total += price;

    const item = document.createElement("p");
    item.className = "flex justify-between gap-3";
    item.textContent = `${name} — ${price.toFixed(2)}`;
    itemsHTML += item.outerHTML;
  }

  if (rows.length === 0) {
    invoice.textContent = "أضيفي منتجًا أولًا.";
    return;
  }

  const validCoupon =
    hasCoupon.checked &&
    couponInput.value.trim().toUpperCase() === "ABC123";

  const discount = validCoupon ? total * 0.20 : 0;
  const afterDiscount = total - discount;


  const finalTotal = increased
    ? afterDiscount * 1.5
    : afterDiscount;

  const increaseAmount = finalTotal - afterDiscount;

  invoice.innerHTML = `
    <h2 class="text-lg font-bold">تفاصيل الفاتورة</h2>

    <div class="space-y-2">${itemsHTML}</div>

    <hr>

    <p class="flex justify-between">
      <span>المجموع الأصلي:</span>
      <strong>${total.toFixed(2)}</strong>
    </p>

    <p class="flex justify-between text-emerald-600">
      <span>الخصم:</span>
      <strong>${discount.toFixed(2)}</strong>
    </p>

    <p class="flex justify-between">
      <span>زيادة سكر المعبر:</span>
      <strong>${increaseAmount.toFixed(2)}</strong>
    </p>

    <p class="flex justify-between text-xl font-bold text-blue-700">
      <span>الإجمالي النهائي:</span>
      <strong>${finalTotal.toFixed(2)}</strong>
    </p>

    ${
      hasCoupon.checked && !validCoupon
        ? '<p class="text-rose-600">كود الخصم غير صحيح.</p>'
        : validCoupon
          ? '<p class="text-emerald-600">تم تطبيق خصم 20%!</p>'
          : ""
    }
  `;

  closeBorderButton.textContent = increased
    ? "إلغاء زيادة سكر المعبر"
    : "سكر المعبر × 150%";
}


addButton.addEventListener("click", addProduct);
createButton.addEventListener("click", createInvoice);

closeBorderButton.addEventListener("click", () => {
  increased = !increased;
  createInvoice();
});


addProduct();