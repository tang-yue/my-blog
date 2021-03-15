// 这里是记录，之前有做过，一个折线图的对比。
// 这个对比，超出了我们官网给出的列子，有着特殊性。，但是这次要删了，以防下次用到，因此在此备录

```
import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from "bizcharts/lib";
import DataSet from "@antv/data-set/lib";

class WeekLineChart extends React.Component {
  render() {
    const { data } = this.props;
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["lastWeek", "curWeek"],
      key: "date",
      value: "count" // value字段
    });
    const func = (w, d) => {
      let date = '';
      let rate = '';
      for(let i = 0; i < data.length; i++) {
        if(w === data[i].week) {
          if(d === 'lastWeek') {
            date = data[i].lastDate;
          } else {
            date = data[i].curDate;
          }
            rate = data[i].rate; 
        }
      }
      return { rate, date, } 
    }
    return (
      <div>
        <Chart 
          height={270} data={dv} 
          forceFit 
          style={{position: 'relative', right: '35px'}}
        >
          <Legend />
          <Axis name="week" />
          <Axis
            name="count"
            label={{
              formatter: val => `${val}`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="week*count"
            size={2}
            color={"date"}
            tooltip={['week*date*count', (week,date,count) => {
              // 下面的这些代码是重点。
            if(!count) {
              count = '未知';
            }
            const data = func(week, date);
            let n = '';
            if(data.date === undefined) {
              n = '未知';
            } else {
              n = data.date;
            }
            let r = '';
            if(data.rate === undefined) {
              r = '未知';
            } else {
              r = data.rate;
            }
            return {
                name: n,
                title: week + '  xxxxx' + r,
                value: 'xxx' + count
              }
          }]}
          />
          <Geom
            type="point"
            position="week*count"
            size={4}
            shape={"circle"}
            color={"month"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}
export default WeekLineChart
```