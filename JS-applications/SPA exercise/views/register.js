function register(data) {
    return `
    <h1>Register</h1>
    <p class="form-info">Already registered?
        <a href="/login">Login now</a> and have some fun!
    </p>
    <form>
        <div>
            <input type="email" placeholder="Email...">
        </div>
        <div>
            <input type="password" placeholder="Password">
        </div>
        <div>
            <input type="password" placeholder="Re-password">
        </div>
        <div>
            <p class="message"></p>
            <button onclick="registerUser(event)">Register</button>
        </div>
    </form>`
}