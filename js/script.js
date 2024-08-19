function calculate(){
    let bd=document.getElementById("date").value;
    let cd=document.getElementById("date1").value;
    let birth_date=new Date(bd);
    let cur_date=new Date(cd);

    let date = cur_date.getDate() - birth_date.getDate();
    let month = cur_date.getMonth() - birth_date.getMonth();
    let year = cur_date.getFullYear() - birth_date.getFullYear();
    if (date < 0) {
        month--;
        date =date+ new Date(cur_date.getFullYear(), cur_date.getMonth(), 0).getDate();
    }

    if (month < 0) {
        year--;
        month += 12;
    }
    document.getElementById('age').innerText= "Age is : " + year + "Year " + month + "Months " + date + "Days Old."
}

