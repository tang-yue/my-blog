主代码
```
import Slide4 from '../components/Slide/Slide';

const body5Data = ['学习更主动', '数学成绩提高了', '戒掉游戏的瘾了','孩子做事更有逻辑和条理', '线上的时间很方便','年龄从不是问题', '老师的服务都很棒'];
  const body5ImgData = [
    'G_3.jpg',
    'A_1.jpg',
    'A_2.jpeg',
    'A_3.jpg',
    'B_1.jpg',
    'B_2.jpg',
    'B_3.jpg',
    'C_1.jpg',
    'C_2.jpg',
    'C_3.jpg',
    'D_1.jpg',
    'D_2.jpg',
    'D_3.jpg',
    'E_1_new.jpg',
    'E_2.jpg',
    'E_3.jpg',
    'F_1.jpg',
    'F_2.jpg',
    'F_3.jpg',
    'G_1.jpg',
    'G_2.jpg',
    'G_3.jpg',
    'A_1.jpg',
  ]

  // slide renderBody5
  function renderBody5() {
    return (
      <div className={styles.body5Wrapper}>
        <Slide4 item={body5ImgData} title={body5Data} />
      </div>
    )
  }
```
组件js代码
```
import React, { Component } from "react";
import Swipeable from 'react-swipeable';
import { Flex, Progress } from 'antd-mobile';
import { config } from '../../utils/constants.js'

import styles from './Slide.css';

const pageWidth = config.pageWidth;
var now=undefined;

class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 'init',
            index: 0,
            percent: 0
        }
    }
    clickTitle(index) {
        now = 3*(index++);
        let imgSlide = document.querySelector('#imgSlide');
        let imgWidth = parseInt(this.getStyle(imgSlide,'width'));
        let imgMargin = parseInt(this.getStyle(imgSlide,'marginRight'));
        let totalItem = document.querySelector('#itemTotalWrapper');
        totalItem.style.left = -270.703 - now*(imgWidth+imgMargin) + 'px';
        this.setState({
            currentId: --index,
            percent: (1/20 * now)
        })
    }
    getStyle(obj,name) {
        if(obj.currentStyle) {
            return obj.currentStyle[name];
        } else {
            return getComputedStyle(obj, false)[name];
        }
    }
    slide(value,dire) {
        let imgSlide = document.querySelector('#imgSlide');
        let imgWidth = parseInt(this.getStyle(imgSlide,'width'));
        let imgMargin = parseInt(this.getStyle(imgSlide,'marginRight'));
        let totalItem = document.querySelector('#itemTotalWrapper');
        let left = this.getStyle(totalItem, 'left');
        if(dire) {
            if(value === 21 || value === -1) {
                totalItem.style.left= -270.703 + 'px';
                now=0;
            }else {
                totalItem.style.left = `${parseInt(left)-imgWidth-imgMargin}px`;
            }
        }else {
            if(value === 21) {
               totalItem.style.left= -270.703 + 'px';
               now=0;
            }else if(value === undefined || value === 0) {
               totalItem.style.left= -9110 + 'px';
               now=21;
            }
            else {
                totalItem.style.left = `${parseInt(left)+imgWidth+imgMargin}px`;
            }
        }
        this.setState({
            percent: (1/20 * now)
        })
    }
    slideRight() {
      if(now === undefined) {
        now = 0;
      }
       now = now + 1;
       this.slide(now,true);
    }
    slideLeft() {
        if(now === undefined) {
            now === undefined;
        }else {
            now = now - 1;
        }
        this.slide(now,false);
    }
    render() {
        const { currentId, percent } = this.state;
        const { item } = this.props;
        return (
            <div className={styles.body5}>
                <div className={styles.titleWrapper}>
                    {
                        this.props.title.map((item, index) => (
                            <div 
                                id={index} 
                                onClick={this.clickTitle.bind(this,index)} 
                                style={{backgroundColor:  (currentId === index) || (currentId === 'init' && index === 0) ? '#ed6d0f': '#fbeee6', color: (currentId === index) || (currentId === 'init' && index === 0) ? '#fff': ''}} 
                                key={index} 
                                className={styles.imgTitle}
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
                <div id="container" className={styles.container}>
                    <div id="itemTotalWrapper" className={styles.itemTotalWrapper}>
                    {
                        item.map((item, index) => (
                            <div className={styles.item} key={index}>
                                <img
                                    id="imgSlide" 
                                    src={`//img-hetao.oss-cn-beijing.aliyuncs.com/assets/new_landingpage/${item}`} 
                                />
                            </div>
                        ))
                    }
                    </div>
                    <div 
                        id="slideLeft" 
                        className={styles.slideLeft}
                        onTouchEnd={this.slideLeft.bind(this)}
                        >
                    </div>
                    <div
                        id="slideRight" 
                        className={styles.slideRight}
                        onTouchEnd={this.slideRight.bind(this)}
                        >
                    </div>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.innerBar} style={{width: `${percent *0.8 * pageWidth}rem`}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Slide;
```
组件css代码
```
.body5 .titleWrapper {
  font-size: 0.28rem;
  padding: 0 0.15rem;
  margin-bottom: 0.3rem;
}
.body5 .imgTitle {
  margin: 0 0.1rem;
  display: inline-block;
  background-color: #fbeee6;
  border-radius: 100px;
  padding: 8px 20px;
  margin-bottom: 0.2rem;
}
.body5 .container {
    width: 7.6rem;
    height: 7rem;
    position: relative;
    overflow: hidden;
}
.body5 .container .itemTotalWrapper {
   position: absolute;
   width: 103.5rem;
   height: 7rem;
   left: -2.75rem;
   top: 0;
}
.body5 .container .itemTotalWrapper .item {
    width:4.2rem;
    height: 7rem;
    float: left;
    margin-right: 0.3rem;
    display: block;
}
.body5 .container .itemTotalWrapper .item img {
    width: 4.2rem;
    height: 7rem;
    margin-right: 0.3rem;
    display: block;
}
.body5 .container .slideLeft {
    width: 3.8rem;
    height: 7rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index:10;
}
.body5 .container .slideRight {
    width: 3.8rem;
    height: 7rem;
    position: absolute;
    left: 3.8rem;
    top: 0;
    z-index:20;
}
.progressBar {
  margin: 0 auto;
  margin-top: 0.4rem;
  width: 80%;
  background-color: #ddd;
  display: block;
  border-radius: 25px; 
}
.progressBar .innerBar {
 border: 0.06rem solid #ed6d0f;
 border-radius: 25px;
}
```