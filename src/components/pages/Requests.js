import {MaintenanceRequestTable} from "../components/RequestTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const MaintenanceRequest =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addUser()}>Add User</Button>
            <RequestTable />
        </>
    )
}