const response = await fetch('places.json');
const json = await response.json();

const html = json.map(categoria => `
    <li>
        ${categoria.categoria}
        <ul>
            ${categoria.lugares.map(lugar => `<li>${lugar}</li>`)}
        </ul>
    </li>
`);

document.querySelector('#places').insertAdjacentHTML('beforeend', html);