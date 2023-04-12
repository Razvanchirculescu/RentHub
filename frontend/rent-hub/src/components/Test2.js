import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Test from "./Test";
//const axios = require('axios'); // legacy way


const Test2 = () => {
    const [data, setData] = useState([]);
// Make a request for a user with a given ID
    axios.get('http://127.0.0.1:8080/clients')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

}

export default Test2;