import React from "react";
import {connect} from "react-redux";
import {dispatchVoteAction, fetchData, fetchHideData} from "../../service/feedService";
import {dispatchNextPage, dispatchPrevPage,dispatchFilterAction} from "../../service/pageService";
import FilterBlock from "./FilterBlock";
import MissionCards from "./MissionCards";
import "./Home.scss";

class Home extends React.Component{
    componentDidMount( ) {
        if ( this.props.feeds.length <= 0 ) {
            // this.props.fetchData( ); 
        }
    }

    render() {
        const { feeds } = this.props;
        return(
            <div id="page">
                <div className="home-cont px-4">
                    <h5>SpaceX Launch Programs</h5>
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-2">
                            <FilterBlock
                                dispatchFilterAction = {this.props.dispatchFilterAction}
                            />
                        </div>
                        <div className="col-sm-12 col-md-9 col-lg-10">
                            <MissionCards
                                missionData = {feeds}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    feeds: state.data,

} );

const mapDispatchToProps = {
    fetchData,
    fetchHideData,
    dispatchNextPage,
    dispatchPrevPage,
    dispatchVoteAction,
    dispatchFilterAction
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
