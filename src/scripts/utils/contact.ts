export function formValidation(){
    const form = document.getElementById("contact-form") as HTMLFormElement;
    const firstName = document.getElementById("first-name") as HTMLInputElement;
    const lastName = document.getElementById("last-name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLTextAreaElement;
    const privacy = document.getElementById("privacy") as HTMLInputElement;
    const submitButton = document.querySelector(".btn-submit-form") as HTMLButtonElement;

    if(!form){
        console.log('Formulário não encontrado');
        return;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        function showError(element: HTMLElement, message: string){
            const errorSpan = document.getElementById(`error-${element.id}`);
            if(errorSpan){
                errorSpan.textContent = message;
                errorSpan.style.display = "block";
            }
        }

        function clearError(element: HTMLElement){
            const errorSpan = document.getElementById(`error-${element.id}`);
            if(errorSpan){
                errorSpan.textContent = "";
                errorSpan.style.display = "none";
            }
        }

        if(!firstName.value.trim()){
            showError(firstName, "Preencha o campo");
            isValid = false;
        }else{
            clearError(firstName);
        }

        if(!lastName.value.trim()){
            showError(lastName, "Preencha o campo");
            isValid = false;
        }else{
            clearError(lastName);
        }

        if (!email.value.trim()) {
            showError(email, "Preencha o campo");
            isValid = false;
        } else {
            clearError(email);
        }

        if (!message.value.trim()) {
            showError(message, "Preencha o campo mensagem");
            isValid = false;
        } else {
            clearError(message);
        }

        if (!privacy.checked) {
            showError(privacy, "Aceite os termos");
            isValid = false;
        } else {
            clearError(privacy);
        }

        if(!isValid){
            submitButton.textContent = "Send message";
            return;
        }

        if(isValid){
            submitButton.textContent = "Enviando...";
            setTimeout(() => {
                submitButton.textContent = "Mensagem enviada!";
                form.reset();
                setTimeout(() => {
                    submitButton.textContent = "Send message";
                },2000);
            }, 1500);
        }
    });
}