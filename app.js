// Link quảng cáo
const adLink = "https://s.shopee.vn/2BEPjZwbdB";

// Popup
const adPopup = document.getElementById("adPopup");
const adImage = document.getElementById("adImage");
const adClose = document.getElementById("adClose");

// Kiểm tra đã click lần đầu chưa
let adClicked = false;


// CLICK ẢNH
adImage.addEventListener("click", function () {

    if (!adClicked) {

        // Lần 1 → mở link
        adClicked = true;
        window.open(adLink, "_blank");

    } else {

        // Lần 2 → đóng quảng cáo
        adPopup.style.display = "none";

    }

});


// CLICK DẤU X
adClose.addEventListener("click", function () {

    if (!adClicked) {

        // Lần 1 → mở link
        adClicked = true;
        window.open(adLink, "_blank");

    } else {

        // Lần 2 → đóng quảng cáo
        adPopup.style.display = "none";

    }

});