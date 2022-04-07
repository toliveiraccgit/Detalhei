const perfilDropdown = document.querySelector('.dropdown-cabecalho')

function abrePerfilDropdown(){
    perfilDropdown.style.visibility = ` visible `
    perfilDropdown.style.opacity = ` 1 `
    perfilDropdown.style.top = ` 0.313rem `
}

function fechaPerfilDropdown(){
    perfilDropdown.style.visibility = ` hidden `
    perfilDropdown.style.opacity = ` 0 `
    perfilDropdown.style.top = `  -20% `
}

const perfilDropdownMenu = document.querySelector('.dropdown-perfil-menu')

function abrePerfilDropdownMenu(){
    perfilDropdownMenu.style.visibility = ` visible `
    perfilDropdownMenu.style.opacity = ` 1 `
    perfilDropdownMenu.style.top = ` 0.313rem `
}

function fechaPerfilDropdownMenu(){
    perfilDropdownMenu.style.visibility = ` hidden `
    perfilDropdownMenu.style.opacity = ` 0 `
    perfilDropdownMenu.style.top = `  -20% `
}