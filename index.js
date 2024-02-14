let loginRegEX = /^[A-Z0-9]{8,15}$/
let parolRegEX = /^[0-9]{8,}$/
let btn = document.querySelector('button')
let login = document.querySelector('.login')
let parol = document.querySelector('.parol')
let loginInfo = document.querySelector('.loginInfo')
let parolInfo = document.querySelector('.parolInfo')

login.addEventListener('keyup',()=>{
    if (loginRegEX.test(login.value)) {
        loginInfo.innerHTML = login.value + ' :Success'
    }
    else{
        loginInfo.innerHTML = login.value + ' :Failed'
    }

})
parol.addEventListener('keyup',()=>{
    if (parolRegEX.test(parol.value)) {
        parolInfo.innerHTML = parol.value + ' :Success'
    }
    else{
        parolInfo.innerHTML = parol.value + ' :Failed'
    }

})