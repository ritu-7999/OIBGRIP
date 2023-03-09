const calculateTemp = () => {
    const num = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');

    const tempvalue = temp_diff.options[tempSelected.selectedIndex].value;
    let result;
    const cel_to_feh =(n)=> {
        const cel = Math.round((n * 9 / 5) + 32)
        return cel;
    }
    const feh_to_cel =(n)=> {
        const feh = Math.round((n - 32) * 5 / 9)
        return feh;
    }
    if (tempvalue == 'cel') {
        result = cel_to_feh(num);
        document.getElementById('result').innerHTML = `${result}&deg;Celsius`;
    }else {
        result = feh_to_cel(num);
        document.getElementById('result').innerHTML = `${result}&deg;Fehnerheit`;
    }
}