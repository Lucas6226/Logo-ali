var amarelo = '#d9a338'
var vermelho = '#bd1b1b'
var a = document.getElementsByClassName('card')[0]
a.addEventListener('mouseover',entrou)
a.addEventListener('mouseout',saiu)

function entrou() {
    var title_1 = document.getElementById('1-title-card')
    title_1.style.color = amarelo
    var link_1 = document.getElementById('1-link-card')
    link_1.style.color = amarelo
    var card = document.getElementsByClassName('card')[0]
    card.style.borderColor = vermelho
    card.style.boxShadow = '0px 0px 50px red'
}

function saiu() {
    var title_1 = document.getElementById('1-title-card')
    title_1.style.color = 'black'
    var link_1 = document.getElementById('1-link-card')
    link_1.style.color = 'black'
    var card = document.getElementsByClassName('card')[0]
    card.style.borderColor = vermelho
    card.style.boxShadow = '0px 0px 7px rgba(0, 0, 0, 0.39)'
}

var a = document.getElementsByClassName('card')[1]
a.addEventListener('mouseover',entrou2)
a.addEventListener('mouseout',saiu2)

function entrou2() {
    var title_2 = document.getElementById('2-title-card')
    title_2.style.color = amarelo
    var link_2 = document.getElementById('2-link-card')
    link_2.style.color = amarelo
    var card = document.getElementsByClassName('card')[1]
    card.style.borderColor = vermelho
    card.style.boxShadow = '0px 0px 50px red'
}

function saiu2() {
    var title_2 = document.getElementById('2-title-card')
    title_2.style.color = 'black'
    var link_2 = document.getElementById('2-link-card')
    link_2.style.color = 'black'
    var card = document.getElementsByClassName('card')[1]
    card.style.borderColor = vermelho
    card.style.boxShadow = '0px 0px 7px rgba(0, 0, 0, 0.39)'
}

var a = document.getElementsByClassName('card')[2]
a.addEventListener('mouseover',entrou3)
a.addEventListener('mouseout',saiu3)

function entrou3() {
    var title_3 = document.getElementById('3-title-card')
    title_3.style.color = amarelo
    var link_3 = document.getElementById('3-link-card')
    link_3.style.color = amarelo
    var card = document.getElementsByClassName('card')[2]
    card.style.borderColor = vermelho
    card.style.boxShadow = '0px 0px 50px red'
}

function saiu3() {
    var title_3 = document.getElementById('3-title-card')
    title_3.style.color = 'black'
    var link_3 = document.getElementById('3-link-card')
    link_3.style.color = 'black'
    var card = document.getElementsByClassName('card')[2]
    card.style.borderColor = vermelho
    card.style.boxShadow = '0px 0px 7px rgba(0, 0, 0, 0.39)'
}