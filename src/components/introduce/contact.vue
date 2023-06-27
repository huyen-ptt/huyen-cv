<template>
  <div id="contact" class="section-four">
    <div class="bao">
      <div class="item-one">
        CONTACT
      </div>
      <!--      <div class="item-two">Don't be shy! Hit me up! 👇</div>-->
      <div class="thong-tin">
        <div class="item-thong-tin">
          <div class="circle">
            <i class="fa-solid fa-phone"></i>
          </div>
          <div class="bao-local">
            <div class="local">Phone Number</div>
            <a class="current-position" href="tel:0981156216">0981156216</a>
          </div>
        </div>
        <div class="item-thong-tin">
          <div class="circle">
            <i class="fa-solid fa-envelope-open-text"></i>
          </div>
          <div class="bao-local">
            <div class="local">Mail</div>
            <a class="current-position" href="mailto:phamhuyen19124@gmail.com">phamhuyen19124@gmail.com</a>.<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.section-four {
  background-color: #ffffff;
  font-size: 10px;
  padding: 110px 0px;
  .bao{
    max-width: 950px;
    margin: 0 auto;
    .item-one {
      color: #147efb;
      font-size: 27px;
      font-weight: 700;
      margin: 0px 0px 10px;
    }

    .item-two {
      color: #2d2e32;
      font-size: 25px;
      font-weight: 700;
    }

    .thong-tin {
      display: flex;
      font-size: 10px;
      gap: 80px;
      margin: 60px 0px 0px;

      .item-thong-tin {
        display: flex;
        align-items: center;
        gap: 20px;

        .local {
          color: #2d2e32;
          font-size: 17px;
          font-weight: 700;
        }

        .current-position {
          color: #767676;
          font-size: 17px;

          &:hover {
            color: #147efb;
            cursor: pointer;
          }
        }
      }

      .circle {
        background-color: #ffffff;
        border-radius: 999px;
        box-shadow: 0 0 10px rgba(0,0,0,.09);
        font-size: 10px;
        padding: 23px;
        width: 77px;
        height: 74px;

        i {
          color: #147efb;
          font-size: 30px;
          font-weight: 900;
          line-height: 30px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .section-four{
    width: 100%;
    .item-one{
      text-align: center;
    }
    .item-two{
      text-align: center;
    }
    .bao{
      width: 100%;
      .thong-tin{
        display: flex;
        flex-direction: column;
        .item-thong-tin{
          display: flex;
          flex-direction: column;
          justify-content: center;
          .bao-local{
            text-align: center;
          }
        }
      }
    }
  }
}
@media (max-width:1200px ) {
  .section-four{
    padding:0 30px ;
    margin-bottom: 50px;
  }
}
</style>