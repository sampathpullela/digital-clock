setInterval(() => {
   
    let date = new Date();
    let dayofMonth = date.toLocaleDateString('en-US', {weekday: 'long'});
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


    if(date.getHours()<=9){
        hours = `0${hours}`;
    }

    if(date.getMinutes()<=9){
        min = `0${min}`;
    }

    if(date.getSeconds()<=9){
        sec = `0${sec}`;
    }

    if(hours<12){
        document.getElementById('amorpm').innerHTML='AM - ';
    }
    else{
        document.getElementById('amorpm').innerHTML='PM - ';
    }

    document.getElementById('c-day').innerHTML= `${dayofMonth} |`;
    document.getElementById('c-date').innerHTML= ` ${date.getDate()} -`;
    document.getElementById('c-month').innerHTML= `${date.getMonth()+1} -`;
    document.getElementById('c-year').innerHTML= `${date.getFullYear()}`;

    document.getElementById('hour').innerHTML= `${hours} :`;
    document.getElementById('min').innerHTML= ` ${min} :`;
    document.getElementById('sec').innerHTML= ` ${sec}`;
},1000)