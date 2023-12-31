import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_products:products, gridview}=useFilterContext();
  if(products.length<1){
    return <h5>Sorry, no products matched your search</h5>
  }
  if(gridview===false){
    return <ListView products={products}/>
  }
  return (
    <GridView products={products}></GridView>
  )
}

export default ProductList
