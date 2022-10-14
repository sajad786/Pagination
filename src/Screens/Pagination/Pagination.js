import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { width } from '../../styles/responsiveSize'

const Pagination = () => {
    const [allProducts, setAllProducts] = useState([])
    const [skip, setSkip] = useState(0)
    const [limit, setlLmit] = useState(10)

    useEffect(() => {
        getProducts()
    }, [])


    const getProducts = async () => {
        let uri = `?skip=${skip}&limit=${limit}`
        await fetch('https://dummyjson.com/products/' + uri)
            .then(res => res.json())
            .then(response => {
                console.log(response, 'ressss')
                if (!!response) {
                    if (limit == 10) {
                        let data = response?.products
                        setAllProducts(data)
                    } else {
                        let data = [...allProducts, response.products]
                        setAllProducts(data)
                    }
                }
            }).catch(err => console.log(err, "err"))
    }

    console.log(allProducts,"allProductsallProducts")
    const renderItem = ({item}) => {
        return(
            <View>
               <Image 
               style={{
                height:150,
                width:width-10,
               }}
               source={{uri:item?.images[0]}}
               /> 
            </View>
        )
    }

    const onLoadMore = () => {
        setlLmit(limit+10)
        setSkip(skip+10)
        getProducts()
    }

    const footerComp = () => {
        return (
            <View>
               <TouchableOpacity onPress={onLoadMore}  >
               <Text > Loading More </Text>
               </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
            data={allProducts}
            renderItem={renderItem}
            keyExtractor={(item, idx)=> idx}
            ListFooterComponent={footerComp}
            ItemSeparatorComponent={()=> < View style ={{ height:10}}/>}
            />
        </View>
    )
}

export default Pagination