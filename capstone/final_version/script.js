(function () {

    'use strict'
    console.log('reading js');

    const go = document.querySelector('#continue');

    go.addEventListener('click', function() {
        overlay.className='done';
    });
// ----------------------------------------------------------------------------------------
    const envelope = document.querySelector('.fa-envelope');
    const portal = document.querySelector('.fa-door-closed');
    const openInventory = document.querySelector('.fa-briefcase');

    envelope.addEventListener('click', function() {
        overlay.classList.remove('.done')
        overlay.className='open';
    })

    portal.addEventListener('click', function() {
        // console.log('werk')
        window.location.href = 'https://mos-nguyen.github.io/des157b/'
    })

    openInventory.addEventListener('click', function() {
        // console.log('werk');
        inventory.classList.remove('.done')
        inventory.className='open';
    });

// ----------------------------------------------------------------------------------------
    const inventory = document.querySelector('#inventory');
    const close = document.querySelector('#inventory p')

    close.addEventListener('click', function() {
        inventory.classList.remove('.open')
        inventory.className='done';

    })
// ----------------------------------------------------------------------------------------
    const next = document.querySelector('#next');
    const gnext = document.querySelector('#gnext');
    const mnext = document.querySelector('#mnext');

    const box = document.querySelector('#box');
    const boxText  = document.querySelector('#box #text');
    const gbox = document.querySelector('#gbox');
    const gboxText  = document.querySelector('#gbox #gtext');
    const mbox = document.querySelector('#mbox');
    const mboxText  = document.querySelector('#mbox #mtext');

    const finish = document.querySelector('#finish');
    const gfinish = document.querySelector('#gfinish');
    const mfinish = document.querySelector('#mfinish');


    const speak = document.querySelector('#cattalk');
    const gspeak = document.querySelector('#guiltytalk');
    const mspeak = document.querySelector('#mousetalk');

    const cattext = document.querySelector('#cattext');
    const guiltytext = document.querySelector('#guiltytext');
    const mousetext = document.querySelector('#mousetext');

    let textIndex = 0;

    const textBank = {
        newText: [
            '<strong>Talia</strong><br> You can just call me Talia.',
            '<strong>Detective Fennek</strong><br>Alright Ms Talia...what is your relationship with the victim?',
            '<strong>Talia</strong><br>Nothing, I was just passing by thats all. Poor thing, I nearly fainted when I realized what happened.',
            '<strong>Detective Fennek</strong><br>Quite convinient of you to be just passing by. Whats someone like you doing out at such a late hour?',
            '<strong>Talia</strong><br>Now whats that supposed to mean? If you must know, I tend to enjoy a late night walk. Well...not anymore I suppose.',
            '<strong>Detective Fennek</strong><br>I see. Please stay until the investigation is over before you go anywhere else.'
        ], 

        gnewText: [
            '<strong>BonBon</strong><br> You can just call me Talia.',
            '<strong>Detective Fennek</strong><br>Alright Ms Talia...what is your relationship with the victim?',
            '<strong>BonBon</strong><br>Nothing, I was just passing by thats all. Poor thing, I nearly fainted when I realized what happened.',
            '<strong>Detective Fennek</strong><br>Quite convinient of you to be just passing by. Whats someone like you doing out at such a late hour?',
            '<strong>BonBon</strong><br>Now whats that supposed to mean? If you must know, I tend to enjoy a late night walk. Well...not anymore I suppose.',
            '<strong>Detective Fennek</strong><br>I see. Please stay until the investigation is over before you go anywhere else.'
        ], 
        
        mnewText: [
            '<strong>Micheal</strong><br> You can just call me Talia.',
            '<strong>Detective Fennek</strong><br>Alright Ms Talia...what is your relationship with the victim?',
            '<strong>Micheal</strong><br>Nothing, I was just passing by thats all. Poor thing, I nearly fainted when I realized what happened.',
            '<strong>Detective Fennek</strong><br>Quite convinient of you to be just passing by. Whats someone like you doing out at such a late hour?',
            '<strong>Micheal</strong><br>Now whats that supposed to mean? If you must know, I tend to enjoy a late night walk. Well...not anymore I suppose.',
            '<strong>Detective Fennek</strong><br>I see. Please stay until the investigation is over before you go anywhere else.'
        ]
    }

    next.addEventListener('click', function() {
        if (textIndex < textBank.newText.length) {
            boxText.innerHTML = `<p>${textBank.newText[textIndex]}</p>`;
        textIndex ++
        } else {
            textIndex = 0;
            next.style.display='none';
            finish.className = 'open';
        }
    })   

    gnext.addEventListener('click', function() {
        console.log('working?')
        if (textIndex < textBank.gnewText.length) {
            gboxText.innerHTML = `<p>${textBank.gnewText[textIndex]}</p>`;
        textIndex ++
        } else {
            textIndex = 0;
            gnext.style.display='none';
            gfinish.className = 'open';
        }
    })

    mnext.addEventListener('click', function() {
        console.log('working?')
        if (textIndex < textBank.mnewText.length) {
            mboxText.innerHTML = `<p>${textBank.mnewText[textIndex]}</p>`;
        textIndex ++
        } else {
            textIndex = 0;
            mnext.style.display='none';
            mfinish.className = 'open';
        }
    })

    finish.addEventListener('click', function() {
        cattext.className = 'done'
        evidence3.classList.remove('.done');
        evidence3.className = 'open';
    })

    gfinish.addEventListener('click', function() {
        guiltytext.className = 'done'
        evidence8.classList.remove('.done');
        evidence8.className = 'open';
    })

    mfinish.addEventListener('click', function() {
        mousetext.className = 'done'
        evidence9.classList.remove('.done');
        evidence9.className = 'open';
    })

    speak.addEventListener('click', function() {
        cattext.className = 'open'; 
        cattext.classList.add('animate')
        fox.className = 'animate';
        cat.className = 'animate';
    })

    gspeak.addEventListener('click', function() {
        guiltytext.className = 'open'; 
        guiltytext.classList.add('animate')
        gfox.className = 'animate';
        guilty.className = 'animate';
    })

    mspeak.addEventListener('click', function() {
        mousetext.className = 'open'; 
        mousetext.classList.add('animate')
        mfox.className = 'animate';
        mouse.className = 'animate';
    })
    
// ---------------------------------------------------------------------------------------
    const info = document.querySelector('#info')
    const fox = document.querySelector('#fox')
    const gfox = document.querySelector('#gfox')
    const mfox = document.querySelector('#mfox')

    deadbun.addEventListener('click', function () {
        const deadbun = document.querySelector('#deadbun');
        evidence1.classList.remove('.done');
        evidence1.className = 'open';
        deadbun.classList.add('animate');
    })

    hammer.addEventListener('click', function() {
        const hammer = document.querySelector('#hammer');
        evidence2.classList.remove('.done');
        evidence2.className = 'open';
    })

    foot.addEventListener('click', function() {
        const foot = document.querySelector('#foot');
        evidence4.classList.remove('.done');
        evidence4.className = 'open';
    })

    wallet.addEventListener('click', function() {
        const wallet = document.querySelector('#wallet');
        evidence5.classList.remove('.done');
        evidence5.className = 'open';
    })

    blood.addEventListener('click', function() {
        const blood = document.querySelector('#blood');
        evidence6.classList.remove('.done');
        evidence6.className = 'open';
    })

    scissors.addEventListener('click', function() {
        const scissors = document.querySelector('#scissors');
        evidence7.classList.remove('.done');
        evidence7.className = 'open';
    })


    evidence1.addEventListener('click', function () {
        const evidence1 = document.querySelector('#evidence1');
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'The corpse. Its hard to tell what actually happened to the victim with the filter over it. Is it worth it to reveal what actually happened? Maybe I should check on some other evidence first... '
    })

    evidence2.addEventListener('click', function() {
        const evidence2 = document.querySelector('#evidence2')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>The murder weapon, I presume. its covered in something...blood maybe? I could check but it might lower my reputation.</p>'
    })

    evidence3.addEventListener('click', function() {
        const evidence3 = document.querySelector('#evidence3')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>Talias witness report. she claims to have nothing to do with the victim.</p>'
    })

    evidence4.addEventListener('click', function() {
        const evidence4 = document.querySelector('#evidence4')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>Some footprints found on the ground near the body. Which of the suspects does this match?</p>'
    })

    evidence5.addEventListener('click', function() {
        const evidence5 = document.querySelector('#evidence5')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>The victims wallet. Sblah b lah blah blah bsdkvhs osihde iuhsdfo ihnolxidkfhr olkxdnhf ohnxcdlovf hnlxkd cfhnl khlfkcxd lkcvjclkvlk  vcdv clkjclk cl kvc lkvfk clkvclkv</p>'
    })

    evidence6.addEventListener('click', function() {
        const evidence6 = document.querySelector('#evidence6')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>uh hhhhhhh hhhh hhh hhhhhhh hhhh hhhhh hh hhh hh</p>'
    })

    evidence7.addEventListener('click', function() {
        const evidence7 = document.querySelector('#evidence7')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'ws eeeee eee ee eeee  eeeeee eee eee eee eeee eee eeeee eee eeee</p>'
    })

    evidence8.addEventListener('click', function() {
        const evidence8 = document.querySelector('#evidence8')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'ohh hhhh h hh h hhhhh hhhh hhhhh hhhh hhhh hhhh hhhh hhhhh hhhhh hhhh</p>'
    })

    evidence9.addEventListener('click', function() {
        const evidence9 = document.querySelector('#evidence9')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'aaaa  aa aa aaaa aaaa aaa aa a a a   a aaa aaa a aaaa a aaa a a a a  aa a a</p>'
    })

})();