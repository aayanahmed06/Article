document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const cardContent = this.closest('.card-content');
            const additionalContent = cardContent.querySelector('.additional-content');
            const buttonText = cardContent.querySelector('.toggle-btn');

            additionalContent.classList.toggle('hidden');

            if (additionalContent.classList.contains('hidden')) {
                buttonText.textContent = 'Read More';
            } else {
                buttonText.textContent = 'Show Less';
            }
        });
    });
});
