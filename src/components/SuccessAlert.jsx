import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { successAlertSliceActions } from "../store";
import { useEffect } from "react";

function SuccessAlert({alertMessage}) {

    const dispatch = useDispatch();

    return <div class="alert alert-success" role="alert" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                {alertMessage} <IoCloseCircle size={25} color="red" style={{cursor: "pointer"}} onClick={() => dispatch(successAlertSliceActions.toggleVisibility())}/>
        </div>
};

export default SuccessAlert;