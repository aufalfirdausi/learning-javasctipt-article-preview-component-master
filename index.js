const icons = [
    'img/icon-facebook.svg',
    'img/icon-twitter.svg',
    'img/icon-pinterest.svg'
]

const share = document.getElementById('share')
const iconContainer = document.createElement('div')

// Style the container
iconContainer.style.display = 'none'
iconContainer.style.gap = '10px'
iconContainer.style.marginBottom = '10px'
iconContainer.style.flexDirection = 'row'
iconContainer.style.alignItems = 'center'
iconContainer.style.justifyContent = 'center'

iconContainer.id = 'share-icons'
iconContainer.style.position = 'absolute'
iconContainer.style.backgroundColor = 'hsl(217, 19%, 35%)'
iconContainer.style.padding = '15px 20px'
iconContainer.style.borderRadius = '10px'
iconContainer.style.top = '-60px'
iconContainer.style.right = '-20px'
iconContainer.style.zIndex = '1000'

// Create and add icons to container
icons.forEach(iconSrc => {
    const img = document.createElement('img')
    img.src = iconSrc
    img.style.width = '20px'
    img.style.height = '20px'
    img.style.cursor = 'pointer'
    img.style.filter = 'brightness(0) inverit(1)' // Make icons white
    iconContainer.appendChild(img)
})

// Add "SHARE" text
const shareText = document.createElement('span')
shareText.textContent = 'SHARE'
shareText.style.color = 'hsl(212, 23%, 69%)'
shareText.style.fontSize = '12px'
shareText.style.fontWeight = 'bold'
shareText.style.letterSpacing = '4px'
shareText.style.marginRight = '15px'
iconContainer.insertBefore(shareText, iconContainer.firstChild)

// Add container to the share button's parent
share.parentElement.style.position = 'relative'
share.parentElement.appendChild(iconContainer)

// Hover functionality
share.addEventListener('mouseenter', () => {
    iconContainer.style.display = 'flex'
    share.style.backgroundColor = 'hsl(217, 19%, 35%)'
})

share.addEventListener('mouseleave', () => {
    iconContainer.style.display = 'none'
    share.style.backgroundColor = 'hsl(210, 46%, 95%)'
    share.style.filter = 'none'
    share.style.borderRadius = ''
    share.style.padding = ''
})
