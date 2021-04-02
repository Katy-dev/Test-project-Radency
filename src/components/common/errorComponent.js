import React from "react";
import style from "./errorComponent.module.scss";


const ErrorComponent= (props) => {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.wrapper__context}>
                    <p className={style.wrapper__context_title}>{props.message}</p>
                </div>
            </div>
        </>
    )
};

export default ErrorComponent;
