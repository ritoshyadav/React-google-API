import React,{component} from 'react';
class SerachBar extends component{
    constructor(props){
      super(props);
      this.state={term:''};  
    }
   
    render(){
    return<input value={this.state.trem}
    onchange={event=>this.setstate({term:event.target.value})}/>;
  
    }
}

export default SearchBar;