<template>
        <main class="container">
            <div class="container-text">
                <h1 class="title">Página en construcción</h1>
                <h2 class="subtitle">Pronto estará disponible!</h2>
                <a href="https://github.com/DavidK1412" class="cta"><i class="fab fa-github"></i>GitHub</a>
            </div>
            <div class="img-container">
                <img src="../assets/img1.svg" alt="" class="img">
            </div>
            <img src="../assets/Vector_1.svg" alt="" class="wave">
        </main>
</template>

<script>
export default {
    name: "soon",   
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');
    
    .container{
        position: relative;
        height: 600px;
        display: flex;
        align-items: center;
    }
   
   .wave{
       position: absolute;
       top: 0;
       right: 0;
       width: 50%;
   }

   .container-text{
       flex-basis: 50%;
       padding-left: 40px;
       overflow: hidden;
       color: #000000;
   }

   .container-text h1 h2{
       border: 1px solid #000000;
   }

   .title{
       font-size: 50px;
   }

   .subtitle{
      font-size: 30px;
      font-weight: 500; 
      margin: 20px 0;
   }

    .cta{
        display: inline-block;
        width: 150px;
        padding: 15px 0;
        text-align: center;
        background: #FFFFFF;
        border-radius: 4px;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 16px;
        font-weight: bold;
        color: #000000;
        /**linear-gradient(90deg, #FFFFFF 80.2%, #000000 80.21%) */
    }

    .cta i{
        font-size: 20px;
        padding-right: 5px;
    }

    .img-container{
        flex-basis: 50%;
        position: relative;
        z-index: 1;
        text-align: center;
        overflow: hidden;
    }

    .img{
        width: 95%;
        animation: ilustrationAnimate ease-in 1s infinite;
    }

    @keyframes ilustrationAnimate {
        0%{
            transform: scale(1);
        }100%{
            transform: scale(1.02);
        }
    }

    @media screen and (max-width: 800px){
        .container{
            flex-direction: column-reverse;
        }
        .wave{
            width: 80%;
        }
        .container-text{
            display: flex;
            flex-direction: column;
            padding-left: 0;
            justify-content: center;
            align-items: center;
            flex-basis: 40%;
            text-align: center;
        }

        .title{
            font-size: 40px;
        }

        .subtitle{
            font-size: 20px;
        }

        .img-container{
            flex-basis: 60%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .img{
            height: 90%;
        }
    }

    @media screen and (max-width: 500px){
        .wave{
            width: auto;
            height: 48%;
        }

        .container-text{
            flex-basis: 40%;
            justify-content: flex-start;
        }

        .title{
            font-size: 35px;
        }
    }

</style>