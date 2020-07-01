import React, { Component } from "react";
import { connect } from "dva";
import Cookie from "js-cookie";
import styles from "./City.less";
import StandardTable from "components/CityTable";
import NoPower from "components/NoPower";
import LoadingModal from "components/LoadingModal/LoadingModal.js";
import { judgePower } from "../../../utils/utils";
import moment from "moment";
import { 
  Button,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Select,
  Card,
  Modal,
  Checkbox,
  Icon,
  Spin,
  Tooltip,
} from "antd";

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;
// 所有的导出选项
const plainOptions = [
  { label: '城市', value: '城市' },
  { label: '城市等级', value: '城市等级' },
  { label: '账面消耗', value: '账面消耗' },
  { label: '现金消耗', value: '现金消耗' },
  { label: 'L1进班用户数', value: 'L1进班用户数' },
  { label: 'L1 CAC-投放', value: 'L1 CAC-投放' },
  { label: '续报用户数', value: '续报用户数' },
  { label: '年课CAC-投放', value: '年课CAC-投放' },
  { label: '续报率', value: '续报率' },
  { label: '续报结束用户百分比', value: '续报结束用户百分比' }
];
// 默认全选
const defaultCheckedList = ['城市','城市等级','账面消耗','现金消耗','L1进班用户数','L1 CAC-投放','续报用户数','年课CAC-投放','续报率', '续报结束用户百分比'];
const namespace = 'city';
const { RangePicker } = DatePicker;
const { Option } = Select;

@connect(({ login, channels, subchannel, city, loading }) => ({
  login,
  subchannel,
  channels,
  city,
  loading: loading.models.city
}))
@Form.create()

export default class Manage extends Component {
  state = {
    searchValue: {},
    fieldValue: {notRuleState: 'PEDDING_EFFECT'},
    reset: false,
    recordId: null,
    watchDetailsVisible: false,
    modifyCPSVisible: false,
    visible: false,
    checkedList: defaultCheckedList,
    indeterminate: false,
    checkAll: true,
    channelGroupList: [],
    channelId: null,
    startDate: null,
    endDate: null,
    flag: false,
    emptyArray: {list:[]}
  };

  componentDidMount() {
    this.setState({
      searchValue: {},
      fieldValue: {},
      channelGroupList: []
    });
  }

  requestData(values, filters, sorter) {
    const { dispatch } = this.props;
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = (myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : myDate.getMonth() + 1;
    let day = myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
    let currentStartDate = `${year}${month}${day}`;
    let currentEndDate = `${year}${month}${day}`;
    // state
    let searchValue = {
      channelGroupList: this.state.channelGroupList,
      channelId: this.state.channelId,
      startDate: this.state.startDate || currentStartDate,
      endDate: this.state.endDate || currentEndDate,
    };
    this.setState({
      reset: false
    });
    // 排序
    let orderColumn = 'l1_class_into_cnt';
    let orderType = 'desc';
    if(sorter.field) {
      if(sorter.order === 'ascend') {
        orderType = 'asc';
        orderColumn = sorter.field;
      } else {
        orderType = 'desc';
        orderColumn = sorter.field;
      }
    }
    dispatch({
      type: `${namespace}/fetch`,
      payload: {
        pageSize: values["pageSize"],
        pageNum: values["current"],
        orderType: orderType,
        orderColumn: orderColumn,
        ...searchValue
      }
    });
    this.setState({
      fieldValue: {
        pageSize: values["pageSize"],
        pageNum: values["current"],
        flag: true
      }
    });
  }

  handleTime = (time_moment, str) => {
    if(!time_moment) return undefined;
    return moment(Math.floor(time_moment)).format("L").split(/\//g).join('-') + str
  }
  // 查询
  handleSearch  = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    this.setState({
      reset: false
    });
    form.validateFields((err, fieldsValue) => {
      // 日期
      let createStart = fieldsValue.ctime && fieldsValue.ctime[0]
        ? moment(Math.floor(fieldsValue.ctime[0]["_d"])).format().slice(0, 10).replace(/T/g, " ")
        : undefined;
      let createEnd = fieldsValue.ctime && fieldsValue.ctime[1]
        ? moment(Math.floor(fieldsValue.ctime[1]["_d"])).format().slice(0, 10).replace(/T/g, " ")
        : undefined;
      // 渠道组
      let channelGroupList = this.state.channelGroupList;
      // 渠道ID
      let channelId = fieldsValue.channelId ? fieldsValue.channelId : null;
      dispatch({
        type: `${namespace}/fetch`,
        payload: {
          ...fieldsValue,
          channelGroupList,
          channelId,
          startDate: createStart.replace(/\-/g,""),
          endDate: createEnd.replace(/\-/g,""),
        }
      });
      this.setState({
        searchValue: {
          ...fieldsValue,
        },
        fieldValue: {},
        channelGroupList,
        channelId,
        startDate: createStart.replace(/\-/g,""),
        endDate: createEnd.replace(/\-/g,""),
        flag: true
      });
    })
  }
  // 渠道组
  searchGroupName = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: `subchannel/searchGroupName`,
      payload: {inputValue: value}
    })
  }

  handleChange = (value) => {
    // console
  }
  // modal:chooseItem
  chooseItem = () => {
    this.setState({visible: true});
  }
  // modal
  handleCancel = () => {
    this.setState({visible: false});
  }
  // 下载excel数据
  handleOk = () => {
    let myDate = new Date();
    let year = myDate.getFullYear();
    let month = (myDate.getMonth() + 1) < 10 ? "0" + (myDate.getMonth() + 1) : myDate.getMonth() + 1;
    let day = myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
    let currentStartDate = `${year}${month}${day}`;
    let currentEndDate = `${year}${month}${day}`;
    let exportParam =  {
      userId: parseInt(Cookie.get('staffUserId'), 10),
      startDate: this.state.startDate || currentStartDate,
      endDate: this.state.endDate || currentEndDate,
      channelId: this.state.channelId,
      channelGroupList: this.state.channelGroupList,
      titles: this.state.checkAll ? defaultCheckedList : this.state.checkedList
    };
    const { dispatch } = this.props;
    dispatch({
      type: `${namespace}/exportExcel`,
      payload: {
        ...exportParam
      }
    })
  }

  disabledDate = (current) => {
    return current < 1556640000000 || current > moment().endOf('day');
  }

  renderForm() {
    const { form, subchannel, dispatch, city: { loadTime } } = this.props;
    const { getFieldDecorator } = form;
    const { groupNameArray } = subchannel;
    // 渠道组
    const selectChannel = (v) => {
      this.setState({
        channelGroupList: v
      })
    }
    // onChangeDate
    const onChangeDate = (value, dateString) => {
      // let test1 =  new Date(dateString[0]).getTime();
    }
    // onOkDate
    const onOkDate = (value) => {
      this.setState({reset: false});
      let createStart = value && value[0]
        ? moment(Math.floor(value[0]["_d"])).format().slice(0, 10).replace(/T/g, " ")
        : undefined;
      let createEnd = value && value[1]
        ? moment(Math.floor(value[1]["_d"])).format().slice(0, 10).replace(/T/g, " ")
        : undefined;
        this.setState({
          startDate: createStart.replace(/\-/g,""),
          endDate: createEnd.replace(/\-/g,""),
          flag: true
        });
        // state
        let searchValue = {
          channelId: this.state.channelId,
          channelGroupList: this.state.channelGroupList,
        };
        dispatch({
          type: `${namespace}/fetch`,
          payload: {
            startDate: createStart.replace(/\-/g,""),
            endDate: createEnd.replace(/\-/g,""),
            ...searchValue
          }
        })
    }
    // 渠道ID
    const selectChannelId = (v) => {this.setState({channelId: v.target.value ? v.target.value : null})}
    return (
      <Form
        onSubmit={this.handleSearch}
        layout="inline"
        style={{ marginBottom: "15px" }}
      >
        <Row>
          <Col className={styles.title}>广告城市数据</Col>
          <Col className={styles.updateTime}>{loadTime ? `数据更新于 ${loadTime}` : ''}</Col>
          <Col className={styles.timestamp}>
            <FormItem label="">
              {getFieldDecorator("ctime", {
                initialValue: [moment().startOf('day'), moment().endOf('day')],
              })(
                <RangePicker
                  style={{width:"230px"}}
                  disabledDate={this.disabledDate}
                  ranges={{
                    "今天": [moment().startOf('day'), moment().endOf('day')],
                    "昨天": [moment().subtract(1, 'days').startOf('day'),moment().subtract(1, 'days').endOf('day')],
                    '过去7天': [moment().startOf('day').subtract(6, 'days'), moment().endOf('day')],
                    '过去30天': [moment().startOf('day').subtract(29, 'days'), moment().endOf('day')],
                    "本周": [moment().startOf("week"), moment().endOf("week")],
                    "上周": [moment().subtract(1, 'weeks').startOf("week"), moment().subtract(1, 'weeks').endOf("week")],
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')],
                  }}
                  showToday
                  showTime
                  format="YYYY.MM.DD"
                  onChange={onChangeDate}
                  onOk={onOkDate}
                />
              )}
            </FormItem>
            <div style={{marginLeft:"60px"}}>2019-05-01 才开始有数据</div>
          </Col>
          <Col className={styles.export}>
            <Button onClick={this.chooseItem}>导出</Button>
          </Col>
        </Row>
        <Row style={{marginTop:"10px"}}>
        <Col
            style={{
              width: "360px",
              display: "inline-block",
              verticalAlign: "top"
            }}
          >
            <FormItem label="渠道组">
            {getFieldDecorator("channelGroupList",{
              initialValue: [],
              rules: [
                {
                  // message: "渠道组不能为空",
                  type: 'array'
                }
              ]
            })(<Select
            allowClear
            showSearch
            mode="multiple"
            defaultActiveFirstOption={false}
            showArrow={true}
            filterOption={false}
            onSearch={this.searchGroupName}
            notFoundContent={null}
            style={{width: "260px", position:'absolute',zIndex:"99", marginTop:"-16px"}}
            onChange={selectChannel}
            placeholder="默认选择全部渠道组"
            >
            {/* <Option key={0} value={null}>全部</Option> */}
            {groupNameArray&&groupNameArray.map((item, index) => (
            <Option key={index} value={item.id}>{item.groupName}</Option>
          ))}</Select>)}
          </FormItem>
          </Col>
          <Col
            style={{
              width: "260px",
              display: "inline-block",
              verticalAlign: "top"
            }}
          >
            <FormItem label="渠道ID">
              {getFieldDecorator("channelId")(
                <Input style={{ width: "160px" }} placeholder="请输入渠道ID" onChange={selectChannelId} />
              )}
            </FormItem>
          </Col>
          <Col
            style={{
              display: "inline-block",
              verticalAlign: "bottom"
            }}
          >
          <Button type="primary" htmlType="submit">查询</Button>
          </Col>
        </Row>
      </Form>
    );
  }

  // 全选
  onCheckAllChange = e => {
    let newArray = [];
    plainOptions.forEach((item) => {
      newArray.push(item.value);
    });
    this.setState({
      checkedList: e.target.checked ? newArray : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };
  // 列头旁边的小问号
  titleFunc(num) {
    const data = [
      {title: "现金消耗", details: "现金消耗 = 账面消耗 / 充值优惠比例"},
      {title: "L1 进班人数", details: "L1 进班人数 ≈ 激活数"},
      {title: "L1 CAC-投放", details: "L1 CAC-投放 = 现金消耗 / 激活数；微信内渠道，不用激活，激活数等于支付人数；微信外渠道，需要激活，激活数是实际激活的人数"},
      {title: "续报人数", details: "续报人数数据来自于商分，延迟 1 天"},
      {title: "年课CAC-投放", details: "年课CAC-投放 = 现金消耗 / 续报人数，续报人数延迟 1 天"},
      {title: "续报率", details: "续报率数据来自于商分，延迟 1 天"},
      {title: "续报结束用户百分比", details: "续报结束用户百分比数据来自于商分，延迟1天"},
    ]
    return <span>
    <Tooltip placement="top" title={data[num].details}><span style={{cursor: "pointer"}}><Icon type="question-circle" /></span></Tooltip>
    <span>{data[num].title}</span>
  </span>  }

  // 千分号分隔,2位小数
  formatNumberRgx(num) {
    let newNum = Number(num).toFixed(2);
    var parts = newNum.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  // 千分号分隔
  formatNumber(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  // 百分比
  perecnt(num) {
    return (Number(num)*100).toFixed(2) + "%";
  };

  render() {
    const {
      city: {
        loadingData,
        totalNum,
        billingRecordData,
        count
      },
      login: { userInfo },
      loading,
    } = this.props;
    const {
      reset, 
    } = this.state;
    // loading
    const LoadingModalContent = () => {
      return (
        <div style={{ width: "100%" }}>
          <Spin size="large" style={{ width: "100%", margin: "0 auto" }} />
          <div style={{ color: "#1890ff", marginTop: "15px" }}>
            数据量较大，正在导出...
          </div>
        </div>
      );
    };
    const loadingModalProps = {
      loadingVisible: loadingData,
      width: "10%",
      maskStyle: { backgroundColor: "rgba(255,255,255,0.0001)" },
      content: LoadingModalContent,
      bodyStyle: {
        backgroundColor: "rgba(0,0,0,0.4)",
        width: "100%",
        borderRadius: "25px",
        padding: "18px 15px 15px 15px"
      }
    };
    
    // 复选框
    const onChange = (checkedValues) => {
      // console.log('checked = ', checkedValues);
      this.setState({
        checkedList: checkedValues || [],
        indeterminate: false,
        checkAll: checkedValues.length === plainOptions.length ? true : false,
      });
    }
    
  const columns = [
    {
      title: "城市",
      dataIndex: 'city',
      key: "city",
      width: 90,
      render: (v) => {
        return <span>{v && v === 'total' ? '累计(全部页)' : v ? v : '--'}</span>
      }
    },
    {
      title: "城市等级",
      dataIndex: 'city_level',
      key: "city_level",
      width: 100,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? v : '--'}</span>
      }
    },
    {
      title: "账面消耗",
      dataIndex: "book_consumption",
      key: "book_consumption",
      width:125,
      sorter: true,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? this.formatNumberRgx(v) : v}</span>
      }
    },
    {
      title: this.titleFunc(0),
      dataIndex: "cash_consumption",
      key: "cash_consumption",
      width:140,
      sorter: true,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? this.formatNumberRgx(v) : v}</span>
      }
    },
    {
      title: this.titleFunc(1),
      dataIndex: "l1_class_into_cnt",
      key: "l1_class_into_cnt",
      width:110,
      sorter: true,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? this.formatNumber(v) : v}</span>
      }
    },
    {
      title: this.titleFunc(2),
      dataIndex: "l1_cac",
      key: "l1_cac",
      width:125,
      sorter: true,
      render: (text, record) => {
        return <span>{record && record.l1_cac && record.l1_cac === 'total' ? '--' :
        record && record.l1_cac ? this.formatNumberRgx(record.l1_cac) :
        record && record.l1_class_into_cnt ? record.l1_cac : "--"
      }</span>
      }
    },
    {
      title: this.titleFunc(3),
      sorter: true,
      dataIndex: "annual_buy_cnt",
      key: "annual_buy_cnt",
      width:125,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? this.formatNumber(v) : v}</span>
      }
    },
    {
      title: this.titleFunc(4),
      dataIndex: "annual_cac",
      key: "annual_cac",
      width:120,
      sorter: true,
      render: (text, record) => {
        return <span>{record && record.annual_cac && record.annual_cac === 'total' ? '--' :
        record && record.annual_cac ? this.formatNumberRgx(record.annual_cac) :
        record && record.annual_buy_cnt ? record.annual_cac : "--"
      }</span>
      }
    },
    {
      title: this.titleFunc(5),
      dataIndex: "annual_buy_rate",
      key: "annual_buy_rate",
      width: 120,
      sorter: true,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? this.perecnt(v) : v}</span>
      }
    },
    {
      title: this.titleFunc(6),
      dataIndex: "l1_flashsale_finish_rate",
      key: "l1_flashsale_finish_rate",
      width: 120,
      render: (v) => {
        return <span>{v && v === 'total' ? '--' : v ? this.perecnt(v) : v}</span>
      }
    }
  ]
  let condition = reset ? !loading : true;
  return (
    <div>
      {judgePower(userInfo, "ads_city_preview") ?(
      <div>
      {condition ? (
      <Card bordered={false}>
      <div>
        {this.renderForm()}
      <div className={styles.explain}>{count ? `下面是 ${count} 个渠道对应的城市分布数据:` : null}</div>
        <StandardTable
          selectedRows={3}
          loading={loading}
          data={this.state.flag ? billingRecordData : this.state.emptyArray}
          columns={columns}
          rowKey={(record, index) => index}
          onChange={this.requestData.bind(this)}
        />
      </div>
      {totalNum ? (
        <div style={{ marginTop: "-45px",height: "35px" }}>总共<span style={{ color: "#40a9ff" }}>{totalNum && totalNum > 1 ? (totalNum - 1) : totalNum}</span>条数据</div>
      ) : null}
      {loadingData ? <LoadingModal {...loadingModalProps} /> : null}
      <Modal
        title="导出内容选择"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width={580}
      >
        <p>导出选项</p>
        <Checkbox
          indeterminate={this.state.indeterminate}
          onChange={this.onCheckAllChange}
          checked={this.state.checkAll}
        >
          全选
        </Checkbox>
        <br />
        <br />
        <CheckboxGroup
          style={{ width: '100%' }} 
          options={plainOptions}
          value={this.state.checkedList}
          onChange={onChange}
        />
        <br />
      </Modal>
      </Card>
      ): (
        <div>
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </div>
      )}
      </div>
      ):<NoPower />}
    </div>
    )
  }
}
