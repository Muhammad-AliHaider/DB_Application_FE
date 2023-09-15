
    const HomePageTitle = "Desert Management System";

    const TableNames = ["Deserts", "Users", "Orders"];

    const Table_columns = [
        
        {
            columns : ["Desert", "calories", "fat", "carbs", "protein"]
        },
        {
            columns : ["Name"  , "MobileNumber", "Email", "Address"]
        },
        {
            columns : ["Order_Id","Desert", "Ordered By", "Date","Quantity", "Price", "Total"]
        }
    ]

    const Deserts = [
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
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
        },
        {
            id : 3,
            Desert : "Cupcake",
            calories : 305,
            fat : 3.7,
            carbs : 67,
            protein : 4.3
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

    const Users = [
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

    const Orders = [
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





export { HomePageTitle ,TableNames, Table_columns, Deserts, Users, Orders};