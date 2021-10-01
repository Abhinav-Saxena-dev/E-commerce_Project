import React from "react";

import PreviewCollection from "../../Components/Preview-collection/preview-collection.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collection-overview">
    {
    collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
      )
      )
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
