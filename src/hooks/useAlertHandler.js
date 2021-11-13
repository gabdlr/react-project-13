import Swal from 'sweetalert2';

function useAlertHandler (msg = "Success!", type) {
    //Watch this, TODO uniform server messages
    if(type === "error"){
        let errorList
        if(msg.length > 0){
            errorList = msg.join('</br>');
            Swal.fire({
                title: 'Error!',
                html: errorList,
                icon: 'error',
            });
            return;
        } 
        else {
            Swal.fire({
                title: 'Error!',
                text: msg.msg,
                icon: 'error',
            });
            return;
        }
    }
    Swal.fire({
        title: 'Success!',
        text: msg,
        icon: 'success',
    });

}

export default useAlertHandler;