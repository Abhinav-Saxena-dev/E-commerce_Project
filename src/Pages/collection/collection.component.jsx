import React from "react";

import CollectionItem from '../../Components/collection-item/collection-item.component';

import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

import './category.styles.scss';

 const CollectionPage = ({ collection }) => {
     console.log(collection);
    return(
     <div className="collection">
         <h2>Category Page</h2>
     </div>
 )};

 const mapStateToProps = (state, ownProps) => ({ // own props are the props being sent to this component. Like Route is sending match to it.
    collection : selectCollection(ownProps.match.params.collectionId)(state), // why are we sending State here? Maybe because we are not using sturctured selector here...
 });
 export default connect(mapStateToProps)(CollectionPage);