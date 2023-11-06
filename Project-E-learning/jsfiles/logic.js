const getAccessBtn2 = document.getElementById("paid-topic-2")
const getAccessBtn3 = document.getElementById("paid-topic-3")
const getAccessBtn5 = document.getElementById("paid-topic-5")
const getAccessBtn6 = document.getElementById("paid-topic-6")
const overlay = document.querySelector(".overlay")
const coursePrice = document.getElementById("course-price")
const gstPrice = document.getElementById("gst-price")
const totalPrice = document.getElementById("total-price")
const payNowBtn = document.querySelector(".pay-btn")
const cancelPaymentBtn = document.querySelector(".cancel-payment")
const afterPaymentBtn2 = document.getElementById("paid-topic-2-link")

function showOverlay2() {
    overlay.style.display = "block"
    coursePrice.textContent = "2567.00"
    gstPrice.textContent = "462.06"
    totalPrice.textContent = "3029.06"

    function showExplorenow2() {
        getAccessBtn2.className = "explore-now"
        getAccessBtn2.innerHTML = '<a href="/htmlfiles/phy-topic-2.html"id="paid-topic-2-link">Explore now</a>'
        overlay.style.display = "none"
    }

    payNowBtn.addEventListener("click", showExplorenow2)
    
}

function showOverlay3() {
    overlay.style.display = "block"
    coursePrice.textContent = "5436.00"
    gstPrice.textContent = "978.48"
    totalPrice.textContent = "6414.48"

    function showExplorenow3() {
        getAccessBtn3.className = "explore-now"
        getAccessBtn3.innerHTML = '<a href="/htmlfiles/phy-topic-3.html"id="paid-topic-3-link">Explore now</a>'
        overlay.style.display = "none"
    }

    payNowBtn.addEventListener("click", showExplorenow3)
    
}

function showOverlay5() {
    overlay.style.display = "block"
    coursePrice.textContent = "1639.00"
    gstPrice.textContent = "295.02"
    totalPrice.textContent = "1934.02"

    function showExplorenow5() {
        getAccessBtn5.className = "explore-now"
        getAccessBtn5.innerHTML = '<a href="/htmlfiles/chm-topic-2.html"id="paid-topic-5-link">Explore now</a>'
        overlay.style.display = "none"
    }

    payNowBtn.addEventListener("click", showExplorenow5)
    
}

function showOverlay6() {
    overlay.style.display = "block"
    coursePrice.textContent = "2899.00"
    gstPrice.textContent = "521.82"
    totalPrice.textContent = "3420.82"

    function showExplorenow6() {
        getAccessBtn6.className = "explore-now"
        getAccessBtn6.innerHTML = '<a href="/htmlfiles/chm-topic-3.html"id="paid-topic-6-link">Explore now</a>'
        overlay.style.display = "none"
    }

    payNowBtn.addEventListener("click", showExplorenow6)
    
}

getAccessBtn2.addEventListener("click", showOverlay2)
getAccessBtn3.addEventListener("click", showOverlay3)
getAccessBtn5.addEventListener("click", showOverlay5)
getAccessBtn6.addEventListener("click", showOverlay6)

function hideOverlay() {
    overlay.style.display = "none"
}

cancelPaymentBtn.addEventListener("click", hideOverlay)
