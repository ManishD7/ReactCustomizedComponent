import React ,{Component} from 'react'
import WindowedSelect from 'react-windowed-select';
import trackingEvent from './TrackingEvent';

const options = [];

for (let i = 0; i < 5000; i += 1) {
  options.push({
    label: `Option ${i}`,
    value: i
  });
}

class SingleSelect extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedOption: null,
          menuIsOpen : false
        };
        this.handleChange = this.handleChange.bind(this);
      }

     trackingEvent1(eventAction,eventVar1,eventVar2){
        trackingEvent(eventAction,eventVar1,eventVar2)
      }
    
      handleChange(selectedOption) {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
      render() {
        const { selectedOption } = this.state;
        return (
          <WindowedSelect
            onMenuOpen ={()=>this.trackingEvent1("Var1Open","Var2Open","Var3Open")}
            onMenuClose = {()=>this.trackingEvent1("Var1Close","Var2Close","Var3Close")} 
            options={options}
            onChange={this.handleChange}
            value={selectedOption}
          />
        );
      }
}
export default SingleSelect;