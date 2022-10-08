const rippleBtns = document.querySelectorAll('.ripple__effect');

rippleBtns.forEach(rippleBtn => {
    rippleBtn.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const btn_Top = e.target.offsetTop
        const btn_Left = e.target.offsetLeft

        const btnInsideX = x - btn_Left
        const btnInsideY = y - btn_Top

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = btnInsideY + 'px'
        circle.style.left = btnInsideX + 'px'
        this.appendChild(circle)
    })
})
