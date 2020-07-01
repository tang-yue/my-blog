const  GetFirstWeekBegDay = (year) => {
  　 var tempdate = new Date(year, 0, 1);
  　 var temp = tempdate.getDay(); 
  　 if (temp == 1) {
  　　　 return tempdate;
        // 这里说明正好是周一
  　 }
  　 temp = temp == 0 ? 7 : temp;
  　 tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp));
  　 return new Date(tempdate);　 
  }
const formatDate = (date) => {　　　 
  　 var myyear = date.getFullYear();　　 
  　 var mymonth = date.getMonth()+1;　　 
  　 var myweekday = date.getDate();　　　 
  　　　　 
  　 if(mymonth < 10){　　 
  　　　 mymonth = "0" + mymonth;　　 
  　 }　　　 
  　 if(myweekday < 10){　　 
  　　　 myweekday = "0" + myweekday;　　 
  　 }　　 
  　 return (myyear+"-"+mymonth + "-" + myweekday);　　　 
  }
  
const getBeginDateOfWeek = (paraYear, weekIndex) => {
  // 
　 var firstDay = GetFirstWeekBegDay(paraYear);
　 //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
　 var time=(weekIndex-1)*7*24*3600000;
　 var beginDay = firstDay;
　 //为日期对象 date 重新设置成时间 time
　 beginDay.setTime(firstDay.valueOf()+time);
　 return formatDate(beginDay);
}

　　//获取某年某周的结束日期
const getEndDateOfWeek = (paraYear, weekIndex) => {
　 var firstDay = GetFirstWeekBegDay(paraYear);
　 //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
　 var time=(weekIndex-1)*7*24*3600000;
　 var weekTime = 6*24*3600000;
　 var endDay = firstDay;
　 //为日期对象 date 重新设置成时间 time
　 endDay.setTime(firstDay.valueOf()+weekTime+time);
　 return formatDate(endDay);
}　　


const handleDate = (time) => {
  if(time === 'total') {
    return `${showStartDate}-${showEndDate}`
  } else if(dim_date === "'week'") {
    let timeArr = time.split('-');
    const start = getBeginDateOfWeek(timeArr[0], timeArr[1]-1)
    const end = getEndDateOfWeek(timeArr[0], timeArr[1]-1)
    // 周时间跨年了
    if(start.split('-')[1] !== end.split('-')[1]) {
      // return `${start.split('-').join('')}`-`${start.split('-')[0]}1231`
      let new_endDate = `${start.split('-')[0]}-12-31`

      // 这个处理完了还不够
      // 这里的开始时间有可能会在报名时间开始时间之前
      if(Math.floor(new Date(str_startDate)) > Math.floor(start) && Math.floor(new Date(str_endDate)) < Math.floor(new_endDate)) {
        return `${str_startDate.split('-').join('')}`-`${str_endDate.split('-').join('')}`
      }


      if(Math.floor(new Date(str_startDate)) > Math.floor(start)) {
        return  `${str_startDate.split('-').join('')}`-`${new_endDate.split('-').join('')}`
      } else if(Math.floor(new Date(str_endDate)) < Math.floor(new_endDate)) {
        return `${start.split('-').join('')}`-`${str_endDate.split('-').join('')}`
      } else {
        return  `${start.split('-').join('')}`-`${new_endDate.split('-').join('')}`
      }
      // 同理，这里的结束时间可能会在报名时间结束时间之后
      // new Date()
    } else {
      // 同理还要加上一层同样的判断

      if(Math.floor(new Date(str_startDate)) > Math.floor(start) && Math.floor(new Date(str_endDate)) < Math.floor(end)) {
        return `${str_startDate.split('-').join('')}`-`${str_endDate.split('-').join('')}`
      }

      if(Math.floor(new Date(str_startDate)) > Math.floor(start)) {
        return  `${str_startDate.split('-').join('')}`-`${end.split('-').join('')}`
      } else if(Math.floor(new Date(str_endDate)) < Math.floor(end)) {
        return `${start.split('-').join('')}`-`${str_endDate.split('-').join('')}`
      } else {
        return  `${start.split('-').join('')}`-`${end.split('-').join('')}`
      }
     
    }
  }
}