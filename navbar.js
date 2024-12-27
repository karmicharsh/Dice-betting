export function setupNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';
    navbar.innerHTML = `
      <div class="nav-brand">90's Dice Betting</div>
      <div class="nav-links">
        <a href="./index.html">Add Money</a>
        <a href="./login.html">Login</a>
      </div>
    `;
    document.body.insertBefore(navbar, document.body.firstChild);
  }