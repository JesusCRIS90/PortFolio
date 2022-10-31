const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const secIndBtnList = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content'); // AllSection


function PageTransition(){

    // Controlling with section is active
    for( let idx = 0 ; idx < secIndBtnList.length ; idx++ ){
        secIndBtnList[idx].addEventListener( 'click',  function() {
            let currentBtnActive = document.querySelectorAll('.active-btn');
            currentBtnActive[ 0 ].className = currentBtnActive[ 0 ].className.replace('active-btn', '');
            this.className += 'active-btn';
        } )
    }

    // Switching between Sections
    allSections.addEventListener('click', (e) =>{
        const current_id = e.target.dataset.id;
        if( current_id ){
            
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            document.getElementById( current_id ).classList.add('active');
        }
    })

}

function SendMessagePressed(){
    let btn_send_form = document.querySelector('.Send-btn');
    console.log( btn_send_form );
    btn_send_form.click();
}

PageTransition();