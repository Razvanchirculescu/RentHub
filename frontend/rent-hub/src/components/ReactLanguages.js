import React, { useState } from 'react';
import "./ReactLanguages.css"
import ReactLanguageSelect from "react-languages-select";

import "react-languages-select/css/react-languages-select.css";

export default function ReactLanguages() {
    const [selectedLanguage, setSelectedLanguage] = useState("");

    return (
        <div className="ReactLanguages">
            <ReactLanguageSelect
                names={"international"}
                onSelect={(languageCode)=>setSelectedLanguage(languageCode)}
            />
        </div>
    );
}
