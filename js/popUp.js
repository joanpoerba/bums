function showSoldOutPopUp() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Barang sudah habis",
  });
}

function showInfoPopUp() {
  Swal.fire({
    icon: "info",
    title: "Thank you for the message!",
    text: "Please wait about 24 hours",
  });
}

function showBuyNowPopUp() {
  Swal.fire({
    icon: "success",
    title: "Thank you for buying!",
    text: "Your order is on the way",
  });
}
