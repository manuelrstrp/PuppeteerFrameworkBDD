const {I} = inject()

class LoginPage {
  constructor(){
    this.navBar = "#fadein > header > div > div > div > div"
    this.inputEmail = "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(1) > div > input"
    this.inputPassword = "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div:nth-child(2) > div.form-group.mb-2 > input"
    this.submitButton = "#fadein > div.container > div > div.modal-content.col.align-self-center > div.modal-body > div > form > div.btn-box.pt-3.pb-4 > button > span.ladda-label"
    this.loginPageText = "#fadein > section.dashboard-area > div > div.dashboard-bread > div > div.row.align-items-center > div:nth-child(1) > div > div > h2 > span"
  }
  visit(){
    I.amOnPage("login")
    I.waitForElement(this.navBar)
    I.seeInCurrentUrl('login')
  }
  login(email, password){
    I.waitForElement(this.inputEmail)
    I.fillField(this.inputEmail, email)
    I.fillField(this.inputPassword, password)
    I.wait(5)
    I.click(this.submitButton)
  }
  validateLogin(){
    I.wait(5)
    I.waitForElement(this.navBar)
    I.waitForElement(this.loginPageText)
  }
}

module.exports = new LoginPage()
module.exports.LoginPage = new LoginPage