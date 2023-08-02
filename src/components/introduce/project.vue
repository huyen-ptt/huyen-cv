<template>
  <div id="projects" class="section-three">
    <div class="content">Dự án</div>
    <div class="wrapper-project">
      <div v-for="item in projectList"
           :key="item.id"
           class="section-three-small">
        <div class="title-section-three">
          <img class="img-home" :src="item.img"/>
        </div>
        <div class="wrapper-information">
          <a class="github" :href="item.demo_link" target="_blank">{{item.name_project}}</a>
          <div class="gioi-thieu">{{item.content}}
          </div>
          <div class="demo">
            <a :href="item.github" class="githubb" target="_blank">
              <i class="fa-brands fa-github"></i>
              <div class="name">Github</div>
            </a>
            <a class="link-demo btn-demo" :href="item.demo_link" target="_blank">
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
<!--      <div class="section-three-small">-->
<!--        <div class="title-section-three">-->
<!--          <img class="img-home" src="@/assets/page_new/web-film.png"/>-->
<!--        </div>-->
<!--        <div class="wrapper-information">-->
<!--          <a class="github" href="https://web-phim.netlify.app" target="_blank">Landing-page</a>-->
<!--          <div class="gioi-thieu">Website hiện thị giao diện để khách hàng có thể tham khảo các gói phim, các nhận xét của-->
<!--            người dùng trước đó...-->
<!--          </div>-->
<!--          <div class="demo">-->
<!--            <a href="https://github.com/huyen-ptt/landing-page" class="githubb" target="_blank">-->
<!--              <i class="fa-brands fa-github"></i>-->
<!--              <div class="name">Github</div>-->
<!--            </a>-->
<!--            <a class="link-demo btn-demo" href="https://landing-page-huyen.netlify.app" target="_blank">-->
<!--              <span>Demo</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="section-three-small">-->
<!--        <div class="title-section-three">-->
<!--          <img class="img-home" src="@/assets/page_new/food.png"/>-->
<!--        </div>-->
<!--        <div class="wrapper-information food">-->
<!--          <a class="github" href="https://web-food-huyen-ptt.netlify.app" target="_blank">Food-page</a>-->
<!--          <div class="gioi-thieu">Website hiện thị giao diện đồ ăn, khách hàng có thể tham khảo các nhà hàng và các trải-->
<!--            nghiệm của người dùng trước đó...-->
<!--          </div>-->
<!--          <div class="demo">-->
<!--            <a href="https://github.com/huyen-ptt/web-food" class="githubb" target="_blank">-->
<!--              <i class="fa-brands fa-github"></i>-->
<!--              <div class="name">Github</div>-->
<!--            </a>-->
<!--            <a class="link-demo btn-demo" href="https://web-food-huyen-ptt.netlify.app" target="_blank">-->
<!--              <span>Demo</span>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projectList: [
        {
          id: 1,
          name_project: 'Giao diện Instagram',
          demo_link: 'https://huyenptt-instagram.netlify.app/',
          content: 'Website hiện thị giao diện gần giống với trang instagram. Bao gồm các trang như home, explore reels, messenger và profile. Instagram ...',
          github: 'https://github.com/phamthanhhuyen19124/instagram-ui',
          img: '/home.png',
        },
        {
          id: 2,
          name_project: 'Landing-page',
          demo_link: 'https://landing-page-huyen.netlify.app',
          content: 'Website hiện thị giao diện để khách hàng có thể tham khảo các gói phim, các nhận xét của người dùng trước đó...',
          github: 'https://github.com/huyen-ptt/landing-page',
          img: '/web-film.png',
        },
        {
          id: 3,
          name_project: 'Food-page',
          demo_link: 'https://web-food-huyen-ptt.netlify.app',
          content: 'Website hiện thị giao diện đồ ăn, khách hàng có thể tham khảo các nhà hàng và các trải nghiệm của người dùng trước đó...',
          github: 'https://github.com/huyen-ptt/web-food',
          img: '/food.png',
        },
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.section-three {
  background-color: #f9f9f9;
  display: flex;
  gap: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .content {
    display: flex;
    justify-content: flex-start;
    color: #147efb;
    font-size: 27px;
    font-weight: 700;
  }

  .section-three-small {
    display: flex;
    max-width: 1200px;
    align-items: center;
    gap: 20px;
    padding: 15px;
    margin-bottom: 40px;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 0 0 10px rgba(0, 0, 0, .09);

    .img-home {
      width: 100%;
      height: 300px;
      border-radius: 17px;
      object-fit: contain;
    }

    .wrapper-information {
      max-width: 400px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .github {
        color: #2d2e32;
        font-size: 25px;
        font-weight: 700;
        line-height: 35px;
        //margin: 0px 0px 40px;
        text-decoration: none;
      }

      .gioi-thieu {
        color: #767676;
        font-size: 17px;
        font-weight: 500;
        line-height: 25px;
      }

      .fa-github {
        font-size: 30px;
      }

      .demo {
        display: flex;
        gap: 40px;
        align-items: center;

        .githubb {
          display: flex;
          align-items: center;
          gap: 10px;

          .name {
            color: #767676;
          }
        }

        .btn-demo {
          padding: 10px 20px;
          border-radius: 15px;
          background: #e11d48;
          border: 0;
          color: #FFFFFF;

          a {
            text-decoration: none;
            color: #FFFFFF;
          }

          &:hover {
            background: #fb7185;
          }
        }
      }

    }
  }
}


@media (max-width: 768px) {
  .section-three {
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 20px;

    .section-three-small {
      display: flex;
      margin-bottom: 30px;
      flex-direction: column;

      .img-home {
        height: auto;
        padding: 10px 30px;
        border-bottom: 1px solid grey;
        border-radius: 0;
      }

      .wrapper-information {
        width: 100%;

        .github {
          text-align: center;
        }

        .gioi-thieu {
          text-align: center;
        }

        .demo {
          margin: 0 auto;
        }
      }
    }
  }

}

@media (max-width: 1200px) {
  .section-three {
    padding: 40px 30px;
    margin-bottom: 50px;
  }
}
</style>