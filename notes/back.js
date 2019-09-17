//  备注

<Col
  style={{
    width: "380px",
    display: "inline-block",
    verticalAlign: "middle"
  }}
>
  <FormItem label="学期名称">
    {getFieldDecorator("termId")(<Select
    showSearch
    defaultActiveFirstOption={false}
    showArrow={false}
    filterOption={false}
    onSearch={this.searchTermName}
    onChange={this.handleChange}
    notFoundContent={null}
    style={{width: "290px"}}
   >{termsList&&termsList.map((item,index) => (
    <Option key={index} value={item.term_id}>{item.term_name}</Option>
  ))}</Select>)}
  </FormItem>
</Col>


searchTermName = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: `${namespace}/searchTermName`,
      payload: {inputValue: value}
    })
  }

handleChange = (v) => {
  // console.log()
}

// models

*searchTermName({ payload }, { call, put }) {
  const { inputValue } = payload;
  const res = yield call(searchTermName, {termName: inputValue});
  if(res.data && res.data.err_code === 0) {
    yield put({
      type: "save",
      payload: {
        termsList: res.data.data
      }
    });
  } else {
    yield put({
      type: "save",
      payload: {
        termsList: []
      }
    });
  }
}



          // <Col
          //   style={{
          //     width: "280px",
          //     display: "inline-block",
          //     verticalAlign: "middle"
          //   }}
          // >
          //   <FormItem label="渠道组">
          //     {getFieldDecorator("channelGroupName")(<Select
          //     showSearch
          //     defaultActiveFirstOption={false}
          //     showArrow={false}
          //     filterOption={false}
          //     onSearch={this.searchGroupName}
          //     onChange={this.handleChange}
          //     notFoundContent={null}
          //     style={{width: "200px"}}
          //    >{groupNameArray&&groupNameArray.map((item, index) => (
          //     <Option key={index} value={item.groupName}>{item.groupName}</Option>
          //   ))}</Select>)}
          //   </FormItem>
          // </Col>