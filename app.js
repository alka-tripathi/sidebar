let menu = document.querySelector("#menu");
function showSideBar(){
    let sidebar=document.querySelector(".sidebar");
    sidebar.style.display='flex';

}
menu.addEventListener("click",showSideBar);

let cut = document.querySelector("#cross");
function hideSideBar(){
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display='none';
}
cut.addEventListener("click",hideSideBar);
