import React, {useState} from 'react';
import FILTERS from '../helpers/consts'

import {connect} from "react-redux";
import {setFilter} from '../redux/actions';

function Filter(props){

    return (
        <ul className="list-group list-group-horizontal">
            <li onClick={() => props.setFilter(FILTERS.ALL)} className="active list-group-item">All</li>
            <li onClick={() => props.setFilter(FILTERS.COMPLATED)} className="list-group-item">Complated</li>
            <li onClick={() => props.setFilter(FILTERS.INCOMPLETE)} className="list-group-item">In Process</li>
        </ul>
    )
}
// const mapStateToProps = ({toggleFilter}) => {
//     // console.log('from Filter COMPONENT todo',todos);
//     // console.log('from filter connect filter',toggleFilter);
//     return {Filertodos: getByFilter(todos,toggleFilter)}
// };
const mapDispatchToProps = {
    setFilter
};


export default connect(null, mapDispatchToProps)(Filter);
// export default Filter;