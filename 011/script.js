let expHtml = `<div id="ca-ftsm-011"> <div class="ca-ftsm-011__img-wrapper"> <img src="https://cdn11.bigcommerce.com/s-costxe5lpb/images/stencil/960w/products/121/453/couple-s-special-1-month-supply__44200.1694802105.jpg?c=2" alt="Couple's Special - 1 Month Supply" class="ca-ftsm-011__img"> <div class="ca-ftsm-011-content-price--mobile"> <s>[price-original]</s> <b>[price-discounted]</b> </div> </div> <div class="ca-ftsm-011-content-wrapper"> <div class="ca-ftsm-011-content"> <div class="ca-ftsm-011-content-price"> <s>[price-original]</s> <b>[price-discounted]</b> </div> <span>Our most popular option:</span> <strong>The Couple's Special</strong> </div> <a href="/cart.php?action=add&sku=FS-CS1">Add To Cart</a> </div> </div>`;

const expCss = `@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap'); #ca-ftsm-011 { display: flex; align-items: center; gap: 8px; background: #EBF4FF; border-radius: 20px; border: 1px solid #75BAEB; padding: 16px; margin-bottom: 40px; } #ca-ftsm-011 .ca-ftsm-011__img { max-width: 115px; } #ca-ftsm-011 .ca-ftsm-011-content-wrapper { width: 100%; display: flex; align-items: center; } #ca-ftsm-011 .ca-ftsm-011-content { display: flex; flex-direction: column; } #ca-ftsm-011 s { font: 400 12px/16px "Jost", sans-serif; color: #868686; } #ca-ftsm-011 b { font: 700 12px/16px "Jost", sans-serif; color: #642A75; } #ca-ftsm-011 .ca-ftsm-011-content-price--mobile { display: none; flex-direction: column; align-items: center; gap: 4px; } #ca-ftsm-011 .ca-ftsm-011-content span { font: 400 20px/28px "Jost", sans-serif; color: #221D23; } #ca-ftsm-011 .ca-ftsm-011-content strong { font: 600 20px/28px "Jost", sans-serif; color: #221D23; } #ca-ftsm-011 a { font: 500 16px/24px "Jost", sans-serif; color: #fff; text-align: center; text-decoration: none; background-color: #642A75; border-radius: 35px; padding: 12px 32px; margin-left: auto; } @media screen and (max-width: 576px) { #ca-ftsm-011 .ca-ftsm-011-content-wrapper { flex-direction: column; align-items: flex-start; gap: 12px; } #ca-ftsm-011 a { width: 100%; margin-left: unset; } #ca-ftsm-011 .ca-ftsm-011-content-price { display: none; } #ca-ftsm-011 .ca-ftsm-011-content-price--mobile { display: flex; } }`;

const timeout = 5000;
const interval = 250;

const maxExecN = timeout / interval;
let currentExecN = 0;

const expInterval = setInterval(function () {
  const cartContentContainer = document.querySelector(".cart-content-container");
  const productGrid = document.querySelectorAll(".productGrid .product");

  if (cartContentContainer && productGrid.length > 0) {
    let priceOriginal = "US $115.52";
    let priceDiscounted = "US $103.97";

    const coupleSpecialItem = [...productGrid].find(
      (item) => item.querySelector(".card-title").innerText.trim() === "Couple's Special - 1 Month Supply"
    );
    if (coupleSpecialItem) {
      priceOriginal = coupleSpecialItem.querySelector(".price-section .price--rrp").innerText;
      priceDiscounted = coupleSpecialItem.querySelector(".price-section .price--rrp + .price").innerText;
    }

    expHtml = expHtml.replaceAll("[price-original]", priceOriginal).replaceAll("[price-discounted]", priceDiscounted);

    cartContentContainer.insertAdjacentHTML("beforebegin", expHtml);

    const style = document.createElement("style");
    style.innerHTML = expCss;
    document.head.append(style);
    clearInterval(expInterval);
  }

  currentExecN++;
  if (currentExecN > maxExecN) clearInterval(expInterval);
}, interval);
