const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "เปิดเมนู");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;
    if (!email || email.includes("YOUR_EMAIL")) {
      copyMessage.textContent = "กรุณาใส่อีเมลจริงของคุณในไฟล์ index.html ก่อนใช้งานปุ่มนี้";
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      copyMessage.textContent = "คัดลอกอีเมลแล้ว: " + email;
    } catch {
      copyMessage.textContent = "อีเมลของคุณ: " + email;
    }
  });
}
