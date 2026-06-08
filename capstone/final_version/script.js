(function () {

    'use strict'
    console.log('reading js');

    const go = document.querySelector('#continue');
    const again = document.querySelector('#restart')
    const back = document.querySelector('#back')
    const bottom = document.querySelector('#bottomend')
    const reveal = document.querySelector('#reveal')

    go.addEventListener('click', function() {
        overlay.className='done';
    });

    again.addEventListener('click', function() {
        window.location.reload();
    })

    back.addEventListener('click', function() {
        end.className='done';
    });

    bottom.addEventListener('click', function() {
        reveal.classList.remove('done')
    })
// ----------------------------------------------------------------------------------------
    const envelope = document.querySelector('.fa-envelope');
    const portal = document.querySelector('.fa-door-closed');
    const openInventory = document.querySelector('.fa-briefcase');
    const uncensor = document.querySelector('.fa-eye-slash')
    const images = document.querySelectorAll('img')
    
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

    uncensor.addEventListener('click', function (){
        scissors.classList.remove('censor');
        deadbun.classList.remove('censor');
        blood.classList.remove('censor');
        foot.classList.remove('censor');
        hammer.classList.remove('censor');
        evidence1.classList.remove('censor');
        evidence2.classList.remove('censor');
        evidence4.classList.remove('censor');
        evidence6.classList.remove('censor');
        evidence7.classList.remove('censor');
    })
    

// ----------------------------------------------------------------------------------------
    const inventory = document.querySelector('#inventory');
    const close = document.querySelector('#inventory #exit')
    const solve = document.querySelector('#solve');
    const end = document.querySelector('#end');

    close.addEventListener('click', function() {
        inventory.classList.remove('.open')
        inventory.className='done';
    })

    solve.addEventListener('click', function() {
        console.log('working');
        end.classList.remove('.done');
        end.className='.open';
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
            '<strong>Talia</strong><br>Nothing! I was just passing by thats all. Poor thing, I nearly fainted when I realized what happened.',
            '<strong>Detective Fennek</strong><br>Quite convinient of you to be just passing by. Whats someone like you doing out at such a late hour?',
            '<strong>Talia</strong><br>Now whats that supposed to mean? If you must know, I tend to enjoy a late night walk. Well...not anymore I suppose.',
            '<strong>Detective Fennek</strong><br>I see. Please stay until the investigation is over.'
        ], 

        gnewText: [
            '<strong>BonBon</strong><br> My name is BonBon',
            '<strong>Detective Fennek</strong><br>BonBon...And how do you know the victim?',
            '<strong>BonBon</strong><br>Oh, we were very close friends. Its too bad theyre gone now. Ill miss them.',
            '<strong>Detective Fennek</strong><br>You dont seem that distraught over your close friend dying.',
            '<strong>BonBon</strong><br>Distraught? Of course im distraught! They were using my scissors and now I cant find them!',
            '<strong>Detective Fennek</strong><br>Your scissors? What does that have to do with the crime?',
            '<strong>BonBon</strong><br>Oh nevermind. I dont know why I still need to be here. I was at home all night.',
            '<strong>Detective Fennek</strong><br>Is that so? Please stay until the investigation is over.'

        ], 
        
        mnewText: [
            '<strong>Micheal</strong><br> How rude, youngsters like you never know your manners. You can call me Micheal.',
            '<strong>Detective Fennek</strong><br>My apologies Micheal. You were the one who called in about the crime, right?',
            '<strong>Micheal</strong><br>I sure was! You never know what goes on in the neighborhood, so I made sure to call right when I heard a scream.',
            '<strong>Detective Fennek</strong><br>I see. Was that all you heard? Did you happen to see anything?',
            '<strong>Micheal</strong><br>I didnt hear much else, but I know who did it!',
            '<strong>Detective Fennek</strong><br>Really? Who do you think did it?',
            '<strong>Micheal</strong><br>That cat lady over there! I saw a long shadow with tall ears run away. At least...I think so...these glasses sure are getting old.',
            '<strong>Detective Fennek</strong><br>I see...Please stay until the investigation is over.'
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
        evidence1.className = 'censor';
        deadbun.classList.add('animate');
    })

    hammer.addEventListener('click', function() {
        const hammer = document.querySelector('#hammer');
        evidence2.classList.remove('.done');
        evidence2.className = 'censor';
        hammer.classList.add('animate');
    })

    foot.addEventListener('click', function() {
        const foot = document.querySelector('#foot');
        evidence4.classList.remove('.done');
        evidence4.className = 'censor';
        foot.classList.add('animate');
    })

    wallet.addEventListener('click', function() {
        const wallet = document.querySelector('#wallet');
        evidence5.classList.remove('.done');
        evidence5.className = 'open';
        wallet.classList.add('animate');
    })

    blood.addEventListener('click', function() {
        const blood = document.querySelector('#blood');
        evidence6.classList.remove('.done');
        evidence6.className = 'censor';
        blood.classList.add('animate');
    })

    scissors.addEventListener('click', function() {
        const scissors = document.querySelector('#scissors');
        evidence7.classList.remove('.done');
        evidence7.className = 'censor';
        scissors.classList.add('animate');
    })


    evidence1.addEventListener('mouseover', function () {
        const evidence1 = document.querySelector('#evidence1');
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'The corpse. Its hard to tell what actually happened to the victim with the filter over it. Is it worth it to reveal what actually happened? Maybe I should check on some other evidence first... '
    })

    evidence2.addEventListener('mouseover', function() {
        const evidence2 = document.querySelector('#evidence2')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>A potential murder weapon? It looks like it might have some blood on it, but its hard to tell with how blurry it is. </p>'
    })

    evidence3.addEventListener('mouseover', function() {
        const evidence3 = document.querySelector('#evidence3')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>Talias witness report. She claims to not know the victim and found them while passing by. She seemed to have some pity for the victim, could it be an act?</p>'
    })

    evidence4.addEventListener('mouseover', function() {
        const evidence4 = document.querySelector('#evidence4')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>It looks like these are some bloody footprints. They most likely belong to the killer, but its hard to make out their shape. It could belong to any of them.</p>'
    })

    evidence5.addEventListener('mouseover', function() {
        const evidence5 = document.querySelector('#evidence5')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>The victims wallet. Somehow no blood got on it, so it hasnt been blurred. Theres a picture of the victim with another bunny who looks like one of the suspects. Whats the connection between them?</p>'
    })

    evidence6.addEventListener('mouseover', function() {
        const evidence6 = document.querySelector('#evidence6')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = '<p>This is probably blood from the victims injury. With out much it splattered, the attack seemed violent. What weapon could have caused this?</p>'
    })

    evidence7.addEventListener('mouseover', function() {
        const evidence7 = document.querySelector('#evidence7')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'Something hidden behind the trashcans. Its hard to tell what it is, but theres definetly some blood on it. It seems to be rather far from the body however. Is this related to the crime?</p>'
    })

    evidence8.addEventListener('mouseover', function() {
        const evidence8 = document.querySelector('#evidence8')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'Bonbons witness report. Shes a friend of the victim but claims she was at home when the crime occured. She doesnt seem to distraught. Apparently she lost her scissors recently and is looking for them.</p>'
    })

    evidence9.addEventListener('mouseover', function() {
        const evidence9 = document.querySelector('#evidence9')
        info.classList.remove('done');
        info.className = 'open'
        info.innerHTML = 'Micheals witness report. He lives around the area and heard the victim scream around midnight. He claims to have seem a tall lanky figure leaving the scene of the crime. The old mouse doesnt seem to have the best eye sight.</p>'
    })

    const draggable = new Draggable.Draggable(document.querySelectorAll('#inventory img'), {
        draggable: 'img',
    });

    // const droppable = new Draggable.Droppable(
    //     document.querySelectorAll('#inventory'),
    //     {
    //         dropzone: '.dropzone',
    //     },
    // );

    // droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
    // droppable.on('droppable:returned', () => console.log('droppable:returned'));
})();