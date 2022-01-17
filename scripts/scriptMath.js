const Matema = function () {
    this.initial = function (mainClass) {
        let mainHell = document.querySelector(`.${mainClass}`)
        mainHell.innerHTML = `
        <input type="text" class="inputNum1" name="inputNum1">
        <input type="text" class="inputNum2" name="inputNum2">
        <input type="text" class="sumRes" name="sumRes">
        <button class="resBtn">Result</button>
        `

        this.addNum()
    }


    this.addNum = function () {
        let addNum1 = document.querySelector('.inputNum1'),
            addNum2 = document.querySelector('.inputNum2'),
            ResultAll1 = document.querySelector('.sumRes'),
            addBtn = document.querySelector('.resBtn');

            addBtn.addEventListener('click', () => {
                ResultAll1.value = +addNum1.value + +addNum2.value;

                addNum1.value = '';
                addNum2.value = ''

                this.show(ResultAll1.value)
            })
        
    }
    
    this.show = function (addFirst) {
        alert(addFirst);
    } 
}


const matemaRes = new Matema ();
        matemaRes.initial('app')
