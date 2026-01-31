import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
// import { data } from "zod/v4/locales";
import { Roles } from "./constants/roles";


export async function proxy(request: NextRequest){
    // console.log(request.nextUrl.pathname);

    const pathname = request.nextUrl.pathname;

    let isAuthenticated = false;
    let isAdmin = false;

    const {data} = await userService.getSession();

    if(data){
        isAuthenticated = true;
        isAdmin = data.user.role  === Roles.admin;
    }
    
    console.log("isAdmin",data);
    //if user is not authenticated at all:
    if(!isAuthenticated){
        return NextResponse.redirect(new URL("/login", request.url));
    }
 

    // if user is authenticated role = ADMIN
    if(isAdmin && pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/admin-dashboard",request.url));
    }
    // if user is authenticated role = USER
    if(!isAdmin && pathname.startsWith("/admin-dashboard")){
        return NextResponse.redirect(new URL("/dashboard",request.url));
    }

    

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard",
         "/dashboard/:path*",
         "/admin-dashboard",
         "/admin-dashboard/:path*"
    ],
};