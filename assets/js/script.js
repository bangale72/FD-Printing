document.addEventListener("DOMContentLoaded", function () {
  const paymentMethodSelect = document.getElementById("paymentMethod");
  const bankTransferOptions = document.getElementById("bankTransferOptions");
  const eWalletOptions = document.getElementById("eWalletOptions");

  paymentMethodSelect.addEventListener("change", function () {
    if (paymentMethodSelect.value === "bankTransfer") {
      bankTransferOptions.classList.remove("d-none");
      eWalletOptions.classList.add("d-none");
    } else if (paymentMethodSelect.value === "eWallet") {
      eWalletOptions.classList.remove("d-none");
      bankTransferOptions.classList.add("d-none");
    } else {
      bankTransferOptions.classList.add("d-none");
      eWalletOptions.classList.add("d-none");
    }
  });
});
