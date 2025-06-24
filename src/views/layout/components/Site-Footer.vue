<template>
  <div class="footer">
    <div class="container">
      <div class="footer-top">
        <ul>
          <li v-for="item in 5">
            <a href="#"><i class="iconfont icon-dianwei"></i>1100余家售后网点</a>
          </li>
        </ul>
      </div>
      <div class="footer-button">
        <div class="button-left" v-for="item in 5">
          <h3>选购指南</h3>
          <ul>
            <li class="item" v-for="item in 4">
              <a href="#">手机</a>
            </li>
          </ul>
        </div>
        <div class="button-right">
          <div class="phone" v-for="item in 2">
            <p>950816</p>
            <p>8:00-18:00(仅收市话费)</p>
            <a href="#">
              <i class="iconfont icon-dianwei"></i>
              <span class="text">人工客服</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  background-color: white;

  .container {
    .footer-top {
      height: 80px;
      border-bottom: 1px solid #e0e0e0;

      ul {
        display: flex;
        height: 100%;
        align-items: center;
        text-align: center;

        li {
          width: 100%;
          border-right: 1px solid #e0e0e0;

          &:last-child {
            border-right: none;
          }

          a {
            color: rgb(97, 97, 97);
            font-size: 18px;

            i {
              font-size: 24px;
            }
          }
        }
      }
    }

    .footer-button {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      text-align: center;

      .button-left {
        h3 {
          margin-bottom: 26px;
          font-size: 16px;
        }

        ul {
          .item {
            margin-top: 10px;
            font-size: 14px;
            color: rgb(97, 97, 97);
          }
        }
      }

      .button-right {

        & .phone:first-child {
          border-left: 1px solid #e0e0e0;
        }

        .phone {
          width: 245px;
          margin-bottom: 20px;

          & p:first-child {
            font-size: 22px;
            color: #Ff6700;
          }

          p {
            font-size: 12px;
            color: rgb(97, 97, 97);
            margin-bottom: 5px;
          }

          a {
            width: 120px;
            height: 30px;
            display: flex;
            margin: 0 auto;
            border: 1px solid #Ff6700;
            color: #Ff6700;
            padding: 5px;
            align-items: center;
            justify-content: center;

            i {
              font-size: 14px;
            }

            .text {
              font-size: 14px;
            }
          }
        }
      }
    }
  }


}
</style>
