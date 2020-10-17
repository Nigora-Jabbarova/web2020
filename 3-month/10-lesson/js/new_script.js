"use strict";

document.querySelector('#button').addEventListener('click', load);


async function load(){
    let url = 'https://jsonplaceholder.typicode.com/users';

    /* fetch(url,{
        method: 'GET'
    })
    .then(function(value){
        return value.json();
    })
    .then(function(data){
    
    });*/
    var response = await fetch(url);
    var data = await response.json();
    let $list = document.querySelector('#list');
    var html = '';
    data.forEach(item => {
        html += '<li>' + item.id + ') ' + item.name + '</li>';
    });
    $list.insertAdjacentHTML('afterbegin', html);
}

