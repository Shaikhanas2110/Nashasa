// Email signup functionality
function handleEmailSignup() {
  const emailInput = document.getElementById("email")
  const email = emailInput.value.trim()

  if (!email) {
    alert("Please enter your email address")
    return
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Here you would typically send the email to your backend
  console.log("Email signup:", email)
  alert("Thank you! We'll notify you when NASHASA launches.")
  emailInput.value = ""
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add enter key support for email input
document.getElementById("email").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleEmailSignup()
  }
})

// Smooth scrolling for any future internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
