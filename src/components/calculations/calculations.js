import React, {Component} from 'react';
import './calculations.css';
import imgCar from './imgCar.png';


export default class Calculation extends Component{
    state = {
        tenure: 15,
        creditTerm: 15,
    };

    onTenureChange = (e) => {
        //console.log(e.target.value);
        this.setState({tenure: e.target.value});
        console.log(this.state.tenure);
    };
    
    onCreditTermChange = (e) => {
        this.setState({creditTerm: e.target.value});
    };

    render(){
        return (
            <div className="calculation">
            <form className='justify-content-center'>
                <h1>Обьект расcчётов</h1>
                <div className='object'>
                    <div className="col-5 wrapp">
                        <div className="form-group">
                            <label class="form-label">Тип объекта рассчёта</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className="form-group">
                            <label class="form-label">Марка автомобиля</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className="form-group">
                            <label class="form-label">Модель автомобиля</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" defaultChecked/>
                            <label className="custom-control-label" for="customSwitch1">Я буду использовать кредит для покупки</label>
                        </div>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-4">
                        <img src={imgCar} alt="car"/>
                    </div>
                </div>
                <h1>Рассчитайте кредит</h1>
                <div className="wrapp row">
                    <div className="col-4">
                        <div className="form-group">
                            <label class="form-label">Стоимость автомобиля</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className="form-group">
                            <label class="form-label">Первоначальный взнос</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div className="form-group">
                            <label class="form-label">Срок кредита:</label>
                            <span className="ml-2">{this.state.creditTerm} лет</span>
                            <div class="form-group mt-2">
                                <input type="range" class="form-control-range" min="1" max="30" step="1" value={this.state.creditTerm} onChange={this.onCreditTermChange}/>
                                <div className="row f-flex justify-content-between">
                                    <span>1</span>
                                    <span>30</span>
                                </div>
                            </div>
                        </div>
                        <div class="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked/>
                                <label className="custom-control-label" for="customSwitch2">Я буду использовать материнский капитал для покупки</label>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-3">
                        <div className="credit-input">
                            <div className="form-group">
                                <label class="form-label">Ежемесячный платёж</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <label class="form-label">Сумма кредита</label>
                                <input type="text" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <label class="form-label">Необходимый доход</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Регулярные расходы</h1>
                <div className="wrapp">
                    <div className="row">
                        <div className="col-4">
                            <div className="form-group">
                                <label class="form-label">Предпологаемый срок владения:</label>
                                <span className="ml-2">{this.state.tenure} лет</span>
                                <div class="form-group mt-2">
                                    <input type="range" class="form-control-range" min="1" max="30" step="1" value={this.state.tenure} onChange={this.onTenureChange}/>
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
                                <label class="form-label">Средний пробег</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <span>В</span>
                        <div className="col-1">
                            <div className="form-group">
                                <select class="custom-select">
                                    <option selected>Д.</option>
                                    <option value="1">Н.</option>
                                    <option value="2">М.</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-1">
                            <div className="form-group">
                                <label class="form-label">Средний расход топлива</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <span>на км</span>
                        <div className="col-1"></div>
                        <div className="col-1">
                            <div className="form-group">
                                <label class="form-label">Марка бензина</label>
                                <select class="custom-select more-width">
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
                                <label class="form-label">Траты на топливо</label>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <span>В</span>
                        <div className="col-1">
                            <div className="form-group">
                                <select class="custom-select">
                                    <option selected>Д.</option>
                                    <option value="1">Н.</option>
                                    <option value="2">М.</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-4">
                                <div className="form-group">
                                    <label class="form-label">Налог</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Стоимость ТО</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Стоимость комплекта зимней резины</label>
                                    <input type="text" class="form-control"/>
                                </div>
                            </div>
                            <div className="col-4"></div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label class="form-label">Страховка</label>
                                    <input type="text" class="form-control"/>
                                </div>
                                <div className="form-group d-flex flex-column">
                                    <label class="form-label">Переодичность проведения ТО</label>
                                    <div className="d-flex col-9">
                                        <span className="period-wheels">Каждые</span>
                                        <input type="text" class="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label class="form-label">Стоимость комплекта летней резины</label>
                                    <input type="text" class="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between wrapp">
                            <div className="d-flex">
                                <div className="period-wheels"><span>Частота смены комплекта:</span></div>
                                <div className="form-group">
                                    <select class="custom-select">
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
                                    <select class="custom-select">
                                        <option selected>5</option>
                                        <option value="1">6</option>
                                        <option value="2">7</option>
                                    </select>
                                </div>
                                <div className="period-wheels"><span>лет</span></div>
                            </div>
                            
                        </div>
                        <div class="custom-control custom-switch ml-3 mt-5">
                            <input type="checkbox" className="custom-control-input" id="customSwitch3"/>
                            <label className="custom-control-label" for="customSwitch3">Добавить автомобиль для сравнения</label>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <button className="btn btn-primary mt-5 mb-3">Рассчитать</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    };
};

