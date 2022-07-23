import Request from "../../../Services/Request.services";
import ErrorHandle from "../ErrorHandle/ErrorHandle.action";
import { GET_USERS_LIST } from "../routes.constant";


const GetUsers = (query)=>{
    return async (dispatch)=>{
        try{
            return await new Request(GET_USERS_LIST, dispatch).post({query})
        }
        catch(error){
            dispatch(ErrorHandle(error));
        }
    }
}


export default GetUsers