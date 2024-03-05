<template>
<ClientOnly >
    <div class="login-container">
        <div class="image">
            <img src="~/assets/images/microsoft.png" height="180"/>
        </div>
        <div class="text">
           <h1>MSAL Authentication in Nuxt3</h1>
        </div>
        <div class="button">
            <button class="btn" @click="loginUser">Login with Microsoft 365</button>
        </div>
    </div>
</ClientOnly>
</template>
<script setup>
const {$login} = useNuxtApp()
const loginUser =async () =>{
    clearSiteData()
    const loginResponse =  await $login()
    if (loginResponse) navigateTo('/')
}
function clearSiteData() {
    document.cookie.split(";").forEach((cookie) => {
        const [name, _] = cookie.split("=").map((c) => c.trim());
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    localStorage.clear();
    sessionStorage.clear();
}
</script>
