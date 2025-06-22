function customRender(mainContainer, reactELement) {
    /* v1::initial solution::
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children
    domElement.setAttribute('href', reactELement.props.href)
    domElement.setAttribute('target', reactELement.props.target)
    mainContainer.appendChild(domElement)
    */

    // part 2:
    const domElement = document.createElement(reactELement.type)
    domElement.innerHTML = reactELement.children

    for (const prop in reactELement.props)
        domElement.setAttribute(prop,reactELement.props[prop])
    
    mainContainer.appendChild(domElement)


}

const reactELement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to go to google"
}

const mainContainer = document.getElementById('root')
console.log(mainContainer)

customRender(mainContainer, reactELement)