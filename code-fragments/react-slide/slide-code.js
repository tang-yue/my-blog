
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