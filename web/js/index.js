function markdown(path, id) {
    const div = document.getElementById(id);

    fetch(path)
        .then(response => response.text())
        .then(data => {
            div.textContent = data;
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}

const markdowndiv = document.getElementById('../person_who_returned_from_the_dead.md', 'markdown');

function putarrow(id, corner) {
    const element = document.getElementById(id);
    element.style.position = 'relative';

    const arrow = document.createElement("div");
    arrow.style.position = 'absolute';
    arrow.classList.add('arrow');

    switch (corner) {
        case 'topright':
            arrow.style.top = '0px';
            arrow.style.right = '0px';
            break;
        case 'topleft':
            arrow.style.top = '0px';
            arrow.style.left = '0px';
            break;
        case 'bottomleft':
            arrow.style.bottom = '0px';
            arrow.style.left = '0px';
            break;
        case 'bottomright':
            arrow.style.bottom = '0px';
            arrow.style.right = '0px';
            break;
        default:
            break;
    }
    

    const image = document.createElement("img");
    image.src = '/web/src/images/arrow.svg';
    image.width = 100;
    image.height = 100;
    image.classList.add('filter-white');

    arrow.appendChild(image);
    element.appendChild(arrow);

    element.addEventListener('mouseover', function(){
        arrow.classList.add('arrow-hover');
    });
    element.addEventListener('mouseleave', function(){
        arrow.classList.remove('arrow-hover');
    });
}

putarrow('slide', 'bottomright');

