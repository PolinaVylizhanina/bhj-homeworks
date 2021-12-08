const checkList=document.querySelectorAll('.interest__check')

function getCheckList() { 
    const checkChild = this.closest('label').nextElementSibling.querySelectorAll('.interest__check'); 

    if (this.checked) {
        for (let i = 0; i < checkChild.length; i++) {
            checkChild[i].checked = true;
        }
        } else {
            for (let i = 0; i < checkChild.length; i++) {
                checkChild[i].checked = false;
        }
    }
}

for ( let item of checkList) {
    item.addEventListener('click', getCheckList)
}

