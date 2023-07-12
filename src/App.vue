<template>
  <header-and-list></header-and-list>
</template>

<script>
import HeaderAndList from './components/HeaderAndList.vue'

export default {
  components: {
    HeaderAndList
  },
  data() {
    return {
      moda: 
        {
          kadin: {
            elbise: [
             { id: 'urununadi1', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description:'Etnik Desen Kemerli Gömlek Mini Elbise Midi Elbise', price: '499', sizes: ['S', 'M', 'L', 'XL' ] , size: '', count: 1, checked: true},
             { id: 'urununadi2', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: '50.51', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
             { id: 'urununadi3', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: '176.12', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true},
            ],
            bluz: [
            { id: 'urununadi4', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
            { id: 'urununadi5', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
             }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
            ],
             etek: [
             { id: 'urununadi6', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
             { id: 'urununadi7', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ]
        },  
          erkek: {
             gomlek: [
              { id: 'urununadi8', img: require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                },
                description: 'outfiit man Dokulu Oversize Gömlek Siyah 70171002 MS70171 ', price: '178.74', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
              { id: 'urununadi9', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ],
             pantolon: [
              { id: 'urununadi10', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
              { id: 'urununadi11', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ],
             kazak: [
             { id: 'urununadi12', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
             { id: 'urununadi13', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ]
        },
        
          ayakkabi: {
             spor: [
             { id: 'urununadi14', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
             { id: 'urununadi15', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ],
             topuklu: [
             { id: 'urununadi16', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
             { id: 'urununadi17', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ],
             bot: [
             { id: 'urununadi18', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true },
             { id: 'urununadi19', img: require('./assets/elbise1.webp'),  subImages: {
                  sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ],
                  different_colour_images_right: [
                    require('./assets/shirt_Images/different_color_shirts/ana-gomlek.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt1.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt2.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt3.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt4.webp'),
                    require('./assets/shirt_Images/different_color_shirts/colour_shirt5.webp'),
                ]
                }, description: 'ürün aciklamasi', price: 'fiyati', sizes: ['S', 'M', 'L', 'XL' ], size: '', count: 1, checked: true }
             ]
          } 
       },

       elektronik: 
        {
          bilgisayar: {
            laptop: [
             { id: 'urununadi20', img: require('./assets/pc1.jpg'), 
                subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             },
                   description: 'HP Victus Gaming Dizüstü Bilgisayar, 15,6 inç FHD IPS 144 Hz 9 Ms, Intel Core i5-13500H, 16 GB Ram, NVIDIA GeForce RTX 4050 6 GB, 512 GB SSD, FreeDos, Mika Gümüş, 7N9V3EA', price: '24999',
                   prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
             { id: 'urununadi21', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
             { id: 'urununadi22', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati' , prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true},
            ],
            masaustu: [
              { id: 'urununadi23', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
              { id: 'urununadi24', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
            ],
             tablet: [
              { id: 'urununadi25', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
              { id: 'urununadi26', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
             ]
        },  
          cepTelefonu: {
             iphone: [
              { id: 'urununadi27', img: require('./assets/elbise1.webp'), 
              subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             },
                   description: 'ürün aciklamasi', price: 'fiyati', 
                   prominentDatas: {
                      'Garanti Tipi': 'Xioami Turkiye....',
                      'Ram Kapasitesi': '8 GB',
                      'Ana Kamera Conuzurlugu': '100-120 MP',
                      'Dahili Hafiza': '128 GB',
                      'Mobil Baglanti Hizi': '4.5G',
                      'Ekran Cinsi': 'Amolet'
               }, size: '', count: 1, checked: true },
              { id: 'urununadi28', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              } , size: '', count: 1, checked: true}
             ],
             samsung: [
              { id: 'urununadi29', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
              { id: 'urununadi30', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } , description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
             ],
             xiaomi: [
              { id: 'urununadi31', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
              { id: 'urununadi32', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
             ]
        },
        
          beyazEsya: {
             buzdolabi: [
              { id: 'urununadi33', img: require('./assets/elbise1.webp'), 
              subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             }, 
                  description: 'ürün aciklamasi', price: 'fiyati', 
                  prominentDatas: {
                     'Enerji Sinifi': 'F',
                     'Tip': 'Kombi Tipi',
                     'Garanti Suresi': '3 Yil',
                     'Dondurucu Ozelligi': 'Low Frost',
                     'Ucretsiz Kurulum': 'Var',
                     'Buzluk Tipi': 'Standart' 
               }, size: '', count: 1, checked: true },
              { id: 'urununadi34', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
             ],
             firin: [
              { id: 'urununadi35', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
              { id: 'urununadi36', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
             ],
             camasirMakinesi: [
              { id: 'urununadi37', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true },
              { id: 'urununadi38', img: require('./assets/elbise1.webp'), subImages: {
                   sub_images_left: [
                    require('./assets/shirt_Images/sub_shirt/ana-gomlek.webp'), 
                    require('./assets/shirt_Images/sub_shirt/gomlek1.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek2.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek3.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek4.webp'),
                    require('./assets/shirt_Images/sub_shirt/gomlek5.webp')
                  ]
             } ,description: 'ürün aciklamasi', price: 'fiyati', prominentDatas: {
                       'İslemci Tipi': 'Apple M1',
                       'SSD Kapasitesi': '256 GB',
                       'Ekran Karti': 'M1 7 Cekirdekli',
                       'Ram Sistem Bellegi': '16 GB',
                       'İsletim Tipi': 'Mac Os',
                       'Garanti Tipi': 'Resmi Distributor....'
              }, size: '', count: 1, checked: true }
             ]
          } 
       }
  }
},
  provide() {
    return {
      moda: this.moda,
      elektronik: this.elektronik,
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
