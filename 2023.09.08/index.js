function btnSzamit(){
    var kapacitas = document.getElementById("numMennyiseg").value;
    var atvivendo = document.getElementById("sliSebesseg").value;
    var selkapacitas = document.getElementById("selMennyiseg").value;
    var selatvivendo = document.getElementById("selSebesseg").value;
    
    if (selkapacitas == selatvivendo) {
        var atviteliIdo = kapacitas / atvivendo;
        document.getElementById("ido").innerHTML = Math.round(atviteliIdo, 10);
    }
    else if (selkapacitas == "KB")
    {
        if (selatvivendo == "MB")
        {
            var atvivteliIdo = kapacitas / (1000 * atvivendo);
            document.getElementById("ido").innerHTML =  Math.round(atvivteliIdo, 10);
        }
        else if (selatvivendo == "GB")
        {
            var atvivteliIdo = kapacitas / (1000 * (1000 * atvivendo));
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
    }
    else if (selkapacitas == "MB")
    {
        if (selatvivendo == "KB")
        {
            var atvivteliIdo = (1000 * kapacitas) /atvivendo;
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
        else if (selatvivendo == "GB")
        {
            var atvivteliIdo = kapacitas / (1000 * atvivendo);
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
    }
    else if (selkapacitas == "GB")
    {
        if (selatvivendo == "KB")
        {
            var atvivteliIdo = (1000 * (1000 * kapacitas)) / atvivendo;
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
        else if (selatvivendo == "MB")
        {
            var atvivteliIdo = (1000 * kapacitas) / atvivendo;
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
    }
    else if (selkapacitas == "TB")
    {
        if (selatvivendo == "KB")
        {
            var atvivteliIdo = kapacitas / (1000 * (1000 * (1000 * atvivendo)));
            document.getElementById("ido").innerHTML =  Math.round(atvivteliIdo, 10);
        }
        else if (selatvivendo == "MB")
        {

            var atvivteliIdo = kapacitas / (1000 * (1000 * atvivendo));
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
        else if (selatvivendo == "GB")
        {
            var atvivteliIdo = kapacitas / (1000 * atvivendo);
            document.getElementById("ido").innerHTML = Math.round(atvivteliIdo, 10);
        }
    }
}