const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const comment = document.querySelector('#comment');
const btn = document.querySelector('button');
const cardWrap = document.querySelector('.card_wrap');
const cardBody = document.querySelector('.card_body');

function viewCard(){
  cardWrap.innerHTML+=`<div class="card">
                  <h3 class="card_name">${name.value}</h3>
                  <div class="card_body">
                    <div class="card_mail">${mail.value}</div>
                    <div class="card_comment">${comment.value}</div>
                  </div>
                </div>`;
}
btn.onclick = viewCard;
