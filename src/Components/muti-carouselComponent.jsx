import React from 'react';
import ImageSlider from './text';


export default function IphoneComponent() {
    const images = [
        'https://cafefcdn.com/203337114487263232/2023/7/25/apple-iphone-15-pro-max-the-talk-of-town-2023-1690289261050-1690289261530939646812.jpg',
        'https://image.bnews.vn/MediaUpload/Org/2023/08/01/iphone-15-cyan-and-magenta-frosted-back-feature-20230801153140.jpg',
        'https://cdn.viettelstore.vn/Images/Product/ProductImage/1615904327.jpeg',
        'https://cafefcdn.com/203337114487263232/2023/7/25/apple-iphone-15-pro-max-the-talk-of-town-2023-1690289261050-1690289261530939646812.jpg',
        'https://cdn.tgdd.vn/Files/2023/09/20/1548182/1-200923-105112.jpg',
        'https://vtv1.mediacdn.vn/zoom/640_400/562122370168008704/2023/9/13/photo1694571969558-1694571969850640664525.jpeg',
    ]


    return (
        <div>
      <h1>Multiple Carousel Slider</h1>
      <ImageSlider images={images} />
    </div>

    )
}