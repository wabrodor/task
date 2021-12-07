

//dode owned by suhail wabrodor To do app basic running code

const input = document.querySelector("#id")
const editInput = document.querySelector("#ed")
const btn = document.querySelector(".btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")
const editForm = document.querySelector(".popup")




btn.addEventListener("click",(e)=>{
// appending list element on unorderd list
    e.preventDefault()
    makeList()
    DeletingList()
    editingTask ()
     })



  function DeletingList () {
const deleted = document.querySelectorAll(".delete").forEach(item =>{
item.addEventListener("click", () => {             
item.parentElement.parentElement.remove()
                            
if(ul.children.length === 0){
ul.classList.remove("wrapper")  
    }
         })
            })  
                }

 function makeList () {
 if(!input.value) return
ul.classList.add("wrapper")
 const li = document.createElement("li")
 li.innerHTML = `<p class = "input-value">  ${input.value.trim()} </p> <div class = "button-class"><button class = "delete"><i class="fas fa-trash-alt"></i></button> <button class = "edit-task"><i class="far fa-edit"></i></button> </div> `
  li.style.zIndex = "0"
 ul.append(li)
         // clearing input
input.value = ""
                }           


function editingTask () {
 const editTask = document.querySelectorAll(".edit-task").forEach(edit =>{

edit.addEventListener("click",  () =>{
const model = document.querySelector(".overlay")

 model.classList.add("active")                              
const parentList = edit.parentElement.previousElementSibling;
                        
//  adding identifier for identifying unique tasks
 parentList.classList.add("identifier")
                        //     // showing data from tasks

 editInput.value = parentList.innerText;
                        
                        // // finding specfic task for editing and updating
const updatedli = document.querySelector(".identifier")
const updateBtn = document.querySelector(".update")
                               
                    // updating tasks
                                 
updateBtn.addEventListener("click", (e)=>{
e.preventDefault()

 if(!updatedli.parentElement) return   
                  // updating task content
  updatedli.parentElement.innerHTML = `<p class = "input-value">  ${editInput.value.trim()} </p> <div class = "button-class"><button class = "delete"><i class="fas fa-trash-alt"></i></button> <button class = "edit-task"><i class="far fa-edit"></i></button> </div> `
                                       
                            // clearing input value
  editInput.value = ""
                                // clearing unique identifier
     parentList.classList.remove("identifier")
     model.classList.remove("active")
 editingTask ()
                                       //           
                                                   
  })
                                      
          })
                 })
                    
                }