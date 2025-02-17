class loginScreen{

    constructor(){

        this.UserName = "~Username input field"
        this.Password = "~Password input field"
        this.LoginButtom = "~Login button"
        this.ErrorMsg  = '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView'
    }
    async LogarErrado(){
        await $(this.UserName).setValue("UserErrado")
        await $(this.Password).setValue("SenhaErrada")
        await $(this.LoginButtom).click()
    }

    async LogarCerto(Username,Password){
        await $(this.UserName).setValue(Username)
        await $(this.Password).setValue(Password)
        await $(this.LoginButtom).click()
    }
    


}
export default new loginScreen()









        // await $("~Username input field").setValue("UserErrado")
        // await $("~Password input field").setValue("SenhaErrado")
        // await $("~Password input field").click()

        //xPath vai para um ponto Pegar antes do ponto e colocar caminho ex /android.widget
        //  await expect($('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')).toHaveText('Provided credentials do not match any user in this service.')