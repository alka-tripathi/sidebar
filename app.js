const menu = document.querySelector("#menu");
function showSideBar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display='flex';

}
menu.addEventListener("click",showSideBar);