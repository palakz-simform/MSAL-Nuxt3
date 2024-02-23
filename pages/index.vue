<template>
    <div v-if="loading" class="loadData">
    <div class="loader"></div>
    </div>
    <div class="container" v-else>
    <div class="profile" v-if="profileImg">
        <img :src="profileImg" width="250"/>
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
            <button class="btn">Logout</button>
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
    const fletter = profile.value.givenName.charAt(0)
    const lletter = profile.value.surname.charAt(0)
    initials.value = fletter+lletter
}
</script>
<style scoped>
.container{
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
}
img,.initials-container{
    border-radius: 50%;
    border: 6px solid rgb(249, 186, 186);
    padding: 6px;
    box-shadow: -2px 2px 20px 12px rgba(251, 251, 251, 0.75);
}
.initials-container{
    padding: 10px;
}
.initials{
    font-size: 80px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    height:250px;
    width: 250px;
    background-color: #e2e6ff;
    border-radius: 50%;
    color: rgb(53, 53, 82);
}

h1{
    margin-bottom: 0px;
    font-weight: normal;
    text-align: center;
}

.email h4{
     margin-bottom: 0;
}
h4{
 color: #7d7d7d;

}
h2{
    margin-bottom: 0;
}
.btn{
    padding: 15px 40px 15px 40px;
    font-size:medium;
    background-color: #ff5a1f;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
}
.loadData{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #f77777;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>