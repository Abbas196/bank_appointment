import React, { Component } from 'react';

class Locationslist extends Component {
    constructor(props){
        super(props)
        this.state = {
            locations: []
        }
    }
    render() {
        return (
            <div>
                Schedule a meeting
                <h2 className = "text-left">Choose a branch near you</h2>
                You can schedule a phone meeting if a convenient branch isn't available
                <h2 className = "text-left">Search for a branch</h2>
                We will show up to 10 branches within a 50 mile radius 
                Enter 5 digit zip code
                <table className="table table-striped table-bordered">
                    <tbody>
                        this.state.locations.map(
                            <tr key = {Locationslist.id}></tr>
                        )
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Locationslist;