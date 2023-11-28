export const FakeAd = ()=>{
const robux = document.getElementById('nav-robux-amount');
const avt = document.querySelector('.avatar-card-image');
const img_avt = document.querySelector('.avatar-card-image img')
const username = document.querySelector('.age-bracket-label-username');
const span = document.createElement('span');
const verify = document.createElement('span');
const img_verify = document.createElement('img');
const box_user = document.querySelector('.dynamic-overflow-container');
const mom_box_user = document.querySelector('.age-bracket-label');
const robux_sale = document.querySelectorAll('.text-robux-tile');
const bell_notification = document.getElementById('notifications-bell-badge');
let hacking = true;
if (hacking){
    robux.innerHTML = '∞';
    robux.style.fontSize = '40px';
    img_avt.src = 'https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A91C0E7E0F594224906140CE8B4D1479-Png/150/150/AvatarHeadshot/Png/noFilter';
    username.innerHTML = 'Roblox';
    verified();
    robux_sale.forEach(robuxtobuy => robuxtobuy.innerHTML = '0');
    bell_notification.innerHTML = '99+';
}
function verified(){
    box_user.appendChild(span);
    span.appendChild(verify);
    verify.appendChild(img_verify);
    verify.setAttribute('role','button');
    verify.setAttribute('tabindex', '0');
    verify.setAttribute('class', 'jss4');
    img_verify.style.width = '17.5px';
    img_verify.style.height = '17.5px';
    span.style.marginLeft = '5px';
    span.style.marginRight = ' 6.5px';
    span.style.display = 'flex';
    img_verify.setAttribute('class', 'verified-badge-icon-player-search-rendered jss2');
    img_verify.setAttribute('src',`data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28' fill='none'%3E%3Cg clip-path='url(%23clip0_8_46)'%3E%3Crect x='5.88818' width='22.89' height='22.89' transform='rotate(15 5.88818 0)' fill='%230066FF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20.543 8.7508L20.549 8.7568C21.15 9.3578 21.15 10.3318 20.549 10.9328L11.817 19.6648L7.45 15.2968C6.85 14.6958 6.85 13.7218 7.45 13.1218L7.457 13.1148C8.058 12.5138 9.031 12.5138 9.633 13.1148L11.817 15.2998L18.367 8.7508C18.968 8.1498 19.942 8.1498 20.543 8.7508Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_8_46'%3E%3Crect width='28' height='28' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`);
    img_verify.setAttribute('title', 'Biểu Tượng Huy Hiệu Đã Xác Thực');
    img_verify.setAttribute('alt', 'Biểu Tượng Huy Hiệu Đã Xác Thực');
}}



