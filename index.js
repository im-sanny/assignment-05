const allSmBtn = document.getElementsByClassName('add-btn');

let count = 40;
for (const btn of allSmBtn) {
    btn.addEventListener('click', function (e) {
        count -= 1;
        setInnerText('fortySeats', count);


        const sitNumber = setInnerText('purchase-r-one', e.target.innerText)
        console.log(e.target.innerText)
    })
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

