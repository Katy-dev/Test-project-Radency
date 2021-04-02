import React, {useState} from 'react';
import ReactFileReader from "react-file-reader";
import Papa from 'papaparse';
import style from "./upload.module.scss";
import TableList from "../tableList/tableList";

const UploadFile = () => {
    const [newData, setNewData] = useState(undefined);

    const handleFiles = files => {
        let reader = new FileReader();
        reader.onload = function (e) {
            importCsv(reader.result);
        }
        reader.readAsText(files[0]);
    }

    const importCsv = (csvFile) => {
        if (csvFile) {
            Papa.parse(csvFile, {
                complete: updateData,
                header: true
            });
        }
    }

    const updateData = (result) => {
        let data = result.data;
        setNewData(data);
    }

    const reader = (
        <div
            className={style.wrapper__button}>
            <ReactFileReader
                handleFiles={handleFiles}
                fileTypes={'.csv'}>
                <button
                    className={style.btn}>
                    Import users
                </button>
            </ReactFileReader>
        </div>
    );
    return (
        <>
            {reader}
            <TableList usersList={newData}/>
            {reader}
        </>
    )
}

export default UploadFile;
