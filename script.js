/**1 Gör en webbsida med en <button> och en <div>. När användaren klickar
 på knappen ska du göra ett GET request till följande
 URL och lägga resultatet i div-elementet. URL:
 "http://mardby.se/AJK15G/lorem_text.php"**/


/**
 * <button id="btn-id">Get some data</button>
 <div id="res">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
 Ad, rem.</div>
 <div id="error-id"></div>
 *
 *
 *
 *   <label for="word-amount-id">How many words would you like to read</label>
 <input type="number" id="word-amount-id">
 <button id="btn-id">Get some data</button>
 <div id="res"></div>
 <div id="error-id"></div>
 * **/


/**5 Skapa en webbsida som använder https://api.adviceslip.com/,
 * https://api.chucknorris.io/, http://quotesondesign.com/wp-json/posts,
 * https://placekitten.com/ eller https://developers.giphy.com/docs/
 * för att göra ett AJAX request och uppdatera webbsidan med resultatet.
 //   **/
$(document).ready(function () {
    const get_btn = document.querySelector('.btn-primary');
    const list_element = document.querySelector('.list-group-item');
    const url = 'https://api.adviceslip.com/advice';
    function fetchChuck() {
        fetch(url).then(res => res.json())
            .then(data => (list_element.innerText=data.slip.advice));
    }
    get_btn.addEventListener('click', fetchChuck)
});

//data.slip.advice
// <div class="container-fluid">
//         <button type="button" class="btn btn-primary">Get a chuckle!</button>
//     <hr>
//     <ul class="list-group">
//         <li class="list-group-item">Cras justo odio</li>
//     </ul>
//     </div>


/**
 *  <div class="container-fluid">
 <button type="button" class="btn btn-primary">Get a chuckle!</button>
 <hr>
 <ul class="list-group">
 <li class="list-group-item">Never set an alarm clock unless you know how to switch it off</li>
 </ul>
 </div>
 *
 * **/

// $(document).ready(function () {
//     const get_btn = document.querySelector('.btn-primary');
//     const list_item = document.querySelector('.list-group-item');
//     const url = 'https://forverkliga.se/JavaScript/api/simple.php';
//
//     function fetchSome() {
//
//         fetch(url).then(res => res.json())
//             .then(data => {
//                console.log(data.info);
//             })
//     }
//
//     get_btn.addEventListener('click', fetchSome);
// });
//
//
//


/**5 Skriv en executor-funktion (se slides om Promises) som räknar ut
 * summan av två tal. Tänk på att den inte ska
 * returnera värdet utan anropa succeed-funktionen.
 * Använd sedan ett Promise för att anropa funktionen
 * och räkna ut värdet.
 * **/

// const promise = new Promise(function (resolve, reject) {
//     function count() {
//         let res = 1 + 4;
//         if (res === 5) {
//             resolve(res);
//         } else {
//             console.log('rejected');
//             reject()
//          }
//
//     }
//
//     count();
// });
//
// promise.then(function (result) {
//     console.log(result);
// });






















