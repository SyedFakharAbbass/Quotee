import React from 'react'

function abcd() {

    const abcddd = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "product": "MyLar Bag",
            "product_style": "Flat Pouch",
            "barrier_material": "Clear- Only For non- Cannabis",
            "print_material": "Matte",
            "embellishment": "Spot Matte",
            "total_design": "3",
            "total_qty": "342",
            "special_requirement": "hI HOW ARE YOU",
            "email": "hammadnadir75@gmail.com",
            "phone": "1112223333"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://erp.print247.us/api/order", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    return (
        <div>
            <h1>abcd</h1>
            <button onClick={abcddd}>Submitttt</button>
        </div>
    )
}

export default abcd