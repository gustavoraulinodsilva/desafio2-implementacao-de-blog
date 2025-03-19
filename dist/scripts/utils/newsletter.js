export function newsletterValidation() {
    const form = document.getElementById("send-newsletter");
    const emailInput = document.getElementById("newsletter-email");
    const submitButton = document.querySelector(".btn-newsletter-submit");
    if (!form) {
        console.log("Formulário não encontrado");
        return;
    }
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let isValid = true;
        function showError(element, message) {
            var _a;
            let errorSpan = document.getElementById(`error-${element.id}`);
            if (!errorSpan) {
                errorSpan = document.createElement("span");
                errorSpan.id = `error-${element.id}`;
                errorSpan.classList.add("error");
                (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(errorSpan);
            }
            errorSpan.textContent = message;
            errorSpan.style.display = "block";
        }
        function clearError(element) {
            const errorSpan = document.getElementById(`error-${element.id}`);
            if (errorSpan) {
                errorSpan.textContent = "";
                errorSpan.style.display = "none";
            }
        }
        const email = emailInput.value.trim();
        if (!email) {
            showError(emailInput, "Campo email obrigatório");
            isValid = false;
        }
        else if (!validateEmail(email)) {
            showError(emailInput, "E-mail inválido");
            isValid = false;
        }
        else {
            clearError(emailInput);
        }
        if (!isValid) {
            submitButton.textContent = "Subscribe";
            return;
        }
        submitButton.textContent = "Enviando...";
        submitButton.disabled = true;
        setTimeout(() => {
            submitButton.textContent = "Mensagem enviada!";
            form.reset();
            setTimeout(() => {
                submitButton.textContent = "Subscribe";
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });
}
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
