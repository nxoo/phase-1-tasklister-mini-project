document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault()
        handleToDo(e.target.new_task.value)
    })
})

function handleToDo(todo){
    let li = document.createElement('li')
    li.textContent = todo
    document.querySelector("#tasks").appendChild(li)
}

// Unable to parse .netrc file. Please run the 'learn whoami' command to ensure that you are authenticated. Use Ask a Question on Learn.co for additional help.

