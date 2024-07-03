/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { SubCatergory } from "src/app/chits-class";
import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [


    // {
    //     id: 1,
    //     label: 'MENUITEMS.MENU.TEXT',
    //     isTitle: true
    // },


    {
        id: 2,
        label: 'Admin',
        icon: ' ri-settings-3-fill',


        subItems: [





            {
                id: 1,
                label: 'Business Verticals',
                link: 'chits/businessunit',
                parentId: 1
            },
            {
                id: 3,
                label: 'LookUps',
                link: 'administration/PickList',
                parentId: 2,
            },
            {
                id: 3,
                label: 'Menu Items',
                // link: '',
                parentId: 2,
            },
            {
                id: 2,
                label: 'Roles',
                link: 'chits/manage',
                parentId: 2
            },
            {
                id: 2,
                label: 'Role permisions',
                // link: 'chits/manage',
                parentId: 2
            },
            {

                id: 3,
                label: 'Users',
                link: '/chits/userlist1',
                parentId: 1

            },
            // {
            //     id: 3,
            //     label: 'Agents',
            //     link: 'chits/AgentList',
            //     parentId: 2
            // },









            // {
            //     id: 3,
            //     label: 'PickList',
            //     link: 'administration/PickList',
            //     parentId: 2,
            //     subItems: [

            //         {
            //             id: 1,
            //             label: 'Lead Source',
            //             link: 'administration/source-subsource',
            //             parentId: 8
            //         },
            //         {
            //             id: 7,
            //             label: 'Lead Status',
            //             link: 'chits/Status',
            //             parentId: 1
            //         },
            //         {
            //             id: 7,
            //             label: 'FollowUp Status',
            //             link: 'chits/Status',
            //             parentId: 1
            //         },

            //     ]
            // },


            // {
            //     id: 4,
            //     label: 'Campaigns',
            //     link: 'chits/campaign',
            //     parentId: 1,
            //     subItems: [
            //         // {
            //         //     id: 8,
            //         //     label: 'Campaign Setup',
            //         //     // link: 'chits/Products',
            //         //     parentId: 2
            //         // },
            //         // {
            //         //     id: 9,
            //         //     label: 'Campaign Details',
            //         //     // link: 'chits/Products',
            //         //     parentId: 2
            //         // },
            //         {
            //             id: 1,
            //             label: 'Corporate Campaign',
            //             link: 'chits/Campaigns',
            //             parentId: 4
            //         },
            //         // {
            //         //     id: 8,
            //         //     label: 'SMS',
            //         //     link: 'chits/sms',
            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 9,
            //         //     label: 'Whatsapp',
            //         //     // link: 'chits/vacantlist',
            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 18,
            //         //     label: 'E-mail',
            //         //     // link: 'chits/vacantlist',
            //         //     parentId: 3
            //         // },
            //         {
            //             id: 2,
            //             label: 'Agent Benefits',
            //             link: 'chits/AgentBenfits',
            //             parentId: 4
            //         },

            //         // {
            //         //     id: 11,
            //         //     label: 'Media',
            //         //     // link: 'chits/AgentBenfits',
            //         //     parentId: 2
            //         // },
            //     ]
            // },
            // {
            //     id: 5,
            //     label: 'Agent Onboarding',
            //     link: 'administration/agent-onboarding',
            //     parentId: 1,

            // },
            // {
            //     id: 6,
            //     label: 'Summary',
            //     label1: 'Administration',
            //     link: '/real-estate/list',
            //     parentId: 1
            // },
            // {
            //     id: 4,
            //     label: 'Leads',
            //     link: 'chits/Lead',
            //     parentId: 2,

            // },
            // {
            //     id: 7,
            //     label: 'Upload Fresh Leads',
            //     link: 'chits/upload-leads',
            //     parentId: 1,

            // },

            // {
            //     id: 14,
            //     label: 'Contacts',
            //     link: 'chits/Contacts',
            //     parentId: 2
            // },
            // {
            //     id: 8,
            //     label: 'Notification',
            //     // link: 'chits/businessunit',
            //     parentId: 1,
            //     subItems: [

            //         // {
            //         //     id: 14,
            //         //     label: 'Notification Types',
            //         //     // link: 'chits/vacantlist',
            //         //     parentId: 39
            //         // },

            //         {
            //             id: 2,
            //             label: ' Notification Settings',
            //             link: 'chits/Notification-Settings',
            //             parentId: 8,
            //             // subItems: [
            //             //     {
            //             //         id: 16,
            //             //         label: 'SMS',
            //             //         link: 'chits/sms',
            //             //         parentId: 3
            //             //     },
            //             //     {
            //             //         id: 17,
            //             //         label: 'Whatsapp',
            //             //         // link: 'chits/vacantlist',
            //             //         parentId: 3
            //             //     },
            //             //     {
            //             //         id: 18,
            //             //         label: 'E-mail',
            //             //         // link: 'chits/vacantlist',
            //             //         parentId: 3
            //             //     }
            //             // ]
            //         }
            //     ]
            // }
        ]
    },


    {
        id: 3,
        label: 'Marketing',
        icon: 'bi bi-collection-play',

        subItems: [
            {
                id: 1,
                label: 'Corporate Campaign',
                link: 'chits/Campaigns',
                parentId: 4
            },
            {
                id: 3,
                label: 'Agents',
                link: 'chits/AgentList',
                parentId: 2
            },
            {
                id: 5,
                label: 'Agent Onboarding',
                link: 'administration/agent-onboarding',
                parentId: 1,

            },
            {
                id: 2,
                label: 'Digital Marketing',
                parentId: 2,
                subItems: [
                    {
                        id: 1,
                        label: 'Social Media Settings',
                        // link: '',
                        parentId: 1,

                    },
                    {
                        id: 7,
                        label: 'Upload Fresh Leads',
                        link: 'chits/upload-leads',
                        parentId: 1,

                    },


                ]
            },



            // {
            //     id: 4,
            //     label: 'Leads',
            //     link: 'chits/leads-list',
            //     parentId: 4
            // },
            // {
            //     id: 2,
            //     label: ' Lead FollowUps',
            //     label1: 'FollowUps',
            //     icon: ' ri-building-fill',
            //     link: 'chits/followup',
            //     parentId: 4

            // },

            // {
            //     id: 4,
            //     label: 'Leads',
            //     // link: 'chits/Lead',
            //     // icon: 'ph-gauge',
            //     parentId: 2,
            //     subItems: [
            //         {
            //             id: 5,
            //             label: 'Leads',
            //             link: 'chits/Lead',
            //             parentId: 2
            //         },
            //         {
            //             id: 2,
            //             label: 'FollowUps',
            //             label1: 'FollowUps',
            //             icon: ' ri-building-fill',
            //             link: 'chits/followup',
            //             parentId: 4

            //         },
            //         {
            //             id: 5,
            //             label: 'Leads By Team Member',
            //             link: '/chits/teammember',
            //             parentId: 2
            //         },
            //         {
            //             id: 6,
            //             label: 'Upload Fresh Leads',
            //             link: '/chits/uploadLead',
            //             parentId: 2
            //         },
            //     ]
            // },


            // {
            //     id: 7,
            //     label: 'Calendar',
            //     link: '/apps/calendar',
            //     parentId: 2
            // },
            // {
            //     id: 8,
            //     label: 'Summary',
            //     link: '/real-estate/list',
            //     parentId: 2
            // },
            // {
            //     id: 9,
            //     label: 'Subscribers',
            //     link: '/chits/Subscribers',
            //     parentId: 2
            // },
            // {
            //     id: 35,
            //     label: 'Business Functionality',
            //     link: '/chits/mybusiness',
            //     parentId: 3
            // },
            // {
            //     id: 10,
            //     label: 'Reports',
            //     link: 'ph-gauge',
            //     subItems: [

            //         {
            //             id: 1,
            //             label: 'Vacant Chits',
            //             link: 'chits/vacantlist',
            //             parentId: 10
            //         },

            //         {
            //             id: 2,
            //             label: 'Branch Performance',
            //             link: 'chits/branchperformance',
            //             parentId: 10
            //         },
            //         {
            //             id: 3,
            //             label: 'Region Performance',
            //             link: '/chits/regionperformance',
            //             parentId: 10
            //         },
            //         {
            //             id: 4,
            //             label: 'Zone Performance',
            //             // link: '/chits/regionperformance',
            //             parentId: 10
            //         },

            //         // {
            //         //     id: 44,
            //         //     label: 'Manager Wise Channel Partner',
            //         //     link: 'chits/managerWise',
            //         //     // icon: 'ph-gauge',
            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 44,
            //         //     label: 'Channel Partner Wise Commission',
            //         //     link: 'chits/channelwithoutmonth',
            //         //     // icon: 'ph-gauge',
            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 44,
            //         //     label: ' (Month wise) Channel Partner Wise Commission',
            //         //     link: 'chits/channelPartner',
            //         //     // icon: 'ph-gauge',
            //         //     parentId: 3
            //         // },

            //         // {
            //         //     id: 44,
            //         //     label: 'Lead Consolidate',
            //         //     link: 'chits/leads-consolidate',
            //         //     // icon: 'ph-gauge',
            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 44,
            //         //     label: 'Lead Report',
            //         //     link: 'chits/lead-report',
            //         //     // icon: 'ph-gauge',
            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 45,
            //         //     label: 'Direct Business Details',
            //         //     link: 'chits/directBusiness',

            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 46,
            //         //     label: 'Excutive Wise Bookings',
            //         //     link: 'chits/excutivewise_bookings',

            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 46,
            //         //     label: 'bookingsMPR',
            //         //     link: 'chits/bookingsMPR',

            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 46,
            //         //     label: 'Floor Wise Registrations',
            //         //     link: 'chits/floor-wise',

            //         //     parentId: 3
            //         // },
            //         // {
            //         //     id: 46,
            //         //     label: 'Rent-Receivable',
            //         //     link: 'chits/Rent-Receivable',

            //         //     parentId: 3
            //         // }


            //     ]

            // }

        ]
    },

    {
        id: 3,
        label: 'Chits',
        icon: 'ri-bank-fill',

        subItems: [
            {
                id: 1,
                label: 'Masters',
                link: 'ph-gauge',
                subItems: [
                    {
                        id: 2,
                        label: 'Companies',
                        link: '/real-estate/companySetUp',
                        parentId: 3
                    },
                    {
                        id: 4,
                        label: 'Designations',
                        link: 'chits/designationlist',
                        parentId: 1
                    },


                    {
                        id: 1,
                        label: 'Zones',
                        link: 'chits/zonelist',
                        parentId: 1
                    },
                    {
                        id: 2,
                        label: 'Regions',
                        link: 'chits/regionlist',
                        parentId: 1
                    },

                    {
                        id: 3,
                        label: 'Branches',
                        link: 'chits/branchlist',
                        parentId: 1
                    },

                    {
                        id: 1,
                        label: 'Lead Source',
                        link: 'administration/Admin-Source',
                        parentId: 8
                    },
                    {
                        id: 1,
                        label: 'Notification Templates',
                        link: 'administration/Template',
                        parentId: 8
                    },

                ]


            },
            {
                id: 1,
                label: 'Products',
                icon: 'ri-bank-fill',



                subItems: [
                    {
                        id: 1,
                        label: 'Chit Groups',
                        link: 'chits/AgentProducts',
                        parentId: 1,
                    }
                ]




            },
            {
                id: 1,
                label: 'Employees',
                icon: 'ri-bank-fill',
                subItems: [

                    {
                        id: 6,
                        label: ' Sales Excutives',
                        link: 'chits/Employee',
                        parentId: 1
                    },
                    {

                        id: 4,
                        label: 'Administrators',
                        link: 'chits/administrator',
                        parentId: 1

                    },
                    {
                        id: 6,
                        label: 'Managers',
                        link: 'chits/manager',
                        parentId: 1
                    },

                ]
            },
            {
                id: 2,
                label: 'System Settings',
                parentId: 2,
                subItems: [
                    {
                        id: 2,
                        label: ' Notification Settings',
                        link: 'chits/Notification-Settings',
                    }
                ]
            },
        ]
    },

    {
        id: 3,
        label: 'Real Estate',
        icon: 'ri-bank-fill',

        subItems: [
            {
                id: 1,
                label: 'Masters',
                link: 'ph-gauge',
                subItems: [
                    {
                        id: 2,
                        label: 'Companies',
                        link: '/real-estate/companySetUp',
                        parentId: 3
                    },
                    {
                        id: 5,
                        label: 'Designations',
                        link: '/real-estate/Deginations',
                        parentId: 1
                    },

                    {
                        id: 3,
                        label: 'Regions',
                        link: '/real-estate/Region',
                        parentId: 1
                    },

                    {
                        id: 4,
                        label: 'Branches',
                        link: '/real-estate/Branches',
                        parentId: 1
                    },
                    {
                        id: 1,
                        label: 'Lead Source',
                        link: 'administration/Admin-Source',
                        parentId: 8
                    },
                    {
                        id: 1,
                        label: 'Notification Templates',
                        link: '/real-estate/Notification-Templates',
                        parentId: 8
                    },

                ]


            },
            {
                id: 1,
                label: 'Products',
                icon: 'ri-bank-fill',

                subItems: [
                    {
                        id: 1,
                        label: 'Commercial Spaces',
                        link: '/real-estate/commericalSpace',
                        parentId: 2
                    },
                    {
                        id: 2,
                        label: 'Commercial Units',
                        link: '/real-estate/commercialTowers',
                        parentId: 4
                    },
                    {
                        id: 3,
                        label: 'Units',
                        link: '/real-estate/units',
                        parentId: 4
                    },
                    {
                        id: 4,
                        label: 'Open Plots',
                        link: '/real-estate/openPlots',
                        parentId: 2
                    },
                    {
                        id: 5,
                        label: 'Villas',
                        link: '/real-estate/villas',
                        parentId: 2
                    },
                    {
                        id: 6,
                        label: 'Apartments',
                        link: '/real-estate/apartments',
                        parentId: 4
                    },
                    // {
                    //     id: 8,
                    //     label: 'Benefits',
                    //     link: 'chits/AgentBenfits',
                    //     parentId: 2,
                    // }
                ]


            },
            {
                id: 1,
                label: 'Employees',
                icon: 'ri-bank-fill',
                subItems: [

                    {
                        id: 6,
                        label: ' Sales Excutives',
                        link: 'chits/Employee',
                        parentId: 1
                    },
                    {

                        id: 4,
                        label: 'Administrators',
                        link: 'chits/administrator',
                        parentId: 1

                    },
                    {
                        id: 6,
                        label: 'Managers',
                        link: 'chits/manager',
                        parentId: 1
                    },

                ]
            },
            {
                id: 2,
                label: 'System Settings',
                parentId: 2,
                subItems: [
                    {
                        id: 2,
                        label: ' Notification Settings',
                        link: 'chits/Notification-Settings',
                    }
                ]
            },
        ]
    },















    // {
    //     id: 4,
    //     label: 'Real Estate',
    //     icon: ' ri-building-fill',
    //     subItems: [
    //         {
    //             id: 1,
    //             label: 'Master',
    //             icon: 'ri-building-fill',
    //             subItems: [{

    //                 id: 1,
    //                 label: 'Product Types',
    //                 link: '/real-estate/productionType',
    //                 parentId: 1

    //             },


    //             {
    //                 id: 3,
    //                 label: 'Regions',
    //                 link: '/real-estate/Region',
    //                 parentId: 1
    //             },

    //             {
    //                 id: 4,
    //                 label: 'Branches',
    //                 link: '/real-estate/Branches',
    //                 parentId: 1
    //             },
    //             {
    //                 id: 5,
    //                 label: 'Designations',
    //                 link: '/real-estate/Deginations',
    //                 parentId: 1
    //             },
    //             {
    //                 id: 6,
    //                 label: 'Employees',
    //                 link: 'chits/Employee',
    //                 parentId: 1
    //             },


    //             ]
    //         },

    //         // {
    //         //     id: 1,
    //         //     label: 'Floor Details',
    //         //     link: '/real-estate/floor-Details',
    //         //     parentId: 4
    //         // },

    //         {
    //             id: 3,
    //             label: 'Branch',
    //             link: '/real-estate/tab-branch',
    //             parentId: 3
    //         },

    //         // {
    //         //     id: 4,
    //         //     label: 'Users',
    //         //     link: '/chits/userlist1',
    //         //     parentId: 3
    //         // },

    //         {
    //             id: 5,
    //             label: 'Leads',
    //             // link: '/real-estate/leadrealestate',
    //             parentId: 3,
    //             subItems: [
    //                 {
    //                     id: 6,
    //                     label: 'Leads',
    //                     link: '/real-estate/leadrealestate',
    //                     parentId: 3
    //                 },
    //                 {
    //                     id: 2,
    //                     label: 'FollowUps',
    //                     label1: '.FollowUps',
    //                     icon: ' ri-building-fill',
    //                     link: 'chits/followup',
    //                     parentId: 4

    //                 },
    //                 // {
    //                 //     id: 6,
    //                 //     label: 'Leads By Team Member',
    //                 //     link: '/chits/teammember',
    //                 //     parentId: 3
    //                 // },
    //                 // {
    //                 //     id: 6,
    //                 //     label: 'Upload Fresh Leads',
    //                 //     link: '/chits/uploadLead',
    //                 //     parentId: 2
    //                 // },
    //             ]

    //         },


    //         {
    //             id: 7,
    //             label: 'Calendar',
    //             link: '/apps/calendar',
    //             parentId: 3
    //         },
    //         {
    //             id: 8,
    //             label: 'Summary',
    //             link: '/real-estate/list',
    //             parentId: 3

    //         },
    //         {
    //             id: 9,
    //             label: 'Subscribers',
    //             link: '/real-estate/real-estate-Subscribers',
    //             parentId: 3

    //         },

    //         {
    //             id: 10,
    //             label: 'Reports',
    //             subItems: [
    //                 {
    //                     id: 1,
    //                     label: 'Branch Performance',
    //                     link: '/real-estate/list',
    //                     parentId: 10


    //                 },
    //                 {
    //                     id: 2,
    //                     label: 'Region Performance',
    //                     link: '/ecommerce/products',
    //                     parentId: 10

    //                 },
    //                 {
    //                     id: 3,
    //                     label: 'Manager Wise Channel Partner',
    //                     link: 'chits/managerWise',
    //                     // icon: 'ph-gauge',
    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 4,
    //                     label: 'Channel Partner Wise Commission',
    //                     link: 'chits/channelwithoutmonth',
    //                     // icon: 'ph-gauge',
    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 5,
    //                     label: ' (Month wise) Channel Partner Wise Commission',
    //                     link: 'chits/channelPartner',
    //                     // icon: 'ph-gauge',
    //                     parentId: 10
    //                 },

    //                 {
    //                     id: 6,
    //                     label: 'Lead Consolidate',
    //                     link: 'chits/leads-consolidate',
    //                     // icon: 'ph-gauge',
    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 7,
    //                     label: 'Lead Report',
    //                     link: 'chits/lead-report',
    //                     // icon: 'ph-gauge',
    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 8,
    //                     label: 'Direct Business Details',
    //                     link: 'chits/directBusiness',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 9,
    //                     label: 'Excutive Wise Bookings',
    //                     link: 'chits/excutivewise_bookings',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 10,
    //                     label: 'bookingsMPR',
    //                     link: 'chits/bookingsMPR',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 11,
    //                     label: 'Floor Wise Registrations',
    //                     link: 'chits/floor-wise',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 12,
    //                     label: 'Rent-Receivable',
    //                     link: 'chits/Rent-Receivable',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 13,
    //                     label: 'DAR registration',
    //                     link: '/real-estate/DAR',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 14,
    //                     label: 'Bookings Between Dates Uncleared',
    //                     link: 'chits/bookingsbtwdatesuncleared',

    //                     parentId: 10
    //                 },
    //                 {
    //                     id: 15,
    //                     label: 'Registrations Between Dates',
    //                     link: '/real-estate/registrationbtwdates',

    //                     parentId: 10
    //                 }


    //             ]

    //         }




    //     ]
    // },
    // {
    //     id: 10,
    //     label: 'Mis Reports',
    //     icon: 'bi bi-file-earmark-text',
    //     subItems: [
    //         {
    //             id: 1,
    //             label: 'Chits',
    //             // link: '/real-estate/list',
    //             parentId: 10

    //         },
    //         {
    //             id: 1,
    //             label: 'Real-Estate',
    //             // link: '/real-estate/list',
    //             parentId: 10

    //         },
    //         {
    //             id: 1,
    //             label: 'Branch Performance',
    //             link: '/real-estate/list',
    //             parentId: 10


    //         },
    //         {
    //             id: 2,
    //             label: 'Region Performance',
    //             link: '/ecommerce/products',
    //             parentId: 10

    //         },
    //         {
    //             id: 3,
    //             label: 'Manager Wise Channel Partner',
    //             link: 'chits/managerWise',
    //             // icon: 'ph-gauge',
    //             parentId: 10
    //         },
    //         {
    //             id: 4,
    //             label: 'Channel Partner Wise Commission',
    //             link: 'chits/channelwithoutmonth',
    //             // icon: 'ph-gauge',
    //             parentId: 10
    //         },
    //         {
    //             id: 5,
    //             label: ' (Month wise) Channel Partner Wise Commission',
    //             link: 'chits/channelPartner',
    //             // icon: 'ph-gauge',
    //             parentId: 10
    //         },

    //         {
    //             id: 6,
    //             label: 'Lead Consolidate',
    //             link: 'chits/leads-consolidate',
    //             // icon: 'ph-gauge',
    //             parentId: 10
    //         },
    //         {
    //             id: 7,
    //             label: 'Lead Report',
    //             link: 'chits/lead-report',
    //             // icon: 'ph-gauge',
    //             parentId: 10
    //         },
    //         {
    //             id: 8,
    //             label: 'Direct Business Details',
    //             link: 'chits/directBusiness',

    //             parentId: 10
    //         },
    //         {
    //             id: 9,
    //             label: 'Excutive Wise Bookings',
    //             link: 'chits/excutivewise_bookings',

    //             parentId: 10
    //         },
    //         {
    //             id: 10,
    //             label: 'bookingsMPR',
    //             link: 'chits/bookingsMPR',

    //             parentId: 10
    //         },
    //         {
    //             id: 11,
    //             label: 'Floor Wise Registrations',
    //             link: 'chits/floor-wise',

    //             parentId: 10
    //         },
    //         {
    //             id: 12,
    //             label: 'Rent-Receivable',
    //             link: 'chits/Rent-Receivable',

    //             parentId: 10
    //         },
    //         {
    //             id: 13,
    //             label: 'DAR registration',
    //             link: '/real-estate/DAR',

    //             parentId: 10
    //         },
    //         {
    //             id: 14,
    //             label: 'Bookings Between Dates Uncleared',
    //             link: 'chits/bookingsbtwdatesuncleared',

    //             parentId: 10
    //         },
    //         {
    //             id: 15,
    //             label: 'Registrations Between Dates',
    //             link: '/real-estate/registrationbtwdates',

    //             parentId: 10
    //         }


    //     ]

    // }


]

export const MENU1: MenuItem[] = [
    {
        id: 1,
        label: 'Home',
        icon: 'ri-bank-fill',
        link: ''
    },
    {

        id: 3,
        label: 'Users',
        link: '/chits/userlist1',
        parentId: 1

    },
    {
        id: 1,
        label: 'Products',
        icon: 'ri-bank-fill',
        subItems: [
            {
                id: 1,
                label: 'Chits',
                link: 'ph-gauge',
                parentId: 1,
                subItems: [
                    {
                        id: 1,
                        label: 'Chit Groups',
                        link: 'chits/AgentProducts',
                        parentId: 1,
                    }
                ]
            },

            {
                id: 2,
                label: 'Real Estate',
                link: 'ph-gauge',
                subItems: [
                    {
                        id: 1,
                        label: 'Commercial Spaces',
                        link: '/real-estate/commericalSpace',
                        parentId: 2
                    },
                    {
                        id: 2,
                        label: 'Commercial Units',
                        link: '/real-estate/commercialTowers',
                        parentId: 4
                    },
                    {
                        id: 3,
                        label: 'Units',
                        link: '/real-estate/units',
                        parentId: 4
                    },
                    {
                        id: 4,
                        label: 'Open Plots',
                        link: '/real-estate/openPlots',
                        parentId: 2
                    },
                    {
                        id: 5,
                        label: 'Villas',
                        link: '/real-estate/villas',
                        parentId: 2
                    },
                    {
                        id: 6,
                        label: 'Apartments',
                        link: '/real-estate/apartments',
                        parentId: 4
                    },
                    // {
                    //     id: 8,
                    //     label: 'Benefits',
                    //     link: 'chits/AgentBenfits',
                    //     parentId: 2,
                    // }
                ]
            },
        ]
    },

    {
        id: 3,
        label: 'My Campaigns',
        icon: 'bi bi-megaphone-fill',
        // link: 'chits/my-campaign',
        subItems: [
            {
                id: 3,
                label: 'Campaigns',
                // icon: 'bi bi-megaphone-fill',
                link: 'chits/my-campaign',
                parentId: 3,
            },
            {
                id: 5,
                label: 'Contacts',
                icon: 'bi bi-people-fill',
                link: 'chits/Contacts'


            },
        ]
    },
    {
        id: 4,
        label: 'My Activities',
        icon: ' ri-building-fill',
        // link: 'chits/my-campaign',
        subItems: [
            {
                id: 1,
                label: 'Chits',
                link: 'ph-gauge',
                parentId: 4,
                subItems: [{
                    id: 1,
                    label: 'Leads',
                    label1: 'Chits',
                    icon: ' ri-building-fill',
                    link: 'chits/Lead',
                    parentId: 4

                },
                {
                    id: 2,
                    label: 'FollowUps',
                    label1: 'FollowUps',
                    icon: ' ri-building-fill',
                    link: 'chits/followup',
                    parentId: 4

                },
                // {
                //     id: 5,
                //     label: 'Leads By Team Member',
                //     link: '/chits/teammember',
                //     parentId: 2
                // },
                {
                    id: 6,
                    label: 'Upload Fresh Leads',
                    link: 'chits/upload-leads',
                    parentId: 2
                },
                    // {
                    //     id: 3,
                    //     label: 'Subscribers',
                    //     label1: 'Subscribers',
                    //     icon: ' ri-building-fill',
                    //     link: '/chits/Subscribers',
                    //     parentId: 4

                    // },
                    // {
                    //     id: 4,
                    //     label: 'My Ledger',
                    //     icon: ' ri-building-fill',
                    //     link: 'chits/myledger',
                    //     parentId: 4

                    // }
                ]
            },
            {
                id: 2,
                label: 'Real Estate',
                link: 'ph-gauge',
                parentId: 4,
                subItems: [
                    {
                        id: 1,
                        label: 'Commercial Spaces',
                        // link: '/real-estate/commericalSpace',
                        parentId: 2,
                        subItems: [
                            {
                                id: 1,
                                label: 'Leads',
                               SubCatergorylabel: 'Commercial Spaces',
                                icon: ' ri-building-fill',
                                link: '/real-estate/commercial-space-leads',
                                parentId: 4

                            },
                            {
                                id: 2,
                                label: 'FollowUps',
                                SubCatergorylabel: 'Commercial Spaces',
                                icon: ' ri-building-fill',
                                link: 'chits/followup',
                                parentId: 4

                            },
                            {
                                id: 6,
                                label: 'Upload Fresh Leads',
                                SubCatergorylabel: 'Commercial Spaces',
                                link: 'chits/upload-leads',
                                parentId: 2
                            },
                        ]
                    },
                    {
                        id: 2,
                        label: 'Commercial Units',
                        // link: '/real-estate/commercialTowers',
                        parentId: 4,
                        subItems: [
                            {
                                id: 1,
                                label: 'Leads',
                                SubCatergorylabel: 'Commercial Units',
                                icon: ' ri-building-fill',
                                link: '/real-estate/commercial-towers-lead',
                                parentId: 4

                            },
                            {
                                id: 2,
                                label: 'FollowUps',
                                SubCatergorylabel: 'Commercial Units',
                                icon: ' ri-building-fill',
                                link: 'chits/followup',
                                parentId: 4

                            },
                            {
                                id: 6,
                                label: 'Upload Fresh Leads',
                                link: 'chits/upload-leads',
                                SubCatergorylabel: 'Commercial Units',
                                parentId: 2
                            },
                        ]
                    },
                    {
                        id: 3,
                        label: 'Units',
                        // link: '/real-estate/units',
                        parentId: 4,
                        subItems: [
                            {
                                id: 1,
                                label: 'Leads',
                                SubCatergorylabel: 'Units',
                                icon: ' ri-building-fill',
                                link: '/real-estate/units-leads',
                                parentId: 4

                            },
                            {
                                id: 2,
                                label: 'FollowUps',
                                SubCatergorylabel: 'Units',
                                icon: ' ri-building-fill',
                                link: 'chits/followup',
                                parentId: 4

                            },
                            {
                                id: 6,
                                label: 'Upload Fresh Leads',
                                SubCatergorylabel: 'Units',
                                link: 'chits/upload-leads',
                                parentId: 2
                            },
                        ]
                    },
                    {
                        id: 4,
                        label: 'Open Plots',
                        // link: '/real-estate/openPlots',
                        parentId: 2,
                        subItems: [
                            {
                                id: 1,
                                label: 'Leads',
                                SubCatergorylabel: 'Open Plots',
                                icon: ' ri-building-fill',
                                link: '/real-estate/open-plots-leads',
                                parentId: 4

                            },
                            {
                                id: 2,
                                label: 'FollowUps',
                                SubCatergorylabel: 'Open Plots',
                                icon: ' ri-building-fill',
                                link: 'chits/followup',
                                parentId: 4

                            },
                            {
                                id: 6,
                                label: 'Upload Fresh Leads',
                                SubCatergorylabel: 'Open Plots',
                                link: 'chits/upload-leads',
                                parentId: 2
                            },
                        ]
                    },
                    {
                        id: 5,
                        label: 'Villas',
                        // link: '/real-estate/villas',
                        parentId: 2,
                        subItems: [
                            {
                                id: 1,
                                label: 'Leads',
                                SubCatergorylabel: 'Villas',
                                icon: ' ri-building-fill',
                                link: '/real-estate/villas-leads',
                                parentId: 4

                            },
                            {
                                id: 2,
                                label: 'FollowUps',
                                SubCatergorylabel: 'Villas',
                                icon: ' ri-building-fill',
                                link: 'chits/followup',
                                parentId: 4

                            },
                            {
                                id: 6,
                                label: 'Upload Fresh Leads',
                                SubCatergorylabel: 'Villas',
                                link: 'chits/upload-leads',
                                parentId: 2
                            },
                        ]
                    },
                    {
                        id: 6,
                        label: 'Apartments',
                        // link: '/real-estate/apartments',
                        parentId: 4,
                        subItems: [
                            {
                                id: 1,
                                label: 'Leads',
                                SubCatergorylabel: 'Apartments',
                                icon: ' ri-building-fill',
                                link: '/real-estate/apartments-leads',
                                parentId: 4

                            },
                            {
                                id: 2,
                                label: 'FollowUps',
                                SubCatergorylabel: 'Apartments',
                                icon: ' ri-building-fill',
                                link: 'chits/followup',
                                parentId: 4

                            },
                            {
                                id: 6,
                                label: 'Upload Fresh Leads',
                                SubCatergorylabel: 'Apartments',
                                link: 'chits/upload-leads',
                                parentId: 2
                            },
                        ]
                    },
                    // {
                    //     id: 8,
                    //     label: 'Benefits',
                    //     link: 'chits/AgentBenfits',
                    //     parentId: 2,
                    // }
                ]
                // subItems: [{
                //     id: 1,
                //     label: 'Leads',
                //     label1: 'Real Estate',
                //     icon: ' ri-building-fill',
                //     link: '/real-estate/leadrealestate',
                //     parentId: 4

                // },
                // {
                //     id: 2,
                //     label: 'FollowUps',
                //     label1: '.FollowUps',
                //     icon: ' ri-building-fill',
                //     link: 'chits/followup',
                //     parentId: 4

                // },
                // // {
                // //     id: 5,
                // //     label: 'Leads By Team Member',
                // //     link: '/chits/teammember',
                // //     parentId: 2
                // // },
                // {
                //     id: 6,
                //     label: 'Upload Fresh Leads',
                //     link: '/chits/uploadLead',
                //     parentId: 2
                // },

                //     // {
                //     //     id: 4,
                //     //     label: 'My Ledger',
                //     //     icon: ' ri-building-fill',
                //     //     link: '/real-estate/myledger',
                //     //     parentId: 4


                //     // }
                // ]
            }
        ]

    },
    {
        id: 5,
        label: 'My Business',
        icon: 'bi bi-building',
        subItems: [
            {
                id: 4,
                label: 'Chits',
                icon: ' ri-building-fill',
                // link: 'chits/myledger',

                subItems: [

                    {
                        id: 4,
                        label: 'Ledger',
                        icon: ' ri-building-fill',
                        link: 'chits/myledger',
                    },
                    {
                        id: 3,
                        label: 'Subscribers',
                        label1: 'Subscribers',
                        icon: ' ri-building-fill',
                        link: '/chits/Subscribers',

                        parentId: 4

                    },
                    // {
                    //     id: 4,
                    //     label: 'Real Estate',
                    //     icon: ' ri-building-fill',
                    //     link: '/real-estate/myledger',
                    // }


                ]
            },
            {
                id: 4,
                label: 'Real Estate',
                icon: ' ri-building-fill',
                subItems: [
                    {
                        id: 4,
                        label: 'Ledger',
                        icon: ' ri-building-fill',
                        link: '/real-estate/myledger',
                        parentId: 4


                    },
                    {
                        id: 3,
                        label: 'Subscribers',
                        label1: 'Subscribers',
                        icon: ' ri-building-fill',
                        link: '/real-estate/real-estate-Subscribers',
                    }
                ]
            }
        ]
    },

    {
        id: 5,
        label: 'My Revenue',
        icon: 'bi bi-currency-rupee',
        subItems: [
            {
                id: 3,
                label: 'Chanel partner Benefits',
                icon: 'bi bi-gift',
                link: 'chits/AgentBenfits',
            },
            {
                id: 4,
                label: ' Commision and Incentives',
                icon: ' bi bi-currency-rupee',
                link: 'chits/incentives'


            },
        ]

    }
    ,

    {
        id: 6,
        label: 'Calender',
        icon: 'bi bi-calendar',
        link: 'apps/calendar'


    },
    {
        id: 7,
        label: 'Summary Report',
        icon: 'bi bi-journal-text',
        link: '/real-estate/list'


    },



]

const role = localStorage.getItem('Rolename');
// const verticalId = localStorage.getItem('vericalid');
const verticalIdStr: string | null = localStorage.getItem('vericalid');
const verticalId: number = verticalIdStr ? parseInt(verticalIdStr, 10) : 0; // Assuming a default value of 0 if the value is null or not convertible to a number


// export let EmployeeMenu: MenuItem[] = [

//     {
//         id: 2,
//         label: 'Administration',
//         icon: ' ri-settings-3-fill',
//         subItems: [


//             {
//                 id: 22,
//                 label: 'Campaign Management',
//                 link: 'chits/campaign',
//                 parentId: 2,
//                 subItems: [


//                     {
//                         id: 10,
//                         label: 'Agent Benefits',
//                         link: 'chits/AgentBenfits',
//                         parentId: 2
//                     },


//                 ]
//             },
//         ]
//     },



//     {
//         id: 3,
//         label: 'Chits',
//         icon: 'ri-bank-fill',

//         subItems: [


//             {

//                 id: 4,
//                 label: 'Leads',
//                 label1: 'Chits',
//                 link: 'chits/Lead',
//                 // icon: 'ph-gauge',
//                 parentId: 3
//             },


//             {
//                 id: 30,
//                 label: 'Calendar',
//                 link: '/apps/calendar',
//                 parentId: 3
//             },
//             {
//                 id: 35,
//                 label: 'Summary',
//                 label1: 'Chits',
//                 link: '/real-estate/list',
//                 parentId: 3
//             },

//             {
//                 id: 45,
//                 label: 'Reports',
//                 link: 'ph-gauge',
//                 subItems: [

//                     {
//                         id: 24,
//                         label: 'Vacant Chits',
//                         link: 'chits/vacantlist',
//                         parentId: 5
//                     },

//                     // {
//                     //     id: 32,
//                     //     label: 'Branch Performance',
//                     //     link: 'chits/branchperformance',
//                     //     parentId: 5
//                     // },
//                     // {
//                     //     id: 33,
//                     //     label: 'Region Performance',
//                     //     link: '/chits/regionperformance',
//                     //     parentId: 5
//                     // },
//                     // {
//                     //     id: 27,
//                     //     label: 'Zone Performance',
//                     //     // link: '/chits/regionperformance',
//                     //     parentId: 5
//                     // },




//                 ]

//             }

//         ]
//     },

//     {
//         id: 4,
//         label: 'Real Estate',
//         icon: ' ri-building-fill',
//         subItems: [
//             {
//                 id: 4,
//                 label: 'Leads',
//                 label1: 'Real Estate',
//                 link: 'chits/Lead',
//                 parentId: 4

//             },


//             {
//                 id: 30,
//                 label: 'Calendar',
//                 link: '/apps/calendar',
//                 parentId: 3
//             },
//             {
//                 id: 35,
//                 label: 'Summary',
//                 label1: 'Real Estate',
//                 link: '/real-estate/list',

//             },
//         ]
//     },
//     // {
//     //     id: 4,
//     //     label: 'My Campaign',
//     //     icon: 'bi bi-megaphone-fill',
//     //     link: 'chits/my-campaign',
//     // }

// ]


export const ManagerMenu: MenuItem[] = [
    {
        id: 2,
        label: 'Administration',
        icon: ' ri-settings-3-fill',
        subItems: [


            {
                id: 22,
                label: 'Campaign Management',
                link: 'chits/campaign',
                parentId: 2,
                subItems: [


                    {
                        id: 10,
                        label: 'Agent Benefits',
                        link: 'chits/AgentBenfits',
                        parentId: 2
                    },


                ]
            },


        ]
    },

    {
        id: 3,
        label: 'Chits',
        icon: 'ri-bank-fill',

        subItems: [



            {
                id: 4,
                label: 'Leads',
                label1: 'Chits',
                link: 'chits/Lead',
                // icon: 'ph-gauge',
                parentId: 3
            },

            {
                id: 28,
                label: 'Leads By Team Member',
                link: '/chits/teammember',
                parentId: 3
            },

            {
                id: 30,
                label: 'Calendar',
                link: '/apps/calendar',
                parentId: 3
            },
            {
                id: 35,
                label: 'Summary',
                label1: 'Chits',
                link: '/real-estate/list',
                parentId: 3
            },



        ]
    },

    {
        id: 4,
        label: 'Real Estate',
        icon: ' ri-building-fill',
        subItems: [

            {
                id: 4,
                label: 'Leads',
                label1: 'Real Estate',
                link: 'chits/Lead',
                parentId: 4

            },


            {
                id: 30,
                label: 'Calendar',
                link: '/apps/calendar',
                parentId: 3
            },
            {
                id: 35,
                label: 'Summary',
                label1: 'Real Estate',
                link: '/real-estate/list',

            },
            {
                id: 35,
                label: 'Subscribers',
                link: '/real-estate/real-estate-Subscribers',

            },

            {
                id: 22,
                label: 'Reports',
                subItems: [
                    {
                        id: 25,
                        label: 'Branch Performance',
                        link: '/real-estate/list',
                        parentId: 2


                    },
                    {
                        id: 26,
                        label: 'Region Performance',
                        link: '/ecommerce/products',
                        parentId: 2

                    },
                    {
                        id: 44,
                        label: 'Manager Wise Channel Partner',
                        link: 'chits/managerWise',
                        // icon: 'ph-gauge',
                        parentId: 3
                    },
                    {
                        id: 44,
                        label: 'Channel Partner Wise Commission',
                        link: 'chits/channelwithoutmonth',
                        // icon: 'ph-gauge',
                        parentId: 3
                    },
                    {
                        id: 44,
                        label: ' (Month wise) Channel Partner Wise Commission',
                        link: 'chits/channelPartner',
                        // icon: 'ph-gauge',
                        parentId: 3
                    },

                    {
                        id: 44,
                        label: 'Lead Consolidate',
                        link: 'chits/leads-consolidate',
                        // icon: 'ph-gauge',
                        parentId: 3
                    },
                    {
                        id: 44,
                        label: 'Lead Report',
                        link: 'chits/lead-report',
                        // icon: 'ph-gauge',
                        parentId: 3
                    },
                    {
                        id: 45,
                        label: 'Direct Business Details',
                        link: 'chits/directBusiness',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'Excutive Wise Bookings',
                        link: 'chits/excutivewise_bookings',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'bookingsMPR',
                        link: 'chits/bookingsMPR',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'Floor Wise Registrations',
                        link: 'chits/floor-wise',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'Rent-Receivable',
                        link: 'chits/Rent-Receivable',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'DAR registration',
                        link: '/real-estate/DAR',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'Bookings Between Dates Uncleared',
                        link: 'chits/bookingsbtwdatesuncleared',

                        parentId: 3
                    },
                    {
                        id: 46,
                        label: 'Registrations Between Dates',
                        link: '/real-estate/registrationbtwdates',

                        parentId: 3
                    }


                ]

            }
        ]
    },
    // {
    //     id: 4,
    //     label: 'My Campaign',
    //     icon: 'bi bi-megaphone-fill',
    //     link: 'chits/my-campaign',
    // }
]

export let EmployeeMenu: MenuItem[] = []
if (role === 'Employee') {
    if (verticalId === 1) {
        // If vertical ID is 1, show Chits menu

        EmployeeMenu = [

            {
                id: 2,
                label: 'Administration',
                icon: ' ri-settings-3-fill',
                subItems: [
                    {
                        id: 22,
                        label: 'Campaign Management',
                        link: 'chits/campaign',
                        parentId: 2,
                        subItems: [
                            {
                                id: 10,
                                label: 'Agent Benefits',
                                link: 'chits/AgentBenfits',
                                parentId: 2
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                label: 'Chits',
                icon: 'ri-bank-fill',

                subItems: [



                    {
                        id: 4,
                        label: 'Leads',
                        label1: 'Chits',
                        link: 'chits/Lead',
                        // icon: 'ph-gauge',
                        parentId: 3
                    },

                    {
                        id: 28,
                        label: 'Leads By Team Member',
                        link: '/chits/teammember',
                        parentId: 3
                    },

                    {
                        id: 30,
                        label: 'Calendar',
                        link: '/apps/calendar',
                        parentId: 3
                    },
                    {
                        id: 35,
                        label: 'Summary',
                        label1: 'Chits',
                        link: '/real-estate/list',
                        parentId: 3
                    },
                    {
                        id: 45,
                        label: 'Reports',
                        link: 'ph-gauge',
                        subItems: [

                            {
                                id: 24,
                                label: 'Vacant Chits',
                                link: 'chits/vacantlist',
                                parentId: 5
                            },
                        ]
                    },


                ]
            },

        ];
    } else if (verticalId === 2) {
        // If vertical ID is 2, show Real Estate menu
        EmployeeMenu = [
            {
                id: 2,
                label: 'Administration',
                icon: ' ri-settings-3-fill',
                subItems: [
                    {
                        id: 22,
                        label: 'Campaign Management',
                        link: 'chits/campaign',
                        parentId: 2,
                        subItems: [
                            {
                                id: 10,
                                label: 'Agent Benefits',
                                link: 'chits/AgentBenfits',
                                parentId: 2
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                label: 'Real Estate',
                icon: 'ri-building-fill',
                subItems: [
                    {
                        id: 4,
                        label: 'Leads',
                        label1: 'Real Estate',
                        link: 'chits/Lead',
                        parentId: 4
                    },
                    // Add other Real Estate menu items as needed
                ]
            }
        ];
    }
}