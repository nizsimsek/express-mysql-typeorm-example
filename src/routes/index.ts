import { ChildrenController } from "../controllers/ChildrenController";
import { FatherController } from "../controllers/FatherController";

export const AppRoutes = [

    // CHILDREN ROUTES 
    {
        method: "get",
        route: "/api/childs",
        controller: ChildrenController, action: "findAll"
    }, {
        method: "get",
        route: "/api/childs/:id", controller: ChildrenController, action: "findOneById"
    }, {
        method: "post",
        route: "/api/childs",
        controller: ChildrenController, action: "create"
    }, {
        method: "put",
        route: "/api/childs/:id",
        controller: ChildrenController, action: "updateById"
    }, {
        method: "delete", route: "/api/childs/:id", controller: ChildrenController,
        action: "deleteById"
    },
    
    
    // FATHER ROUTES
    {
        method: "get",
        route: "/api/fathers",
        controller: FatherController, action: "findAll"
    }, {
        method: "get",
        route: "/api/fathers/:id", controller: FatherController, action: "findOneById"
    }, {
        method: "post",
        route: "/api/fathers",
        controller: FatherController, action: "create"
    }, {
        method: "put",
        route: "/api/fathers/:id",
        controller: FatherController, action: "updateById"
    }, {
        method: "delete", route: "/api/fathers/:id", controller: FatherController,
        action: "deleteById"
    },
];