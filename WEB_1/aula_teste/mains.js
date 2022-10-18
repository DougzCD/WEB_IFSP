
const cores = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

async function ColorChange() {

    const promises = cores.map(async (color, idx) =>

      console.log(`Received Todo ${idx+1}:`, await fetch(color))

      

    );
    document.body.style.backgroundColor = color;
  
    await Promise.all(promises);
  
    console.log('Finished!');
}


const TrocarCor = ()=>{

    
    setInterval(()=>{


        return new Promise((resolve, reject)=> {

            setTimeout(() => {

                cores.forEach(element => {

                    document.body.style.backgroundColor = element;
            
                });

            }, 1000);

            resolve();

        })

    }, 1000)

}
const Contador = ()=>{

    setInterval(()=>{

     ColorChange();

    }, 1000)

    

}