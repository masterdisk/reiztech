<script setup lang="ts">
import { ref } from 'vue'

interface MenuItem {
  name: string;
  icon: string;
  link: string;
}

const menuItems = ref<MenuItem[]>([
  {
    name: 'Dashboard',
    icon: 'static/icons/sideBar/dashboard.svg',
    link: '/'
  },
  {
    name: 'Lab Test',
    icon: 'static/icons/sideBar/labTest.svg',
    link: '/'
  },
  {
    name: 'Appointment',
    icon: 'static/icons/sideBar/appointment.svg',
    link: '/'
  },
  {
    name: 'Medicine Order',
    icon: 'static/icons/sideBar/medicineOrder.svg',
    link: '/'
  },
  {
    name: 'Message',
    icon: 'static/icons/sideBar/message.svg',
    link: '/'
  },
  {
    name: 'Payment',
    icon: 'static/icons/sideBar/payment.svg',
    link: '/'
  },
  {
    name: 'Settings',
    icon: 'static/icons/sideBar/settings.svg',
    link: '/'
  },
  {
    name: 'Help',
    icon: 'static/icons/sideBar/help.svg',
    link: '/'
  }
])

//selected item
const selectedMenuItem = ref<string | null>('Dashboard');

const selectMenuItem = (itemName: string) => {
  selectedMenuItem.value = itemName;
};

</script>

<template>
<div class="sidebar">
  <p class="title logo">Sales.</p>
  <div class="menu">
    <div v-for="item in menuItems" :key="item.name"  @click="selectMenuItem(item.name)" class="menu-item" :class="{ selected: item.name === selectedMenuItem }">
        <img :src="item.icon" alt="" class="icon" /> <!-- Use img tag for SVG -->
        <span class="menu-item-text">{{ item.name }}</span>
    </div>
  </div>
</div>
</template>

<style scoped>
.logo{
  padding: 55px 130px 58px 29px;
  margin: 0;
  color: #013CC6;
}

.menu-item-text{
  color: #131313;
  margin-left: 15px;
}

.icon  {
  width: 24px; /* Adjust size as needed */
  height: 24px;
  margin-left: 38px;
}

.menu .menu-item:not(:last-child) .menu-item-text, .icon{
  margin-top: 7px;
  margin-bottom: 8px;
}

.menu .menu-item:last-child {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.menu{
  flex: 1; /* This will make the menu take up all available space */
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.menu-item:not(:last-child){
  margin-bottom: 26px;
  max-height: 39px;
  height: 100%;
  display: flex;
  cursor: pointer;
}

.menu-item:nth-last-child(-n+2){
  margin-bottom: 0;
  max-height: 39px;
  height: 100%;
  display: flex;
  cursor: pointer;
}

.menu-item:last-child{
  margin-bottom: 30px;
  max-height: 24px;
  height: 100%;
  display: flex;
  cursor: pointer;
}

.selected {
  filter: brightness(0) saturate(100%) invert(34%) sepia(92%) saturate(4914%) hue-rotate(204deg) brightness(99%) contrast(100%);
  border-left: 3px solid #0B63F8;
}

.selected .icon{
  margin-left: 35px;
}

.menu li:hover .icon  {
  filter: brightness(0) saturate(100%) invert(34%) sepia(92%) saturate(4914%) hue-rotate(204deg) brightness(99%) contrast(100%);
}
</style>