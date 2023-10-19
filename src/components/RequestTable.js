import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as RequestService from '../components/services/RequestService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    } from '@mui/material';

export const MaintenanceRequestTable = () => {
    const [maintenanceRequest, setMaintenanceRequest]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        RequestService.getAllMaintenanceRequests()
        .then(res => {
            setMaintenanceRequest(res.data);
        })
    }, [])

    function requestDataFromApi(){
        RequestService.getAllMaintenanceRequests()
        .then(res => {
            setMaintenanceRequest(res.data);
        })
    }


    const goToUpdate = (id) => {
        navigate(`/update/${id}`);
    }

    const deleteMaintenanceRequest = (id) => {
        RequestService.deleteMaintenanceRequest(id).then(() =>{
            requestDataFromApi();
        })
    }
    

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Apartment Number
                    </TableCell>
                    <TableCell>
                        Description
                    </TableCell>
                    <TableCell>
                        Created
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        maintenanceRequest.map((maintenanceRequest)=> {
                            return(
                                <TableRow
                                    hover
                                    key={maintenanceRequest.id}
                                >
                                    <TableCell>
                                        {maintenanceRequest.id}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.email}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.aptNumber}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.description}
                                    </TableCell>
                                    <TableCell>
                                        {maintenanceRequest.createdAt}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(maintenanceRequest.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteMaintenanceRequest(maintenanceRequest.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}