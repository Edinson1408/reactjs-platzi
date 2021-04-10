import React from 'react';



class Badgesform extends React.Component{
    state={
        // jobTitle:'Desinger'
    };

    // handleChange=e=>{
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value})

    //     this.setState({
    //         [e.target.name] : e.target.value,
    //     });
    // };

    handleClick=e=>{
        console.log('button was clicked');
    };

    handleSubmit=e=>{
        e.preventDefault();
        console.log('from was submited')
        console.log(this.state);
    }

    
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='' > First Name</label>
                        <input  onChange={this.props.onChange} className='form-control' type='text' name='firstName' value={this.props.fromValues.firstName} /> 
                    </div>
                    <div className='form-group'>
                        <label htmlFor='' > Last Name</label>
                        <input  onChange={this.props.onChange} className='form-control' type='text' name='lastName' value={this.props.fromValues.lastName} /> 
                    </div>
                    <div className='form-group'>
                        <label htmlFor='' >Email</label>
                        <input  onChange={this.props.onChange} className='form-control' type='email' name='email' value={this.props.fromValues.email} /> 
                    </div>
                    <div className='form-group'>
                        <label htmlFor='' >Jot Totle</label>
                        <input  onChange={this.props.onChange} className='form-control' type='text' name='jobTitle' value={this.props.fromValues.jobTitle} /> 
                    </div>
                    <div className='form-group'>
                        <label htmlFor='' >Twitter</label>
                        <input  onChange={this.props.onChange} className='form-control' type='text' name='twitter' value={this.props.fromValues.twitter} /> 
                    </div>
                    <button  onClick={this.handleClick}  className='btn btn-primary' >save</button>
                </form>
            </div>
        )
    }
}


export default Badgesform;