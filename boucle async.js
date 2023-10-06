


async function boucle(){
  for(let i=0;i<Infinity;i++){

await
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
    document.querySelector(".title1").classList.add("h3")
        resolve();
      },1000)
    
    
    }).then(()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          document.querySelector(".title2").classList.add("h3")
          resolve()
            },1000)
      })
    }).then(()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          document.querySelector(".title3").classList.add("h3")
          resolve()
            },1000)
      })
    }).then(()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          document.querySelector(".title4").classList.add("h3")
          resolve()
            },1000)
      })
    }).then(()=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
          document.querySelector(".title1").classList.remove("h3")
          document.querySelector(".title2").classList.remove("h3")
          document.querySelector(".title3").classList.remove("h3")
          document.querySelector(".title4").classList.remove("h3")
          resolve()
            },1000)
      })
    })
    
    }
}

boucle();