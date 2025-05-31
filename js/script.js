// typing
var typed = new Typed(".typing" ,{
    strings:["Web Designer",  "Software Developer","Web Developer"],
    typeSpeed:100,
    BackSpeed:80,
    loop:true
})
// aside
const nav =document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      for (let i= 0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
            for(let j=0; j<totalNavList;j++)
            {
                navList[j].querySelector("a").classList.remove("active")
            }
              this.classList.add("active")
              showSection(this);
          })
          
      }
      function showSection(element)
      {
        const target = element.getAttribute("href").split("#")[1];
        console.log(target)
      }

      
//active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.3, 
  }
);

sections.forEach(section => {
  observer.observe(section);
});