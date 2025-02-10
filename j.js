function addTime(t, a) {  
    let [h, m] = t.split(":").map(Number);  
    let [ah, am] = a.split(":").map(Number);  
    
    h += ah + Math.floor((m + am) / 60);  
    m = (m + am) % 60;  
    
    if (h === 24) {  
        return `${h}:${m}`;  
    } else {  
        return `${h % 24}:${m}`;  
    }  
}  


submitButton.addEventListener('click', function(){
    try{ 
    if(!(/[:]/.test(settingsInput.value))){throw new Error("Idiot found")} 
    output.innerHTML = ""; 
    const settings = settingsInput.value.split(' '); 
    const sequence = parseInt(settings[0]);  
    let startTime = settings[1];  
    const Full = parseInt(settings[2]);  
    let a = startTime;  
    let l = [];  
    for (let i = 0; i < sequence; i++) {  
        for (let j = 0; j < 3; j++) {  
            a = addTime(a, "0:10");  
            l.push(a);  
            a = addTime(a, "1:00");  
            l.push(a);  
        }  
        if (Full === 1) {  
            a = addTime(a, "1:00");  
        } else {  
            a = addTime(a, "0:30");  
        }  
    }
    
    n = 1
    for (const i of l) {
        var h = ""
        if(i.split(":")[0].length == 1){h += "0" + i.split(":")[0] + ":"}
        else{h  += i.split(":")[0] + ":"}
        if(i.split(":")[1].length == 1){h+= "0" + i.split(":")[1]}
        else{h += i.split(":")[1]}
        hour = document.createElement("div");
        hour.className = "hours"
        hour.textContent = h
        output.appendChild(hour);
        if (l.indexOf(i)%2 == 0) {
            t = document.createElement("div");
            t.className = "studies"
            t.textContent = "Study "+n;
            output.appendChild(t)
            n+=1
        }
        else{
            r = document.createElement("div");
            r.className = "rests"
            r.textContent = "Rest";
            output.appendChild(r)
        }
    }
}
catch(e){
    alert   ("format is : a b c (a = number of sessions, b = start hour, c = 0 or 1 for 30min or 1hour rest at the end of session/ e.g. 3 10:00 0)")
}

});


// catch(e){
//     console.log("format is : a b c (a = number of sessions, b = start hour, c = 0 or 1 for 30min or 1hour rest at the end of session/ e.g. 3 10:00 0)")
// }