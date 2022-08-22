import './App.css';
import { Component } from 'react';
import Person from '../person/person'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      data: [
        {id:123, name: 'Козлов Венедикт Вадимович', phone: '89185476866', career: 'IT Prodacts', NameOfTheDiet: 'Простой рацион', meeting: '18.04.2022 - 29.04.2022 с 07:00 до 15:00', deliveryPeriod: 'Ежедневно', deliverySchedule: 'Пн-Вс', orderCreationDate: '', Comment: ''},
        {id:1234, name: 'Хохлова Анна Николаевна', phone: '89184407146', career: 'Домохозяйка', NameOfTheDiet: 'Диетический рацион', meeting: '20.04.2022 - 22.04.2022 с 09:00 до 19:00', deliveryPeriod: 'Через два дня на третий', deliverySchedule: 'Пн-Вс', orderCreationDate: '', Comment: '20.04.2022 в 09:45'},
        {id:12345, name: 'Тихонов Николай Олегович', phone: '89181706219', career: 'Бездельник', NameOfTheDiet: 'Простой рацион', meeting: '20.08.2022 - 22.08.2022 с 11:00 до 19:00', deliveryPeriod: 'Ежедневно', deliverySchedule: 'Вт-Ср-Чт', orderCreationDate: '', Comment: ''},
        {id:123456, name: 'Хохлов Евгений Евгеньевич', phone: '89296556767', career: 'Полицейский', NameOfTheDiet: 'Спортивный рацион', meeting: '20.05.2022 - 22.05.2022 с 09:00 до 18:00', deliveryPeriod: 'Ежедневно', deliverySchedule: 'Пн-Пт', orderCreationDate: '', Comment: ''},
        {id:1234567, name: 'Русских Даниил Денисович', phone: '89296336547', career: 'Врач', NameOfTheDiet: 'Диетический рацион', meeting: '20.04.2022 - 22.04.2022 с 09:00 до 19:00', deliveryPeriod: 'День через день', deliverySchedule: 'Пн-Сб', orderCreationDate: '', Comment: ''},
        {id:12345678, name: 'Яковлев Егор Борисович', phone: '89265879567', career: 'Стоматолог', NameOfTheDiet: 'Диетический рацион', meeting: '21.03.2022 - 25.03.2022 с 09:00 до 19:00', deliveryPeriod: 'День через два дня', deliverySchedule: 'Пн-Вс', orderCreationDate: '', Comment: ''},
        {id:123456789, name: 'Певчев Иван Иванович', phone: '89171236576', career: 'Рентгенолог', NameOfTheDiet: 'Простой рацион', meeting: '11.02.2022 - 17.02 .2022 с 07:30 до 20:00', deliveryPeriod: 'Ежедневно', deliverySchedule: 'Пн-Ср-Пт-Вс', orderCreationDate: '', Comment: ''},
        {id:12345678910, name: 'Надыкто Алексей Сергеевич', phone: '84958759874', career: 'Писатель', NameOfTheDiet: 'Обычный рацион', meeting: '16.06.2022 - 22.06.2022 с 05:45 до 14:30', deliveryPeriod: 'Ежедневно', deliverySchedule: 'Пн-Чт', orderCreationDate: '', Comment: '16.06.2022 в 06:05'},
        {id:1234567891011, name: 'Харченко Диана Валерьевна', phone: '89112251369', career: 'Разнорабочий', NameOfTheDiet: 'Простой рацион', meeting: '10.01.2022 - 20.01.2022 с 15:00 до 22:00', deliveryPeriod: 'Ежедневно', deliverySchedule: 'Пн-Пт', orderCreationDate: '', Comment: ''},
        {id:123456789101112, name: 'Лернер Максим Анатольевич', phone: '89155698781', career: 'Ветеринар', NameOfTheDiet: 'Составной рацион', meeting: '15.05.2022 - 25.05.2022 с 07:00 до 12:00', deliveryPeriod: 'День через день', deliverySchedule: 'Пн-Сб', orderCreationDate: '', Comment: ''}
      ]
    }
  }
  onValueChange = (id, value) => {
    this.setState (({data}) => {
      // const item = data.find (item => item.id === id)
      // const newItem = {...item, meeting: value}
      // const index = data.indexOf(item)
      // const newData = [...data.slice (0, index), newItem, data.slice (index + 1, data.length)]
      // return{
      //   data: newData
      // }
    })
  }

  render (){
    const {data} = this.state
    const personList = data.map(item => {
      return <Person {...item} key = {item.id} onValueChange = {(id, value) => this.onValueChange (id, value)} />
    })
  return (
    <table class="responsive-table">
        <thead>
          <tr>
              <th>ФИО</th>
              <th>№ Телефона</th>
              <th>Должность</th>
              <th>Название рациона питания</th>
              <th>Период доставки</th>
              <th>Расписание доставки</th>
              <th>Дни недели питания</th>
              
              
          </tr>
        </thead>
        <tbody>
           {personList}
        </tbody>
      </table>
    );
  }
}

  export default App;
