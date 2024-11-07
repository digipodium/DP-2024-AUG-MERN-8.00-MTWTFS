'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const View = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/product/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
        useEffect(() => {
            fetchProduct();
        }, []);
    }

  return (
    <div>
        <h1>Product Detail</h1>
        <h2 className=''>{product.title}</h2>
        <p className=''>{product.description}</p>
        <p className=''>{product.price}</p>
        <p className=''>{product.category}</p>
        <Link href='/'>Home</Link>

    </div>
  )
}

export default View