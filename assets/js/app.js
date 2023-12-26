let cl=console.log;

const postFormCntrol=document.getElementById("postForm");
const searchbarControl=document.getElementById("searchbar");
const subBtnControl=document.getElementById("subBtn");
const cardInfoControl=document.getElementById("cardInfo");


let baseUrl=`https://api.github.com/users/`

let baseUrl2=`https://api.github.com/users/userName`


cl(baseUrl)
cl(baseUrl2)

const apicall=(apiUrl,methodName,msgBody=null)=>{

  return fetch(apiUrl,{
    method:methodName,
    body:msgBody,
    header:{
      "Content type": "application.json"
    }
    
  })

.then(res=>{
  return res.json()
})}

apicall(baseUrl,"GET")
.then(data=>{
  cl(data)
})
.catch(err=>{
  cl(err)
})
