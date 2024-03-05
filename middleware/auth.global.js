export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return;
    const { $acquireTokenSilent } = useNuxtApp();
    const accessToken = (await $acquireTokenSilent())?.accessToken;
    if (to.name !== "login" && !accessToken) {
        return navigateTo("/login");
    } else if (to.name === "login" && accessToken) {
        return navigateTo("/");
    } else {
        return;
    }
});
