蓝湖需求链接  https://lanhuapp.com/web/#/item/project/board?pid=c1970e31-29a8-40c2-82ea-180c7fd06edc

https://mp.testing1.pipacoding.com/fe-wx-pub/punch-detail/1990/level/1/unit/1?gradeLevel=1

`https://hd.pipabiancheng.com/invite-detail?userId=${inputUserId}`

<div>
                        <div></div>
                        <TextArea
                            id={'1'}
                            placeholder="请输入内容"
                            autosize={{ minRows: 2, maxRows: 6 }}
                            style={{width: '100%', color: radio1 ? radio1 : 'rgba(0, 0, 0, 0.65)'}}
                            value={inputContent1}
                            onChange={(e) => inputContent(e)}
                            onFocus={(e) => inputFocus(e)}
                        />
                    </div>
                    <div>
                        <div></div>
                        <Radio.Group onChange={(e) => radioChange(e)} value={radio1}>
                            <Row>
                                <Radio id={'1'} value="#D9001B"><span className={styles.radioColor1}>#D9001B</span></Radio>
                                <Radio id={'1'} value="#169BD5"><span className={styles.radioColor2}>#169BD5</span></Radio>
                                <Radio id={'1'} value="#F59A23"><span className={styles.radioColor3}>#F59A23</span></Radio>
                                <Radio id={'1'} value="#333333"><span className={styles.radioColor4}>#333333</span></Radio>
                            </Row> 
                        </Radio.Group>
                    </div>
                    <div>
                        <div>服务名称：</div>
                        <TextArea
                            id={'2'}
                            placeholder="请输入内容"
                            autosize={{ minRows: 2, maxRows: 6 }}
                            style={{width: '100%', color: radio2 ? radio2 : 'rgba(0, 0, 0, 0.65)'}}
                            value={inputContent2}
                            onChange={(e) => inputContent(e)}
                            onFocus={(e) => inputFocus(e)}
                        />
                    </div>
                    <div>
                        <div></div>
                        <Radio.Group onChange={(e) => radioChange(e)} value={radio2}>
                            <Row>
                                <Radio id={'2'} value="#D9001B"><span className={styles.radioColor1}>#D9001B</span></Radio>
                                <Radio id={'2'} value="#169BD5"><span className={styles.radioColor2}>#169BD5</span></Radio>
                                <Radio id={'2'} value="#F59A23"><span className={styles.radioColor3}>#F59A23</span></Radio>
                                <Radio id={'2'} value="#333333"><span className={styles.radioColor4}>#333333</span></Radio>
                            </Row>
                        </Radio.Group>
                    </div>
                    <div>
                        <div>服务进度：</div>
                        <TextArea
                            id={'3'}
                            placeholder="请输入内容"
                            autosize={{ minRows: 2, maxRows: 6 }}
                            style={{width: '100%', color: radio3 ? radio3 : 'rgba(0, 0, 0, 0.65)'}}
                            value={inputContent3}
                            onChange={(e) => inputContent(e)}
                            onFocus={(e) => inputFocus(e)}
                        />
                    </div>
                    <div>
                        <div></div>
                        <Radio.Group onChange={(e) => radioChange(e)} value={radio3}>
                            <Row>
                                <Radio id={'3'} value="#D9001B"><span className={styles.radioColor1}>#D9001B</span></Radio>
                                <Radio id={'3'} value="#169BD5"><span className={styles.radioColor2}>#169BD5</span></Radio>
                                <Radio id={'3'} value="#F59A23"><span className={styles.radioColor3}>#F59A23</span></Radio>
                                <Radio id={'3'} value="#333333"><span className={styles.radioColor4}>#333333</span></Radio>
                            </Row>
                        </Radio.Group>
                    </div>
                    <div>
                        <div></div>
                        <TextArea
                            id={'4'}
                            placeholder="请输入内容"
                            autosize={{ minRows: 2, maxRows: 6 }}
                            style={{width: '100%', color: radio4 ? radio4 : 'rgba(0, 0, 0, 0.65)'}}
                            value={inputContent4}
                            onChange={(e) => inputContent(e)}
                            onFocus={(e) => inputFocus(e)}
                        />
                    </div>














                    --------------------------------------------------------

                    <div style={{display: 'flex'}}>
                <div className={styles.left}>
                    
                    <div>
                        <div></div>
                        
                    </div>
                    <div>
                       <div style={{width: "118px"}}>链接类型：</div>
                       <Radio.Group onChange={(e) => radioChange(e)} value={radio5}>
                            <Radio id={"5"} value={'h5'}>h5页面</Radio>
                            <Radio id={"5"} value={"small"}>小程序</Radio>
                       </Radio.Group>
                    </div>
                    {radio5 === 'h5' ? <div style={{display: 'flex', marginTop: "15px"}}>
                        <div style={{width: "145px", textAlign: "right"}}>h5链接地址：</div>
                        <Input
                            id="5"
                            placeholder="请输入h5链接地址"
                            style={{width: '100%'}}
                             value={inputContent5}
                            onChange={(e) => inputContent(e)}
                            onFocus={(e) => inputFocus(e)}
                        />
                    </div>:<div>
                    <div style={{display: 'flex', marginTop: "15px", alignItems: "center"}}>
                        <div style={{width: "120px", textAlign: "right"}}>选择小程序：</div>
                        <Select onChange={selectApplet} defaultValue={appId} placeholder="选择小程序" style={{marginLeft: '0px', width: "150px"}}>
                            <Option value="wxa1e9270686c9ef53">拼团小程序</Option>
                            <Option value="wxc1d9bd27af881834">家长端小程序</Option>
                            <Option value="wx8eb5dfc2b9a85c92">核桃学员风采</Option>
                        </Select>
                    </div>
                    <div style={{display: 'flex', margin: "15px 0 0 0"}}>
                        <div style={{width: "145px", textAlign: "right"}}>小程序链接地址：</div>
                        <Input
                            id="6"
                            placeholder="请输入小程序链接地址"
                            style={{width: '100%'}}
                             value={inputContent6}
                            onChange={(e) => inputContent(e)}
                            onFocus={(e) => inputFocus(e)}
                       />
                    </div>
                    </div>}
                </div>
                <div className={styles.inputLabel}>
                    <span>可输入标签</span>
                    <p onClick={() => getValue('#学员wxname#')} >#学员wxname#</p>
                    <p onClick={() => getValue('#被邀请人的wxname#')}>#被邀请人的wxname#</p>
                    <p onClick={() => getValue('#活动名称#')}>#活动名称#</p>
                    <p onClick={() => getValue('#目前邀请到的新用户总数#')}>#目前邀请到的新用户总数#</p>
                    <p onClick={() => getValue('#邀请人应获得的礼物#')}>#邀请人应获得的礼物#</p>
                    <p onClick={() => getValue('#下一阶礼物#')}>#下一阶礼物#</p>
                    <p onClick={() => getValue('#到达下一阶需要邀请的人数#')}>#到达下一阶需要邀请的人数#</p>
                    <p onClick={() => getValue('#活动开始时间#')}>#活动开始时间#</p>
                    <p onClick={() => getValue('#活动结束时间#')}>#活动结束时间#</p>
                </div>
            </div>
            <div className={styles.btnModal}>
                <Button
                  type="primary"
                  onClick={onCancel}
                  className={styles.cancel}
                >
                  取消
                </Button>
                <Button type="primary" onClick={confirm} className={styles.confirm}>
                  确认
                </Button>
            </div>