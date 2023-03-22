import React, { useState } from "react";

export const Form = () => {
    const [inputDni, setInputDni] = useState("");
    const [inputRuc, setInputRuc] = useState("");

    const [rptaDni, setRptaDni] = useState("");
    const [rptaRuc, setRptaRuc] = useState("");

    const onChangeRuc = (e) => {
        setInputRuc(e.target.value);
    };

    const onChangeDni = (e) => {
        setInputDni(e.target.value);
    };

    const handlePressSearchDni = async () => {
        try {
            const resp = await fetch(`http://localhost:4000/dni/${inputDni}`);
            const data = await resp.json();
            if (data.data) setRptaDni(data.data.nombre);
            else  alert(data.error);
            
        } catch (error) {
            console.log(error);
        }
    };

    const handlePressSearchRuc = async () => {
        const resp = await fetch(`http://localhost:4000/ruc/${inputRuc}`);
        const data = await resp.json();
        if (data.data) setRptaRuc(data.data.nombre) 
        else alert(data.error.error);
    };

    return (
        <div className="card">
            <div className="card-item">
                <div>
                    Consulta RUC
                    <input
                        type="text"
                        className="input"
                        value={inputRuc}
                        onChange={onChangeRuc}
                    />
                    <button
                        onClick={handlePressSearchRuc}
                        className="btn"
                        disabled={inputRuc.length < 11}
                    >
                        Buscar
                    </button>
                </div>
                <div>
                    Rpta
                    <input
                        type="text"
                        className="input"
                        value={rptaRuc}
                        readOnly
                    />
                </div>
            </div>

            <div className="card-item">
                <div>
                    Consulta DNI
                    <input
                        type="text"
                        className="input"
                        value={inputDni}
                        onChange={onChangeDni}
                    />
                    <button
                        onClick={handlePressSearchDni}
                        className="btn"
                        disabled={inputDni.length < 8}
                    >
                        Buscar
                    </button>
                </div>
                <div>
                    Rpta
                    <input
                        type="text"
                        className="input"
                        value={rptaDni}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
};
