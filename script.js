function validateInquiry(event) {
    event.preventDefault()
    
    const nameInput = document.getElementById("name").value
    const emailInput = document.getElementById("email").value
    const statusBox = document.getElementById("form-status")

    if (nameInput.length < 3) {
        statusBox.textContent = "error: name must be at least 3 characters"
        statusBox.style.color = "#ff4d4d"
    } else if (!emailInput.includes("@")) {
        statusBox.textContent = "error: please enter a valid email address"
        statusBox.style.color = "#ff4d4d"
    } else {
        statusBox.textContent = "success: your inquiry has been submitted"
        statusBox.style.color = "#1e90ff"
        document.getElementById("inquiryForm").reset()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("inquiryForm")
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", validateInquiry)
    }
})