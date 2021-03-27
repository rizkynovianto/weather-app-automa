import React, { Component } from 'react';

import Table from "react-bootstrap/Table"

class LocationTable extends Component {

    render(){
        return(
            <Table className="table table-striped custom-table">
                <thead>
                    <tr>
                    {this.props.tableHeads.map(
                        (tableHead, key) =>
                        <th key={key}>{tableHead}</th>
                    )}
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.tableRowsData.map(
                    (tableRowData, key) =>
                      <tr> 
                        {tableRowData.map(
                            data =>
                         <td>{data}</td>
                        )}
                        <td className="text-center">
                            <button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) 
                                                     this.props.onTdDeleteClicked(key)}} type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                      </tr>  
                )}   
                </tbody>
            </Table>
        );
    }

}

export default LocationTable;