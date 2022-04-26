const sendForm = () => {
    const form = document.querySelector('.modal');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const text = form.querySelector('input[type=text]');
            const tel = form.querySelector('input[type=tel]');
            const email = form.querySelector('input[type=email]');

            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: new FormData(form),
            });

            let result = await response.json();

            if (response.status != '201') {
                alert('Form error');
            }

            console.log(result);

            form.reset();
        })
    }
}

sendForm();