var bubbleData = {
  "name": "Customer",
  "children": [
    {
      "name" : "Media",
      "desc": "Media description goes here",
      "children" : [
        {
          "name": "Social Media",
          "desc": "Social media description goes here <a href='#'>Foo</a>"
            + "<p> foo </p>"
            + "<p> bar </p>",
          "children": [
            { "name": "Self as Brand", "size": 1000 },
            { "name": "Discovery", "size": 1000 },
            { "name": "Social Reporting", "size": 1000 },
            { "name": "Privacy", "size": 1000 }
          ]
        },
        {
          "name": "Paid Media",
          "desc": "Paid media description goes here",
          "children": [
            { "name": "Programmatic", "size": 1000 },
            { "name": "Native", "size": 1000 },
            { "name": "Social", "size": 1000 },
            { "name": "Affiliate", "size": 1000 }
          ]
        },
        {
          "name": "Entertainment",
          "desc": "Entertainment description goes here",
          "children": [
            { "name": "Movies", "size": 1000 },
            { "name": "Live Entertainment", "size": 1000 },
            { "name": "Radio", "size": 1000 },
            { "name": "Virtual Reality", "size": 1000 },
            { "name": "Music", "size": 1000 }
          ]
        },
        {
          "name": "Big Data",
          "desc": "Big data description goes here",
          "children": [
            { "name": "Tracking", "size": 1000 },
            { "name": "Targeting", "size": 1000 },
            { "name": "Fragmentation", "size": 1000 },
            { "name": "Data as Currency", "size": 1000 }
          ]
        },
      ]
    }
  ]
};
//         {
//           "name":"Brands",
//           "desc": "Brands description goes here",
//           "children": [
//             { "name": "Individual v Corporate", "size": 1000 },
//             { "name": "Internal v External", "size": 1000 },
//             { "name": "As Media Outlet", "size": 1000 }
//           ]
//         },
//         {
//           "name":"Content",
//           "desc": "Content description goes here",
//           "children": [
//             { "name": "Source", "size": 1000 },
//             { "name": "Shelf Life", "size": 1000 },
//             { "name": "Digital Exhaust", "size": 1000 },
//             { "name": "Global Reach", "size": 1000 }
//           ]
//         }
//       ]
//     },
//     {
//       "name":"Transportation",
//       "desc": "Transportation description goes here",
//       "children":[
//         {
//           "name":"Private",
//           "desc": "Private transportation description goes here",
//           "children":[
//             {"name":"Driverless Cars","size":1000},
//             {"name":"Private Carsharing","size":1000},
//             {"name":"Non-Motorized","size":1000}
//           ]
//         },
//         {
//           "name":"Parking",
//           "desc": "Parking description goes here",
//           "size":2000
//         },
//         {
//           "name":"Public",
//           "desc": "Public transportation description goes here",
//           "children":[
//             {"name":"Rail","size":1000},
//             {"name":"Air & Space","size":1000},
//             {"name":"Ship","size":1000},
//             {"name":"Public Carsharing","size":1000},
//             {"name":"Teleportation","size":1000}
//           ]
//         },
//         {
//           "name":"Delivery",
//           "desc": "Delivery description goes here",
//           "children":[
//             {"name":"Global Trade","size":1000},
//             {"name":"Mobile Services","size":1000},
//             {"name":"Mobile Inventory","size":1000},
//             {"name":"Automation","size":1000},
//             {"name":"Drones","size":1000}
//           ]
//         },
//         {
//           "name":"Counter-Trends",
//           "desc": "Counter-trends description goes here",
//           "children":[
//             {"name":"Telecommuting","size":1000},
//             {"name":"Virtual Reality","size":1000},
//             {"name":"A.I.","size":1000},
//             {"name":"Slow Travel","size":1000}
//           ]
//         }
//       ]
//     },
//     {
//       "name":"Mallonomics",
//       "desc": "Mallonomics description goes here",
//       "children":[
//         {
//           "name":"Revenue",
//           "desc": "Revenue description goes here",
//           "children":[
//             {"name":"Lease","size":1000},
//             {"name":"Media","size":1000},
//             {"name":"Events & Activations","size":1000},
//             {"name":"Digital Sales","size":1000}
//           ]
//         },
//         {
//           "name":"Market",
//           "desc": "Market description goes here",
//           "children":[
//             {"name":"Tier","size":1000},
//             {"name":"Tenants","size":1000},
//             {"name":"Geography","size":1000},
//             {"name":"Customer","size":1000}
//           ]
//         },
//         {
//           "name":"Experience",
//           "desc": "Experience description goes here",
//           "children":[
//             {"name":"Retail","size":1000},
//             {"name":"Product","size":1000},
//             {"name":"Services","size":1000},
//             {"name":"Experiential","size":1000},
//             {"name":"Social","size":1000}
//           ]
//         },
//         {
//           "name":"Payments",
//           "desc": "Payments description goes here",
//           "children":[
//             {"name":"Digital","size":1000},
//             {"name":"Credit","size":1000},
//             {"name":"Trade","size":1000},
//             {"name":"Point of Sale","size":1000},
//             {"name":"Data as Currency","size":1000}
//           ]
//         },
//         {
//           "name":"New Models",
//           "desc": "New business models description goes here",
//           "children":[
//             {"name":"Resort","size":1000},
//             {"name":"Convention Center","size":1000},
//             {"name":"Fulfillment Hub","size":1000},
//             {"name":"Amusement Park","size":1000},
//             {"name":"Membership Club","size":1000},
//             {"name":"Transit Hub","size":1000},
//             {"name":"Residential","size":1000},
//             {"name":"Office","size":1000},
//             {"name":"Incubator","size":1000},
//             {"name":"Factory","size":1000},
//             {"name":"Urban Agriculture","size":1000},
//             {"name":"Physcial Hedge Fund","size":1000}
//           ]
//         }
//       ]
//     },
//     {
//       "name":"Product",
//       "desc": "Product description goes here",
//       "children":[
//         {
//           "name":"Production",
//           "desc": "Production description goes here",
//           "children":[
//             {"name":"3D Printing","size":1000},
//             {"name":"Small Batch","size":1000},
//             {"name":"Speed","size":1000},
//             {"name":"Demand","size":1000}
//           ]
//         },
//         {
//           "name":"Customization",
//           "desc": "Customization description goes here",
//           "children":[
//             {"name":"Demand","size":1000},
//             {"name":"Production","size":1000},
//             {"name":"Sourcing","size":1000}
//           ]
//         },
//         {
//           "name":"Labor",
//           "desc": "Labor description goes here",
//           "children":[
//             {"name":"Robotics","size":1000},
//             {"name":"Efficiency","size":1000},
//             {"name":"Sharing","size":1000}
//           ]
//         },
//         {
//           "name":"Sustainability",
//           "desc": "Sustainability description goes here",
//           "children":[
//             {"name":"Resource Supply","size":1000},
//             {"name":"Inventory","size":1000},
//             {"name":"Degradation","size":1000}
//           ]
//         },
//         {
//           "name":"Global Trade",
//           "desc": "Global trade description goes here",
//           "children":[
//             {"name":"Resources","size":1000},
//             {"name":"Politics","size":1000}
//           ]
//         },
//         {
//           "name":"Demand",
//           "desc": "Demand description goes here",
//           "children":[
//             {"name":"Shared Economy","size":1000},
//             {"name":"Emerging Markets","size":1000}
//           ]
//         }
//       ]
//     },
//     {
//       "name":"Intrastructure",
//       "desc": "Infrastructure description goes here",
//       "children":[
//         {
//           "name":"Flexibility",
//           "desc": "Flexibility description goes here",
//           "children":[
//             {"name":"Transformation","size":1000},
//             {"name":"Pop Up","size":1000},
//             {"name":"Events","size":1000},
//             {"name":"Experience","size":1000},
//             {"name":"Continuous Novelty","size":1000}
//           ]
//         },
//         {
//           "name":"Experience Economy",
//           "desc": "Experience economy description goes here",
//           "children":[
//             {"name":"Virtual Integration","size":1000},
//             {"name":"Counter-Trends","size":1000}
//           ]
//         },
//         {
//           "name":"Shared Economy",
//           "desc": "Shared economy description goes here",
//           "children":[
//             {"name":"Support Insfrastructure","size":1000},
//             {"name":"Shared Spaces","size":1000}
//           ]
//         },
//         {
//           "name":"Sustainability",
//           "desc": "Sustainability description goes here",
//           "children":[
//             {"name":"Resource Use","size":1000},
//             {"name":"'Smart' Buildings'","size":1000},
//             {"name":"Global Impact","size":1000}
//           ]
//         },
//         {
//           "name":"Design",
//           "desc": "Design description goes here",
//           "children":[
//             {"name":"Biomimetic","size":1000},
//             {"name":"Transparency","size":1000}
//           ]
//         },
//         {
//           "name":"Transportation",
//           "desc": "Transportation description goes here",
//           "children":[
//             {"name":"Access","size":1000},
//             {"name":"Support Infrastructure","size":1000}
//           ]
//         },
//         {
//           "name":"Planning",
//           "desc": "Planning description goes here",
//           "children":[
//             {"name":"Demographics","size":1000},
//             {"name":"Policy & Principles","size":1000},
//             {"name":"Mixed Use","size":1000},
//             {"name":"Repurposing","size":1000}
//           ]
//         },
//         {
//           "name":"Construction",
//           "desc": "Construction description goes here",
//           "children":[
//             {"name":"Strategic","size":1000},
//             {"name":"Materials","size":1000},
//             {"name":"Methods","size":1000}
//           ]
//         }
//       ]
//     },
//     {
//       "name":"Lifestyle",
//       "desc": "Lifestyle description goes here",
//       "children":[
//         {
//           "name":"Health",
//           "desc": "Health description goes here",
//           "children":[
//             {"name":"Disease","size":1000},
//             {"name":"Aging","size":1000},
//             {"name":"Wellness","size":1000}
//           ]
//         },
//         {
//           "name":"Values",
//           "desc": "Values description goes here",
//           "children":[
//             {"name":"Generational","size":1000},
//             {"name":"Culture","size":1000},
//             {"name":"Class","size":1000},
//             {"name":"Consumption","size":1000},
//             {"name":"Privacy","size":1000}
//           ]
//         },
//         {
//           "name":"Spending",
//           "desc": "Discretionary spending description goes here",
//           "children":[
//             {"name":"Housing & Home","size":1000},
//             {"name":"Dining","size":1000},
//             {"name":"Services","size":1000},
//             {"name":"Fashion","size":1000},
//             {"name":"Electronics","size":1000},
//             {"name":"Travel","size":1000},
//             {"name":"Luxury","size":1000}
//           ]
//         },
//         {
//           "name":"Social",
//           "desc": "Social description goes here",
//           "children":[
//             {"name":"Platonic","size":1000},
//             {"name":"Familial","size":1000},
//             {"name":"Romantic","size":1000}
//           ]
//         },
//         {
//           "name":"Vocation",
//           "desc": "Vocation description goes here",
//           "children":[
//             {"name":"Demand","size":1000},
//             {"name":"Legislation","size":1000},
//             {"name":"Economy","size":1000},
//             {"name":"Education","size":1000}
//           ]
//         },
//         {
//           "name":"Connectivity",
//           "desc": "Personal connectivity description goes here",
//           "children":[
//             {"name":"Mobile Phone","size":1000},
//             {"name":"Wearable Tech","size":1000},
//             {"name":"Social Media","size":1000},
//             {"name":"Internet of Things","size":1000},
//             {"name":"Cloud-Based","size":1000}
//           ]
//         }
//       ]
//     }
//   ]
// }
