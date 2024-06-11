const isopen = false;

const showMenu = ()=>{
    document.querySelector('.mobileMenu').style.visibility = 'visibility'
    document.querySelector('.mobileMenu').style.display = 'flex'
    document.querySelector('.mobileMenuIcon').classlist.remove('fa-bars')
    document.querySelector('.mobileMenuIcon').classlist.add('fa-times')
}

const hidemenu = ()=>{
    document.querySelector('.mobilemenu').style.visibility = 'hidden'
    document.querySelector('.mobilemenu').style.display = 'none'
    document.querySelector('.mobilemenu').classlist.remove('fa-times')
    document.querySelector('.mobilemenu').classlist.add('fa-bars')
}

const toggleNav = ()=>{
    isopen = !isopen;

}

if(isopen){
    showMenu()
}else{
    hidemenu()  
}

const btn = document. querySelector('.mobilemenuicon');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    toggleNav()
})

const mainwrapper = document.querySelector('.main-wrapper')
mainwrapper.addEventListener('click', (e)=>{
    isopen = false;
    e.preventDefault();
    hidemenu()
})