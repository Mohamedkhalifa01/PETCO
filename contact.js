function sendMessage() {
    // الحصول على القيم من الحقول
    const phoneInput = document.getElementById("phone").value.trim();
    const messageInput = document.getElementById("message").value.trim();
    const feedback = document.getElementById("feedback");

    // التحقق من أن رقم الهاتف يحتوي على 11 رقمًا
    if (/^\d{11}$/.test(phoneInput)) {
        // تنفيذ إرسال الرسالة (هنا مجرد رسالة توضيحية)
        feedback.style.color = "green";
        feedback.textContent = "Message sent successfully!";
        console.log("Phone:", phoneInput);
        console.log("Message:", messageInput);

        // إعادة تعيين الحقول بعد الإرسال
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    } else {
        // عرض رسالة خطأ إذا كان الرقم غير صحيح
        feedback.style.color = "#d9534f";
        feedback.textContent = "Please check phone number.";
    }
}