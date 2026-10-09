

class LoginPage{
    constructor(page){
    this.page = page;
    this.username = page.getByPlaceholder('Email address or phone number');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', {name: 'Log in'});
    
}

async login(username, password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
}

}

module.exports = { LoginPage };
