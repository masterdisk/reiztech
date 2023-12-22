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


const isMenuVisible = ref(false);

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

</script>

<template>
  <div class="navbar">
    <div class="wrapper">
    <p class="title logo">Sales.</p>
    <span class="menu-toggle" @click="toggleMenu">☰</span>
    </div>
    <div class="menu" v-if="isMenuVisible">
      <div v-for="item in menuItems" :key="item.name" @click="selectMenuItem(item.name)" class="menu-item" :class="{ selected: item.name === selectedMenuItem }">
        <img :src="item.icon" alt="" class="icon" />
        <span class="menu-item-text">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo{
  margin: 0;
  color: #013CC6;
}

.wrapper{
  padding: 55px 29px 0px 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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

@media (max-width: 980px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu-toggle {
    background: none;
    border: none;
    font-size: 25px;
    cursor: pointer;
    margin-left: 20px;
  }

  .menu {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .menu-item {
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }

  .menu-item-text {
    margin-left: 10px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
}
</style>