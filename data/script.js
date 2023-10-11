function clicar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nascDate')
   
    if(fano == 0 || fano < ano){
        window.alert('[ERROR]')
    }else{
        window.alert('ok!')
    }

    console.log(ano)
}
