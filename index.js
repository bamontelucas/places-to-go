const load = async() => {
    const response = await fetch('places.json');
    const json = await response.json();
    
    const html = json.map(categoria => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${categoria.categoria}</h5>
                </div>  
                <ul class="list-group list-group-flush">
                    ${categoria.lugares.map(lugar => `<li class="list-group-item">${lugar}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    
    document.querySelector('#lugares').insertAdjacentHTML('beforeend', html);
}

load();