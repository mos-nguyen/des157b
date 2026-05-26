(function() {
    'using strict';
    console.log('reading js')

    const next = document.querySelector('button');
    let text  = document.querySelector('p');

    const textBank = {
        newText: [
            'does this work?',
            'How about this one?',
            'This is another one.'
        ]
    }

    next.addEventListener('click', function() {
        console.log('testing');
        text.innerHTML = `<p>${textBank.newText[0]}</p>`
    }) 

    const body = document.querySelector('body')

    body.addEventListener('click', function () {
        overlay.className = 'gone'
    })
})()