import { PublicClientApplication } from '@azure/msal-browser'
export default defineNuxtPlugin(async () => {
    const config = {
        auth:
        {
            clientId: import.meta.env.VITE_CLIENT_ID,
            authority: 'https://login.microsoftonline.com/organizations/',
            redirectUri: import.meta.env.VITE_REDIRECT_URI,
        }
    }
    const msal = new PublicClientApplication(config)
    await msal.initialize()

    const login = async () => {
        var loginRequest = {
            scopes: ['user.read'],
        }
        try {
            let loginResponse = await msal.loginPopup(loginRequest)
            console.log('Login Response', loginResponse)
            return loginResponse
        }
        catch (err) {
            let loginResponse = await msal.loginPopup(loginRequest)
            return loginResponse
        }
    }
    const getAccounts = () => {
        return msal.getAllAccounts()
    }
    let tokenResponse
    const acquireTokenSilent = async () => {
        const account = msal.getAllAccounts()
        if (account.length > 0) {

            let tokenRequest = {
                scopes: ['user.read'],
                account: account[0]
            }
            tokenResponse = await msal.acquireTokenSilent(tokenRequest)
            return tokenResponse
        }
        else {
            return null
        }
    }
    const profileInfo = async () => {
        let payload = await fetch('https://graph.microsoft.com/v1.0/me', {
            headers: {
                Authorization: `Bearer ${tokenResponse.accessToken}`,
            },
        })
        let json = await payload.json()
        return json
    }
    const profileImg = async () => {
        let profileImageResponse = await fetch(
            `https://graph.microsoft.com/v1.0/me/photo/$value`,
            {
                headers: {
                    Authorization: `Bearer ${tokenResponse.accessToken}`,
                },
            }
        )
        let imageUrl
        console.log(profileImageResponse);
        if (profileImageResponse.ok) {
            let blob = await profileImageResponse.blob()
            imageUrl = URL.createObjectURL(blob)

        } else {
            console.error(
                'Failed to fetch profile image:',
                profileImageResponse.statusText
            )
        }
        return imageUrl
    }
    const logout = async () => {
        const accounts = getAccounts()
        const homeAccountId = accounts[0]
        await msal.logoutRedirect({ account: homeAccountId })
        console.log('Loggedout')
    }

    return {
        provide: {
            login,
            getAccounts,
            acquireTokenSilent,
            profileInfo,
            profileImg,
            logout
        }
    }

})

