import React from 'react';
import PropTypes from 'prop-types';

const MissionCards = (props) =>{
        return(
            <div className="spacex-main">
                {
                    props.missionData && props.missionData.map((val,idx)=>{
                        return <div className="spacex-card mr-4 p-3" key={idx}>
                                    <img src={val && val.links && val.links.mission_patch} alt="Image"></img>
                                    <div className="card-inner">
                                        <div className="mission-name pt-1">
                                            <span>{val.mission_name}  </span>
                                            <span>  #{val.flight_number}</span>
                                        </div>
                                        <div className="mission-ids pt-3 pb-1">
                                            <span className="mission-label">Mission Ids:</span>
                                            <ul className="mission-data">
                                                {
                                                    val.mission_id.map((misId,idx)=>{
                                                        return <li key={idx}>{misId}</li>
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className="launch_-yr pb-1">
                                            <span className="mission-label">Launch Year:</span>
                                            <span className="mission-data">{val.launch_year}</span>
                                        </div>
                                        <div className="successful-launch pb-1">
                                            <span className="mission-label">Successful Launch:</span>
                                            <span className="mission-data">{val.launch_success == true ? "true" : "false"}</span>
                                        </div>
                                        <div className="successful-landing pb-1">
                                            <span className="mission-label">Successful Landing:</span>
                                            <span className="mission-data">{"false"}</span>
                                        </div>
                                    </div>
                                    
                        </div>
                    })
                }
            </div>
        )
}
MissionCards.propTypes = {
    missionData: PropTypes.any
};
export default MissionCards;