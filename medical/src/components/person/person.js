import {Component} from 'react';

class Person extends Component {
    constructor (props){
        super (props)
        this.state = {
            name: this.props.name,
            phone: this.props.phone,
            career: this.props.career,
            NameOfTheDiet: this.props.NameOfTheDiet,
            meeting: this.props.meeting,
            deliveryPeriod: this.props.deliveryPeriod,
            deliverySchedule: this.props.deliverySchedule,
            orderCreationDate: this.props.DaysOfTheWeekOfNutrition,
            Comment: this.props.Comment,
            

        }
    }

    onChangeValue = (e) => {
        this.setState ({
            Comment: e.target.value
        })
        this.props.onValueChange (this.props.id, e.target.value)
    }

render (){
    const {name, phone, career, NameOfTheDiet, meeting, deliveryPeriod,deliverySchedule, orderCreationDate, Comment} = this.state
    const clazz = 'active'
    return (
    <tr className = {Comment.length > 0 ? clazz : null}>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{career}</td>
        <td>{NameOfTheDiet}</td>
        <td>{meeting}</td>
        <td>{deliveryPeriod}</td>
        <td>{deliverySchedule}</td>
        <td>{orderCreationDate}</td>
        <td><input type='text'value = {Comment.length > 0 ? Comment: 'Дата создания заявки'} onChange = {e => this.onChangeValue (e)}/></td>
         
               
    </tr>
        );
    }
}

export default Person;