const routes = {
    '/': 'Home',
    '/about': 'About',
    '/contacts': 'Contacts',
    '/blog': 'Blog'
};

const localPosts = [
    { id: 1, title: 'Post 1', body: 'Привет' },
    { id: 2, title: 'Post 2', body: 'Как дела?' },
    { id: 3, title: 'Post 3', body: 'Чем занят?' }
];

function renderContent(route) {
    const contentElement = document.getElementById('content');
    switch (route) {
        case 'Home':
            contentElement.innerHTML = '<h2>Welcome to Home Page</h2>';
            break;
        case 'About':
            contentElement.innerHTML = '<h2>About Us</h2><p>This is the about page.</p>';
            break;
        case 'Contacts':
            contentElement.innerHTML = '<h2>Contact Us</h2><p>Contact information goes here.</p>';
            break;
        case 'Blog':
            renderPosts(); 
            break;
        default:
            contentElement.innerHTML = '<h2>Page Not Found</h2>';
    }
}

function renderPosts() {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = '<h2>Blog</h2>';
    const postList = document.createElement('ul');
    localPosts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postList.appendChild(listItem);
    });
    contentElement.appendChild(postList);
}

function setActiveLink() {
    const currentPath = window.location.hash.slice(1) || '/';
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        if (link.getAttribute('href').slice(1) === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function handleNavigation() {
    const currentPath = window.location.hash.slice(1) || '/';
    const route = routes[currentPath];
    renderContent(route);
    setActiveLink();
}

window.addEventListener('hashchange', handleNavigation);
window.addEventListener('DOMContentLoaded', handleNavigation);
