export function element(tag, classList = [], content) {
    const el = document.createElement(tag)

    if (classList.length) {
        el.classList.add(...classList)
    }
    
    if (content) {
        el.textContent = content
    }
    
    return el
}
