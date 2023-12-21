<script lang="ts" setup>
import {ref} from 'vue'


const searchBarIcon = ref<string>('static/icons/topBar/search.svg');
const notificationIcon = ref<string>('static/icons/topBar/bell.svg');
const avatarIcon = ref<string>('static/images/user/profilePic.png');
</script>

<template>
  <div class="container">
    <div class="search-bar">
      <img :src="searchBarIcon" alt="" class="icon"/>
      <span class="body-text">Search</span>
    </div>
    <div class="user-info">
      <div class="icon-button">
        <span></span>

        <img :src="notificationIcon" alt="" class="icon"/>
      </div>
      <div class="avatar">
        <img :src="avatarIcon" alt="" class="avatar"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 3.50625em 2.5em 2.74375em 2.5625em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}



.user-info{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-left: 20px;
  >.icon-button &:after{
    position:absolute;
    right:-10px;
    top:-10px;
    min-width:10px;
    min-height:10px;
    line-height:10px;
    padding:5px;
    color:#fff;
    background-color:#bf1f1f;
    font-size:10px;
    border-radius:20px;
    content:attr(data-badge);
    border:solid 1px #c93a3a;
  }
}

.body-text{
  margin-left: 16px;
  color: #ADA7A7;
}

.search-bar {
  padding: 0.86878em 1.25em 0.88127em 1.25em;
  width: 100%;
  max-width: 655px;
  max-height: 22px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.20);
  background: #FFF;

  >.icon{
    width: 24px;
    height: 24px;
  }
}
</style>