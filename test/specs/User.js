import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../Screen/MenuScreen.js'
import LoginScreen from '../Screen/LoginScreen.js'
import UserCerto from '../data/UserCerto.json' with {type: "json"}


describe('My Login application', () => {

    it('should login with invalid credentials', async () => {
        await MenuScreen.AcessLoginScreen()
        await LoginScreen.LogarErrado()
        await expect($(LoginScreen.ErrorMsg)).toHaveText('Provided credentials do not match any user in this service.')
    
    })

    it('should login with valid credentials', async () => {
        await MenuScreen.AcessLoginScreen()
        await LoginScreen.LogarCerto(UserCerto.userSucess.username,UserCerto.userSucess.password)
    })
        	

})



//await aguarda a informação ser passada
//acessAbility ID => Unico
//se nao tiver usa android 'uiautomator',mas usa("android=ID") sem ~

        
