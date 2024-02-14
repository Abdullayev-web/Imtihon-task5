let loginRegEX = /^[A-Z0-9]{8,15}$/
let parolRegEX = /^[0-9]{8,}$/
let btn = document.querySelector('button')
let login = document.querySelector('.login')
let parol = document.querySelector('.parol')
let loginInfo = document.querySelector('.loginInfo')
let parolInfo = document.querySelector('.parolInfo')

login.addEventListener('keyup',()=>{
    loginInfo.innerHTML = login.value
})
parol.addEventListener('keyup',()=>{
    parolInfo.innerHTML = parol.value
})