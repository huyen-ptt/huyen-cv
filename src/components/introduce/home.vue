<template>
  <div class="section-one" id="home">
    <div class="generality">
      <div class="specialized-field">Front-End Vue Developer</div>
      <div class="introduce">Xin Chào, tôi tên là Huyền, {{ age }} tuổi. Là một lập trình viên về Front-end. Tôi đến từ
        Hưng Yên 📍
      </div>
      <div class="link">
        <a href="https://github.com/huyen-ptt/huyen-cv" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <div class="array-do">
        <div class="stack">Skill</div>
        <div class="wrapper-logo">
          <div class="item-logo">
            <img class="logo-img" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"/>
          </div>
          <div class="item-logo">
            <img class="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"/>
          </div>
          <div class="item-logo">
            <img class="logo-img"
                 src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"/>
          </div>
          <div class="item-logo">
            <img class="logo-img" src="https://cdn.iconscout.com/icon/free/png-512/free-sass-3629630-3031098.png?f=avif&w=256"/>
          </div>
          <div class="item-logo">
            <img class="logo-img" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="avt">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ageme: 2004
    }
  },
  computed: {
    age() {
      const currentYear = new Date().getFullYear(); // Lấy năm hiện tại
      return currentYear - this.ageme; // tính toán tuổi người dùng
    }
  }
}
</script>
<style scoped lang="scss">
.section-one {
  background-color: #f9f9f9;
  display: flex;
  gap: 10rem;
  align-items: center;
  height: 100vh;
  width: 100%;
  //margin-top: 10px;
  justify-content: center;
  padding:100px 0 30px 0;

  .avt {
    animation: avtt 8s ease-in-out infinite;
    background-image: url(@/assets/page_new/img-cv.jpg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid #2d2e32;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 35rem;
    position: relative;
    transition: all 1s ease-in-out;
    width: 35rem;
  }

  @keyframes avtt {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  .array-do {
    display: flex;
    align-items: center;
    gap: 30px;

    .stack {
      width: 103px;
      color: #2d2e32;
      font-size: 17px;
      font-weight: 600;
      margin: 0px 70px 0px 0px;
      padding: 0px 20px 0px 0px;
      border-right: 3px solid grey;
    }

    .wrapper-logo {
      display: flex;
      gap: 25px;

      .item-logo {
        align-items: center;
        background-color: #ffffff;
        border-radius: 999px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .09);
        color: #767676;
        display: flex;
        font-size: 17px;
        justify-content: center;
        padding: 13px 13px;

        .logo-img {
          width: 34px;
          height: 34px;
          object-fit: contain;
        }
      }
    }

  }

  .avt {
    width: 350px;
    height: 350px;
    border-radius: 999px;
  }

  .generality {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 325px;

    .link {
      cursor: pointer;
      display: flex;
      gap: 1.3rem;
      margin: 2.5rem 0;

      .fa-brands {
        color: #2d2e32;
        font-size: 30px;
        //width: 26px;
        //height: 30px;

      }
    }

    .specialized-field {
      color: #555;
      font-size: 55px;
      font-weight: 700;
      line-height: 66px;
      margin: 20px 0;
    }

    .introduce {
      color: #2d2e32;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      //margin-bottom: 2rem;
      //margin-top: 2rem;
    }
  }
}

@media (max-width: 768px) {
  .section-one {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 9rem 20px;
    gap: 5rem;

    .array-do {
      display: flex;
      flex-direction: column;
    }

    .avt {
      order: 3;
    }

    .generality {
      width: 100%;
      height: 100%;
      align-items: center;
      order: 4;

      .specialized-field {
        font-size: 40px;
        line-height: 45px;
        text-align: center;
      }

      .introduce {
        text-align: center;
      }

      .link {
        gap: 2rem;
      }
    }

    .array-do {
      .stack {
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 2px solid grey;
        border-right: 0;
        text-align: center;
        padding-right: 0;
      }
    }
  }
}

@media (max-width: 400px) {
  .section-one {
    padding-top: 100px;
    .array-do {
      .wrapper-logo {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    .avt {
      width: 250px;
      height: 250px;
    }

  }
}
@media (max-width:1200px ) {
  .section-one{
    padding: 100px 30px;
    margin-bottom: 30px;
    gap:2rem;
  }
}


</style>