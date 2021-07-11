/**
 * 判断是不是工作天
 */

const isWeekday = (data) => data.getDay() % 6 !== 0;