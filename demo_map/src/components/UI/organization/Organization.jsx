import React from 'react';
import BtnForList from '../buttonForList/BtnForList';
import MyButton from '../myButton/MyButton';
import './Organization.css'

const Organization = () => {
    const type_organization = [ 'Государственная', 'Некоммерческая']
    const category = ['Бесплатные одежда и предметы первой необходимости',
                'Бесплатные продукты или готовая еда',
                'Бесплатная юридическая консультация',
                'Бесплатная психологическая помощь',
                'Кризисное жилье',
                'Социальное сопровождение',
                'Льготы и пособия',
                'Профессиональное обучение',
                'Бесплатное предоставление витаминов',
                'Социальный прокат средств безопасности'
            ]
    
    const organization = ['name 1','name 2', 'name 3','name 4', 'name 5','name 6',
                            'name 7','name 8','name 9','name 10', 'name 1','name 2', 'name 3','name 4', 'name 5','name 6',
                            'name 7','name 8','name 9','name 10', 'name 1','name 2', 'name 3','name 4', 'name 5','name 6',
    ]

    const day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

    return (
        <div className='organization'>
            <div className='org_left'>
                <div className='org_filter'>
                    <div className='stroka poisk'>
                        <input className='stroka_2' type="text" placeholder='Поиск по названию...'></input>
                        <input className='stroka_2' type="text" placeholder='Населённый пункт...'></input>
                    </div>
                    <div className='stroka poisk'>
                        <select className='stroka_2'>
                            <option value="">Любая категория услуги</option>
                            {category.map(cat=>
                                <option value={cat} key={cat.id}>{cat}</option>
                            )}
                        </select>
                        <select className='stroka_2'>
                            <option value="">Любой тип организации</option>
                            {type_organization.map(type=>
                                <option value={type} key={type.id}>{type}</option>
                            )}
                        </select>
                    </div>
                    

                </div>
                <div className="list_org">
                    {organization.map(org =>
                        <MyButton style={{margin:"4px 0"}} key={org.id}>{org}</MyButton>
                    )}
                </div>
                <div className='btn_add'>
                    <MyButton>Добавить организацию</MyButton>
                </div>
                
            </div>
            <div className='org_rigth'>
                <div className='name_text'>Карточка организации</div>
                <div className='org_cart'>
                    <div className='name_text mini_text'>
                        Наименование организации
                        <input type="text"></input>
                    </div>
                    <div className='stroka'> 
                        <div className='stroka_2 name_text mini_text'><nobr>Населенный пункт</nobr>
                            <input type="text"></input>
                        </div>
                        <div className='stroka_2 name_text mini_text'>Дом
                            <input type="number"></input>
                        </div>
                        <div className='stroka_2 name_text mini_text'>Корпус
                            <input type="number"></input>
                        </div>
                        <div className='stroka_2 name_text mini_text'>Квартира
                            <input type="number"></input>
                        </div>
                    </div>
                    
                    <div className='add_type name_text mini_text'>Тип организации
                        {type_organization.map(type =>
                            <label style={{fontSize: "16px"}} key={type.id}><input type="checkbox" className='check_type' value={type}/>{type}</label>
                        )}
                    </div>
                    <div className='add_categ name_text mini_text'>Категория помощи
                        <div className='category_org'>
                            {category.map(category =>
                                <label style={{fontSize: "16px"}} key={category.id}><input type="checkbox" className='check_type' value={category}/>{category}</label>
                            )}     
                        </div>   
                    </div>   
                    <div className="btn_add_org">
                        <MyButton style={{height:"25px"}}>Создать новую категорию</MyButton>
                    </div>      
                    
                    
                    <div className='name_text mini_text'>Руководитель организации</div>
                    <input type="text"></input>

                    <div className='stroka'>
                        <div className="stroka_2 name_text mini_text">Электронная почта
                            <input type="email"></input>
                        </div>
                        
                        <div className="stroka_2 name_text mini_text">Телефон
                            <input type="tel"></input>
                        </div>
                    </div>
                    
                    
                    


                    <div className="name_text mini_text">График работы
                                {day.map(day =>
                                    <div className='stroka' key={day.id}>
                                        <div className="stroka_2 day name_text mini_text" value={day} style={{flexBasis: "150px"}}>{day}</div>            
                                        <div className='stroka'>
                                            <input className="stroka_2" type="time" style={{flexBasis: "80px"}}></input> 
                                            <input className="stroka_2" type="time" style={{flexBasis: "80px"}}></input>
                                        </div>              
                                        <label className="stroka_2">Выходной <input type="checkbox"></input></label>
                                    </div>
                                )}
                                <div className='stroka'>
                                    <div className="stroka_2 name_text mini_text">Обед </div>
                                    <div className='stroka'>
                                        <input className="stroka_2" type="time" style={{flexBasis: "80px"}}></input> 
                                        <input className="stroka_2" type="time" style={{flexBasis: "80px"}}></input>    
                                    </div>
                                    
                                </div>

                           
                                           

                    </div>


                            

                    
               

                    

                    <div className="name_text mini_text">Дополнительные данные</div>
                    <input className='dop' type="text"></input>
                </div>
            </div>
        </div>
    )
}

export default Organization;