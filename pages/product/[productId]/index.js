import { useRouter } from 'next/dist/client/router';
import React from 'react';

export default function ProductDetail() {

    const { query } = useRouter();

    // console.log(query);

    return <div>Product details for {query.productId}</div>;
}