// staff 后台 新增功能需求，编写代过程如下


<el-table-column
    label="状态">
    <template slot-scope="scope">
      <span v-if="scope.row.deleteStatus === 1">正常</span>
      <span else>禁用</span>
    </template>
</el-table-column>


<!-- 需要对后端接口文档提出的一些问题.

1. 查询账号  roleName字段没有返回
2. 查询的列表的操作里面是否应该有禁用操作
3. 账号使用记录接口，没有给 -->




<div style="width: 500px">
        <Input
          size="large"
          style="margin-bottom: 15px" 
          @on-change="triggerChange"
        >
          <Select v-model="select3" slot="prepend" style="width: 80px">
              <Option value="day">Day</Option>
              <Option value="month">Month</Option>
              <Option value="year">Year</Option>
          </Select>
          <Button 
            slot="append" 
            icon="ios-search"
            ></Button>
        </Input>
      </div>



      triggerChange(e) {
      if(e.data === null) {
        const arr = this.searchValue.split('')
        arr.pop();
        this.searchValue=arr.join('');
      } else {
        this.searchValue += e.data+'';
      }
      console.log('search', this.searchValue, this.select3);

    },



有好多个input, 请问我能不能写成遍历的方式呢。
暂时我是没有写的。


待做的
1、有好几个get请求，需要记得加上参数。ok
2、如何给table的头部，加上背景颜色。
3、如何让table里，小方格的元素居中。
4、删除账号要给提示.
5、一系列的loading，我到底要还是不要呢。
6、记录会跳过res,执行下面的代码，记录created的哪个


<el-button
            size="mini"
            type="primary"
            @click="modifyStaffInfo">
            {{curItem.staffInfo || JSON.stringify(newStaffInfo) !== '{}' ? '更换员工':'绑定员工'}}
          </el-button>

时间  员工ID  员工姓名  员工手机  类型  操作人


需要和后端一起讨论的问题
1、 选择员工的列表页 ，我希望我传的pageSize是多少，
你返回给我的pageSize就是多少。
2、 账号历史使用记录，操作人name有点问题。
3、 第一页的查询有点问题
4、 启用禁用接口