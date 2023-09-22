import { getDesertTable, getOrdersTable, getUsersTable } from "../dataController/apiFetching/apis";

const HomePageTitle = "Desert Management System";

    const TableNames = ["Deserts", "Users", "Orders"];

    const Table_columns = [
        
        {
            columns : ["Desert","protein", "fat", "carbs", "Unit Price"]
        },
        {
            columns : ["Name"  , "MobileNumber", "Email", "Address"]
        },
        {
            columns : ["Order_Id","Desert", "Ordered By", "Date","Quantity", "Price", "Total"]
        }
    ]


    async function getDesert(){
        let data = await getDesertTable();
        const deserts = data.rows.map((item) => {
            // console.log(item)
            return(
                {
                    id : item[0],
                    Desert : item[1],
                    calories : item[2],
                    fat : item[3],
                    carbs : item[4],
                    protein : item[5]
                }
            )
        })
        return deserts;
    }

    async function getUsers(){
        let data = await getUsersTable();
        const users = data.rows.map((item) => {
            // console.log(item)
            return(
                {
                    id : item[0],
                    Name : item[1],
                    MobileNumber : item[2],
                    Email : item[3],
                    Address : item[4]
                }
            )
        })
        return users;
    }

    async function getOrders(){
        let data = await getOrdersTable();
        const orders = data.rows.map((item)=>{
            return{
                id : item[0],
            Order_Id : item[0],
            Desert : item[7],
            Ordered_By : item[6],
            Date : item[3],
            Quantity : item[4],
            Unit_Price : item[8],
            Total : item[5]
            }
        })

        return orders;

    }

    const MockDeserts = [
        {
            id : 0,
            Desert : "Frozen yoghurt",
            calories : 159,
            fat : 6.0,
            carbs : 24,
            protein : 4.0
        },
        {
            id : 1,
            Desert : "Ice cream sandwich",
            calories : 237,
            fat : 9.0,
            carbs : 37,
            protein : 4.3
        },
        {
            id : 2,
            Desert : "Eclair",
            calories : 262,
            fat : 16.0,
            carbs : 24,
            protein : 6.0
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        

    ]

    const MockUsers = [
        {
            id : 0,
            Name : "Ali",
            MobileNumber : "090078601",
            Email : "ABC@example.com",
            Address : "ABC Street",
        },
        {
            id : 1,
            Name : "Ahmed",
            MobileNumber : "090078602",
            Email : "Ahmd@gmail.com",
            Address : "ABC Street",
        },
        {
            id : 2,
            Name : "Asad",
            MobileNumber : "090078603",
            Email : "asd@example.com",
            Address : "ABC Street",
        }
    ]

    const MockOrders = [
        {
            id : 0,
            Order_Id : 1,
            Desert : "Frozen yoghurt",
            Ordered_By : "Ali",
            Date : "12/12/2020",
            Quantity : 2,
            Price : 159,
            Total : 318
        },
        {
            id : 1,
            Order_Id : 2,
            Desert : "Ice cream sandwich",
            Ordered_By : "Ahmed",
            Date : "12/12/2020",
            Quantity : 2,
            Price : 237,
            Total : 474
        },
        
    ]





export { HomePageTitle ,TableNames, Table_columns, MockDeserts, MockUsers, MockOrders, getDesert, getUsers, getOrders};