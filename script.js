const body= document.getElementsByTagName("body")



const time= (watch)=>{
    watch("10")
    setTimeout(()=>{
        watch("9");
        setTimeout(()=>{
            watch("8");
            setTimeout(()=>{
                watch("7");
                setTimeout(()=>{
                    watch("6");
                    setTimeout(()=>{
                        watch("5");
                        setTimeout(()=>{
                            watch("4");
                            setTimeout(()=>{
                                watch("3");
                                setTimeout(()=>{
                                    watch("2");
                                    setTimeout(()=>{
                                        watch("1");
                                        setTimeout(()=>{
                                            watch("Happy Independence Day");
                                    
                                        },1000)
                                
                                    },1000)
                            
                                },1000)
                        
                            },1000)
                    
                        },1000)
                
                    },1000)
            
                },1000)
        
            },1000)
    
        },1000)

    },1000)
}

const watch=(val)=>{
    document.getElementById("timer").innerHTML= `<p> ${val}</p>`

}

time(watch)