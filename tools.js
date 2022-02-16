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

function bytesToSize(bytes) {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (!bytes) {
        return '0 Byte'
    }
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
}

export function filePreviewRender(file, src) {
    return `
        <div class="preview-image">
        <div class="preview-remove" data-name="${file.name}">&times;</div>
        <img src="${src}" alt="${file.name}" />
        <div class="preview-info">
            <span>${file.name}</span>
            ${bytesToSize(file.size)}
        </div>
        </div>
    `
}
