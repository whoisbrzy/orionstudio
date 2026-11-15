const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-pill");
if(menu&&nav){
  menu.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menu.setAttribute("aria-expanded",String(open));
  });
  nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded","false");
  }));
}
const header=document.querySelector(".site-header"),progress=document.querySelector(".page-progress");
function onScroll(){
  const max=document.documentElement.scrollHeight-innerHeight;
  if(progress)progress.style.width=(max>0?scrollY/max*100:0)+"%";
  if(header)header.classList.toggle("scrolled",scrollY>24);
}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();

if(nav){
  const links=[...nav.querySelectorAll("a")];
  const indicator=document.createElement("span");
  indicator.className="nav-active-pill";
  indicator.setAttribute("aria-hidden","true");
  nav.prepend(indicator);
  const path=location.pathname.split("/").pop()||"index.html";
  function currentLink(){
    const hash=location.hash;
    return links.find(a=>{
      const href=a.getAttribute("href")||"";
      if(hash&&href.startsWith("#"))return href===hash;
      if(href.startsWith("#"))return path==="index.html"&&href==="#studio";
      return href.split("#")[0]===path;
    })||links[0];
  }
  function moveIndicator(){
    if(matchMedia("(max-width: 640px)").matches){indicator.style.opacity="0";return;}
    const active=currentLink();
    if(!active)return;
    links.forEach(a=>a.removeAttribute("aria-current"));
    active.setAttribute("aria-current","page");
    const navRect=nav.getBoundingClientRect(),linkRect=active.getBoundingClientRect();
    indicator.style.width=linkRect.width+"px";
    indicator.style.transform="translateX("+(linkRect.left-navRect.left)+"px)";
    indicator.style.opacity="1";
  }
  moveIndicator();
  window.addEventListener("resize",moveIndicator,{passive:true});
  window.addEventListener("hashchange",moveIndicator);
  links.forEach(a=>a.addEventListener("click",()=>requestAnimationFrame(moveIndicator)));
}

const revealTargets=document.querySelectorAll(".intro-layout,.services-intro,.service-row,.process-grid article,.faq-list details,.contact-main,.selected-head,.featured-work,.inner-copy,.values-grid article,.service-page-list article,.pricing-panel,.work-editorial,.contact-details,.plain-intro,.plain-project,.plain-service-list a");
if("IntersectionObserver" in window){
  revealTargets.forEach(el=>el.classList.add("fade-up"));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target);}
  }),{threshold:.12});
  revealTargets.forEach(el=>observer.observe(el));
}else revealTargets.forEach(el=>el.classList.add("in-view"));
