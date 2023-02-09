function yesnoCheck() {
    if (document.getElementById('radio-cuerda').checked) {
        document.getElementById('cheks-cuerda').style.display = 'flex';
    } else {
        document.getElementById('cheks-cuerda').style.visibility = 'none';
    }

}