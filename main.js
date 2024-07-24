function showConfirmation() {
    const email = document.getElementById('email').value;
    const message = `A confirmation email has been sent to, <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`;
    document.getElementById('confirmationMessage').innerHTML = message;
}