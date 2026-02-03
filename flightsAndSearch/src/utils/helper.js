function compareTime(timeString1,timeString2){
    let dt1=new Date(timeString1);
    let dt2=new Date(timeString2);
    return dt1.getTime()>dt2.getTime();
}
module.exports={
    compareTime,
}