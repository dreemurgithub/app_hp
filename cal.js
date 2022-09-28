function all_buoi(){
    //xuất list các buổi học theo thứ ngày only
    sort_tkb();
    get_khoa();
    //console.log(first_day)
    let full_array = []
    for (let i=0;i<60;i++)//60 tuần liên tục!!!
            { for (let k=0;k<tkb.length;k++) 
                        {full_array[i*tkb.length+k]= tkb[k]+7*i }
            }
    let first_week_day = first_day.getDay();    //console.log(first_week_day)
    let start = full_array.indexOf(first_week_day)
    //console.log(start)
    if (start==='Lỗi') {alert('Nhập lại ngày bắt đầu trung với thời khóa biểu');return }

    let end =parseInt(sobuoi)+parseInt(start);// Bị cộng theo string thay vì interger dùng parseint()
    console.log([start,first_week_day,end])
    let new_tkb=[];
    let i = start;
    for (i;i<end;i++) new_tkb.push(full_array[i]) 
    console.log(new_tkb)
    //let all_tkb = all_day(first_day,new_tkb);
    let all_tkb =[first_day];
    for (let i=1;i<new_tkb.length;i++){
        all_tkb[i]=new Date(all_tkb[0].getFullYear(),all_tkb[0].getMonth(),all_tkb[0].getDate()) ;
        all_tkb[i].setDate(all_tkb[0].getDate()-new_tkb[0] +new_tkb[i])   }
    //xuất thông tin từ dưới
    let all_tkb_day = [];let all_tkb_month = [];
    for (let i=0;i<all_tkb.length;i++){
        all_tkb_day.push(all_tkb[i].getDate())
        all_tkb_month.push(all_tkb[i].getMonth()+1)
    }
    console.log(all_tkb)
    let x=document.getElementsByClassName('date');

    for (let i=0;i<all_tkb.length;i++) x[i].innerHTML = all_tkb_day[i]+':'+all_tkb_month[i];
    for (let week_day=0;week_day<7;week_day++) xuat_week(week_day,all_tkb)
   
}
function xuat_week(week_day,all_tkb){
    let l=0;
    let y=document.querySelectorAll('.view');
    for (let i=0;i<sobuoi;i++) 
        {   //console.log(all_tkb[i])
            if(all_tkb[i].getDay()==week_day) 
                {y[week_day*8 + l].textContent =  all_tkb[i].toLocaleDateString();
                    y[week_day*8 + l].textContent=y[week_day*8 + l].textContent.slice(0,-5)
                }
            if((all_tkb[i].getDay()!==week_day)) continue;
            l=l+1;
        }
}


function get_num_start(d,array){
    for (let i=0;i<array.length;i++)
        if (d===array[i]) return i;
    return 'Lỗi'
}
