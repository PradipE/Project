import { currentUser } from "@clerk/nextjs/server";

import {db} from './db';
//lest check the user is authenticated
export const checkUser =async ()=>{

    const user = await currentUser();
    if(!user){
        return null;
    }

    const userIsLoggedIn = await db.user.findUnique({

        where:{
            clerkUserId :user.id,
        }
    });

    if(userIsLoggedIn){
        return userIsLoggedIn
    }

    const newUser = await db.user.create({
        data:{
            clerkUserId: user.id,
            name:`${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,     
        }

    });
    return newUser;   
};