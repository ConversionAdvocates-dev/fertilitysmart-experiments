const isDesktop = window.innerWidth >= 968;

const expHtml = `<div id="ftsm-008-progress"> <div class="progress-wrapper"> <div class="progress-line"> <div class="progress-line__circle"></div> <div class="progress-line__circle"></div> <div class="progress-line__circle"></div> <div class="progress-line__circle"></div> </div> <div class="progress-labels"> <span class="progress-label--index"><b>Step 1</b>/4</span> <span class="progress-label--name">Customer</span> </div> </div> </div>`;

const expCss = `#checkout-app fieldset[data-test="checkout-shipping-comments"] { display: none; } #ftsm-008-progress { width: 100%; top: 0; z-index: 10; background-color: #fff; box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.12); padding: 20px; position: sticky; } #ftsm-008-progress.ftsm-008-progress--desktop { box-shadow: none; padding: 0 6rem 0 0; position: static; } #ftsm-008-progress .progress-wrapper { max-width: 298px; margin: 0 auto; } #ftsm-008-progress.ftsm-008-progress--desktop .progress-wrapper { max-width: 100%; } #ftsm-008-progress .progress-line { display: flex; justify-content: space-between; width: 100%; height: 16px; background-color: #f5ebef; border-radius: 10px; padding: 2px; margin-bottom: 4px; position: relative; } #ftsm-008-progress .progress-line::before { content: ""; width: 25px; height: 100%; background-color: #642a75; border-radius: 10px; position: absolute; top: 0; } #ftsm-008-progress .progress-line.step-1::before { width: 25px; } #ftsm-008-progress .progress-line.step-2::before { width: calc(33.3% + 8px); } #ftsm-008-progress .progress-line.step-3::before { width: calc(66.6% + 8px); } #ftsm-008-progress .progress-line.step-4::before { width: 100%; } #ftsm-008-progress .progress-line::after { content: ""; top: 50%; transform: translateY(-50%); height: 20px; width: 20px; border-radius: 50%; position: absolute; border: 3px solid #fff; filter: drop-shadow(0px 1px 4px rgba(100, 42, 117, 0.6)); } #ftsm-008-progress .progress-line.step-1::after { left: 8px; } #ftsm-008-progress .progress-line.step-2::after { left: calc(33.3% - 7px); } #ftsm-008-progress .progress-line.step-3::after { left: calc(66.6% - 7px); } #ftsm-008-progress .progress-line.step-4::after { left: calc(100% - 15px); } #ftsm-008-progress .progress-line__circle { display: block; width: 12px; height: 12px; background-color: #edccd9; border-radius: 50%; } #ftsm-008-progress .progress-labels { width: 100%; display: flex; justify-content: space-between; } #ftsm-008-progress .progress-labels > span { font: 500 14px/21px "Asap Condensed", sans-serif; color: #642a75; } #ftsm-008-progress .progress-labels > span b { font-weight: 700; }`;

const handleCustomerStep = async () => {
  const customerBtnContinue = await waitForElm("#stripe-checkout-customer-continue");

  console.log("[customerBtnContinue]", customerBtnContinue);

  setProgressLineStep(1);

  await sleep(500);

  customerBtnContinue.addEventListener("click", () => handleShippingStep());
};

const handleShippingStep = async () => {
  const shippingBtnContinue = await waitForElm("#checkout-shipping-continue");

  console.log("[handleShippingStep]");

  shippingBtnContinue.innerText = "Go To Billing";

  setProgressLineStep(2);

  shippingBtnContinue.addEventListener("click", async () => {
    const isSameAsBilling = document.querySelector("#sameAsBilling").value === "true";

    if (!isSameAsBilling) {
      handleBillingStep();

      return;
    }

    setProgressLineStep(4);
  });
};

const handleBillingStep = async () => {
  const billingBtnContinue = await waitForElm("#checkout-billing-continue");

  billingBtnContinue.innerText = "Go To Confirm Payment";

  setProgressLineStep(3);

  billingBtnContinue.addEventListener("click", async () => {
    setProgressLineStep(4);
  });
};

const stepToLabel = {
  1: "Customer",
  2: "Shipping",
  3: "Billing",
  4: "Confirm Payment",
};

const setProgressLineStep = (step) => {
  console.log("[setProgressLineStep]", step);

  const progressLine = document.querySelector("#ftsm-008-progress .progress-line");

  progressLine.classList = `progress-line step-${step}`;

  const progressLabelIndex = document.querySelector("#ftsm-008-progress .progress-label--index b");
  const progressLabelName = document.querySelector("#ftsm-008-progress .progress-label--name");

  const label = stepToLabel[step];
  progressLabelIndex.innerText = `Step ${step}`;
  progressLabelName.innerText = label;
};

const sleep = (delay = 500) => new Promise((res) => setTimeout(res, delay));

const workflow = async () => {
  await sleep();

  const root = await waitForElm("#checkout-app");
  if (!isDesktop) {
    root.insertAdjacentHTML("beforebegin", expHtml);
  } else {
    root.querySelector(".layout-main").insertAdjacentHTML("afterbegin", expHtml);

    document.querySelector("#ftsm-008-progress").classList.add("ftsm-008-progress--desktop");
    setTimeout(async () => {
      const checkoutLayout = await waitForElm("#checkout-app .layout");
      const checkoutCart = await waitForElm("#checkout-app .cart");

      if (checkoutLayout) checkoutLayout.style.paddingTop = "40px";
      if (checkoutCart) checkoutCart.style.marginTop = "0";
    }, 500);
  }

  setProgressLineStep(1);

  const style = document.createElement("style");
  style.innerHTML = expCss;
  document.head.append(style);

  handleCustomerStep();

  const paymentHeading = await waitForElm(".checkout-step--payment h2");
  paymentHeading.innerText = "Confirm Payment";

  /*
  implement setInterval that checks whether each editBtn has event listener
  -- if has - do nothing
  -- if doesn't have -> add event listener
  */
  let customerListenerActive = false;
  let shippingListenerActive = false;
  let billingListenerActive = false;
  setInterval(() => {
    const customerEditBtn = document.querySelector(".checkout-step--customer .stepHeader-actions button");
    const shippingEditBtn = document.querySelector(".checkout-step--shipping .stepHeader-actions button");
    const billingEditBtn = document.querySelector(".checkout-step--billing .stepHeader-actions button");

    if (!customerEditBtn) customerListenerActive = false;
    if (customerEditBtn && !customerListenerActive) {
      customerEditBtn.addEventListener("click", handleCustomerStep);
      customerListenerActive = true;
    }

    if (!shippingEditBtn) shippingListenerActive = false;
    if (shippingEditBtn && !shippingListenerActive) {
      shippingEditBtn.addEventListener("click", handleShippingStep);
      shippingListenerActive = true;
    }

    if (!billingEditBtn) billingListenerActive = false;
    if (billingEditBtn && !billingListenerActive) {
      billingEditBtn.addEventListener("click", handleBillingStep);
      billingListenerActive = true;
    }
  }, 1000);

  // Handle "Edit" buttons
  // for each editBtn:
  //  await editBtnSelector -> handleStep()
  // setInterval(() => {
  //   waitForElm(".checkout-step--customer .stepHeader-actions button").then((editBtn) => {
  //     console.log("[resolved]", editBtn);
  //     editBtn.addEventListener("click", () => {
  //       console.log("customer edit clicked");
  //       handleCustomerStep();
  //     });
  //   });
  //   waitForElm(".checkout-step--shipping .stepHeader-actions button").then((editBtn) =>
  //     editBtn.addEventListener("click", () => handleShippingStep)
  //   );
  //   waitForElm(".checkout-step--billing .stepHeader-actions button").then((editBtn) =>
  //     editBtn.addEventListener("click", () => handleBillingStep)
  //   );
  // }, 1000);
};

workflow();

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
