import {Component} from 'react';
import Card from './Card';
class ClassComponents extends Component {
    constructor(prop){
        super(prop);
    }
    render(){
        return (
            <div className="pt-3">
                <Card color="#FF6663"></Card>
            </div>
        );
    }
}
export default ClassComponents;