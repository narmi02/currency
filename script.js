
const populate=async (value,currency)=>{
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_nDlwlXpsopzTJVuACORds8wOsZRLK4IwcdN4IvzB&base_currency=" + currency
    let mystr=""
    let response=await fetch(url)
    let rjson=await response.json()
    console.log(rjson)
    document.querySelector('.output').style.display="block"
    for(let key of Object.keys(rjson["data"])){
        mystr+=`<tr>
                  <td>${key}</td>
                  <td>${rjson["data"][key]["code"]}</td>
                  <td>${rjson["data"][key]["value"]*value}</td>
                </tr>
               `
    }
      const tablebody=document.querySelector("tbody")
      tablebody.innerHTML=mystr
}



const btn=document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("click")
    const value=parseInt(document.querySelector("input[name='quantity']").value)
    const currency=document.querySelector("select[name='Currency']").value
    populate(value,currency)
})