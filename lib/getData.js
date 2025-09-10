async function getApi(){
    try{
        const url = 'https://git.fahrul.id/koda/data/raw/branch/main/talents.json'
        const api = fetch(url)
        api.then((ress)=>{
            ress.json().then((ressJson)=>{
                const hasil = ressJson.flatMap(obj => [obj.name + " - koda batch 4"])
                console.log(hasil)
            })
        })
    }catch(error){
        console.log(err)
    }
}

getApi()