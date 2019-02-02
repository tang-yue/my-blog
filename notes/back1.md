html,
body {
    padding: 0;
    margin: 0;
    width: 100%;
    font-family: PingFang, SC, Microsoft Yahei, WenQuanYi Micro Hei, Helvetica,Arial,Hiragino Sans GB, sans-serif;
    color: #495060;
    font-size: 16px;
}
ul,
li {
    padding: 0;
    margin: 0;
    list-style: none;
}
a {
    color: #fff;
    text-decoration: none;
}
p {
    font-family: PingFang, SC, Microsoft Yahei, WenQuanYi Micro Hei, Helvetica,Arial,Hiragino Sans GB, sans-serif;
    padding: 0;
    margin: 0;
}
.clearfix::after {
    display: block;
    content: '';
    clear: both;
}
.walnut-container {
    min-width: 1180px;
    width: 100%;
}
/*   扫码领取部分  */
/* 弹框的外面是一个固定定位 */
/*.active {
    display: none;
}*/
.sweep-code {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(200, 200, 200, 0.3);
    display: none;
}
/*   内部这里是利用绝对定位，然后垂直居中 */
.sweep-code-main {
    position: relative;
    text-align: center;
    width: 548px;
    height: 548px;
    margin-top: -274px;
    margin-left: -274px;
    left: 50%;
    top: 50%;
    background-color: #fff;
    border-radius: 18px;
}
.sweep-code-main p:first-child {
    font-size: 36px;
}
.sweep-code-main p:nth-child(2) span:first-child {
    font-size: 40px;
}
.sweep-code-main p:nth-child(2) span {
    color: #de6d0f;
    font-size: 30px;
}
.sweep-code-main p:last-child {
    width: 66px;
    height: 66px;
    line-height: 66px;
    text-align: center;
    border-radius: 33px;
    font-size: 36px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #fff;
}

/* header */
.walnut-container .header-container {
    background-color: rgb(237, 109, 15);
    width: 100%;
}
.walnut-container header {
    width: 100%;
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.walnut-container header .header-logo {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/logo.png) no-repeat center;
    height: 80px;
    width: 240px;
    background-size: 200px auto;
}
.walnut-container nav {
    padding-top: 30px;
    display: flex;
}
.walnut-container header nav .menu-l a {
    margin-right: 40px;
}
.walnut-container header nav .menu-l a:hover {
    border-bottom: 3px rgba(255, 255, 255, 0.7) solid;
}
.walnut-container header nav .menu-r a {
    padding: 6px 24px;
    text-align: center;
    background-color: #fff;
    border-radius: 26px;
    color: #ed6d0f;
}
.walnut-container header nav .menu-r a:hover {
    background-color: rgba(255, 255, 255, 0.9);
}
/* index header 部分 */
.index-header .index-header-background-img {
    height: 590px;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/banner0_0.png) no-repeat center;
    background-size: auto 590px;
    background-color: #f3f4f3;
    position: relative;
}
.index-header .index-header-background-img .start-img,
.play-btn {
    width: 622px;
    height: 350px;
    position: absolute;
    top: 55.2%;
    left: 50%;
    margin-left: -307px;
    margin-top: 3px;
    text-align: center;
    border-radius: 9px;
    z-index: 5;
    cursor: pointer;
    display: block;
}
.index-header .play-btn img {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -50px;
    /*width: 100%;*/
    width: 100px;
    height: 100px;
    display: block;
}
.index-header .index-header-background-img .video-container {
    height: 350px;
    width: 622px;
    position: absolute;
    top: 55%;
    left: 50%;
    margin-left: -311px;
    z-index: 3;
    border-radius: 9px;
    border: 4px solid #ccc;
    box-shadow: 0 0 20px #ccc;
}

.index-header .index-header-background-img .video-container .pv-video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #000;
}
/*  扫二维码报名部分 */
.index-qr {
    padding-top: 115px;
    text-align: center;
}

.index-qr p {
    color: #7a6e67;
    font-size: 38px;
    text-align: center;
}
.index-qr p span {
    color: #ed6d0f;
    font-size: 56px;
}
.index-qr .index-QRCodeHit {
    color: #fff;
    height: 80px;
    font-size: 28px;
    line-height: 60px;
    margin: 20px auto;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/hint.png) no-repeat center;
    background-size: 360px 80px;
}
.index-qr img {
    width: 243px;
}
.index-qr .lightspot span {
        color: #7a6e67;
        font-size: 20px;
        padding-left: 25px;
        padding-right: 40px;
        background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/lightspot.png) no-repeat center left;
}
/*   首页的 数字时代，让孩子多一种可能部分  */

.index-possibleBox {
    width: 1180px;
    min-height: 625px;
    margin: 0 auto;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/back_0.png) no-repeat center bottom;
}
.index-small-title {
        margin-top: 70px;
        margin-bottom: 40px;
        text-align: center;
}
.index-small-title li {
    height: 86px;
    line-height: 86px;
}
.index-small-title li:last-child {
    color: #7a6e67;
    font-size: 36px;
    text-align: center;
}
.index-possible .index-possible-icon {
        background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center 10px;
}
.index-possible-main {
    width: 1180px;
    margin: 0 auto;
}
.index-possible-main .item {
    display: inline-block;
    width: 302px;
    border-radius: 9px;
    margin: 0 6px;
    border: 1px #d7d3d1 solid;
    float: left;    
}
.index-possible-main .item:nth-of-type(2) {
    margin: 0 120px;
}

.index-possible-main .item li:nth-of-type(1) {
    color: #fff;
    height: 53px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/quiz.png) no-repeat top center;
    background-size: 302px 53px;
}

.index-possible-main .item li:nth-of-type(2) {
    width: 280px;
    margin-top: 20px;
    margin-left: 11px;
    text-align: left;
    line-height: 30px;
    height: 100px;
}
/*  首页 编程让孩子 成为数字时代的创造者部分 */
.index-innovator {
    width: 100%;
    margin: 0 auto;
}
.index-innovator-background {
    height: 720px;
    width: 1180px;
    margin: 0 auto;
    position: relative;
}
.index-innovator-head {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center -120px;
}
.index-videoBox .index-video-item {
    float: left;
    width: 400px;
    overflow: hidden;
    margin-left: 20px;
    border-radius: 9px;
    padding-bottom: 8px;
    border: 1px #d7d3d1 solid;
}
.index-videoBox .index-video-item > ul li:nth-of-type(1) {
    background-color: #ed6d0f;
    height: 40px;
    line-height: 40px;
    padding-right: 18px;
    text-align: right;
    font-size: 16px;
    color: #fff;
}
.index-videoBox .index-video-item > ul li:nth-of-type(2) {
        font-size: 14px;
        color: #7a6e67;
}
.index-video-item ul li:not(:first-child) {
    margin-top: 8px;
    text-indent: 1.5em;
    font-weight: bold;
}
.index-videoBox .index-video-item > ul li:nth-of-type(3) {
    font-size: 14px;
    color: #a0a0a0;
}
.student-girl {
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 2;
    width: 340px;
}
/* 首页  编程简介部分 */
.controlWidth {
    width: 1180px;
    margin: 0 auto;
}
.index-intro {
    width: 100%;
    min-width: 1120px;
    margin: 0 auto;
}
.index-intro {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/back2_0_0.jpg) no-repeat center 76px;
    background-size: 1560px auto;
}
.index-intro .index-intro-head {
        background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center -250px;
}
.index-intro .index-introBox {
    padding-top: 220px;
    padding-bottom: 320px;
    /*height: 700px;*/
}
.index-intro .index-introBox > ul {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon0_0.png) no-repeat center 0px;
    width: 200px;
    margin: 20px 94px;
    text-align: center;
    float: left;
}
.index-introBox > ul > li:nth-child(1) {
    height: 50px;
}
.index-intro .index-introBox > ul:nth-child(1) li:nth-of-type(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_3.png) no-repeat center -87px;
}
.index-intro .index-introBox > ul li:nth-child(2) {
    height: 50px;
    font-size: 26px;
    overflow: hidden;
    font-weight:bold;
    line-height: 50px;
}
.index-intro .index-introBox > ul:nth-child(2) li:nth-of-type(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_3.png) no-repeat center -135px;
}
.index-intro .index-introBox > ul:nth-child(3) li:nth-of-type(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_3.png) no-repeat center -183px;
}
.index-intro .index-introBox > ul:nth-child(4) li:nth-of-type(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_3.png) no-repeat center -235px;
}
.index-intro .index-introBox > ul:nth-child(5) li:nth-of-type(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_3.png) no-repeat center -287px;
}
.index-intro .index-introBox > ul:nth-child(6) li:nth-of-type(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_3.png) no-repeat center -338px;
}
.index-introBox > ul li:nth-of-type(2) {
    height: 50px;
    font-size: 26px;
    overflow: hidden;
    font-weight: blod;
    line-height: 50px;
}
.index-introBox > ul li:nth-of-type(3),
.index-introBox > ul li:nth-of-type(4) {
    margin-top: 12px;
    font-size: 18px;
}

/* 首页 老师部分  */
.width {
    width: 100%;
    min-width: 1120px;
    margin: 0 auto;
}
.index-teacher .index-teacher-head {
        background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center 0px;
}
.index-teacher .index-teacherBox .item {
    width: 363px;
    height: 650px;
    margin: 20px 15px;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/teachers.png);
    background-size: 363px 650px;
    float: left;
}
.index-teacherBox img {
    width: 200px;
    margin-top: 38px;
    margin-left: 82px;
    border-radius: 100px;
}
.index-teacherBox li:nth-child(2) {
    margin-top: 46px;
    text-align: center;
    line-height: 35px;
    color: #ed6d0f;
}
.index-teacherBox li:nth-child(2) strong {
    font-size: 24px;
}
.index-teacherBox p {
    font-size: 24px;
}
.index-teacherBox li:nth-child(3) {
    width: 310px;
    margin: 0 auto;
    margin-top: 30px;
    line-height: 32px;
}
/*  首页  课程部分 */
.index-course .index-course-head {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/book.png) no-repeat center 0px;
}
.index-course .index-course-intro {
    text-align: center;
    margin-bottom: 40px;
}
.index-course .index-course-intro span {
    color: #ed6d0f;
}
.index-course img {
    width: 712px;
    position: relative;
    margin-left: -356px;
    left: 50%;
}
.index-course-level {
    height: 650px;
    position: relative;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/phase.png) no-repeat center bottom;
}
.index-course-level p:nth-child(1) {
    left: 135px;
    bottom: 100px;
    width: 200px;
}
.index-course-level p:nth-child(2) {
    left: 323px;
    bottom: 180px;
    width: 150px;
}
.index-course-level p:nth-child(3) {
    left: 500px;
    bottom: 255px;
    width: 160px;
}
.index-course-level p:nth-child(4) {
    left: 680px;
    bottom: 340px;
    width: 140px;
}
.index-course-level p:nth-child(5) {
    left: 870px;
    bottom: 420px;
    width: 150px;
}
.index-course-level p {
    position: absolute;
    padding: 2px 10px;
    padding-bottom: 80px;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/segmentation.png) no-repeat left bottom;
}
.index-course-level span {
    color: #ed6d0f;
}
/* 首页   收获部分   */
.index-harvest {
    height: 1060px;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/reap.png) no-repeat center bottom;
}
.index-harvest .index-harvest-head {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center -624px;
}
.index-step .index-step-head {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center -752px;
}
.index-stepBox ul {
    color: #fff;
    width: 220px;
    height: 150px;
    font-size: 20px;
    line-height: 30px;
    display: inline-block;
    margin-bottom: 80px;
}
.index-stepBox ul li {
    font-size: 16px;
    text-align: center;
}
.index-stepBox ul:not(:last-child) {
    margin-left: 10px;
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_4.png) no-repeat center 0px;
}
.index-stepBox ul:nth-child(1) li:nth-child(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_5.png) no-repeat center -76px;
}
.index-stepBox ul:nth-child(2) li:nth-child(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_5.png) no-repeat center -172px;
}
.index-stepBox ul:nth-child(3) li:nth-child(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_5.png) no-repeat center -358px;
}
.index-stepBox ul:nth-child(4) li:nth-child(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_5.png) no-repeat center -268px;
}
.index-stepBox ul:nth-child(5) li:nth-child(1) {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_5.png) no-repeat center -268px;
}
.index-stepBox ul:last-child {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_4.png) no-repeat center 0px;
}
.index-stepBox ul li:nth-child(1) {
    height: 80px;
}
.index-stepBox ul:not(:last-child) li {
    width: 200px;
}
/*  首页    家长评价部分     */
.index-evaluateBox {
    text-align: center;
    width: 860px;
    margin: 0 auto 50px;
}
.index-evaluate .index-evaluate-head {
    background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center -882px;
}
.index-evaluateBox span {
    margin: 5px;
    color: #7a6e67;
    font-size: 16px;
    padding: 6px 18px;
    display: inline-block;
    border-radius: 3px;
    border: 1px #7a6e67 solid;
}
.index-evaluateBox .tc {
    text-align: center;
}
.index-container {
    position: relative;
    width: 900px;
    margin: 0 auto;
    min-height: 620px;
}

.index-imdBox {
    height: 300px;
    transform-style: preserve-3d;
    margin: 50px auto;
    position: relative;
}
/*.index-imdBox:hover */
.index-imdBox .font {
    left: 0px;
}
.index-imdBox .back {
    left: 600px;
}
.index-imdBox .active {
    display: block;
    left: 300px;
    transform: scale(1.0);
    z-index: 10;
    opacity: 1;
}
.index-imdBox img {
    width: 300px;
    position: absolute;
    top: 60px;
    transition: all 0.3s linear;
    opacity: 0.5;
    transform: scale(0.8);
}
.index-container .index-btn {
    width: 240px;
    height: 462px;
}
.index-container .index-btn:hover {
    opacity: 1;
}
.index-container .btn-left {
    position: absolute;
    left: 30px;
    top: 114px;
}
.index-container .index-btn {
    width: 240px;
    height: 426px;
    line-height: 426px;
    display: block;
    /*position: absolute;*/
    cursor: pointer;
    z-index: 100;
    opacity: 0;
    transition: opacity .3s linear;
    position: absolute;
    text-align: center;
    /*top: 114px;*/
    /*left: 60px;*/
}
.index-container .btn-right {
        position: absolute;
        right: 30px;
        top: 114px;
}
.index-container .btn-right img {
    /*right: 0px;*/
}
/* 首页的常见问题 部分  */
.index-answer .index-answer-head {
        background: url(http://img.pipacoding.com/assets/pc/landingpage2.0/icon_1.png) no-repeat center -1006px;
}
.index-answerBox ul {
    text-align: left;
    width: 440px;
    height: 140px;
    margin-left: 120px;
    margin-bottom: 20px;
    float: left;
}
.index-answerBox ul li:first-child {
    font-size: 26px;
    color: #7a6e67;
}
.index-answerBox ul li:last-child {
    font-size: 16px;
    line-height: 30px;
}
/*  首页的底部部分   */
.index-footer {
    background-color: #333333;
}
.index-footerBox {
    width: 800px;
    height: 500px;
    margin: 0 auto;
}
.index-footerBox > img {
    width: 332px;
    margin-top: 80px;
    float: left;
}
.index-footerBox ul {
    margin-top: 146px;
    width: 362px;
    color: #fff;
    line-height: 28px;
    text-align: center;
}
.index-footerBox ul img {
    margin-bottom: 20px;
}
.index-footerBox .qr {
    text-align: center;
    float: right;
}
/* 右侧栏部分 */
.index-shortcut {
    width: 120px;
    border-radius: 5px;
    box-shadow: 0px 3px 5px #ccd;
    position: fixed;
    right: 25px;
    bottom: 90px;
    z-index: 3;
    padding-bottom: 10px;
    background-color: #fff;
    text-align: center;
}
.index-shortcut p:first-child {
    background-color: #ed6d0f;
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.index-shortcut img {
    width: 96px;
    cursor: pointer;
    margin: 12px 12px 0 12px;
}
.go-top {
    /*position: fixed;
    right: 0px;
    bottom: 10px;*/
    /*text-align: center;*/
}
.go-top img {
    width: 60px;
    position: fixed;
    right: 55px;
    bottom: 20px;
    cursor: pointer;
    display: '';
}
/*   公司运营时间 */
.index-run-time p {
    height: 50px;
    color: #333;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
}