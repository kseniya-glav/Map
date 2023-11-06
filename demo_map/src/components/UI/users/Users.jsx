import React from 'react';
import MyButton from '../myButton/MyButton';
import './Users.css'

const Users = () => {
    
    const users = ['name 1','name 2', 'name 3','name 4', 'name 5','name 6',
                            'name 7','name 8','name 9','name 10', 'name 1','name 2', 'name 3','name 4', 'name 5','name 6',
                            'name 7','name 8','name 9','name 10', 'name 1','name 2', 'name 3','name 4', 'name 5','name 6',
    ]

    const dostup = ['Уведомления', 'Организации', 'Пользователи']
    return (
        <div className='users'>
            <div className='org_left'>
                
                <div className="list_org_users">
                    {users.map(user =>
                        <MyButton style={{margin:"4px 0"}} key={user.id}>{user}</MyButton>
                    )}
                </div>
                <div className='btn_add'>
                    <MyButton>Добавить пользователя</MyButton>
                </div>
                
            </div>
            <div className='org_rigth'>
                <div className='name_text'>Карточка пользователя</div>
                <div className='org_cart_users'>
                    <div className='name_text mini_text'>
                        ФИО
                        <input type="text"></input>
                    </div>
                    
                    <div className='stroka'>
                        <div className="stroka_2 name_text mini_text">Электронная почта
                            <input type="email"></input>
                        </div>
                        
                        <div className="stroka_2 name_text mini_text">Телефон
                            <input type="tel"></input>
                        </div>
                    </div>

                    <div className='add_type name_text mini_text'>Доступ
                        {dostup.map(dostup =>
                            <label style={{fontSize: "16px"}} key={dostup.id}><input type="checkbox" className='check_type' value={dostup}/>{dostup}</label>
                        )}
                    </div>

                    <div className='stroka' style={{marginTop: "30px"}}>
                            <div className="stroka_2"><MyButton >Удалить</MyButton></div>
                            <div className="stroka_2"><MyButton >Сохранить</MyButton></div>
                    </div>
         

                    
                </div>
            </div>
        </div>
    )
}

export default Users;