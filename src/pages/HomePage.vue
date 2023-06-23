<template>
  <div class="container-introduce">
    <div :class="getClass()">
      <span>
        <i @click="closeMenu" class="fa-solid fa-xmark"></i>
      </span>
      <ul>
        <li v-for="m in menu " :key="m.url">
          <a :href="m.url" @click="toggleMenu">{{m.name}}</a>
        </li>
      </ul>
    </div>
    <div class="header">
      <div class="logo">ThanhHuyen</div>
      <ul class="link">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <i @click="openMenu=!openMenu" class="fa-solid fa-bars"></i>
    </div>
    <home/>
    <about/>
    <project/>
    <contact/>
    <div class="footer">
      <div class="footer-left">
        Copyright ©2023. All rights are reserved
      </div>
      <div class="footer-right">
        <a href="https://github.com/phamthanhhuyen19124" target="_blank">
          <i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/components/introduce/home.vue";
import about from "@/components/introduce/about.vue";
import project from "@/components/introduce/project.vue";
import contact from "@/components/introduce/contact.vue";

export default {
  components: {
    contact,
    home,
    about,
    project
  },
  data() {
    return {
      openMenu: false,
      menu: [
        {url:"#home",name:"Home"},
        {url:"#about",name:"About"},
        {url:"#projects",name:"Projects"},
        {url:"#contact",name:"Contact"},
      ]
    }
  },
  methods:{
    closeMenu(){
      this.openMenu = false
    },
    toggleMenu(){
      this.openMenu = !this.openMenu
    },
    getClass(){
      if(this.openMenu){
        return 'mobile-link open-menu'
      }else {
        return 'mobile-link close-menu'
      }
    },
  }
}
</script>
<style scoped lang="scss">
.container-introduce {
  width: 100%;
  background: #FFFFFF;
  height: 100vh;
  font-size: 17px;
  .mobile-link{
    display: none;
  }
  .header{
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);
    display: flex;
    font-size: 1.7rem;
    height: auto;
    justify-content: space-between;
    left: 0;
    padding: 25px 40px 25px 50px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;

    .fa-bars {
      display: none;
    }

    .logo {
      font-size: 20px;
      font-weight: 700;
      color: #2d2e32;
    }

    .link {
      display: flex;
      gap: 2rem;
      list-style: none;

      a {
        font-size: 17px;
        color: #2d2e32;
        font-weight: 600;
        text-decoration: none;
        transition: all .23s;
      }
    }

  }

  .footer {
    background-color: #2d2e32;
    font-size: 10px;
    padding: 50px 0px;
    display: flex;
    justify-content: space-around;

    .footer-left {
      color: #ffffff;
      font-size: 17px;
      font-weight: 700;
    }

    .footer-right {
      display: flex;
      gap: 15px;

      .fa-brands {
        font-size: 23px;
        color: #FFFFFF;

        &:hover {
          transform: scale(1.2);
          transition: all .2s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 415px) {
    .mobile-link {
      align-items: center;
      background-color: #fff;
      display: flex;
      height: 100vh;
      justify-content: center;
      left: 0;
      position: fixed;
      text-align: center;
      top: 0;
      transition: all .3s ease-in-out;
      width: 100%;
      z-index: 300;
      .fa-solid{
        font-size: 30px;
      }
      span{
        cursor: pointer;
        font-size: 3.3rem;
        position: absolute;
        right: 4rem;
        top: 2rem;
      }
      ul{
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        gap: 4rem;
        list-style: none;
        a{
          color: #000;
          font-weight: 500;
          text-decoration: none;
        }
      }
    }
    .open-menu {
      left: 0;
    }
    .close-menu {
      left: -100%;
    }
    .header {
      .link {
        display: none;
      }

      .fa-bars {
        display: block;
      }
    }
    .footer {
      display: flex;
      flex-direction: column;

      .footer-left {
        text-align: center;
        margin-bottom: 10px;
      }

      .footer-right {
        margin: 0 auto;
      }
    }
  }
}
</style>