function click_day(){
    let a=[];let b=document.getElementsByClassName('day_1st')
    let x = first_day.getDay()
    console.log(`1st day is ${first_day}`)
    for (i=0;i<35;i++)
    { let d= new Date(); d.setDate(first_day.getDate()-7-x+i)
        a.push(d);b[i].innerText = a[i].toLocaleDateString().slice(0,-5);     
        
    }
}
function gettime(){   //test thành công lấy giá trị từ form
    
    first_day = document.getElementById('time').value;
    console.log(first_day);
    let a=document.getElementsByClassName('input');
    a[0].innerText='Ngày hệ thống: '+first_day.toString()

}

function get_khoa(){
    
     let temp = document.getElementsByClassName('num')
     sobuoi= temp[0].value;console.log(sobuoi)    
}
function first(x){
    let array = [];for(i=0;i<28;i++)array.push(i);
    let d = new Date; d.setDate(d.getDate()-d.getDay())
    d.setDate(d.getDate()+x)
    //console.log(d)

    let a=document.getElementsByClassName('input');
    a[0].innerText = 'Buổi đầu là thứ ' + (d.getDay()+1) + ' ngày '+(d.getDate())+' tháng '+(d.getMonth()+1);
    first_day = new Date(d.getFullYear(),d.getMonth(),d.getDate())
    console.log(first_day)
}
function test_listen(){
    console.log(document.querySelectorAll('.day_1st')[20].textContent)
}
function sort_tkb(){
    let k=tkb.length;
    while(k>=0)
        {   for (let i=0;i<k;i++){
                let x=tkb[i];
                if(tkb[i]>tkb[i+1]) {
                    tkb[i]=tkb[i+1];
                    tkb[i+1]=x
                }
            }
            k=k-1
        }
    console.log(tkb)
}


function gettkb(x){
    let a=document.getElementsByClassName('input');
    tkb.push(x);
    a[2].innerHTML='Thời khóa biểu hệ thống là thứ: '+tkb;
    console.log(tkb)         
}
// biến global là tkb, first_day, sobuoi còn lại là local
var tkb=[];
var first_day=new Date();
var sobuoi; 
var full_tkb; 
