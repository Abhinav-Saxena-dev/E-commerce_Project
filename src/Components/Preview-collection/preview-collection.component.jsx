import React from 'react';
import '../Preview-collection/preview-collection.component.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((elem, indx)=> indx < 4).map(({id, ...otherCollectionItems}) => 
                        <CollectionItem key = {id} {...otherCollectionItems} />
                    )
                }
            </div>
        </div>
)
export default PreviewCollection;