function validateInquiry(event) {
    event.preventDefault()
    
    const statusBox = document.getElementById("form-status")
    const errorMessages = []
    
    try {
        const userInquiry = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            tech: document.getElementById("tech").value
        }

        if (userInquiry.name.length < 3) {
            errorMessages.push("name must be at least 3 characters")
        }

        if (!userInquiry.email.includes("@") || userInquiry.email.length < 5) {
            errorMessages.push("valid email is required")
        }

        if (errorMessages.length > 0) {
            let errorText = "errors: "
            for (let i = 0; i < errorMessages.length; i++) {
                errorText += errorMessages[i] + (i < errorMessages.length - 1 ? ", " : "")
            }
            throw errorText
        }

        statusBox.textContent = "success: inquiry for " + userInquiry.tech + " submitted"
        statusBox.style.color = "#1e90ff"
        document.getElementById("inquiryForm").reset()

    } catch (err) {
        statusBox.textContent = err
        statusBox.style.color = "#ff4d4d"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("inquiryForm")
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", validateInquiry)
    }
})