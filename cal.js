function all_buoi(){
    //xuất list các buổi học theo thứ ngày only
    sort_tkb();
    get_khoa();
    let full_array = []
    for (let i=0;i<60;i++)//60 tuần liên tục!!!
            { for (let k=0;k<tkb.length;k++) 
                        {full_array[i*tkb.length+k]= tkb[k]+7*i }
            }
    let first_week_day = first_day.getDay()+1;    console.log(first_week_day)
    let start = get_num_start(first_week_day,full_array);console.log(start)
    if (start==='Lỗi') {alert('Nhập lại ngày bắt đầu trung với thời khóa biểu');return }

    let end =parseInt(sobuoi)+parseInt(start);// Bị cộng theo string thay vì interger dùng parseint()
    console.log(end)
    let new_tkb=[];
    for (start;start<end;start++) new_tkb.push(full_array[start]) // <=end vì số buổi là khoảng cách, phải+1 để tới end
        //all TKB là tất cả các buổi học, all_tkb_day và all_tkb_month là xuất ra ngày và tháng

    let all_tkb = all_day(first_day,new_tkb);
    //xuất thông tin từ dưới
    let all_tkb_day = [];let all_tkb_month = [];
    for (let i=0;i<all_tkb.length;i++){
        all_tkb_day.push(all_tkb[i].getDate())
        all_tkb_month.push(all_tkb[i].getMonth()+1)
    }
    console.log(all_tkb_day);console.log(all_tkb_month)
    let x=document.getElementsByClassName('date');

    for (let i=0;i<all_tkb.length;i++) x[i].innerHTML = all_tkb_day[i]+':'+all_tkb_month[i];
    // let l=0;
    // for (let i=0;i<sobuoi;i++) 
    //     {   
    //         if(all_tkb[i].getDay()==0) y[l].innerHTML = all_tkb[i].toLocaleDateString();
    //         if((all_tkb[i].getDay()!==0)) continue;
    //         l=l+1;
    //     }
    for (let week_day=0;week_day<7;week_day++) xuat_week(week_day,all_tkb)
   
}
function xuat_week(week_day,all_tkb){
    let l=0;
    let y=document.getElementsByClassName('view');
    for (let i=0;i<sobuoi;i++) 
        {   console.log(all_tkb[i])
            if(all_tkb[i].getDay()==week_day) 
                {y[week_day*8 + l].innerHTML =  all_tkb[i].toLocaleDateString();
                    y[week_day*8 + l].innerHTML=y[week_day*8 + l].innerHTML.slice(0,-5)
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
// viết nốt lệnh +date và xuất ra định dạng day:month
function all_day(day_1st= new Date,full_array=[]){
    let day_0 = new Date; day_0.setMonth(day_1st.getMonth());day_0.setDate(day_1st.getDate())
    day_0.setDate(day_1st.getDate()-full_array[0]);console.log(day_0)//day 0 luôn là thứ 7,vì CN là day 1
    let x = [];
    for (let i=0;i<full_array.length;i++)
        {   let y=new Date;
            y.setMonth(day_1st.getMonth());y.setDate( day_0.getDate()) 
            y.setDate(y.getDate()+1+full_array[i]-1)//do thứ để so sánh luôn dc +1 để xuất cho đẹp, -1 lại để dễ nhìn
            x.push(y)
        }
     console.log(x);return x;
    
}