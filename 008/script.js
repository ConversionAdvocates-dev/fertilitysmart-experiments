const expHtml =
  '<div id="ftsm-008-progress"> <div class="progress__line step-1"> <svg width="292" height="16" viewBox="0 0 292 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="292" height="16" rx="8" fill="#F5EBEF"/> <circle cx="284" cy="8" r="6" fill="#EDCCD9"/> <circle cx="146" cy="8" r="6" fill="#EDCCD9"/> <circle cx="8" cy="8" r="6" fill="#EDCCD9"/> </svg> </div> <div class="progress-labels"> <span class="progress__index"><b>Step 1</b>/3</span> <span class="progress__name">Shipping</span> </div> </div>';

const expCss =
  '#ftsm-008-progress { max-width: 298px; margin: 0 auto; } #ftsm-008-progress .progress__line { position: relative; } #ftsm-008-progress .progress__line::before { content: ""; width: 25px; height: 100%; background-color: #642A75; border-radius: 10px; position: absolute; left: 0; top: 0; } #ftsm-008-progress .progress__line::after { content: ""; left: 8px; top: 50%; transform: translateY(-50%); height: 20px; width: 20px; border-radius: 50%; position: absolute; border: 3px solid #fff; filter: drop-shadow(0px 1px 4px rgba(100, 42, 117, 0.60)); } #ftsm-008-progress .progress__line svg { display: block; width: 100%; height: 100%; } #ftsm-008-progress .progress-labels { width: 100%; display: flex; justify-content: space-between; } #ftsm-008-progress .progress-labels > span { font: 500 14px/21px "Asap Condensed", sans-serif; color: #642A75; } #ftsm-008-progress .progress-labels > span b { font-weight: 700; }';

const root = document.querySelector("#checkout-app");

root.insertAdjacentHTML("beforebegin", expHtml);

const style = document.createElement("style");
style.innerHTML = expCss;
document.head.append(style);
