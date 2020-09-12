import React,{Component} from 'react';
import PropTypes from 'prop-types';
var yearFilter= undefined,launchFilter= undefined,landingFilter= undefined
class FilterBlock extends Component{
    constructor(props){
        super(props);
        this.state ={
            years:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
            successArray:["true","false"],
            
        }
    }
    yearFilterClick = (year) =>{
        let filterURL;
        yearFilter = year;
        if(launchFilter == undefined && landingFilter == undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year=" + year;  
        }
        else if(launchFilter == undefined && landingFilter !== undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+landingFilter+"&launch_year=" + year;  
        }
        else if(launchFilter !== undefined && landingFilter == undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchFilter+"&launch_year=" + year;  
        }
        else if(launchFilter !== undefined && landingFilter !== undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchFilter+ "&land_success="+landingFilter+"&launch_year=" + year;  
        }
        this.props.dispatchFilterAction(filterURL);
    }
    launchFilterClick = (launch) =>{
        let filterURL;
        launchFilter=launch;
        if(yearFilter == undefined && landingFilter == undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=" + launch;  
        }
        else if(yearFilter == undefined && landingFilter !== undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+landingFilter+"&launch_success=" + launch;  
        }
        else if(yearFilter !== undefined && landingFilter == undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launch+"&launch_year=" + yearFilter;  
        }
        else if(yearFilter !== undefined && landingFilter !== undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launch+ "&land_success="+landingFilter+"&launch_year=" + yearFilter;  
        }
        this.props.dispatchFilterAction(filterURL);
    }
    landingFilterClick = (land) =>{
        let filterURL;
        landingFilter=land;
        if(launchFilter == undefined && yearFilter == undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&land_success=" + land;  
        }
        else if(launchFilter == undefined && yearFilter !== undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+land+"&launch_year=" + yearFilter;  
        }
        else if(launchFilter !== undefined && yearFilter == undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchFilter+"&land_success=" + land;  
        }
        else if(launchFilter !== undefined && yearFilter !== undefined){
            filterURL = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchFilter+ "&land_success="+land+"&launch_year=" + yearFilter;  
        }
        this.props.dispatchFilterAction(filterURL);
    }
    render(){
        return(
            <div className="filter-main pt-2 pb-4">
                <div className="pl-3 filters-title">Filters</div>
                <div className="sub-filter">
                    <div className="sub-filter-head">Launch Year</div>
                    <div className="years-main px-4 pt-2">
                        {
                            this.state.years.map((year,idx)=>{
                                return <span key={idx} 
                                        className={(yearFilter && yearFilter == year) ? "year px-2 py-1 mx-2 mb-2 year-active" : "year px-2 py-1 mx-2 mb-2"} 
                                        onClick={()=>this.yearFilterClick(year)}>{year}
                                        </span>
                            })
                        }
                    </div>
                </div>
                <div className="sub-filter mt-3">
                    <div className="sub-filter-head">Successful Launch</div>
                    <div className="sub-filter-elem-main pt-2">
                        {
                            this.state.successArray.map((successItem,idx)=>{
                                return <span key={idx}
                                            className={(launchFilter && launchFilter == successItem) ? "sub-filter-elem px-2 py-1 mx-2 success-active" : "sub-filter-elem px-2 py-1 mx-2"}
                                            onClick={()=>this.launchFilterClick(successItem)}>{successItem}
                                        </span>
                            })
                        }
                    </div>
                </div>
                <div className="sub-filter mt-3">
                    <div className="sub-filter-head">Successful Landing</div>
                    <div className="sub-filter-elem-main pt-2">
                        {
                            this.state.successArray.map((successItem,idx)=>{
                                return <span key={idx}
                                            className={(landingFilter && landingFilter == successItem) ? "sub-filter-elem px-2 py-1 mx-2 success-active" : "sub-filter-elem px-2 py-1 mx-2"}
                                            onClick={()=>this.landingFilterClick(successItem)}>{successItem}
                                        </span>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

FilterBlock.propTypes = {
    dispatchFilterAction: PropTypes.func
};
export default FilterBlock ;