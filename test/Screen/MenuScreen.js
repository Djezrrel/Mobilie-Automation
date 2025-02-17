class MenuScreen {

    constructor(){
        this.LeftMenu = '~open menu'
        this.LoginButtom = "//*[@text='Log In']" //pegar tudo que seja o texto tem
    }

    //função que faz os 2
    async AcessLoginScreen(){
        await $(this.LeftMenu).click()
        await $(this.LoginButtom).click()

    }
}

export default new MenuScreen()