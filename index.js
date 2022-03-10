let data = [
    {
        name: 'Eren Jaeger',
        age: '23'
    },
    {
        name: 'Sasha Blouse',
        age: '25'
    },
    {
        name: 'Reiner',
        age: '15'
    },
    {
        name: 'Bertolto',
        age: '26'
    },
    {
        name: 'Connie',
        age: '22'
    },
    {
        name: 'Armin',
        age: '26'
    },
    {
        name: 'Mikasa',
        age: '27'
    },

];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' +  'is ' + item.age 
    + ' years old' + '</div>';
})

info.innerHTML = details.join('\n');
