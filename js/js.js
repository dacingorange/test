window.onload=function(){
    var oImport = document.querySelector('.import');
    var oExport = document.querySelector('.export');

    oImport.onkeyup=function(ev){
        var oEvent = ev || event;
        if(oEvent.keyCode == 13 && oEvent.ctrlKey){
            oExport.innerHTML = oImport.value + oExport.innerHTML;
            oImport.value = '';
        }
    };
}