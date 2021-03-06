import React from 'react'
import {Grid} from '@material-ui/core'

import Product from './product/Product'

const products = [
    {id: 1, name: "shoes", description:"Running shoes", image:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id: 2, name: "iphone", description:"Apple iphone", image:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map(p => (
                        <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={p} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products
