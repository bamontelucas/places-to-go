const database = firebase.database();

const load = async () => {
    const snapshot = await database.ref('/').once('value');
    const json = snapshot.val();

    const html = json.map(categoria => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card categoria">
                <div class="card-header">
                    <h5 class="card-title">${categoria.categoria}</h5>
                    <button type="button" class="btn btn-primary btn-add">+</button>
                </div>  
                <ul class="list-group list-group-flush">
                    ${categoria.lugares.map(lugar => `<li class="list-group-item">${lugar}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    document.querySelector('#lugares').insertAdjacentHTML('beforeend', html);

    document.querySelectorAll('.btn-add').forEach(button => {
        button.addEventListener('click', () => alert('Funcionalidade ainda não desenvolvida'));
    });
}

load();