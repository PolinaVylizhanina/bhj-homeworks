
const checkList=document.querySelectorAll('.interest__check')

function getCheckList() { 
    const checkAll = Array.from(this.closest('.interest').querySelectorAll('.interest__check'))

    if (this.closest('ul.interests') === null & this.checked === true) {
        for (let i = 0; i < checkAll.length; i++) {
            checkAll[i].checked = true;
        }
        } else if (this.closest('ul.interests') === null & this.checked === false){
            for (let i = 0; i < checkAll.length; i++) {
                checkAll[i].checked = false;
        }
    }
}

for ( let item of checkList) {
    item.addEventListener('click', getCheckList)
}

