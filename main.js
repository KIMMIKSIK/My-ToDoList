//1.내용을 입력합니다.
//2. +버튼을 누르면 task-list가 생성됩니다.
//3. 선택 버튼을 누르면 글씨가 취소선이 생기면서 배경이 회색이됩니다.
//4. 취소 버튼을 누르면 해당 내용이 삭제됩니다.
//5. 진행중 버튼을 누르면 취소선이 없는 내용들만 나오게된다.
//6. 완료 버튼을 누르면 취소선이 생긴 애들만 나오게 됩니다.
//7. 모두 진행중 완료 3곳 모두에서 내용을 삭제시킬 수 있어야 합니다.
//8. enter키로도 내용 입력이 가능해야 합니다.


let userInput = document.getElementById("user-input");
let playButton = document.getElementById("button");
let tasklist=[];
let filterList=[];
let taskTitle = document.querySelectorAll(".task-title div");
let eventTask="all";
let underLine = document.getElementById("under-line");



for(let i=1;i<taskTitle.length;i++){
    taskTitle[i].addEventListener("click",function(event){filter(event);});
    

}
taskTitle.forEach(menu=>menu.addEventListener("click",(e)=>underLineIndicator(e)))


function underLineIndicator(e){

        underLine.style.left = e.target.offsetLeft + "px";
        underLine.style.width = e.target.offsetWidth +"px";
        underLine.style.top = e.target.offsetTop + e.Target.offsetHeight + "px";


}


userInput.addEventListener("click", function(){userInput.value="";})
userInput.addEventListener("click", function(){userInput.placeholder="";})
userInput.addEventListener("keyup", function(event){if(event.keyCode ===13){ event.preventDefault(); playButton.click()}})
playButton.addEventListener("click", addTask);


function addTask(){
    
        let taskobject = {
        taskname:userInput.value,
        condition:false,
        id:'_' + Math.random().toString(36).substr(2, 9)

    }
    
    
    tasklist.push(taskobject);
    console.log(tasklist);
    console.log(eventTask);
    render();
}
    

function render(){
    
    let list=[];
    let taskHTML = "";

    if(eventTask == "all"){

        list = tasklist;
    }
    else if(eventTask == "ongoing" || eventTask == "done"){

        list = filterList;
    }



    for(let i=0;i<list.length;i++){

        if(list[i].condition==true){

            taskHTML += `<div class="task-option task-background"><div class="task-option-name task-option-pad">${list[i].taskname}</div>
            
            <div class="button-group">
            <button class="button-box" onclick="check('${list[i].id}')"><i class="fa-solid fa-check green-check"></i></button>
            <button class="button-box" onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash-can red-can"></i></button>
            </div>
            
            </div>`

        }

        else {
        taskHTML += `<div class="task-option"><div class="task-option-pad">${list[i].taskname}</div>
        
        <div class="button-group">
        <button class="button-box" onclick="check('${list[i].id}')">
        <i class="fa-solid fa-check green-check"></i>
        </button>
        <button class="button-box" onclick="deleteTask('${list[i].id}')">
        <i class="fa-solid fa-trash-can red-can"></i>
        </button>
        </div>
        
        </div>`
        }
    }
    
    
        document.getElementById("task-list").innerHTML=taskHTML;

}
    

function check(id){

    for(let i=0;i<tasklist.length;i++){

        if(id == tasklist[i].id){

            tasklist[i].condition = !tasklist[i].condition;

            break;
            
        }
    }

    render();

    }

    function deleteTask(id){

        for(let i=0;i<tasklist.length;i++){

            if(id == tasklist[i].id){

                tasklist.splice(i,1);
                deleteFilter(id)
                break; 
            }
        }
        render();
    }



    function deleteFilter(id){

        for(let i =0; i<filterList.length;i++){
            if(id == filterList[i].id){
                filterList.splice(i,1)
                break;
            }

        }

    }


    function filter(e){

        filterList=[];
        eventTask = e.target.id;
            

            if (eventTask == "all"){

                render()
            }
            else if(eventTask == "ongoing"){
                for(let i = 0; i<tasklist.length; i++){
                    if(tasklist[i].condition == false){ 
                        filterList.push(tasklist[i])

                }
                

            }
                render();

            }
            else if(eventTask == "done"){
                for(let i = 0; i<tasklist.length; i++){
                    if(tasklist[i].condition == true){ 
                        filterList.push(tasklist[i])

                }
                

            }
                render();

            }


        }
