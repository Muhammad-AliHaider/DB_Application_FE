import React from 'react';
import baseURL from './baseURL';

async function getDesertTable() {
   const url = baseURL + "/Desert";
   const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
}

async function getUsersTable(){
    const url = baseURL + "/Person";
    const response = await fetch(url,{
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
        },
    });

    const data = await response.json();
    return data;
}

async function getOrdersTable(){
    const url = baseURL + "/Order";
    const response = await fetch(url,{
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
        },
    });

    const data = await response.json();
    return data;
}

async function deleteDesert(id){
    const url = baseURL + "/Desert/deleteDesert";
    try{
    const response = await fetch(url,{
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            desert_id : id,
        })
    })

    if(response.status === 202){
        return true;
    }
    else{
        return false;
    }


    }
    catch(err){
        console.log(err);
        return false;
    }
}


async function deleteUser(id){
    const url = baseURL + "/Person/deletePerson";
    try{
    const response = await fetch(url,{
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            person_id : id,
        })
    })

    if(response.status === 202){
        return true;
    }
    else{
        return false;
    }


    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function deleteOrder(id){
    const url = baseURL + "/Order/deleteOrder";
    try{
    const response = await fetch(url,{
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            order_id : id,
        })
    })

    if(response.status === 202){
        return true;
    }
    else{
        return false;
    }


    }
    catch(err){
        console.log(err);
        return false;
    }
}

async function UpdateDesert(id, name,protein,carbs,fat ,price){
    // console.log(id," ",name," ",protein," ",carbs," ",fat," ",price)
    const url = baseURL + "/Desert/updateDesert";
    try{
    const response = await fetch(url,{
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            desert_id : id,
            deserts : name,
            protein : protein,
            carbs : carbs,
            fat : fat,
            unit_price : price
        })
    })

    if(response.status === 202){
        return true;
    }
    else{
        return false;
    }
}
catch(err){
    console.log(err);
    return false;
}
}



async function UpdatePerson(id,name, email,MobNumber,address){
    // console.log(id," ",name," ",email," ",MobNumber," ",address)
    const url = baseURL + "/Person/updatePerson";
    try{
        const response =  fetch(url,{
            method : "PUT",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                person_id : id,
                Name : name,
                Email : email,
                MobileNumber : MobNumber,
                Address : address
            })

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }

}

async function UpdateOrder(person_id,desert_id,order_date,quantity,order_id){

    // "person_id":10,
    // "desert_id":53,
    // "order_date":"2023/12/12",
    // "quantity":9,
    // "order_id" : 13

    // console.log(person_id," ",desert_id," ",order_date," ",quantity," ",order_id)

    const url = baseURL + "/Order/updateOrder";
    try{
        const response =  fetch(url,{
            method : "PUT",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                person_id : person_id,
                desert_id : desert_id,
                order_date : order_date,
                quantity : quantity,
                order_id : order_id
            })

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
}

async function AddDesert(Desert , Protein , Carbs , Fat , Price){
    const url = baseURL + "/Desert/AddDesert";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                deserts : Desert,
                protein : Protein,
                carbs : Carbs,
                fat : Fat,
                unit_price : Price
            })

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
}

async function AddPerson(Name , Email , MobileNumber , Address){
    const url = baseURL + "/Person/AddPerson";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                Name : Name,
                Email : Email,
                MobileNumber : MobileNumber,
                Address : Address
            })

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
}

async function AddOrder(person_id,desert_id,order_date,quantity){
    const url = baseURL + "/Order/AddOrder";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                person_id : person_id,
                desert_id : desert_id,
                order_date : order_date,
                quantity : quantity
            })

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
}

async function AddMockData(){
    const url = baseURL + "/Desert/populate";
    const url2 = baseURL + "/Person/populate";
    const url3 = baseURL + "/Order/populate";
    try{
        const response1 =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        const response2 =  fetch(url2,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }
        });
        const response3 =  fetch(url3,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }
        });

        if(response1.status === 202 && response2.status === 202 && response3.status === 202)
        {
           return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
    
}

 async function DropAllTables () {

    const url = baseURL + "/TableCreation/dropTables";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
        
}

async function TablesCreate () {

    const url = baseURL + "/TableCreation";
    try{
        const response =  fetch(url,{
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            }

        })

        if(response.status === 202)
        {
            return true;
        }
        else{
            return false;
        }
    }catch(err){
        console.log(err)
        return false;
    }
        
}

export {TablesCreate,DropAllTables,AddMockData, getDesertTable, getUsersTable, getOrdersTable , deleteDesert , deleteOrder, deleteUser, UpdateDesert, UpdatePerson,UpdateOrder , AddDesert,AddOrder,AddPerson}