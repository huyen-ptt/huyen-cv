<template>
  <div class="section-two" id="about">
    <div class="bao-anh">
      <img class="logo-section-three"
           src="https://icdn.dantri.com.vn/2021/03/23/meo-chup-anh-do-uong-cuc-dep-bang-dien-thoaidocx-1616516940852.jpeg"/>
    </div>
    <div class="about-me">
      <div class="title-one">Giới thiệu</div>
      <div class="title-two">Lập trình viên về Front-end sống tại Hà Nội, Việt Nam📍</div>
      <div class="title-three">
        Với tư cách là một lập trình viên Front-end, tôi biết về HTML, CSS, JavaScript, Vue, SCSS. Sở thích của tôi là đi xem phim và đi chơi với bạn bè.
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section-two {
  background: #FFFFFF;
  padding: 150px 0px;
  display: flex;
  gap: 100px;
  justify-content: center;

  .logo-section-three {
    width: 410px;
    height: 350px;
    border-radius: 17px;
    object-fit: cover;
  }

  .about-me {
    width: 480px;
    height: 230px;

    .title-one {
      color: #147efb;
      font-size: 17px;
      font-weight: 700;
      margin: 0px 0px 10px;
    }

    .title-two {
      color: #2d2e32;
      font-size: 25px;
      font-weight: 700;
      line-height: 35px;
      margin: 0px 0px 20px;
    }

    .title-three {
      color: #767676;
      font-size: 17px;
      font-weight: 500;
      line-height: 25px;
    }
  }
}

@media (max-width: 768px) {
  .section-two {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    .bao-anh{
      margin: 0 auto;
    }
    .logo-section-three {
     width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .about-me {
      width: 100%;
      height: 100%;

      .title-one {
        text-align: center;
      }

      .title-two {
        text-align: center;
      }

      .title-three {
        text-align: center;
        margin-bottom: 40px;
      }
    }
  }
}
@media (max-width:1200px ) {
  .section-two{
    padding:0 30px ;
    margin-bottom: 50px;
  }
}
</style>