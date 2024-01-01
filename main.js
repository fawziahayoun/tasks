let theInput = document.querySelector(".add-task input");
  let theAddButton = document.querySelector(".add-task .plus");
  let thesksContainer = document.querySelector(".todo-container");
  let tasksCount = document.querySelector(".tasks-count span");
  let tasksCompleted = document.querySelector(".tasks-completed span");
  let tasksContent = document.querySelector('.tasks-content');

  window.onload = function(){
    theInput.focus();
  }

  theAddButton.onclick = function() {

    if(theInput.value == ''){

    }else{

        let noTasksMsg = document.querySelector(".no-tasks-message");
        if(document.body.contains(noTasksMsg)){
            noTasksMsg.remove();
        }

        let mainSpan = document.createElement('span');
        let deletespan = document.createElement('span');
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode('Delete');
        deletespan.appendChild(deleteText)
        deletespan.className = "delete";
        mainSpan.appendChild(text);
        mainSpan.className   = "tasks-box";
        mainSpan.appendChild(deletespan);
        tasksContent.appendChild(mainSpan);
        theInput.value = '' ;
        theInput.focus();
        calculatTasks();

    }
  };

  document.addEventListener("click",function(e) {
    if(e.target.className == 'delete'){
        e.target.parentNode.remove();
        if(tasksContent.childElementCount == 0){
            createNoTasksMsg();
        }

        
    }
    if(e.target.classList.contains('tasks-box')){
        e.target.classList.toggle('finished');

    }
    calculatTasks();

  });


  function createNoTasksMsg(){
    let msgspan = document.createElement('span');
    let msgText = document.createTextNode("No tasks To Show");
    msgspan.appendChild(msgText);

    msgspan.className = 'no-tasks-message';
    tasksContent.appendChild(msgspan);
  }

  function calculatTasks(){
    tasksCount.innerHTML =document.querySelectorAll('.tasks-content .tasks-box').length;
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  }