import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { prepareData, changeCompany } from '../../actions/employeelist';
import { fetchData } from '../../actions/functionlist';

import Spinner from '../Spinner/Spinner';
import HeaderBlock from '../HeaderBlock/HeaderBlock';
import './FunctionList.css';

class FunctionList extends React.Component {

  componentDidMount(){
    
        
        var company = this.getCompany(this.props.location.pathname);
        console.log("__________ddddddddd_______");
        if(this.props.company==''){
          this.props.fetchData(this.props.lang,company);
        }
        
        else{
          console.log("dfdfggfhgfggggggggggggggggggggggg");
          this.props.prepareData(this.props.data,company,this.props.match.params.searchword);
        }
      }
      componentDidUpdate(oldProps, oldState){
        const sort_name = this.props.sortName;
        const sort_diraction = this.props.sortDiraction;
        const search = this.props.match.params.searchword;
        var company = this.getCompany(this.props.location.pathname);
        if(oldProps.lang!=this.props.lang){
        
          this.props.fetchData(this.props.lang,company);
        }else if(oldProps.data!=this.props.data || oldProps.search!=this.props.search || oldProps.sortName!=sort_name || oldProps.sortDiraction!=sort_diraction || (search!='' && search!=this.props.search)){
         
          this.props.prepareData(this.props.data,company,search,sort_name,sort_diraction);
        
        }else if(oldProps.search!=this.props.search || oldProps.sortName!=sort_name || oldProps.sortDiraction!=sort_diraction){
           //this.props.prepareData(this.props.data,company,search,sort_name,sort_diraction);
        }
      }
    
      getCompany = (path) => {
        if(path == '/') return 'life';
        else if(path.indexOf('search')!=-1) return 'search'; 
        else return 'lifetech';
      }

  

  

 
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
  search: state.search.search,
  sortDiraction: state.employeelist.sortDirection,
  sortName: state.employeelist.sortName,
  
})


//export default connect(mapStateToProps, null, null, {pure:false})(FunctionList);
const mapDispatchToProps = {
  prepareData,fetchData,changeCompany
}

export default connect(mapStateToProps,mapDispatchToProps)(FunctionList);
