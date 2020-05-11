
let n
initialize()

setInterval(() => {
    console.log(n)
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n += 1
}, 3000)





function getImage(n) {
    return $(`.images>img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    console.log(n)
    return n
}


// 初始化
function initialize() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}

function makeEnter($node) {
    $node.removeClass('current leave').addClass('enter')
}