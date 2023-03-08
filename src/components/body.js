import { RestaurantCard } from "./restaurant";
import { useState, useEffect } from "react";
import {ShimmerUI} from './ShimmerUI';
import {KitchenCard} from './kitchenCard';
import {KidsRoom} from './kidsRoom';
// import {livingRoom} from './../../living-room.json'
// function filterData(searchText, list) {
//   if (searchText.length > 0) {
//     return list.filter((res) => {
//       console.log(res.data.name, searchText);
//       return res.data.name.toLowerCase().includes(searchText.toLowerCase()) ?? "No result found"
//     });
//   } else{
//     return list;
//   }
// }

// export const BodyComponent = () => {
//   /*searchInput is the LOCAL STATE VARIABLE
//     We can have a hardcoded value within the useState arguments.
//     useState returns the array, first element in the array is the variable name.
//     second elemnt is the method for modifying value 
//     */
//   const [searchInput, setSearchInput] = useState("");
//   const [actualRestaurantList, setActualRestaurantList] = useState("");
//   const [filteredRestaurantList, setFilteredRestaurantList] = useState("");
      
//     /**Called after the initial page load */
//     useEffect(()=>{
//         console.log("Use Effect is called...");
//         getRestaurants();
// },[]);

// /**
//  * get restaurants
//  */
// async function getRestaurants() {
//   const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5071128&lng=78.35791119999999&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
//     setActualRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
// }
// /**
//  * Conditional Rendering:
//  * if restaurantlist is empty ==> shimmer UI
//  * if restaurantList !== empty ==> actual UI
//  */
//   return (actualRestaurantList.length === 0 )? <ShimmerUI/> : (
//     <>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//         />
//       </div>

//       <button
//         className="search-btn"
//         onClick={() => {
//           /**We need to filter the restro list */
//           const data = filterData(searchInput, actualRestaurantList);
//           console.log(data);
//           setFilteredRestaurantList(data);
//         }}
//       >
//         Search
//       </button>
//       <div className="main-container">
//         <div className="item-list">
//           {
//           filteredRestaurantList ? filteredRestaurantList.map((res) => (
//             <RestaurantCard {...res.data} />
//           )): ""}
//           {/* <RestaurantCard {...restaurantMockData.data} hello="world"/> */}
//         </div>
//       </div>
//     </>
//   );
// };
const kidsRoomList =  [
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Single bed with a walnut finish</p><p><strong>• Wall Features: </strong>Football-themed wallpaper</p><p><strong>• Lighting: </strong>Hanging lights add a bright touch to the kid's room</p><p><strong>• Storage Features: </strong>White wardrobe with ample storage</p><p><strong>• Room Highlights: </strong>Study table and storage shelves ensure maximum storage</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With A Wooden Bed And Study Unit",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-wooden-bed-and-study-unit-d-inkb-jfm2023-2607",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With a Football-Themed Wallpaper - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-anjali-06-1-1675173955-06vfG.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-anjali-08-1-1675174008-ARB6Z.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Cosy bed with a tricolour headboard</p><p><strong>• Wall Features: </strong>Blue wallpaper</p><p><strong>• Lighting: </strong>Ambient white lighting enhances the kid's room design</p><p><strong>• Storage Features: </strong>Open shelving units</p><p><strong>• Room Highlights: </strong>Two comfortable accent chairs</p><p><strong>• Ideal for:</strong> Kids</p>",
      "title": "Modern Kids Room Design With Open Shelves And Accent Chairs",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-open-shelves-and-accent-chairs-d-inkb-jfm2023-2606",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With A Tricolour Headboard - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/image-8-1-1675173909-bwvFM.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/image-7-1-1675173923-XVZq3.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Double bed with a tufted headboard</p><p><strong>• Wall Features: </strong>Brick-textured wallpaper</p><p><strong>• Lighting: </strong>Backlit music sign on the bed back wall</p><p><strong>• Storage Features:</strong> Bedside table</p><p><strong>• Room Highlights: </strong>Monochromatic blue theme accentuates the kid's room design</p><p><strong>• Ideal for:</strong> Teens</p>",
      "title": "Modern Kids Room Design With Brick-Textured Wallpaper",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-brick-textured-wallpaper-d-inkb-jfm2023-2605",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Cool-Toned Kid's Room With Wooden Flooring - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-akhil-11-1-1675173856-t1BLa.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-akhil-10-1-1675173873-hR1oY.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Single bed with a pink headboard</p><p><strong>• Wall Features: </strong>Linen white walls open up the kid's room</p><p><strong>• Lighting:</strong> Ambient lighting</p><p><strong>• Storage Features: </strong>Bed comes with ample built-in storage</p><p><strong>• Room Highlights: </strong>Pink and white colour combination makes this a perfect girls' kid bedroom idea</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With A single Bed With Built-In Storage",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-single-bed-with-built-in-storage-d-inkb-jfm2023-2604",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Pink And White Kid's Room - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/mg-9297-1-1675173793-MEEY8.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/mg-9291-1-1675173817-ufZ9L.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Double bed with a beige headboard</p><p><strong>• Wall Features:</strong> Wooden partition wall to separate the rooms</p><p><strong>• Lighting: </strong>Warm lighting</p><p><strong>• Storage Features: </strong>Kid's room comes with ample storage</p><p><strong>• Room Highlights: </strong>Wooden flooring blends perfectly with the partition wall and the bed</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With A Wooden Partition Wall And Flooring",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-wooden-partition-wall-and-flooring-d-inkb-jfm2023-2603",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With A Partition Wall - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-abhishek-12-1-1675173720-vw33n.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-abhishek-14-1-1675173735-JzSPF.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Blue upholstered bed with a tufted headboard</p><p><strong>• Wall Features: </strong>White brick-textured wall</p><p><strong>• Storage Features: </strong>Open shelving units enhance the functionality of the kid's room design</p><p><strong>• Room Highlights: </strong>Peripheral false ceiling offers adequate insulation</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With White Brick Textured Walls",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-white-brick-textured-walls-d-inkb-jfm2023-2602",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid;s Room With Textured Wall And Wood Flooring - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-nidhi-kapur-10-1-1675173666-5gbR4.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/gur-nidhi-kapur-08-1-1675173681-VHqVq.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style:</strong> Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Wooden bed with a walnut headboard</p><p><strong>• Wall Features: </strong>Blue wall paint</p><p><strong>• Lighting: </strong>Wall lights add a bright touch to the kid's room</p><p><strong>• Storage Features:</strong> Bedside table</p><p><strong>• Room Highlights: </strong>Full-length window for natural lighting</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Blue And White Modern Kids Room Design With Wall Lights",
      "contentType": "looks",
      "slug": "blue-and-white-modern-kids-room-design-with-wall-lights-d-inkb-jfm2023-2601",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "White And Blue Kid's Room Design - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/img-0938-04-10-1-1675173615-FGFwq.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/img-0917-2-03-0-1-1675173632-m148Q.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>White bed with a leather upholstered headboard and wall-mounted bedside table</p><p><strong>• Wall Features: </strong>Brick cladding</p><p><strong>• Lighting: </strong>Hanging lights</p><p><strong>• Storage Features: </strong>White study desk and bedside table</p><p><strong>• Room Highlights: </strong>Wooden false ceiling goes well with the interior of the kid's room</p><p><strong>• Ideal for:</strong> Teens</p>",
      "title": "Modern Kids Room Design Brick-Themed Wallpaper And Hanging Lights",
      "contentType": "looks",
      "slug": "modern-kids-room-design-brick-themed-wallpaper-and-hanging-lights-d-inkb-jfm2023-2600",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Warm-Toned Kid's Room Design - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/image-9-1-1675172688-J0LiT.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/image-13-1-1675172944-RlcSQ.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Light oak wooden bed</p><p><strong>• Wall Features:</strong> Navy blue wall paint adds a classy touch to the kid's room</p><p><strong>• Storage Features: </strong>Tree-shaped shelving unit</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With A Tree-Shaped Shelving Unit",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-tree-shaped-shelving-unit-d-inkb-jfm2023-2599",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Navy Blue Walls - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/copy-of-nd-12-1-1674661336-5s3ru.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/copy-of-nd-14-1-1674661460-kQXTY.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style:</strong> Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Bunk bed with a study table</p><p><strong>• Wall Features: </strong>Beige color wallpaper with a constellation-themed design</p><p><strong>• Storage Features: </strong>Open and closed shelving units enhance the functionality of the kid's room design</p><p><strong>• Ideal for: </strong>Kids</p>",
      "title": "Modern Kids Room Design With A Wooden Bunk Bed And Study Unit",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-wooden-bunk-bed-and-study-unit-d-inkb-jfm2023-2598",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Open Shelving Units - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/ec-3-1674660346-6mvVt.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension:</strong> 10x11 feet</p><p><strong>• Furniture Highlights: </strong>Bunk bed with intgrated storage</p><p><strong>• Wall Features: </strong>Linen white walls add depth to the kid's room</p><p><strong>• Storage Features:</strong></p><p>1. Storage along the bunk bed stair</p><p>2. Tricolour wardrobe with a glossy finish</p><p><strong>• Room Highlights: </strong>Yellow and blue colours add a bright, vibrant touch to the room</p><p><strong>• Ideal for:</strong> two sharing</p>",
      "title": "Modern Kids Room Design With A Bunk Bed With Integrated Storage",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-bunk-bed-with-integrated-storage-d-inkb-jfm2023-2597",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With A Compact Bunk Bed - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/bsv-08-1-1674659690-y811a.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/bsv-10-1-1674659954-JhPh6.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style:</strong> Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Twin bed with a connected wooden headboard</p><p><strong>• Wall Features: </strong>Football-themed wallpaper</p><p><strong>• Storage Features:</strong></p><p>1. Bedside table</p><p>2. Study desk with ovehead storage</p><p><strong>• Room Highlights: </strong>Large window allows ample natural light into the room</p><p><strong>• Ideal for: </strong>Two-sharing kid's room</p>",
      "title": "Modern Kids Room Design With Wooden Twin Beds",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-wooden-twin-beds-d-inkb-jfm2023-2596",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Connected Twin Beds - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/rv-05-1-1674659101-S2D5J.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/rv-06-1-1674659131-yr3C3.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style:</strong> Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Red accent chair and white crib</p><p><strong>• Wall Features:</strong> Patterned pastel blue wallpaper adds a playful touch to the kid's room</p><p><strong>• Storage Features: </strong>Open shelves and tall storage units</p><p><strong>• Room Highlights: </strong>Multicolour floor rug with a cartoon pattern</p><p><strong>• Ideal for:</strong> Nursery</p>",
      "title": "Modern Kids Room Design With A White Crib And Storage Units",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-white-crib-and-storage-units-d-inkb-jfm2023-2595",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With A Crib - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/wc-22-1-1674658630-8SLL8.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/wc-21-1-1674658640-8XbRS.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Simple bed with blue upholstery</p><p><strong>• Wall Features: </strong>Sky blue colours add a soothing touch to the kid's room design</p><p><strong>• Storage Features:</strong></p><p>1. Wooden wardrobe</p><p>2. Study desk with overhead storage</p><p><strong>• Ideal for: </strong>Kids</p>",
      "title": "Modern Kids Room Design With A Daybed And Wooden Wardrobe",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-daybed-and-wooden-wardrobe-d-inkb-jfm2023-2594",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Blue Kid's Bedroom Design - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/omkar-06-2-1674657937-HR6v6.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/omkar-08-1-1674657950-j0jsk.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style:</strong> Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Single bed with a simple design</p><p><strong>• Wall Features: </strong>Sky blue</p><p><strong>• Lighting:</strong> Ambient lighting highlights the kid's room design</p><p><strong>• Storage Features: </strong>Wardrobe with open shelving units and loft storage</p><p><strong>• Room Highlights: </strong>Large window with bay seating</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With A White Bed And Spacious Storage Unit",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-white-bed-and-spacious-storage-unit-d-inkb-jfm2023-2593",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Light-Coloured Kid's Bedroom Design - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/vv-284-1-1674657387-jx75T.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/vv-311-1-1674657399-p7gb2.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style:</strong> Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Blue bunk bed with an integrated study table under the bed</p><p><strong>• Wall Features: </strong>Linen white wall adds depth to the kid's room</p><p><strong>• Storage Features: </strong>Blue wardrobe and a white study table</p><p><strong>• Room Highlights: </strong>White and blue colours create a cool-toned palette for the room</p><p><strong>• Ideal for:</strong> Kids</p>",
      "title": "Modern Kids Room With  Blue And Grey Bunk Bed And Study Unit",
      "contentType": "looks",
      "slug": "modern-kids-room-with--blue-and-grey-bunk-bed-and-study-unit-d-inkb-jfm2023-2592",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Blue Bunk Bed - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/kids-room-01-1-1674656381-EUFu5.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension:</strong> 10x11 feet</p><p><strong>• Furniture Highlights: </strong>Single bed with a headboard featuring a walnut finish</p><p><strong>• Wall Features: </strong>Linen white wall paint with wood wallpaper at the center adds a clean yet textured touch to the kid's room</p><p><strong>• Storage Features: </strong>Wardrobe with loft storage</p><p><strong>• Ideal for:</strong> Teens</p>",
      "title": "Modern Kids Room Design With Spacious Wardrobe With Lofts",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-spacious-wardrobe-with-lofts-d-inkb-jfm2023-2591",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Line White Walls - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/guest-bedroom-01-2-1674653819-jwqfT.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/guest-bedroom-04-1-1674653836-Hoxqq.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension:</strong> 10x11 feet</p><p><strong>• Furniture Highlights: </strong>Two single beds with wooden bedside tables</p><p><strong>• Wall Features: </strong>World map-themed wallpaper</p><p><strong>• Storage Features: </strong>Two study table with inbuilt storage drawers</p><p><strong>• Room Highlights: </strong>Monochromatic floor rug</p><p><strong>• Ideal for: </strong>Two-sharing kid's room</p>",
      "title": "Modern Kids Room Design With Two Wooden Single Beds",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-two-wooden-single-beds-d-inkb-jfm2023-2590",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Two-Sharing Kid's Bedroom Design - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/pystudios-78-1-1674653498-s42YS.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/pystudios-76-1-1674653548-rprTp.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Bed with a white headboard</p><p><strong>• Wall Features: </strong>Blue wall paint</p><p><strong>• Lighting: </strong>Track light</p><p><strong>• Storage Features: </strong>Study desk with pullout drawers</p><p><strong>• Room Highlights:</strong> Large window allows ample natural light into the kid's room</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With A Study Desk And Track Lights",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-a-study-desk-and-track-lights-d-inkb-jfm2023-2589",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Track Lights - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/pystudios-215-1-1674652946-zZ0Dw.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/pystudios-213-1-1674652973-uOY2N.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Double bed with a tufted grey headboard and integrated dressing table</p><p><strong>• Wall Features: </strong>Grey and pastel yellow wallpaper for the kid's room</p><p><strong>• Storage Features:</strong> Yellow and white loft and wall-mounted storage units</p><p><strong>• Room Highlights: </strong>Mustard yellow ottoman</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With Double Bed And Wall-Mounted Storage",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-double-bed-and-wall-mounted-storage-d-inkb-jfm2023-2588",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Grey And Yellow Kid's Room Design - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/sap-18-1-1-1674652142-v3Aaa.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/sap-101-1-1674652154-WkXFG.jpg"
          }
      ],
      "redirectedTo": null
  },
  {
      "description": "<p><strong>Kids Bedroom Design Details:</strong></p><p><br></p><p><strong>• Style: </strong>Modern</p><p><strong>• Room Dimension: </strong>10x11 feet</p><p><strong>• Furniture Highlights: </strong>Queen size bed with a dark-coloured headboard and open shelves</p><p><strong>• Wall Features:</strong> Multicolour geometric-patterned wallpaper for the bed back wall</p><p><strong>• Storage Features: </strong>Wardrobe and loft storage with an integrated study desk</p><p><strong>• Room Highlights:</strong> Large window allows ample natural light into the kid's room</p><p><strong>• Ideal for: </strong>Teens</p>",
      "title": "Modern Kids Room Design With Queen Size Bed With Inbuilt Storage Shelves",
      "contentType": "looks",
      "slug": "modern-kids-room-design-with-queen-size-bed-with-inbuilt-storage-shelves-d-inkb-jfm2023-2587",
      "totalPrice": null,
      "coverImage": null,
      "currency": null,
      "altText": "Kid's Room With Wardrobe And Loft Storage - Livspace",
      "addImages": [
          {
              "cover": true,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/frp-22-1-1674650957-3uAWl.jpg"
          },
          {
              "cover": null,
              "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/jfm-2023-1672723560-eFGVH/kids-bedroom-1674114061-ivOd9/frp-43-1-1674651453-o5ZCJ.jpg"
          }
      ],
      "redirectedTo": null
  }
];
const kitchen =  [
  {
      "title": "Scandinavian Interiors",
      "count": 0,
      "description": "If you're thinking bright white walls, crisp wooden flooring and a minimalist aesthetic, you're probably thinking of a Scandinavian interior design look for your rooms. Discover Scandinavian designs that are a welcoming, playful and combine the best of functionality with style. Our latest collection offers a stunning balance between clean lines, finishes and colours, with designs for every room.  Add the beauty of a Scandinavian interior design to your home & revel in its comfort and striking aesthetics.",
      "slug": "scandinavian-interior-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Beautiful Scandinavian Interior Design for Home",
      "seoTitle": "Scandinavian Interior Design Ideas for Your Home in Singapore - Livspace",
      "seoDescription": "Scandinavian Interiors are mainly known for their clean,sharp & simple designs. This is the perfect style to add to any home. Check out the Scandinavian Interior Design Ideas!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/scandinavian-1671530733-8jiIp/destop-1671531758-DjfnO.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/scandinavian-1671530733-8jiIp/mobile-1671531756-t9y6l.jpg",
          "altText": "Scandinavian Interior Designs - Livspace"
      }
  },
  {
      "title": "Minimalist Interiors",
      "count": 0,
      "description": "It's impossible to deny the beauty and serenity of a minimalist interior design. Here, we take the less-is-more approach seriously and love creating simple, clean, nuanced spaces for our clients in Singapore. Our Livspace interior design experts have mastered the art of using the bare essentials to create simple, functional & striking spaces for every modern home. Think clean lines, a tight bare-boned edit, concise colour palettes and pared-down silhouettes. With designs such as these, what's not to love? Browse through our latest collection of minimalist interior designs at Livspace and take your pick for your space.",
      "slug": "minimalist-interior-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Best Minimalist Interior Design Ideas",
      "seoTitle": "Minimalist Interior Design Ideas in Singapore - Livspace",
      "seoDescription": "Check out the best Minimalist Interior Design Ideas in Singapore that will definitely help your minimalist room become more attractive,comfortable,and even more functional.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/minimalist-1671519157-fZfpn/destop-1-1671519174-3DDwb.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/minimalist-1671519157-fZfpn/mobile-1-1671519172-FbuQt.jpg",
          "altText": "Minimalist Interior Designs - Livspace"
      }
  },
  {
      "title": "Contemporary Interiors",
      "count": 0,
      "description": "When it comes to contemporary interior designs, Livspace offers statement room designs that offer simplicity, subtle sophistication, clean lines and deliberate use of texture. With over hundreds of designs to our credit, discover a contemporary interior design that speaks personally to you and your tastes. Our interior design experts can help execute elegant and timeless contemporary designs for your sprawling houses and HDBs in Singapore in just a few simple steps. Browse through our extensive catalogue of modern contemporary interior designs for your all home renovation needs today and watch your spaces transform.",
      "slug": "contemporary-interior-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Best Contemporary Interior Design Ideas",
      "seoTitle": "Contemporary Interior Design Ideas to Style Your Home - Livspace",
      "seoDescription": "Check out our modern contemporary interior design ideas that will help you make perfect contemporary interiors. Get inspired by variety of contemporary designs to choose from",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/contemporary-1671519265-ZP9qf/destop-1671519279-mkhzD.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/contemporary-1671519265-ZP9qf/mobile-1671519277-dr4vQ.jpg",
          "altText": "Contemporary Interior Designs - Livspace"
      }
  },
  {
      "title": "Kitchen",
      "count": 1500,
      "description": "At Livspace, we craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated, modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs. All our modern kitchen designs can be customised to fit your budget and existing space. We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our top kitchen designs of 2023 to transform your space today.",
      "slug": "kitchen-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Modular Kitchen Designs",
      "seoTitle": "1000+ Modular Kitchen Designs Ideas with Cost in India - Livspace",
      "seoDescription": "Kitchen Design Ideas - Browse our Modular kitchen designs gallery to select of trendy kitchen designs for your family. Find the best Modular & Modern kitchen designs theme along with cost estimates.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/kitchen-d-1662025139-loWXM.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kitchen-m-1662025086-jIt6f.png",
          "altText": "Modular Kitchen Interior Designs ideas by Livspace"
      }
  },
  {
      "title": "Living room",
      "count": 1575,
      "description": "Discover a wide range of handpicked, living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical and trendy. From modular TV units to wall paintings and living room wall designs, you’ll find all the inspiration you’ll need to get started. Browse now to zero in on your favourite design and create a living room space that reflects your style.",
      "slug": "living-rooms",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Living Room Interior Designs",
      "seoTitle": "Stunning Living Room Interior Design Ideas - Livspace",
      "seoDescription": "Living Room Interior Design Ideas - Make your Living room reflect your personality. Livspace helps you create living rooms which make your home look truly inspired. Get a free quote today!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/living-d-1662025141-GvMP2.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/living-m-1662025087-i2Rt4.png",
          "altText": "Living Room Designs images - Livspace"
      }
  },
  {
      "title": "Master Bedroom",
      "count": 2596,
      "description": "At Livspace, we’ve got a wide range of affordable and stylish bedroom designs that you’ll love. Our carefully-curated master bedroom designs come in a variety of styles, colour schemes and decor ideas - all of which can be customised to your taste. Whether you’re looking for a contemporary style or a room with rustic sensibilities, we’ve got all the bedroom interior design inspiration you’ll need to create a space that reflects your personality and taste. Take your pick from these trending designs and start your bedroom renovation journey today with Livspace.",
      "slug": "bedrooms",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Bedroom Interior Designs",
      "seoTitle": "2000+ Bedroom Interior Design Ideas | Modular Bedroom Designing - Livspace",
      "seoDescription": "Bedroom Interior Designs - Find the perfect bedroom interior design for you and your family at livspace. We will customize and personalize it according to your needs. Get a free quote today!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/mbr-d-1662025142-Upoli.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/mbr-m-1662025089-SomZl.png",
          "altText": "Master Bedroom Designs images - Livspace"
      }
  },
  {
      "title": "TV Unit Designs",
      "count": 673,
      "description": "Trending TV unit designs from Livspace that can be customised to your style, preference and TV sizes. TV units are essential piece of furniture that serves as a focal point for your room while giving you amazing storage options. From wall-mounted TV unit designs for the living room to TV cupboard units in the hall and traditional TV cabinets for your bedroom, Livspace helps you create a functional and stylish TV unit. Browse through our budget-friendly modern TV unit designs that will help you transform the look of your home.",
      "slug": "tv-unit-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Latest TV Unit Designs",
      "seoTitle": "600+ Latest Tv Unit Designs Online At Affordable Prices In India 2023 - Livspace",
      "seoDescription": "Choosing a TV unit design for your house can help define its style. Check out our affordable TV unit,cabinet & TV stand designs ideas to give your living room a new look in 2023!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/tv-d-1662026460-QYS6h.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/tv-m-1662026474-aGgdE.png",
          "altText": "Latest TV Unit Design ideas, Images - Livspace"
      }
  },
  {
      "title": "False Ceiling Designs",
      "count": 553,
      "description": "False ceiling designs can help you change the look of any room. Be it living rooms or bedrooms, adding false ceiling designs are a great way to give your ceilings better definition and lighting. From POP designs to layered and peripheral false ceilings, we have a range of handpicked false ceiling design ideas for you to choose from. With Livspace, discover trending, modern false ceiling designs, that fit your space and budget",
      "slug": "false-ceiling-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Modern False Ceiling Designs",
      "seoTitle": "500+ False Ceiling Designs | Modern & Latest POP Designs Ideas in 2023 - Livspace",
      "seoDescription": "Browse 500+ latest false ceiling designs that can help spruce up your home. Affordable,handpicked modern ceiling designs across bedrooms,living rooms & dining rooms that can be customized.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/1-1672823153-u1JuG.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/new-project-1672823624-r4E9L.jpg",
          "altText": "POP False ceiling Designs ideas - Livspace"
      }
  },
  {
      "title": "Wardrobe",
      "count": 872,
      "description": "Livspace’s design ideas is your one-stop shop for wardrobe solutions. Our modular wardrobe designs are ergonomically designed and come in a wide spectrum of colours, finishes and materials. Built for smart storage, our cupboard designs are function-forward, easy to use and promise to make stunning additions to the spaces in your bedroom. Explore our extensive collection of wardrobe interior designs and find one you can customise for your bedroom today.",
      "slug": "wardrobe-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Wardrobe Interior Designs",
      "seoTitle": "800+ Best Wardrobe Interior Designs for Bedroom | Cupboard Interior Ideas- Livspace",
      "seoDescription": "800+ Wardrobe Interior Designs - Find the perfect modern wardrobe designs personalised for your bedroom. Livspace helps you get the the right cupboard for your needs,space saving,beautiful,efficient.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/wardrobe-d-1662015268-wR3EP.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/wardrobe-m-1662015249-8NqMG.png",
          "altText": "Wardrobe Designs images - Livspace"
      }
  },
  {
      "title": "Kid's Bedroom",
      "count": 861,
      "description": "Designing your kid’s bedroom space can be an exciting time for you and your child. We’re certain you’ll find a healthy dose of inspiration and trending kid’s room designs that will match your child's personality! Our handpicked, affordable kid’s bedroom designs can be customised to suit your space requirements and your child’s imagination. Get in touch with our experts today to build a bedroom that your child will love.",
      "slug": "kids-room",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Kids Bedroom Designs",
      "seoTitle": "500+ Kids Bedroom Design | Children's Room Interior Design (2023 Kids Bedroom) - Livspace",
      "seoDescription": "500+ latest Kids' Bedroom Designs Ideas - Get the perfect children's bedroom design to suit your kid's personality. Livspace helps you to create dream bedrooms for children. Get a free quote today!",
      "seoKeywords": "Kids Bedroom Designs,Kids Bedroom Interior,Kids Bedroom Interior Designs,Kids Bedroom",
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/kbr-d-1662025138-0EGbI.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/kbr-m-1662025085-ytI0y.png",
          "altText": "Kid's Bedroom Designs images - Livspace"
      }
  },
  {
      "title": "Pooja Room",
      "count": 367,
      "description": "A pooja room serves as a sanctuary for peace and prayer and we know just how to translate these attributes into our pooja room designs. If you are looking for a space rooted in Indian tradition, or something with a contemporary aesthetic, we’ve got you covered! Browse through our wide range of affordable and customisable mandir designs for your home. Get cost estimates for free with Livspace.",
      "slug": "pooja-room",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Pooja Room Designs",
      "seoTitle": "300+ Latest Pooja Room & Mandir Design for Home in 2023 - Livspace",
      "seoDescription": "Trending Pooja room & Mandir designs. we're here to help you with 300+ latest interior designs of Mandir & Pooja Room. Get your pooja room designed by designers in both modern and traditional ways.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/puja-d-1662025144-2KtyX.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/puja-m-1662025090-ooCLf.png",
          "altText": "Pooja Room Designs images - Livspace"
      }
  },
  {
      "title": "Bathroom",
      "count": 714,
      "description": "Livspace brings you bathroom interior designs that are functional and also stylish. Whether you’re looking for small bathroom ideas or spacious ones, we’ve created some elegant bathroom designs for you to consider for your next home renovation project.",
      "slug": "bathroom",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Bathroom Designs",
      "seoTitle": "500+ Modern Bathroom Interior Design Ideas,Images & Inspiration in 2023 - Livspace",
      "seoDescription": "Bathroom Designs and Renovation ideas: Livspace have Modular bathroom interior designers for your family,Check the best 500+ Small & Luxury modern washroom/toilet designs for some inspiration.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/bathroom-2-d-1662025132-btVYp.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/bathroom-2-m-1662025077-SPWb2.png",
          "altText": "Bathroom Designs images - Livspace"
      }
  },
  {
      "title": "Dining Room",
      "count": 886,
      "description": "It is often believed that a family that eats together, stays together, thereby making the dining room one of the most indispensable areas in a house! Whether you are looking for a compact dining unit or a spacious one, here’s your daily dose of dining room interior design inspiration to start your home interior journey today.",
      "slug": "dining-room",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Dining Room Designs & Décor",
      "seoTitle": "Dining Room Interior Design & Decor - Livspace",
      "seoDescription": "Find the perfect ideas for dining room interior designs & decor for you and your family. Livspace helps you get the dining room right for you. Get a free quote today!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/dining-2-d-1662025134-udTs3.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/dining-2-m-1662025079-rqycW.png",
          "altText": "Dining Room Designs images - Livspace"
      }
  },
  {
      "title": "Foyer",
      "count": 662,
      "description": "With our unique foyer designs that pack both style and function, you’ll have a beautiful and well-organized entryway to make that stunning first impression. Here are some inspiring foyer design ideas to get you started.",
      "slug": "foyer-room",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Foyer Designs",
      "seoTitle": "400+ Foyer Design Ideas For Home Entrance - Livspace",
      "seoDescription": "Browse 400+ Foyer Design Ideas from Livspace. Utilize this entrance space to add elegant decor details that will help to elevate the overall ambience of your home.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/foyer-d-1662025135-fZrEc.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/foyer-m-1662025081-klQ2l.png",
          "altText": "Foyer Designs | Home Entrance Design - Livspace"
      }
  },
  {
      "title": "Guest Bedroom",
      "count": 719,
      "description": "Your guest room is an extension of your hospitality and should be thoughtfully designed to make all your guests feel welcome and at home. Browse through some stylish guest room designs from Livspace to spark some inspiration for your next home renovation project or for your new home.",
      "slug": "guest-bedroom",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Guest Room Designs",
      "seoTitle": "Guest Room Interior Design | Best Guest Bedroom Interior Design for Home - Livspace",
      "seoDescription": "Browse stunning Guest Room Design and layouts. Discover guest bedroom ideas and design inspiration from a vast variety of designs by professionals.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/gbr-d-1662025136-9qiYK.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/gbr-m-1662025082-A6KAI.png",
          "altText": "Guest Bedroom Designs images - Livspace"
      }
  },
  {
      "title": "Home Office",
      "count": 533,
      "description": "A smartly designed home office not only inspires creativity but also helps you reach your peak productivity. Whether you want it to be minimalistic or modern, we can help you get the look you desire. Here are some home office designs to get inspired from",
      "slug": "home-office",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Home Office Designs",
      "seoTitle": "Home Office Design Ideas for Small Spaces |  Modern Office Interior Designs - Livspace",
      "seoDescription": "Are you working from home? Our brilliant home office designs can help boost your creativity and productivity. Click here to explore for the home office designs/study room designs. Get a free quote!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/ho-d-1662025137-o7OtC.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/ho-m-1662025084-b0rP8.png",
          "altText": "Home Office Designs images - Livspace"
      }
  },
  {
      "title": "Balcony",
      "count": 133,
      "description": "Whether you choose to use your balcony as a reading nook, a spot for a sundowner or for fresco dining purposes, Livspace has all the latest balcony designs to turn your balcony into your favourite place in the house. Check out our latest balcony designs that reflect your personal style.",
      "slug": "balcony",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Home Balcony Designs",
      "seoTitle": "100+ Modern Balcony Design Ideas |  Home Balcony Designs - Livspace",
      "seoDescription": "100+ Home Balcony Designs ideas - If you're looking for creative and modern balcony designs. Click here to explore the trending & latest front-end balcony ideas to add charm to your balcony ambiance!",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/desktop-1662014816-DsTte/balcony-d-1662025130-OsJOY.png",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/jas-thumbnails-1662014793-zEzY3/mobile-1662014804-Sebbn/balcony-m-1662025075-KVnTS.png",
          "altText": "Balcony Designs images - Livspace"
      }
  },
  {
      "title": "Tile Designs",
      "count": 279,
      "description": "Tiles can do so much more than serve the basic function of keeping your spaces beautiful. We believe that every surface is an extension of your artistic expression & personality, which is why it is important to treat your rooms to quality tile designs. No matter how big or small your project is, we have got you covered. Browse through Livspace' latest floor and wall tile designs and take your pick! We have tile designs in every colour, shape, finish - crafted & engineered to perfection.",
      "slug": "tile-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Tile Designs for Walls & Floors",
      "seoTitle": "Best 200+ Tiles designs for Floors and Walls of Your Home - Livspace",
      "seoDescription": "Explore the latest tiles design collection on Livspace. Find variety of floor tiles designs,wall tiles designs & more for your home interior. Get in touch today for design inspiration.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/destop-1673502929-FsYkr.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/mobile-1673502931-OGA6s.jpg",
          "altText": "Floor Tile Design ideas for home - Livspace"
      }
  },
  {
      "title": "Wallpaper Designs",
      "count": 181,
      "description": "Wallpapers can add colour to your walls, giving it a personality of its own. If you have always wanted to decorate your wall with fun, quirky prints, now is your chance to do it. From animal prints to floral patterns & abstract wallpaper designs, each wallpaper has a story to tell and can add beauty to your everyday spaces. Scroll through our exquisitely curated collection of the latest, handpicked wallpaper designs and transform your rooms today! We have wallpapers for all wall sizes and rooms and we promise you'll be spoilt for choice with our extensive catalogue of trending wallpaper designs.",
      "slug": "home-wallpaper-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Wallpaper Design for Home Wall Decor",
      "seoTitle": "Best Wallpaper Designs to Decorate Your Walls Home - Livspace",
      "seoDescription": "Wallpaper Designs - Browse the best wallpaper designs suitable for your bedroom,living room,kitchen,etc only on Livspace. Use this wallpaper ideas to give your home a new look",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/desktop-1670583147-IrQS8.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/mobile-1670583149-cQJSO.jpg",
          "altText": "Stunning Wallpaper Designs - Livspace"
      }
  },
  {
      "title": "Wall Paint Designs",
      "count": 116,
      "description": "Keep your walls looking fresh with our exquisite range of wall paints. From smooth interior emulsions to distempers and designer finishes, we've got all the inspiration you'll ever need to give your rooms the colours they deserve. Discover a wide range of wall paint and wall colour combinations for all your home painting needs and for every one of your spaces. Get a solid colour for your master bedroom or a fun, colour-blocked wall for your kid's bedroom. Be creative with patterns, designs and finishes. If you have the idea, we have the colours. If you have a wall, we've got the wall paint designs!",
      "slug": "wall-paint-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Wall Paint Design Ideas",
      "seoTitle": "Wall Paint Designs With Wall Colour Combination for Your Home - Livspace",
      "seoDescription": "Wall Paint Design - Explore stunning wall paint designs & ideas with wall colour combinations. Get the best wall paint ideas for your modern home to inspire you.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/wall-paint-1671531935-8vnny/destop-3-1671531944-fXvDd.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/wall-paint-1671531935-8vnny/mobile-3-1671531948-ojtTS.jpg",
          "altText": "Wall Paint Designs - Livspace"
      }
  },
  {
      "title": "Wall Decor Ideas",
      "count": 162,
      "description": "Looking for wall design ideas and décor to refresh your blank walls? Empty walls are filled with possibilities and we've got just the right wall designs to amp up your spaces, while bringing out the best in each room. While a bare wall can feel refreshing—especially when a room is filled with bold furniture, printed area rugs, and plenty of objects, having your walls treated to artwork, refreshing panelling or designer textures, can add character and dimension to your spaces. Now, in just a few simple steps, you can bring style to every square inch of your space, including your walls!  From statement art pieces to whimsical wallpaper and everything else in between, every wall design here is packed with visual intrigue.",
      "slug": "wall-decor-designs",
      "contentType": "looks-category",
      "cueStartPosition": "4",
      "cueInterval": "6",
      "pageTitle": "Best Wall Decor Ideas for Home",
      "seoTitle": "Wall Decor Ideas to Decorate Your Home Walls - Livspace",
      "seoDescription": "List of wall decor ideas that will lighten up your dull walls. Get inspiration from our wall design ideas for adding wall texture design,inspiring a gallery wall & more",
      "seoKeywords": "",
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/desktop-1670577812-gDlNc.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/mobile-1670577813-ChhSV.jpg",
          "altText": "Wall Decor Ideas - Livspace"
      }
  },
  {
      "title": "Flooring Designs",
      "count": 72,
      "description": "Your floors are the largest surfaces in your home, and picking the best type of flooring for your space depends on your budget, lifestyle and personal preferences. Each type of flooring has its unique benefits, and determining which flooring is best for your space, depends on each room’s interior design plan and location. Be it for aesthetic purposes or safety reasons, getting the right flooring to match your interiors is a crucial step. Browse through our extensive catalogue of handpicked, curated flooring. Pick from vinyl flooring, tiles, wood flooring to carpet flooring and granite. We've got something for every floor!",
      "slug": "flooring-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Latest Floor Design Ideas for Home",
      "seoTitle": "Best Floor Design Ideas that Will Make Your House Beautiful",
      "seoDescription": "Discover the most overwhelming home floor design ideas that will make your house feel welcoming. Browse variety of wood flooring,carpet flooring & more to get inspiration.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/flooring-1671532122-OzvjL/destop-1-1671532136-qh2Ep.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/flooring-1671532122-OzvjL/mobile-1-1671532131-zEH3l.jpg",
          "altText": "Stunning Flooring Designs - Livspace"
      }
  },
  {
      "title": "Window Designs",
      "count": 90,
      "description": "Create beautiful exteriors and warm inviting interiors with our latest catalogue of window designs. While windows are essential for ventilation, they are also a crucial aesthetic component, enhancing the functionality of your home. At Livspace, you will find windows for different rooms and spaces. Personalise your windows based on your unique preferences, shape requirements and pair it with your existing interiors. Here, you will discover trending window glass designs, sliding windows & wooden window designs, that can all help transform your space. With  the promise of plenty of natural sunlight and fresh air, our latest window designs will make unique, aesthetic additions to the rooms in your house.",
      "slug": "window-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Window Design Ideas for Home",
      "seoTitle": "Latest Window Design Ideas for your Home - Livspace",
      "seoDescription": "We have the best window design ideas to bring your home to life. We have collected the latest in window styles and designs that you can use to reflect your personality.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/window-1671532889-xn3Yv/destop-3-1671532899-QWlv0.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/window-1671532889-xn3Yv/mobile-3-1671532896-Znh4Y.jpg",
          "altText": "Trending Window Designs - Livspace"
      }
  },
  {
      "title": "Laminate Designs",
      "count": 0,
      "description": "Laminates can help add elegance to your spaces while giving your surfaces the durability and strength they need. Now, you can add textures to your spaces with our latest, inspirational laminate design. Experience the stunning flexibility of our laminate designs with exclusive finishes for all your surface needs. From laminate flooring to laminate sheeting, you'll find the latest laminate collection for all your home renovation & design needs right here, at Livspace. Browse through our catalogue today!",
      "slug": "laminate-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Latest Laminate Design Ideas for Home",
      "seoTitle": "Best Laminate Design Ideas for Your Home Interiors - Livspace",
      "seoDescription": "Laminate Design Ideas - Check out the laminates design for your home interiors. Find the variety of laminate flooring,laminate sheeting to get design inspiration.",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/laminate-1671532020-VgDKR/destop-2-1671532030-R8YQ1.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/ond-2022-1671518970-uZm4T/laminate-1671532020-VgDKR/mobile-2-1671532032-TXCK4.jpg",
          "altText": "Trendy Laminate Designs - Livspace"
      }
  },
  {
      "title": "Homes by Livspace",
      "count": 41,
      "description": "With  50k+ happy homes delivered, Livspace helps you build your dream home in your design and style. Browse through the homes we have delivered for some inspiration. Customised, budget-friendly home designs delivered across cities. Be it renovation or a full home design, apartment or villa home, we have got you covered.",
      "slug": "home-interior-designs",
      "contentType": "looks-category",
      "cueStartPosition": null,
      "cueInterval": null,
      "pageTitle": "Homes by Livspace",
      "seoTitle": "Modern Full Home Design Ideas & Interior Decoration Style - Livspace",
      "seoDescription": "Check trending home interior designs delivered by Livspace. Browse the latest home interior design ideas for your kitchen,bedroom,bathroom,wardrobe,living room,and other rooms of your home. Get a",
      "seoKeywords": null,
      "images": {
          "desktop": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/home-d-1-1663245994-gdgM5.jpg",
          "mobile": "https://d3gq2merok8n5r.cloudfront.net/abhinav/design-ideas-thumbnails-1628773921-7vSz1/home-mpng-1663245199-Iupyr.jpg",
          "altText": "Home Interior designs by Livspace"
      }
  }
];
export const BodyComponent = () => {
  return (
    <>
    <div className="main-container">
      <div className="item-list">
      {/* {kitchen.map((res) => (
        <KitchenCard {...res}></KitchenCard>
      ))
      } */}
      {
        kidsRoomList.map((res) => (
          <KidsRoom {...res}></KidsRoom>
        ))
      }
      </div>
    </div>
    </>
  )
}