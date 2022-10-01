const contacts = document.querySelectorAll(".contact_method");
const system_contents = document.querySelectorAll(".system_contents")

contacts.forEach((contact) => {
        contact.addEventListener("click", ()=>{
            if(contact.classList.contains("active")) {                   
                contact.classList.remove("active");
            } else {
                removeActiveContactMethod()
                contact.classList.add("active");
            }
        })
  
});

system_contents.forEach((content)=>{
    content.addEventListener("click", ()=>{
        if(content.classList.contains("active")) {                   
            content.classList.remove("active");
        } else {
            removeActiveSystemContent()
            content.classList.add("active");
        }
    })
})

function removeActiveContactMethod() {
    contacts.forEach((contact) => {
      contact.classList.remove("active");
    });
  }

function removeActiveSystemContent(){
    system_contents.forEach((content)=>{
        content.classList.remove("active")
    })
}