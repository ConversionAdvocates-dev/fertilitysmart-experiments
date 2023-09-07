let htmlOptions =
  '<div class="atc-options"> <div class="atc-option atc-option--active" data-order-quantity="1"> <svg width="32" height="54" viewBox="0 0 32 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="16" cy="7" r="6.5" stroke="#E46198"/> <circle cx="16" cy="7" r="4" fill="#E46198"/> <path d="M21.0967 28.2408V27.2408C21.2489 27.1483 21.3748 27.0183 21.4624 26.8632C21.5499 26.7081 21.5962 26.5331 21.5967 26.355V23.7358C21.5964 23.4609 21.4872 23.1974 21.2928 23.003C21.0984 22.8087 20.8349 22.6994 20.56 22.6992H11.4417C11.1667 22.6994 10.9031 22.8086 10.7086 23.003C10.5141 23.1973 10.4046 23.4609 10.4042 23.7358V26.3542C10.4043 26.5622 10.4671 26.7653 10.5842 26.9373C10.7013 27.1092 10.8673 27.242 11.0608 27.3183V28.1983C10.3029 28.3875 9.62996 28.8248 9.14928 29.4406C8.6686 30.0565 8.40778 30.8154 8.40833 31.5966V48.865C8.40944 50.041 8.87702 51.1685 9.70848 52.0001C10.5399 52.8317 11.6674 53.2995 12.8433 53.3008H19.1558C20.332 53.2997 21.4597 52.832 22.2915 52.0004C23.1233 51.1688 23.5912 50.0412 23.5925 48.865V31.5966C23.5946 30.8428 23.3526 30.1085 22.9028 29.5036C22.4529 28.8987 21.8193 28.4557 21.0967 28.2408ZM20.0967 27.3933V28.05H12.0608V27.3933H20.0967ZM11.4042 23.7358C11.4042 23.7309 11.4051 23.7261 11.407 23.7216C11.4089 23.7171 11.4117 23.713 11.4152 23.7096C11.4187 23.7062 11.4228 23.7035 11.4274 23.7017C11.4319 23.6999 11.4368 23.699 11.4417 23.6992H20.5592C20.5689 23.6992 20.5782 23.703 20.5851 23.7099C20.592 23.7168 20.5958 23.7261 20.5958 23.7358V26.3542C20.5958 26.3629 20.5927 26.3714 20.587 26.3781C20.5814 26.3847 20.5736 26.3893 20.565 26.3908H11.4417C11.4319 26.3908 11.4224 26.387 11.4154 26.3801C11.4084 26.3733 11.4044 26.364 11.4042 26.3542V23.7358ZM22.5925 48.865C22.5914 49.776 22.2289 50.6494 21.5847 51.2936C20.9404 51.9377 20.0669 52.2999 19.1558 52.3008H12.8433C11.9325 52.2997 11.0593 51.9374 10.4153 51.2932C9.77137 50.6491 9.40922 49.7758 9.40833 48.865V31.5966C9.4079 30.9834 9.6329 30.3913 10.0405 29.9331C10.4482 29.475 11.01 29.1826 11.6192 29.1117C11.7154 29.1006 11.8123 29.095 11.9092 29.095H20.09C20.231 29.0951 20.3718 29.1071 20.5108 29.1308H20.515C21.0972 29.2293 21.6255 29.5312 22.006 29.9827C22.3864 30.4343 22.5943 31.0062 22.5925 31.5966V48.865Z" fill="currentColor"/> </svg> <span class="atc-option__heading">Buy 1</span> <h6 class="atc-option__subheading">%price-single% per bottle</h6> </div> <div class="atc-option" data-order-quantity="3"> <svg width="33" height="54" viewBox="0 0 33 54" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.5" cy="7" r="6.5" stroke="#E46198"/> <circle cx="16.5" cy="7" r="4" fill="#E46198"/> <g clip-path="url(#clip0_450_219)"> <path d="M21.5966 28.2409V27.2409C21.7488 27.1484 21.8748 27.0184 21.9623 26.8633C22.0499 26.7082 22.0961 26.5332 22.0966 26.3551V23.7359C22.0964 23.461 21.9871 23.1975 21.7927 23.0031C21.5984 22.8087 21.3348 22.6994 21.06 22.6992H11.9416C11.6667 22.6994 11.403 22.8087 11.2085 23.003C11.014 23.1974 10.9046 23.4609 10.9041 23.7359V26.3542C10.9044 26.5621 10.9671 26.7652 11.0842 26.9369C11.2013 27.1087 11.3674 27.2413 11.5608 27.3175V28.1984C10.8034 28.3882 10.1313 28.8258 9.65126 29.4415C9.17123 30.0573 8.91088 30.8159 8.91162 31.5967V48.865C8.91295 50.0411 9.38072 51.1686 10.2123 52.0002C11.0439 52.8318 12.1714 53.2996 13.3475 53.3009H19.66C20.836 53.2996 21.9635 52.8318 22.7951 52.0002C23.6267 51.1686 24.0945 50.0411 24.0958 48.865V31.5967C24.0977 30.8424 23.8552 30.1078 23.4047 29.5029C22.9542 28.8979 22.3198 28.4552 21.5966 28.2409ZM20.5966 27.3934V28.05H12.5608V27.3934H20.5966ZM11.9041 23.7359C11.9041 23.731 11.9051 23.7262 11.907 23.7216C11.9089 23.7171 11.9117 23.7131 11.9152 23.7097C11.9186 23.7062 11.9228 23.7036 11.9273 23.7018C11.9319 23.7 11.9367 23.6991 11.9416 23.6992H21.0591C21.0688 23.6992 21.0782 23.7031 21.085 23.71C21.0919 23.7168 21.0958 23.7262 21.0958 23.7359V26.3542C21.0957 26.363 21.0926 26.3714 21.087 26.3781C21.0814 26.3848 21.0736 26.3893 21.065 26.3909H11.9416C11.9318 26.3909 11.9224 26.3871 11.9154 26.3802C11.9084 26.3733 11.9043 26.364 11.9041 26.3542V23.7359ZM23.0925 48.865C23.0914 49.776 22.729 50.6492 22.0849 51.2933C21.4408 51.9374 20.5675 52.2998 19.6566 52.3009H13.3441C12.4337 52.2991 11.5612 51.9365 10.9178 51.2924C10.2743 50.6483 9.9125 49.7754 9.91162 48.865V31.5967C9.91119 30.9834 10.1362 30.3914 10.5438 29.9332C10.9515 29.475 11.5133 29.1826 12.1225 29.1117C12.219 29.1006 12.3161 29.0951 12.4133 29.0951H20.5941C20.7357 29.0952 20.877 29.1072 21.0166 29.1309C21.5993 29.2287 22.1282 29.5303 22.509 29.982C22.8899 30.4336 23.0978 31.0059 23.0958 31.5967L23.0925 48.865Z" fill="currentColor"/> <path d="M32.1668 32.2216V48.9858C32.1652 50.131 31.7096 51.2288 30.8997 52.0385C30.0899 52.8482 28.9919 53.3036 27.8468 53.3049H23.0968C22.9642 53.3049 22.837 53.2523 22.7432 53.1585C22.6494 53.0647 22.5968 52.9375 22.5968 52.8049C22.5968 52.6723 22.6494 52.5452 22.7432 52.4514C22.837 52.3576 22.9642 52.3049 23.0968 52.3049H27.8468C28.7269 52.3041 29.5707 51.9541 30.1931 51.3319C30.8155 50.7096 31.1657 49.8659 31.1668 48.9858V32.2216C31.1657 31.5814 30.9106 30.9678 30.4575 30.5155C30.0044 30.0631 29.3903 29.8091 28.7501 29.8091H24.3068C24.1742 29.8091 24.047 29.7564 23.9532 29.6627C23.8594 29.5689 23.8068 29.4417 23.8068 29.3091C23.8068 29.1765 23.8594 29.0493 23.9532 28.9556C24.047 28.8618 24.1742 28.8091 24.3068 28.8091H28.7451V28.1524H22.5134C22.3808 28.1524 22.2536 28.0998 22.1599 28.006C22.0661 27.9122 22.0134 27.7851 22.0134 27.6524C22.0134 27.5198 22.0661 27.3927 22.1599 27.2989C22.2536 27.2051 22.3808 27.1524 22.5134 27.1524H29.2101C29.2152 27.1517 29.2199 27.1492 29.2234 27.1454C29.2269 27.1416 29.2289 27.1368 29.2293 27.1316V24.5908C29.229 24.5852 29.2267 24.5799 29.2226 24.576C29.2186 24.5721 29.2132 24.5699 29.2076 24.5699H23.0126C22.88 24.5699 22.7528 24.5173 22.659 24.4235C22.5653 24.3297 22.5126 24.2026 22.5126 24.0699C22.5126 23.9373 22.5653 23.8102 22.659 23.7164C22.7528 23.6226 22.88 23.5699 23.0126 23.5699H29.2076C29.4783 23.5702 29.738 23.6778 29.9295 23.8691C30.121 24.0605 30.2288 24.32 30.2293 24.5908V27.1316C30.2293 27.306 30.1848 27.4774 30.1001 27.6298C30.0154 27.7822 29.8932 27.9104 29.7451 28.0024V28.9558C30.4469 29.1662 31.0619 29.5979 31.4984 30.1865C31.9348 30.775 32.1692 31.4889 32.1668 32.2216Z" fill="currentColor"/> <path d="M11.1417 27.6525C11.1417 27.7852 11.089 27.9123 10.9953 28.0061C10.9015 28.0999 10.7743 28.1525 10.6417 28.1525H4.41173V28.8067H8.68839C8.821 28.8067 8.94818 28.8594 9.04195 28.9532C9.13571 29.0469 9.18839 29.1741 9.18839 29.3067C9.18839 29.4393 9.13571 29.5665 9.04195 29.6603C8.94818 29.754 8.821 29.8067 8.68839 29.8067H4.24506C4.15039 29.8066 4.05579 29.8119 3.96173 29.8226C3.3746 29.8914 2.83324 30.1736 2.44054 30.6154C2.04784 31.0573 1.83118 31.6281 1.83173 32.2192V48.9859C1.83283 49.8658 2.18288 50.7094 2.8051 51.3317C3.42733 51.9539 4.27093 52.3039 5.15089 52.305H9.90089C10.0335 52.305 10.1607 52.3577 10.2544 52.4515C10.3482 52.5453 10.4009 52.6724 10.4009 52.805C10.4009 52.9377 10.3482 53.0648 10.2544 53.1586C10.1607 53.2524 10.0335 53.305 9.90089 53.305H5.15089C4.00622 53.3031 2.90903 52.8473 2.09986 52.0376C1.29068 51.228 0.83555 50.1306 0.834229 48.9859V32.2217C0.834861 31.4621 1.08862 30.7243 1.5554 30.1251C2.02219 29.5258 2.67537 29.0991 3.41173 28.9125V28.0792C3.22355 28.0028 3.06246 27.8719 2.94905 27.7035C2.83563 27.535 2.77505 27.3365 2.77506 27.1334V24.5925C2.77462 24.322 2.88149 24.0624 3.07223 23.8705C3.26298 23.6787 3.52203 23.5703 3.79256 23.5692H9.98756C10.1202 23.5692 10.2473 23.6219 10.3411 23.7157C10.4349 23.8094 10.4876 23.9366 10.4876 24.0692C10.4876 24.2018 10.4349 24.329 10.3411 24.4228C10.2473 24.5165 10.1202 24.5692 9.98756 24.5692H3.79256C3.78704 24.5692 3.78174 24.5714 3.77783 24.5753C3.77392 24.5792 3.77173 24.5845 3.77173 24.59V27.1309C3.77173 27.1364 3.77392 27.1417 3.77783 27.1456C3.78174 27.1495 3.78704 27.1517 3.79256 27.1517H10.6417C10.7075 27.1517 10.7725 27.1647 10.8333 27.1898C10.894 27.215 10.9491 27.2519 10.9956 27.2985C11.042 27.345 11.0788 27.4002 11.1039 27.4609C11.129 27.5217 11.1418 27.5868 11.1417 27.6525Z" fill="currentColor"/> </g> <defs> <clipPath id="clip0_450_219"> <rect width="32" height="32" fill="white" transform="translate(0.5 22)"/> </clipPath> </defs> </svg> <span class="atc-option__heading">Buy 3 and Save 33%</span> <h6 class="atc-option__subheading">%price-bundle% per bottle</h6> </div> </div>';
const expHtmlMobile = `<div class="ftsm-004 ftsm-004--mobile minidesc-content">%htmlOptions%<button class="atc__button">Add To Cart</button> <a class="product-offer YouSave" href="/cart.php?action=add&sku=FS-C4W&qty=3"> <span class="offer-heading">3 For 2 Offer!</span> <span class="offer-text">Add 3 Bottles And Save 33%</span> </a> <div class="product-offer"> <span class="offer-heading">Our Pregnancy Success Offer</span> <span class="offer-text">If you become pregnant before finishing a 3 or 6 month supply, we will refund you in full for the unopened bottles</span> </div> <div class="productView-image-ingredients"> <ul> <li class="ingredient-cfw"> <div><img src="/product_images/uploaded_images/nutrient-chasteberry.png"><span></span></div> <h3>Chasteberry</h3> </li> <li class="ingredient-cfm ingredient-cfw"> <div><img src="/product_images/uploaded_images/nutrient-larginine.png"><span></span></div> <h3>L-Arginine</h3> </li> <li class="ingredient-cfm"> <div><img src="/product_images/uploaded_images/nutrient-ltaurine.png"><span></span></div> <h3>L-Aurine</h3> </li> <li class="ingredient-cfm"> <div><img src="/product_images/uploaded_images/nutrient-lcarnitine.png"><span></span></div> <h3>L-Carnitine</h3> </li> <li class="ingredient-cfm ingredient-cfw"> <div><img src="/product_images/uploaded_images/nutrient-greentea.png"><span></span></div> <h3>Green Tea Extract</h3> </li> <li class="ingredient-cfw"> <div><img src="/product_images/uploaded_images/nutrient-magnesium.png"><span></span></div> <h3>Magnesium</h3> </li> </ul> <div class="full-list"> <a class="button button--secondary scroll-click" href="#ingredients">All Ingredients</a> </div> </div> </div>`;

const expHtmlDesktop = `<div class="ftsm-004 ftsm-004--desktop">%htmlOptions%</div>`;

const expCss =
  '.ftsm-004--desktop { display: none; } .ftsm-004--mobile { margin-top: 20px; } .ftsm-004 .atc-options { width: 100%; display: flex; justify-content: space-between; } .ftsm-004--desktop .atc-options { margin-bottom: 1rem; } .ftsm-004 .atc-option { display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid #D9D9D9; border-radius: 5px; transition: all .2s ease-in-out; cursor: pointer; padding: 12px 4px; } .ftsm-004 .atc-option:first-of-type { width: 45%; margin-right: 8px; } .ftsm-004 .atc-option:last-of-type { flex-grow: 1; } .ftsm-004 .atc-option.atc-option--active { background-color: rgba(228, 97, 152, 0.1); border-color: #E46198; } .ftsm-004 .atc-option.atc-option--active svg { color: #E46198; } .ftsm-004 .atc-option__heading { font: 700 14px/20px "Roboto", sans-serif; color: #E46198; margin-top: 8px; } .ftsm-004 .atc-option__subheading { color: #221D23; font: 400 14px/20px "Roboto", sans-serif; text-transform: none; letter-spacing: unset; margin: 0; } .ftsm-004--mobile .atc__button { width: 100%; display: block; font: 700 1.25rem/1rem "Roboto", sans-serif; color: #fff; text-align: center; text-transform: uppercase; background-color: #642a75; padding: 21px 0; border-radius: 4px; margin-top: 1.25rem; margin-bottom: 1rem; } .ftsm-004--mobile .atc-promotion { display: flex; flex-direction: column; align-items: center; border: 3px solid #e36197; background: #e36197; color: #fff; border-radius: 5px; text-align: center; text-decoration: none; padding: 1rem; margin-top: 1rem; margin-bottom: 0.5rem; } .ftsm-004--mobile .atc-promotion .promotion__heading { font-size: 1.25em; font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem; } .ftsm-004--mobile .atc-promotion .promotion__subheading { font-weight: 700; } .ftsm-004--mobile .productView-image-ingredients { border: 2px solid #eee; margin-top: 2rem; } @media only screen and (max-width: 800px) { .productView-product .product-offer, .productView-image-ingredients { display: none; } } @media only screen and (min-width: 800px) { .ftsm-004--mobile, #add-to-cart-wrapper .form-field.form-field--increments { display: none; } .ftsm-004--desktop { display: flex; } }';

const timeout = 5000;
const interval = 250;

const maxExecN = timeout / interval;
let currentExecN = 0;

const expInterval = setInterval(function () {
  const productViewImageWrap = document.querySelector(".productView-image-wrap");
  if (productViewImageWrap && !document.querySelector(".ftsm-004")) {
    // Update location-based pricing
    const price = document.querySelector(".price.price--withTax").innerText;
    // const priceUnformatted = price.replace(/[a-zA-Z]/g, "");
    // const currencySign = price.replace(priceUnformatted, "");
    // const priceSingle = +priceUnformatted.replace(",", "");
    // const priceBundle = (+(priceSingle * 0.67).toFixed(2)).toLocaleString();
    // htmlOptions = htmlOptions.replace("%price-single%", `${currencySign}${priceSingle.toLocaleString()}`).replace("%price-bundle%", `${currencySign}${priceBundle}`);

    const currencySign = price.match(/\D/g).join("").replace(".", "").replace(",", "");
    const priceSingle = +price.replace(currencySign, "").replace(",", "");
    const priceBundle = (+(priceSingle * 0.67).toFixed(2)).toLocaleString();
    htmlOptions = htmlOptions.replace("%price-single%", `${currencySign}${priceSingle.toLocaleString()}`).replace("%price-bundle%", `${currencySign}${priceBundle}`);

    // Append Mobile element
    productViewImageWrap.insertAdjacentHTML("afterend", expHtmlMobile.replace("%htmlOptions%", htmlOptions));

    // Append Desktop element
    const quantityField = document.querySelector("#add-to-cart-wrapper .form-field.form-field--increments");
    quantityField.insertAdjacentHTML("afterend", expHtmlDesktop.replace("%htmlOptions%", htmlOptions));

    // Set event listeners
    const quantityInput = document.querySelector("#add-to-cart-wrapper .form-input");
    const atcOptions = document.querySelectorAll(".ftsm-004 .atc-option");
    atcOptions.forEach((atcOption) =>
      atcOption.addEventListener("click", () => {
        atcOptions.forEach((opt) => opt.classList.remove("atc-option--active"));
        atcOption.classList.add("atc-option--active");

        const quantity = atcOption.dataset.orderQuantity;
        quantityInput.value = quantity;
      })
    );

    const atcButtonExp = document.querySelector(".ftsm-004 .atc__button");
    const atcButton = document.querySelector("#form-action-addToCart");
    atcButtonExp.addEventListener("click", () => atcButton.click());

    // Set default option to Quantity = 1
    quantityInput.value = "1";

    // Append style
    const style = document.createElement("style");
    style.innerHTML = expCss;
    document.head.append(style);

    clearInterval(expInterval);
  }

  currentExecN++;
  if (currentExecN > maxExecN) clearInterval(expInterval);
}, interval);
