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

// Enhanced animations on scroll/load
document.addEventListener("DOMContentLoaded", () => {
  // Add staggered animation delays to elements
  const animatedElements = document.querySelectorAll(
    ".brand-name, .tagline, .coming-soon-title, .coming-soon-description, .signup-section, .social-section",
  )

  animatedElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`
  })

  // Add interactive hover effects to floating letters
  const letters = document.querySelectorAll(".letter")
  letters.forEach((letter) => {
    letter.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2) rotate(10deg)"
      this.style.color = "rgba(255, 255, 255, 0.3)"
    })

    letter.addEventListener("mouseleave", function () {
      this.style.transform = ""
      this.style.color = "rgba(255, 255, 255, 0.1)"
    })
  })

  // Add particle effect on brand name hover
  const brandName = document.querySelector(".brand-name")
  brandName.addEventListener("mouseenter", function () {
    createParticles(this)
  })
})

// Particle effect function
function createParticles(element) {
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = "4px"
    particle.style.height = "4px"
    particle.style.background = "rgba(255, 255, 255, 0.6)"
    particle.style.borderRadius = "50%"
    particle.style.pointerEvents = "none"
    particle.style.zIndex = "5"

    const rect = element.getBoundingClientRect()
    particle.style.left = `${rect.left + Math.random() * rect.width}px`
    particle.style.top = `${rect.top + Math.random() * rect.height}px`

    document.body.appendChild(particle)

    // Animate particle
    particle.animate(
      [
        { transform: "translateY(0) scale(0)", opacity: 0 },
        { transform: "translateY(-50px) scale(1)", opacity: 1 },
        { transform: "translateY(-100px) scale(0)", opacity: 0 },
      ],
      {
        duration: 2000,
        easing: "ease-out",
      },
    ).onfinish = () => particle.remove()
  }
}

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
