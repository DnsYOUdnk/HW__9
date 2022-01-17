const Todolist = function () {
    let arrTodolist = [];

    this.initList = function(mainClass) {
        let mainElement = document.querySelector(`${mainClass}`);
        if (!mainElement) return;

        mainElement.innerHTML = `
        <div class="container">
            <div class="todolist__wrapper">
                <div class="list">
                    <input type="text" class="add__note" id="text__note" name="add__note" placeholder="Tape your task...">
                    <button class="add__btn">Add task</button>
                    <button class="clear__btn">Clear all</button>
                </div>
                <div class="todolist__items"></div>
            </div>
        </div>
        `
        let addNotesBtn = document.querySelector('.add__btn');
        let inputText = document.querySelector('#text__note');
            addNotesBtn.addEventListener('click', () => {
                if (inputText.value.trim() == '' || inputText.value.trim() == '' || inputText.value.trim() == '') {
                    alert('Enter the text in the field');
                } else {
                    this.addNotes(inputText.value)
                    inputText.value = ''
                }
            })  
            inputText.addEventListener('keydown', (element) => {
                if (element.keyCode == 13) {
                    if (inputText.value.trim() == '' || inputText.value.trim() == '' || inputText.value.trim() == '') {
                        alert('Enter the text in the field');
                    } else {
                        this.addNotes(inputText.value)
                        inputText.value = ''
                    }
                }
            })  

        let clear = document.querySelector('.clear__btn');
                clear.addEventListener('click', () => {
                    this.deleteAll()
                })

        this.show()
    }

    this.addNotes = function(textNote) {
        arrTodolist.push({textNote})
        this.show();
    }

    this.deleteAll = function() {
        arrTodolist = [];
        this.show()
    }

    this.delete = function (id) {
        
        let idNumber = +id;
        arrTodolist = arrTodolist.filter((_, index) => index != idNumber);
        this.show()
    }

    this.show = function() {
        let content = document.querySelector('.todolist__items'),
            list = '';
        arrTodolist.forEach((note) => {
            list += `<div class="todolist__item"><div><input type="checkbox" class="note__check">${note.textNote}</div><div><button class="delete__btn">Delete</button></div></div>`
        })
        content.innerHTML = `${list}`

        let deleteT = document.querySelectorAll('.delete__btn');
            deleteT.forEach((deleteBtn,index) => {
                    deleteBtn.addEventListener('click', () => {
                        this.delete(index)
                    })
            })

        this.highlight()    
    }

    this.highlight = function () {
        let listNote = document.querySelectorAll('.todolist__item')
            if (!listNote) return;
            let chek = document.querySelectorAll('.note__check');
                
            chek.forEach((chek_element, index) => {
                chek_element.addEventListener('click', () => {
                    if (chek_element.checked) {
                        listNote[index].style.background="cornflowerblue";
                        listNote[index].classList.add("highlight");
                    } else if (!chek_element.checked){
                        listNote[index].style.background="white";
                        listNote[index].classList.remove("highlight");
                    }
                })
            })
    }
}

const todolist = new Todolist();

todolist.initList('.todolist')


