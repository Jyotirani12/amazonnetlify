import React ,{Component} from 'react';
import axios from 'axios';
const url="https://apilink1.herokuapp.com/filter";
class AllFilter extends Component{
    constructor(props){
        super(props)
        this.state={
            allData:''

        }
    }
    
    renderData=(data)=>{
        console.log(this.state.allData)
        if(data){
            if(data.length){
                return data.map((data,i) => {
                    console.log(data.Image)
                       return(
                        <div key={i}>
                            <img src={data.Image} alt="allimage"/>
        <h1>{data.product_name}</h1>
        
                        </div>
                         //  <option value={item.subcategory_id} key={item.subcategory_id}>{item.subcategory}</option>
                           
                       )
                   })

            }
            
          
       }


    }
    render(){
        return(
            
            <div>
                {this.renderData(this.state.allData)}
            </div>
        )
}
async componentDidMount(){
    console.log("categoryid",sessionStorage.getItem('categoryId'))

    let response = await axios.get(`${url}/${sessionStorage.getItem('categoryId')}?subcategoryId=${sessionStorage.getItem('subcategoryId')}`)
  
    console.log("inside all",response);

    this.setState({allData:response.data})
    
}
}
export default AllFilter;