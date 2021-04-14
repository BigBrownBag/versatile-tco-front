import React from 'react';
import style from "./results.module.css";

const Results = () => {
    return (
        <div className={style.wrapp}>
            <div className="row d-flex justify-content-between">
                <div className=''>
                    <div className="final-summ align-self-start">Финальная стоимость: </div>
                    <div className="detail align-self-start">Подробно</div>
                </div>
                <div className="category-schedule">Some plot</div>
            </div>
        </div>
    );
};

export default Results;