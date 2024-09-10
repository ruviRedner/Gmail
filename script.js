const createNavbar = ()=>{
       const divNav = document.createElement("div")
       divNav.classList.add("class-nav")
       return divNav
}

const createItemNav = (stringTitle,nav)=>{
    const item = document.createElement("div")
    item.classList.add("class-nav-item")
    item.textContent = stringTitle
    nav.appendChild(item) 
    return item
}