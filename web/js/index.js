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

    const styles = {
        'topright': { top: '0px', right: '0px' },
        'topleft': { top: '0px', left: '0px' },
        'bottomleft': { bottom: '0px', left: '0px' },
        'bottomright': { bottom: '0px', right: '0px' },
    };

    switch (corner) {
        case 'topright':
        case 'topleft':
        case 'bottomleft':
        case 'bottomright':
            Object.assign(arrow.style, styles[corner]);
            break;
        default:
            break;
    }

    const image = document.createElement("img");
    image.src = `/web/src/images/arrow.svg`;
    image.width = 100;
    image.height = 100;
    image.classList.add('filter-white');

    arrow.appendChild(image);
    element.appendChild(arrow);

    element.addEventListener('mouseover', () => arrow.classList.add('arrow-hover'));
    element.addEventListener('mouseleave', () => arrow.classList.remove('arrow-hover'));
}

putarrow('slide', 'bottomright');

