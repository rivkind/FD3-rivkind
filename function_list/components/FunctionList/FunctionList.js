import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { prepareData, changeCompany } from '../../actions/employeelist';
import { fetchData } from '../../actions/functionlist';

import Spinner from '../Spinner/Spinner';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './FunctionList.css';

class FunctionList extends React.Component {

  //componentWillMount () {
    //this.props.fetchData(this.props.lang,this.props.company);
  //}

  componentDidMount(){
    
        
        var company = this.getCompany(this.props.location.pathname);
        console.log("__________ddddddddd_______");
        if(this.props.company==''){
          //this.props.changeCompany(company);
          this.props.fetchData(this.props.lang,company);
        }
        
        else{
          console.log("dfdfggfhgfggggggggggggggggggggggg");
          this.props.prepareData(this.props.data,company,this.props.match.params.searchword);
        }
        
        
        //console.log(this.props.match.params.searchword);
    
        //this.props.prepareData(this.props.data,this.props.company);
        
        /*if(this.props.location.pathname == '/') var company = 'life';
        else if(this.props.location.pathname.indexOf('search')!=-1) var company = 'search'; 
        else var company = 'lifetech';
        
        if(this.props.match.params.searchword!='' || company!=this.props.company){
          if(company == 'search'){
            //console.log("sfdsffffffffffffffffffffffffffffffffffffffffff",this.props.data);
            //this.props.prepareData(this.props.data,company,this.props.match.params.searchword);
          }else this.props.prepareData(this.props.data,company);
    
          
        }*/
        //console.log('componentDidMount');
      }
      componentDidUpdate(oldProps, oldState){
        console.log("componentDidUpdate EmployeeList");
        var company = this.getCompany(this.props.location.pathname);
        if(oldProps.company!='' && oldProps.company != company){
          console.log('dsafdsfgh');
         //this.props.prepareData(this.props.data,company);
      }else if(oldProps.data!=this.props.data){
          //console.log("componentDidUpdate EmployeeList");
          if(this.props.match.params.searchword!='') this.props.prepareData(this.props.data,company,this.props.match.params.searchword);
          else this.props.prepareData(this.props.data,company);
        }else if(oldProps.lang!=this.props.lang){
          
          this.props.fetchData(this.props.lang,company);
        }else if(oldProps.search!=this.props.search){
          //this.props.prepareData(this.props.data,'search',this.props.search);
        }
      }
    
      getCompany = (path) => {
        if(path == '/') return 'life';
        else if(path.indexOf('search')!=-1) return 'search'; 
        else return 'lifetech';
      }

  

  //componentDidUpdate(oldProps, oldState){
    //if(oldProps.lang!=this.props.lang && !this.props.isLoading){
      //this.props.fetchData(this.props.lang,oldProps.company);
    //}
  //}

 
  render() {
    console.log("Рендер FunctionList");
    if(this.props.title_site) document.title = this.props.title_site;

    return (
      <div>
      {
        (this.props.isLoading)
        ?
        <Spinner />
        :
        null
      }
      
      </div>
    );
  }
}



const mapStateToProps = state => ({
  lang: state.language.lang,
  isLoading: state.functionlist.isLoading,
  title_site: state.functionlist.title.titleSite,
  company: state.employeelist.company,
  data: state.functionlist.employee,
})


//export default connect(mapStateToProps, null, null, {pure:false})(FunctionList);
const mapDispatchToProps = {
  prepareData,fetchData,changeCompany
}

export default connect(mapStateToProps,mapDispatchToProps)(FunctionList);
