const backendUrl = 'https://aayush-adhikari.onrender.com'; // Change this to your actual backend URL

const handleMenu = () => {
    navDialog.classList.toggle('hidden');
};

const scrollToSection = (element) => {
    element.scrollIntoView({ behavior: 'smooth' });
};

document.addEventListener('click', (e) => {
    const targetClassList = e.target.classList;

    if (targetClassList.contains('nav_project') || targetClassList.contains('foot_project')) {
        scrollToSection(document.querySelector('.Project'));
        handleMenu(document.getElementById('project'));
    } else if (targetClassList.contains('nav_about') || targetClassList.contains('foot_about')) {
        scrollToSection(document.querySelector('.About'));
        handleMenu(document.getElementById('about'));
    } else if (targetClassList.contains('nav_home') || targetClassList.contains('foot_home')) {
        scrollToSection(document.querySelector('.Home'));
        handleMenu(document.getElementById('home'));
    } else if (targetClassList.contains('nav_contact') || targetClassList.contains('foot_contact') || targetClassList.contains('btn_contact')) {
        scrollToSection(document.querySelector('.Contact'));
        handleMenu(document.getElementById('contact'));
    }
});

const btn = document.getElementById('sbmt_btn');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const names = document.getElementById('names').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch(`${backendUrl}/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ names, email, message })
    });

    if (response.status === 400) {
        toastr.error('Please fill all inputs');
    } else if (response.status === 200) {
        toastr.success('Email sent successfully');
        document.getElementById('names').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        toastr.error('There was an error with your submission');
    }
});
