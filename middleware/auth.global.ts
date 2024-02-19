export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return;
    const { $getAccounts,$acquireTokenSilent,$profileInfo } = useNuxtApp();
    const accounts = $getAccounts();
    const accessToken = (await $acquireTokenSilent())?.accessToken;

    if (accessToken) {
        if(!localStorage.getItem('profile')){
        const profile = await $profileInfo()
        localStorage.setItem("profile", JSON.stringify(profile));
        }
    }
    if (to.name !== "login" && !accessToken) {
        return navigateTo("/login");
    } else if (to.name === "login" && accessToken) {
        return navigateTo("/");
    } else {
        return;
    }
});
