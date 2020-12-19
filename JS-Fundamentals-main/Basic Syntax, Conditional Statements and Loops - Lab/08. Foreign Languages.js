  function solve(input){
    let country = String(input);

    if(country === 'England' || country === 'USA'){
        console.log('English');
    }else if(country === 'Spain' || country === 'Argentina' || country === 'Mexico'){
        console.log('Spanish');
    }else{
        console.log('unknown');
        
    }
}
