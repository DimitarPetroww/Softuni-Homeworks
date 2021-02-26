function nav (data) {
    return `
    <nav>
        <ul>
            ${data.logged ?  
                `<li>
                   <a href="/create">Create new offer</a>
                 </li>`  : ""}
            <li class="site-logo">Shoe</li>
            <li>
                <a href="/">
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li> 
                <li class="site-logo">Shelf</li>
                ${data.logged ? `<li>Welcome, ${data.email} | 
                <a  href="/logout">Logout</a>
                </li>` : ""}
            </ul>
        </nav>
    `
}