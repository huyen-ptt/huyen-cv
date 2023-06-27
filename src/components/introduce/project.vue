<template>
  <div id="projects" class="section-three">
    <div class="section-three-small">
      <div class="title-section-three">
        <img class="img-home" src="@/assets/page_new/home.png"/>
      </div>
      <div class="wrapper-information">
        <a class="github" href="https://huyenptt-instagram.netlify.app/" target="_blank">Giao diện Instagram</a>
        <div class="gioi-thieu">Website hiện thị giao diện gần giống với trang Instagram. Bao gồm các trang như Home,
          Explore Reels
          ,Messegnger, và Profile. Instagram ...
        </div>
        <div class="demo">
          <a href="https://github.com/phamthanhhuyen19124/instagram-ui" class="githubb" target="_blank">
            <i class="fa-brands fa-github"></i>
            <div class="name">Github</div>
          </a>
          <a class="link-demo btn-demo" href="https://huyenptt-instagram.netlify.app/" target="_blank">
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section-three {
  background-color: #f9f9f9;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .section-three-small {
    display: flex;
    max-width: 1200px;
    align-items: center;
    gap: 20px;
    padding: 15px;
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
          .name{
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
    gap:0px;
    padding: 20px;
    .section-three-small{
      display: flex;
      flex-direction: column;
      .img-home{
        height: auto;
        padding: 10px 30px;
        border-bottom: 1px solid grey;
        border-radius: 0;
      }
      .wrapper-information{
        width: 100%;
        .github{
          text-align: center;
        }
        .gioi-thieu{
          text-align: center;
        }
        .demo{
          margin: 0 auto;
        }
      }
    }
  }

}
@media (max-width:1200px ) {
  .section-three{
    padding:40px 30px ;
    margin-bottom: 50px;
  }
}
</style>