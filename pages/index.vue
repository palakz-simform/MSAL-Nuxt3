<template>
<div class="container">
    <div class="profile">
        <img src="../assets/images/profile.jpeg" height="250"/>
    </div>
    <div class="name">
        <h1>Welcome, Palak Zalavadia!</h1>
    </div>
    <div class="username">
        <h4>palak.z@simformsolutions.com</h4>
    </div>
      <div class="button">
            <button class="btn">Logout</button>
    </div>
</div>
</template>
<style scoped>
.container{
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
}
img{
    border-radius: 50%;
    border: 6px solid rgb(249, 186, 186);
    padding: 6px;
}

h1{
    margin-bottom: 0px;
    font-weight: normal;
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
</style>