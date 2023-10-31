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