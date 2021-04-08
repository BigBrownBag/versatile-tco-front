import React, {Component} from 'react';
import './calculations.css';
import imgCar from './imgCar.png';


export default class Calculation extends Component{
    state = {
        tenure: 15,
        creditTerm: 15,
        checkCredit: false,
        checkNewCar: true,
    };

    onTenureChange = (e) => {
        //console.log(e.target.value);
        this.setState({tenure: e.target.value});
        //console.log(this.state.tenure);
    };
    
    onCreditTermChange = (e) => {
        this.setState({creditTerm: e.target.value});
    };

    handleSubmitCalculations = (e) => {
        e.preventDefault();
    };

    onCreditCheck = () => {
        this.setState({checkCredit: !this.state.checkCredit});
        console.log(this.state.checkCredit);
    };

    onNewCarChecked = () => {
        this.setState({checkNewCar: !this.state.checkNewCar});
    };

    render(){
        const checkCredit = this.state.checkCredit ? null:<CreditCost state={this.state} onCreditTermChange={this.onCreditTermChange}/>;
        const newCar = this.state.checkNewCar ? null:<ObjectCost state={this.state}/>;
        return (
            <div className="calculation">
            <form className='justify-content-center' onSubmit={this.handleSubmitCalculations}>
                <h1>Обьект расcчётов</h1>
                <ObjectCost state={this.state}/>
                <div className="custom-control custom-switch d-flex justify-content-start ml-3">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked onChange={this.onCreditCheck}/>
                    <label className="custom-control-label" htmlFor="customSwitch1">Я буду использовать кредит для покупки</label>
                </div>
                {checkCredit}
                <h1>Регулярные расходы</h1>
                <RegularCost state={this.state} onTenureChange={this.onTenureChange}/>
                <div className="custom-control custom-switch ml-3 mt-5 mb-5 d-flex justify-content-start">
                    <input type="checkbox" className="custom-control-input" id="customSwitch3" onChange={this.onNewCarChecked}/>
                    <label className="custom-control-label" htmlFor="customSwitch3">Добавить автомобиль для сравнения</label>
                </div>
                {newCar}
                <div className="row d-flex justify-content-center">
                    <button className="btn btn-primary mt-5 mb-3">Рассчитать</button>
                </div>
            </form>
        </div>
        )
    };
};

const RegularCost = ({state, onTenureChange}) => {
    const {tenure} = state;
    return (
        <div className="wrapp">
            <div className="row">
                <div className="col-4">
                    <div className="form-group">
                        <label className="form-label">Предпологаемый срок владения:</label>
                        <br/><span>{tenure} лет</span>
                        <div className="form-group mt-2">
                            <input type="range" className="form-control-range" min="1" max="30" step="1" value={tenure} onChange={onTenureChange}/>
                            <div className="row f-flex justify-content-between">
                                <span>1</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex align-items-end mt-3">
                <div className="col-1">
                    <div className="form-group">
                        <label className="form-label">Средний пробег</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <span>В</span>
                <div className="col-1">
                    <div className="form-group">
                        <select className="custom-select">
                            <option selected>Д.</option>
                            <option value="1">Н.</option>
                            <option value="2">М.</option>
                        </select>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-1">
                    <div className="form-group">
                        <label className="form-label">Средний расход топлива</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <span>на км</span>
                <div className="col-1"></div>
                <div className="col-1">
                    <div className="form-group">
                        <label className="form-label">Марка бензина</label>
                        <select className="custom-select more-width">
                            <option selected>80</option>
                            <option value="1">92</option>
                            <option value="2">95</option>
                            <option value="3">98</option>
                        </select>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-2">
                    <div className="form-group">
                        <label className="form-label">Траты на топливо</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <span>В</span>
                <div className="col-1">
                    <div className="form-group">
                        <select className="custom-select">
                            <option selected>Д.</option>
                            <option value="1">Н.</option>
                            <option value="2">М.</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-4">
                        <div className="form-group">
                            <label className="form-label">Налог</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Стоимость ТО</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Стоимость комплекта зимней резины</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="form-group">
                            <label className="form-label">Страховка</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group d-flex flex-column">
                            <label className="form-label">Переодичность проведения ТО</label>
                            <div className="d-flex col-9">
                                <span className="period-wheels">Каждые</span>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Стоимость комплекта летней резины</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between wrapp">
                    <div className="d-flex">
                        <div className="period-wheels"><span>Частота смены комплекта:</span></div>
                        <div className="form-group">
                            <select className="custom-select">
                                <option selected>5</option>
                                <option value="1">6</option>
                                <option value="2">7</option>
                            </select>
                        </div>
                        <div className="period-wheels"><span>лет</span></div>
                    </div>
                    <div className="d-flex">
                        <div className="period-wheels"><span>Частота смены комплекта:</span></div>
                        <div className="form-group">
                            <select className="custom-select" value={['Б', 'В']}>
                                <option selected>5</option>
                                <option value="1">6</option>
                                <option value="2">7</option>
                            </select>
                        </div>
                        <div className="period-wheels"><span>лет</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ObjectCost = ({state}) => {
    return (
        <div className='object'>
            <div className="col-5 wrapp">
                <div className="form-group">
                    <label className="form-label">Тип объекта рассчёта</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Марка автомобиля</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Модель автомобиля</label>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="col-3"></div>
            <div className="col-4">
                <img src={imgCar} alt="car"/>
            </div>
        </div>
    )
};

const CreditCost = ({state,onCreditTermChange}) => {
    const {creditTerm} = state;
    return (
        <div>
            <h1>Рассчитайте кредит</h1>
            <div className="wrapp row">
                <div className="col-4">
                    <div className="form-group">
                        <label className="form-label">Стоимость автомобиля</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Первоначальный взнос</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Срок кредита:</label>
                        <span className="ml-2">{creditTerm} лет</span>
                        <div className="form-group mt-2">
                            <input type="range" className="form-control-range" min="1" max="30" step="1" value={creditTerm} onChange={onCreditTermChange}/>
                            <div className="row f-flex justify-content-between">
                                <span>1</span>
                                <span>30</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
                <div className="col-3">
                    <div className="credit-input">
                        <div className="form-group">
                            <label className="form-label">Ежемесячный платёж</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Сумма кредита</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Необходимый доход</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="custom-control custom-switch  ml-3 d-flex justify-content-start">
                    <input type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked/>
                    <label className="custom-control-label" htmlFor="customSwitch2">Я буду использовать материнский капитал для покупки</label>
                </div>
            </div>
        </div>
    )
};
