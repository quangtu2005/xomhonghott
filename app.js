// Link quảng cáo
const adLink = "https://s.shopee.vn/2BEPjZwbdB";

// Lấy popup
const adPopup = document.getElementById("adPopup");

// Lấy ảnh
const adImage = document.getElementById("adImage");

// Lấy nút X
const adClose = document.getElementById("adClose");

// Đã click lần đầu chưa?
let adClicked = false;


// ============================
// XỬ LÝ CLICK
// ============================

function handleAdClick(event) {

    event.preventDefault();
    event.stopPropagation();

    // LẦN 1
    if (!adClicked) {

        adClicked = true;

        // Mở link quảng cáo
        window.open(adLink, "_blank");

        return;
    }


    // LẦN 2
    adPopup.style.display = "none";
}


// Click ảnh
adImage.addEventListener("click", handleAdClick);


// Click dấu X
adClose.addEventListener("click", handleAdClick);
