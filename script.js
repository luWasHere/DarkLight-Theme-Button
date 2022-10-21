

document.querySelector("#button").onclick = function(){

    let root = document.querySelector(':root');
    let gcs = getComputedStyle(root);
    let bg = gcs.getPropertyValue('--bg')
    let bg2 = gcs.getPropertyValue('--bg2')
    let items = gcs.getPropertyValue('--items')
    let items2 = gcs.getPropertyValue('--items2')

    root.style.setProperty('--bg', `${items}`)
    root.style.setProperty('--bg2', `${items2}`)
    root.style.setProperty('--items', `${bg}`)
    root.style.setProperty('--items2', `${bg2}`)

}