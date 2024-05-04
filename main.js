const dropdown = document.querySelector('.side_bar-content.dropdown-btn');
const subMenu = document.querySelector('.submenu');

dropdown.onclick = function(){
    subMenu.classList.toggle('active');
}


const dropdown1 = document.querySelector('.side_bar-content.dropdown-btn1');
const subMenu1 = document.querySelector('.submenu1');

dropdown1.onclick = function(){
    subMenu1.classList.toggle('active1');
}

const table_main = document.querySelector('.table_main');
const add_member = document.querySelector('.add_members');
const btn_addmember=document.querySelector(".navbar_add");

btn_addmember.addEventListener('click',()=>{
    table_main.classList.toggle('hide');
    add_member.classList.toggle('active');

});

const add_list1 = document.querySelector('.add_member-list-1');
const add_list2 = document.querySelector('.add_member-list-2');
const add_title1 = document.querySelector('.add_member-title-1');
const add_title2 = document.querySelector('.add_member-title-2');

add_list1.addEventListener('click',()=>{
    add_title1.classList.toggle('active');
});

add_list2.addEventListener('click',()=>{
    add_title2.classList.toggle('active');
});
