// FTSM-001
if (window.location.pathname === "/fertilitysmart-conceive-for-women/") {
  window.localStorage.setItem("ca_ftsm_007_top_of_funnel", "1");

  window.location.href = "/concieve-for-women-2023/";
}

// FTSM-003
if (window.location.pathname === "/fertilitysmart-conceive-for-men/") {
  window.localStorage.setItem("ca_ftsm_007_top_of_funnel", "1");

  window.location.href = "/fertilitysmart-conceive-for-men-2023/";
}

// FTSM-007
if (window.location.pathname === "/") {
  const timeout = 5000;
  const interval = 250;

  const maxExecN = timeout / interval;
  let currentExecN = 0;

  const expHtml = `<div id="ca-ftsm-002"> <div class="hero"> <div class="ca-ftsm-002-container"> <h1 class="hero__heading">Boost Your Fertility Naturally</h1> <h2 class="hero__subheading">with Our Award-Winning Supplements for Women's and Men's Reproductive Health</h2> <div class="hero__cta-wrapper"> <a href="/fertilitysmart-conceive-for-women" class="hero__cta hero__cta--purple">Shop Women's Supplements</a> <a href="/fertilitysmart-conceive-for-men" class="hero__cta hero__cta--blue">Shop Men's Supplements</a> </div> <div class="review-content review-content--desktop"> <p class="content__p">“Miracle in a bottle”</p> <div class="content-inner"> <span class="content__span">- Colette</span> <ul class="content__stars"> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> </ul> </div> </div> </div> </div> <div class="review"> <div class="ca-ftsm-002-container-fluid"> <div class="review-trust"> <img src="https://conversionadvocates.com/exp-images/ftsm/002/trust.svg" alt="Trusted by tens of thousands of couples since 2007. With over 95% positive ratings" class="trust__img"> <p class="trust__p">Trusted by tens of thousands of couples since 2007. With over 95% positive ratings</p> </div> <div class="review-content"> <ul class="content__stars"> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> <li class="content__stars-item"><img src="https://conversionadvocates.com/exp-images/ftsm/002/star.svg" alt="Star"></li> </ul> <p class="content__p">“Miracle in a bottle”</p> <span class="content__span">- Colette</span> </div> </div> </div> </div>`;
  const expCss =
    '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Jost:wght@400;500;600&display=swap"); [data-content-region="home_below_menu"] + .container, [data-content-region="home_below_carousel"] { display: none; } #ca-ftsm-002 .hero { text-align: center; background-image: url(https://conversionadvocates.com/exp-images/ftsm/002/hero.jpg); background-color: #d565a1; background-size: contain; background-repeat: no-repeat; background-position: center bottom; padding: 36px 26px 260px; position: relative; } #ca-ftsm-002 .hero::after { content: ""; width: 141px; height: 173px; background-image: url(https://conversionadvocates.com/exp-images/ftsm/002/bottle.png); background-size: contain; position: absolute; left: 16px; bottom: -40px; } #ca-ftsm-002 .hero .ca-ftsm-002-container { max-width: 290px; margin: 0 auto; position: relative; } #ca-ftsm-002 .hero__heading { font: 500 34px/44px "Jost", sans-serif; color: #fff; margin: 0 auto 4px; } #ca-ftsm-002 .hero__subheading { font: 400 14px/17px "Inter", sans-serif; color: #fff; margin-top: 0; margin-bottom: 20px; } #ca-ftsm-002 .hero__cta { width: 264px; height: 46px; display: flex; justify-content: center; align-items: center; font: 400 16px/24px "Jost", sans-serif; color: #fff; text-decoration: none; border-radius: 45px; margin: 0 auto; } #ca-ftsm-002 .hero__cta:not(:last-of-type) { margin-bottom: 12px; } #ca-ftsm-002 .hero__cta--purple { background-color: #642a75; } #ca-ftsm-002 .hero__cta--blue { background-color: #2975ab; } #ca-ftsm-002 .review { background-color: #f5ebef; padding: 50px 16px 28px; } #ca-ftsm-002 .review-trust { display: flex; justify-content: center; align-items: center; margin-bottom: 21px; } #ca-ftsm-002 .review-trust .trust__img { margin-right: 20px; } #ca-ftsm-002 .review-trust .trust__p { max-width: 350px; font: 400 16px/22px "Jost", sans-serif; color: #221d23; margin-bottom: 0; } #ca-ftsm-002 .review-content { display: flex; flex-direction: column; align-items: center; background-color: #642a75; border-radius: 20px 20px 0px 20px; padding: 24px 0 18px; } #ca-ftsm-002 .review-content .content__stars { display: flex; margin: 0; list-style: none; } #ca-ftsm-002 .review-content .content__stars-item { width: 16px; height: 16px; margin-right: 4px; } #ca-ftsm-002 .review-content .content__stars-item img { width: 100%; height: 100%; object-fit: contain; object-position: center; } #ca-ftsm-002 .review-content .content__p, #ca-ftsm-002 .review-content .content__span { font-size: 16px; line-height: 22px; font-family: "Jost", sans-serif; color: #fff; } #ca-ftsm-002 .review-content .content__p { margin: 4px 0 2px; font-weight: 600; } #ca-ftsm-002 .review-content .content__span { font-weight: 400; } #ca-ftsm-002 .review-content--desktop { width: 285px; display: none; border-radius: 60px 60px 60px 0; position: absolute; top: -3rem; right: 6rem; } #ca-ftsm-002 .review-content--desktop .content__p { font-size: 20px; line-height: 28px; margin-bottom: 8px; } #ca-ftsm-002 .review-content--desktop .content-inner { display: flex; } #ca-ftsm-002 .review-content--desktop .content__span { display: inline-block; margin-right: 8px; } @media only screen and (min-width: 390px) { #ca-ftsm-002 .hero { padding-bottom: 320px; } } @media only screen and (min-width: 425px) { #ca-ftsm-002 .hero { padding-bottom: 420px; } } @media only screen and (min-width: 576px) { #ca-ftsm-002 .hero { background-position-y: calc(100% + 150px); } } @media only screen and (min-width: 768px) { #ca-ftsm-002 .hero { text-align: left; background-image: url(https://conversionadvocates.com/exp-images/ftsm/002/hero-desktop.jpg); background-position: center; background-size: auto 100%; padding: 60px 0 156px; } #ca-ftsm-002 .hero::after { width: 220px; height: 270px; left: unset; right: 6rem; background-size: cover; } #ca-ftsm-002 .hero .ca-ftsm-002-container { max-width: calc(1440px + 12rem); padding: 0 6rem; } #ca-ftsm-002 .hero__heading { max-width: 450px; font-size: 56px; line-height: 72px; margin-left: 0; } #ca-ftsm-002 .hero__subheading { max-width: 450px; font-size: 16px; line-height: 22px; margin-bottom: 32px; } #ca-ftsm-002 .hero__cta { margin-left: 0; } #ca-ftsm-002 .review { padding: 3rem 6rem 1rem; } #ca-ftsm-002 .review-trust { justify-content: flex-start; margin-bottom: 0; } #ca-ftsm-002 .review-trust .trust__p { max-width: unset; font-size: 20px; line-height: 28px; } #ca-ftsm-002 .review-content { display: none; } #ca-ftsm-002 .review-content--desktop { display: flex; } } @media only screen and (min-width: 900px) { #ca-ftsm-002 .hero::after { width: 307px; height: 376px; } } @media only screen and (min-width: 1000px) { #ca-ftsm-002 .hero__cta-wrapper { display: flex; } #ca-ftsm-002 .hero__cta.hero__cta--purple { margin-right: 12px; margin-bottom: 0; } } @media only screen and (min-width: 1200px) { #ca-ftsm-002 .review { padding-top: 1rem; } }';

  const expInterval = setInterval(function () {
    const homeBelowCarousel = document.querySelector("[data-content-region='home_below_carousel']");
    if (homeBelowCarousel) {
      homeBelowCarousel.insertAdjacentHTML("afterend", expHtml);

      const style = document.createElement("style");
      style.innerHTML = expCss;
      document.head.append(style);

      window.localStorage.setItem("ca_ftsm_007_top_of_funnel", "1");

      clearInterval(expInterval);
    }

    currentExecN++;
    if (currentExecN > maxExecN) clearInterval(expInterval);
  }, interval);
}

// FTSM-005
setTimeout(() => {
  if (window.location.pathname === "/cart.php") {
    console.log(
      "[cart.php]-2",
      window.localStorage.getItem("ca_ftsm_007_top_of_funnel"),
      window.localStorage.getItem("ca_ftsm_007_top_of_funnel") === "1"
    );
    waitForElm(".productGrid").then(() => {
      console.log("[exec]")
      if (window.localStorage.getItem("ca_ftsm_007_top_of_funnel") === "1") {
        (function () {
          "use strict";
          try {
            if (typeof document != "undefined") {
              var t = document.createElement("style");
              (t.id = "ca__styles_ftsm_005_redesign_cart_for_conversion"),
                t.appendChild(
                  document.createTextNode(
                    '.ca_ftsm_005_hero{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3.75rem}.ca_ftsm_005_products{flex:1;width:100%;padding:0;margin-right:1.75rem}.ca_ftsm_005_checkout_ctn{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:2.5rem;background:#f5ebef;border-radius:20px;color:#221d23}.ca_ftsm_005_checkout_ctn .cart-content-totals,.ca_ftsm_005_checkout_ctn .cart-content-actions{width:100%;padding:0}.ca_ftsm_005_order_summary_heading{margin:0;margin-bottom:1rem;color:#642a75}.ca_ftsm_005_checkout_ctn .cart-content-actions .button{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px 32px;gap:4px;background:#642a75;border-radius:35px}.ca_ftsm_005_checkout_ctn .cart-total-label,.ca_ftsm_005_checkout_ctn .cart-total-value,.ca_ftsm_005_checkout_ctn .coupon-code-add{color:#221d23}.ca_ftsm_005_checkout_ctn .product-shipping a,.ca_ftsm_005_checkout_ctn .product-shipping a:hover,.ca_ftsm_005_checkout_ctn .product-shipping span,.ca_ftsm_005_checkout_ctn .product-shipping .header-bar-icon .icon svg,.ca_ftsm_005_checkout_ctn .cart-total-grandTotal{color:#642a75;fill:#642a75}.ca_ftsm_005_checkout_ctn .cart-total-grandTotal{font-style:normal;font-weight:600;font-size:20px;color:#642a75}.ca_ftsm_005_checkout_ctn .cart-total-finaltotal{border-top:1px solid rgba(100,42,117,.4)}.ca_ftsm_005_checkout_ctn .cart-content-actions{display:flex;flex-direction:column}.ca_ftsm_005_checkout_ctn .product-shipping{order:1}.ca_ftsm_005_products .cart-header{display:none}.ca_ftsm_005_products .cart-list{border-top:none;display:flex;flex-direction:column}.ca_ftsm_005_products .cart-item{padding:1.25rem 0;display:grid;grid-template-columns:120px auto 4rem 10rem 8rem;align-items:center;flex:1}.ca_ftsm_005_products .cart-item .cart-item-block{width:100%;margin:0;height:120px;display:flex;align-items:center;justify-content:center}.ca_ftsm_005_products .cart-item .cart-item-info .cart-remove-alt{width:20px;height:20px;margin:0;padding:0;margin-left:1rem;background:transparent}.ca_ftsm_005_products .cart-item .form-increment{display:flex;flex-direction:row;justify-content:center;align-items:center;height:2.875rem;margin:0;padding:0 16px;border:1px solid #221d23;border-radius:2rem}.ca_ftsm_005_products .cart-item .form-increment .button--icon{border:none;display:flex;align-items:center;justify-content:center;padding-top:0;width:18px;height:18px}.ca_ftsm_005_products .cart-item .cart-item-title{padding:1.5rem 0;justify-content:flex-start;margin-left:3rem}.ca_ftsm_005_products .cart-item .cart-item-title .cart-item-name__label{color:#221d23}.ca_ftsm_005_products .cart-item .cart-item-image{height:100%;max-height:100%}.ca_ftsm_005_cart_below_table .productGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;border:none}.ca_ftsm_005_cart_below_table .productGrid .product{display:flex;flex-direction:column;align-items:center;padding:24px 20px;gap:8px;background:#ebf4ff;border-radius:4px;border:none}.ca_ftsm_005_cart_below_table .productGrid .product .card-figure{padding:0;background:#ebf4ff;width:66.6%;margin:auto}.ca_ftsm_005_cart_below_table .productGrid .product .card-figure a{position:relative}.ca_ftsm_005_cart_below_table .productGrid .product .card-figure a:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border:3px solid #ebf4ff;z-index:1}.ca_ftsm_005_cart_below_table .productGrid .product .card-text a{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px 24px;gap:10px;max-width:200px;height:48px;background:#642a75;border-radius:45px;margin:auto;margin-top:.5rem;margin-bottom:1rem}.ca_ftsm_005_wrapper_overview{display:flex;flex-direction:column;max-width:385px}.ca_ftsm_005_review_element{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding:2.5rem;background:#f5ebef;border-radius:20px;color:#221d23;margin-top:1rem}.ca_ftsm_005_review_stars{margin-bottom:.75rem}.ca_ftsm_005_review_footer{display:flex;align-items:center}.ca_ftsm_005_review_name{font-weight:700;margin-right:.5rem}.ca_ftsm_005_review_badge{display:flex;align-items:center;padding:2px 6px;gap:2px;height:20px;background:#58bc82;color:#fff;border-radius:3px;text-transform:uppercase;font-weight:500;font-size:12px;line-height:16px}.ca_ftsm_005_testimonials{display:flex;align-items:center;padding:5rem;justify-content:center}.ca_ftsm_005_testimonials .footer-cta{background:#642a75;max-width:460px}.ca_ftsm_005_testimonials .footer-cta .container{background:#642a75;color:#fff;padding:0}.ca_ftsm_005_testimonials .footer-cta h2{font-style:normal;font-weight:500;font-size:34px;line-height:130%;color:#fff;border-bottom:0;padding:0;text-align:left}.ca_ftsm_005_testimonials .footer-cta p{font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#fff;text-align:left}.ca_ftsm_005_testimonials .footer-cta .button{display:flex;flex-direction:row;align-items:center;padding:12px 32px;gap:10px;width:214px;height:48px;color:#e46198;border:1px solid #e46198;border-radius:35px}.ca_ftsm_005_testimonials .footer-newsletter-col{display:flex;flex-direction:column;background:#f5ebef;border-radius:0 60px 60px;padding:28px 16px;margin-left:1rem}.ca_ftsm_005_testimonials .container .footer-newsletter-col{padding:3rem;max-width:568px}.ca_ftsm_005_testimonials .newsletter-heading{font-style:normal;font-weight:500;font-size:34px;line-height:130%;color:#642a75;margin-bottom:1rem;text-align:left}.ca_ftsm_005_testimonials .newsletter-subtext{font-style:normal;font-weight:400;font-size:16px;line-height:22px;color:#642a75;text-align:left}.ca_ftsm_005_testimonials .form-prefixPostfix{display:flex;flex-direction:row;align-items:center;padding:6px 6px 6px 20px;max-width:480px;height:58px;background:#ffffff;border-radius:35px}.ca_ftsm_005_testimonials.footer-newsletter .form-input{font-weight:500;font-size:16px;line-height:24px;border:none}.ca_ftsm_005_testimonials .form-prefixPostfix .button{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px 36px;margin-top:0;width:140px;height:46px;color:#fff;background:#642a75;border-radius:45px}.ca_ftsm_005_testimonials_decoration_first{width:110px;height:155px;background:#e597c0;border-radius:60px 0 60px 60px;transform:scaleX(-1);margin-bottom:1rem}.ca_ftsm_005_testimonials_decoration_second{width:110px;height:110px;background:#f5ebef;border-radius:100%}.ca_ftsm_005_testimonials>.container{margin:0;padding:0;max-width:700px}.ca_ftsm_005_upgrade_cta{display:none;flex-direction:row;justify-content:center;align-items:flex-start;padding:12px;height:46px;font-style:normal;font-weight:700;font-size:16px;line-height:22px;color:#fff;text-decoration:none;background:#e46198;border-radius:35px;margin-bottom:1rem;cursor:pointer}.ca_ftsm_005_upgrade_cta_show{display:flex}.ca_ftsm_005_upgrade_cta:hover,.ca_ftsm_005_upgrade_cta:focus,.ca_ftsm_005_upgrade_cta:active{outline:none;color:#fff}.ca_ftsm_005_products .cart-item-block .button--icon[data-action=dec]:after{content:"\\2014";width:16px;height:16px;font-size:16px}.ca_ftsm_005_products .cart-item-block .button--icon[data-action=inc]:after{content:"+";width:16px;height:16px;font-size:22px}.ca_ftsm_005_products .cart-item-quantity .button--icon .icon{display:none}@media screen and (max-width: 1439px){.ca_ftsm_005_testimonials_decoration{display:none}}@media screen and (max-width: 1199px){.ca_ftsm_005_hero{flex-direction:column;align-items:center}.ca_ftsm_005_cart_below_table .productGrid{grid-template-columns:1fr}.ca_ftsm_005_testimonials{flex-direction:column}.ca_ftsm_005_testimonials_decoration{display:none}.ca_ftsm_005_testimonials .container .footer-newsletter-col{padding:2rem 1rem;max-width:460px;margin:auto;margin-top:1rem;margin-bottom:2rem}.ca_ftsm_005_testimonials .form-prefixPostfix .button{margin-top:0}}@media screen and (max-width: 800px){.ca_ftsm_005_testimonials{padding:1rem 21px}.ca_ftsm_005_testimonials .container .footer-newsletter-col{padding:2rem 1rem;margin-bottom:2rem}.ca_ftsm_005_testimonials .form-prefixPostfix{flex-direction:column;background:transparent;height:auto;padding:0}.ca_ftsm_005_testimonials.footer-newsletter .form-input{display:flex;flex-direction:row;align-items:center;padding:12px 20px;width:100%;height:48px;background:#ffffff;border-radius:35px;margin-bottom:.5rem}.ca_ftsm_005_testimonials .form-prefixPostfix .button{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:12px 36px;width:100%;height:48px;background:#642a75;border-radius:45px}.ca_ftsm_005_products{margin:0}.ca_ftsm_005_products .cart-item{position:relative;grid-template-areas:"img title remove" "img cta ." "img price .";grid-template-columns:120px auto 2rem;grid-template-rows:auto auto auto}.ca_ftsm_005_products .cart-item .cart-item-block{height:auto}.ca_ftsm_005_products .cart-item .cart-item-figure{grid-area:img;height:120px}.ca_ftsm_005_products .cart-item .cart-item-title{grid-area:title;width:auto;margin:0;margin-bottom:.5rem;margin-left:1rem;padding:0}.ca_ftsm_005_products .cart-item .cart-item-info{grid-area:price;justify-content:flex-start;margin-bottom:.5rem;margin-left:1rem}.ca_ftsm_005_products .cart-item .cart-item-quantity{grid-area:cta;margin-bottom:.5rem;margin-left:1rem;justify-content:flex-start}.ca_ftsm_005_products .cart-item .cart-item-info .cart-remove-alt{position:absolute;top:1.5rem;right:0}.ca_ftsm_005_products .cart-item .cart-item-info .cart-item-label{display:flex;align-items:center;margin:0;width:auto}.ca_ftsm_005_products .cart-item>.cart-item-info:nth-child(3),.ca_ftsm_005_products .cart-item .cart-item-quantity .cart-item-label,.ca_ftsm_005_products .cart-item:after,.ca_ftsm_005_products .cart-item:before{display:none}.ca_ftsm_005_checkout_ctn{background:transparent;padding-left:0;padding-right:0;padding-top:1rem;padding-bottom:0}.ca_ftsm_005_checkout_ctn .cart-total-finaltotal{margin-top:.25rem;padding-top:.75rem}.ca_ftsm_005_order_summary_heading{margin:auto}.cart-content-actions{width:100%}.ca_ftsm_005_checkout_ctn .cart-content-actions .button{width:100%;max-width:100%}.ca_ftsm_005_upgrade_cta_show{display:flex;width:100%;margin:auto;margin-bottom:1rem}}'
                  )
                ),
                console.log("[rrr]")
                document.head.appendChild(t);
            }
          } catch (e) {
            console.error("vite-plugin-css-injected-by-js", e);
          }
        })();
        (function () {
          "use strict";
          const f = () => {
              const e = "ca_ftsm_005_testimonials";
              if (document.querySelector(`.${e}`)) return;
              const o = document.querySelector("section.footer-newsletter");
              if (o) {
                o.classList.add(e);
                const c = document.querySelector("section.footer-newsletter > div.container");
                if (c) {
                  const t = document.createElement("div");
                  t.classList.add("ca_ftsm_005_testimonials_decoration"),
                    (t.innerHTML =
                      '<div class="ca_ftsm_005_testimonials_decoration_first"></div><div class="ca_ftsm_005_testimonials_decoration_second"></div>'),
                    c.prepend(t);
                }
              }
              console.log("[yyy]")
            },
            u = () => {
              if (document.querySelector(".cart-item-figure > picture")) return;
              const s = Array.from(document.getElementsByTagName("img"));
              if (!s || s.length === 0) {
                console.log("No images found on the page.");
                return;
              }
              const o = (t) =>
                  ["avif", "webp", "jpeg"].map((n) => `https://conversionadvocates.com/exp-images/ftsm/005/${t}.${n}`),
                c = new Map([
                  ["conceive-for-men-3-month-supply", o("conceive-for-men-3-month-supply")],
                  ["conceive-for-men-6-month-supply", o("conceive-for-men-6-month-supply")],
                  ["conceive-for-women-3-month-supply", o("conceive-for-women-3-month-supply")],
                  ["conceive-for-women-6-month-supply", o("conceive-for-women-6-month-supply")],
                  ["couple-s-special-1-month-supply", o("couple-s-special-1-month-supply")],
                  ["couple-s-special-3-month-supply", o("couple-s-special-3-month-supply")],
                  ["fertility-pills-for-women", o("fertility-pills-for-women")],
                ]);
              s.forEach((t) => {
                if (!t.alt) return;
                const r = t.alt
                    .toLowerCase()
                    .replace(/[\s'’]+/g, "-")
                    .replace(/-+/g, "-"),
                  n = c.get(r);
                if (n) {
                  const a = document.createElement("picture");
                  n.forEach((m) => {
                    const d = document.createElement("source");
                    d.srcset = m;
                    const p = m.split(".").pop();
                    (d.type = `image/${p}`), a.appendChild(d);
                  });
                  const i = document.createElement("img");
                  (i.alt = t.alt), (i.src = n[2]), a.appendChild(i);
                  const l = t.parentNode;
                  l && (l.replaceChild(a, t), l.classList.add("ca_ftsm_005_image_wrapper"));
                }
              });
            },
            v = () => {
              const e = document.querySelector(".loadingOverlay");
              if (!e) {
                console.log('Element with class "loadingOverlay" not found.');
                return;
              }
              console.log("[fff]")
              const s = new MutationObserver((c) => {
                  for (const t of c)
                    t.type === "attributes" && t.attributeName === "style" && t.target.style.display === "none" && u();
                }),
                o = { attributes: !0 };
              s.observe(e, o);
            },
            _ = `
      <div class="ca_ftsm_005_review_stars">
        <img src="https://conversionadvocates.com/exp-images/ftsm/005/star.svg" alt="Star 1" />
        <img src="https://conversionadvocates.com/exp-images/ftsm/005/star.svg" alt="Star 2" />
        <img src="https://conversionadvocates.com/exp-images/ftsm/005/star.svg" alt="Star 3" />
        <img src="https://conversionadvocates.com/exp-images/ftsm/005/star.svg" alt="Star 4" />
        <img src="https://conversionadvocates.com/exp-images/ftsm/005/star.svg" alt="Star 5" />
      </div>
    
      <p class="ca_ftsm_005_review_text">
        I got pregnant within two months of using Fertility Smart. I had previously been trying to get
        pregnant for a year and a half.
      </p>
    
      <div class="ca_ftsm_005_review_footer">
        <span class="ca_ftsm_005_review_name">Reilly</span>
        <div class="ca_ftsm_005_review_badge">
          <img src="https://conversionadvocates.com/exp-images/ftsm/005/verified_user.svg" alt="Icon verified_user" />
          <span>verified</span>
        </div>
      </div>
      `,
            w = "",
            g = () => {
              let e = document.querySelector(".ca_ftsm_005_upgrade_cta");
              const s = document.querySelector("tbody.cart-list");
              if (!s) {
                console.log("Elements not found.");
                return;
              }
              if (!e) {
                (e = document.createElement("a")),
                  e.classList.add("ca_ftsm_005_upgrade_cta"),
                  (e.innerText = "Upgrade to 3 bottles to save 33%");
                const r = document.querySelector(".cart-actions");
                r && r.insertAdjacentElement("afterend", e);
              }
              const o = (r) => {
                  for (let n of r) n.type === "childList" && c();
                },
                c = () => {
                  const r = Array.from(s.children).map((a) => {
                      const i = a.querySelector(".cart-item-name__label");
                      return { label: i, name: i && i.textContent ? i.textContent.trim() : "" };
                    }),
                    n = r.filter(
                      ({ name: a }) =>
                        a === "FertilitySmart | Fertility Pills for Women" ||
                        a === "FertilitySmart | Fertility Pills for Men"
                    );
                  n.forEach((a) => {
                    const i = "FertilitySmart | Fertility Pills for Women",
                      l = a.name === i,
                      m = l ? "Conceive For Women - 3 Month Supply" : "Conceive For Men - 3 Month Supply";
                    r.find(({ name: p }) => p === m) ||
                      ((e.href = l ? "/cart.php?action=add&sku=FS-CFW3" : "/cart.php?action=add&sku=FS-CFM3"),
                      e.classList.add("ca_ftsm_005_upgrade_cta_show"));
                  }),
                    n.length || e.classList.remove("ca_ftsm_005_upgrade_cta_show");
                };
              new MutationObserver(o).observe(s, { childList: !0 }), c();
            },
            h = () => {
              console.log("[www]")
              const e = document.querySelectorAll("a.cart-remove-alt");
              if (!e || e.length === 0) {
                console.log('No elements found with class "cart-remove-alt".');
                return;
              }
              e.forEach((s) => {
                s.innerHTML = `
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_537_702" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_537_702)">
                  <path d="M6.75625 16.5833C6.38649 16.5833 6.07076 16.4525 5.80907 16.1908C5.54736 15.9291 5.4165 15.6134 5.4165 15.2436V5.50002H4.4165V4.41671H7.99982V3.51288H11.9998V4.41671H15.5831V5.50002H14.5831V15.2345C14.5831 15.6199 14.4536 15.941 14.1946 16.1979C13.9356 16.4549 13.6185 16.5833 13.2434 16.5833H6.75625ZM13.4998 5.50002H6.49982V15.2436C6.49982 15.3184 6.52386 15.3798 6.57194 15.4279C6.62002 15.476 6.68146 15.5 6.75625 15.5H13.2434C13.3075 15.5 13.3663 15.4733 13.4197 15.4199C13.4731 15.3665 13.4998 15.3077 13.4998 15.2436V5.50002ZM8.33638 14H9.41969V7.00002H8.33638V14ZM10.5799 14H11.6633V7.00002H10.5799V14Z" fill="#1C1B1F"/>
                </g>
              </svg>
            `;
              });
            };
          window.onpageshow = function (e) {
            e.persisted && window.location.reload();
          };
          const y = () => {
            var o;
            console.log("[qqq]")
            const e = document.querySelector(
                "#main-content > div:nth-child(2) > div > div > div.cart-content-padding-right"
              ),
              s = document.querySelector("#main-content > div:nth-child(2) > div > div > div.cart-content-container");
            if (e && s) {
              const c = document.querySelector('[data-content-region="cart_below_table"]');
              c && c.classList.add("ca_ftsm_005_cart_below_table");
              const t = document.createElement("div");
              t.className = "ca_ftsm_005_hero";
              const r = document.createElement("h2");
              (r.textContent = "Order Summary"),
                r.classList.add("ca_ftsm_005_order_summary_heading"),
                s.prepend(r),
                e.classList.add("ca_ftsm_005_products"),
                s.classList.add("ca_ftsm_005_checkout_ctn");
              const n = document.createElement("div");
              (n.className = "ca_ftsm_005_review_element"), (n.innerHTML = _);
              const a = document.createElement("div");
              (a.className = "ca_ftsm_005_wrapper_overview"),
                a.appendChild(s),
                a.appendChild(n),
                (o = e.parentNode) == null || o.replaceChild(t, e),
                t.appendChild(e),
                t.appendChild(a);
            }
          };
          (async () => {
            document.querySelector(".ca_ftsm_005_hero") || (y(), u(), v(), f(), g(), h());
          })();
        })();
      }
    });
  }
}, 1000);

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
