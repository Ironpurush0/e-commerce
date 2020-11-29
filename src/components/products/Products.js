import React from 'react'
import Grid from '@material-ui/core'

import Product from '../product/Product'

const products = [
    {id: 1, name: "shoes", description:"Running shoes"},
    {id: 2, name: "iphone", description:"Apple iphone"}
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    products.map(p => (
                        <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
                            <Product />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    )
}

export default Products
