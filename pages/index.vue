<template>
    <div v-if="loading" class="loadData">
    <div class="loader"></div>
    </div>
    <div class="home-container" v-else>
    <div class="profile" v-if="profileImg">
        <img :src="profileImg" width="250" class="profile-image"/>
    </div>
    <div class="initials-container" v-else>
       <div class="initials">{{initials}}</div>
    </div>
    <div class="name">
        <h1>Welcome, {{profile.displayName}}!</h1>
    </div>
    <div class="email">
        <h4>{{profile.mail}}</h4>
    </div>
      <div class="username">
        <h2>{{profile.jobTitle}}</h2>
    </div>
    <div class="phone" v-if="profile.mobilePhone">
        <h4>Phone no. : {{profile.mobilePhone}}</h4>
    </div>
    <div class="button" @click="logout">
        <button class="logout-btn">Logout</button>
    </div>
</div>
</template>
<script setup>
const {$profileInfo,$profileImg,$logout} = useNuxtApp()
const profile = ref()
const profileImg = ref()
const loading = ref(true)

const logout =async ()=>{
    await $logout()
}
onMounted(async()=>{
    loading.value = true
    const profileInfo = await $profileInfo()
    profile.value = profileInfo
    const {data,error} = await $profileImg()
    if(data){
        profileImg.value = data
    }
    if(error){
        getInitials()
    }
    loading.value = false
})
const initials = ref()
const getInitials = () =>{
    const nameArray = profile.value.displayName.split(' ')
    const fletter = nameArray[0].charAt(0)
    const lletter = nameArray[1].charAt(0)
    initials.value = fletter+lletter
}
</script>
