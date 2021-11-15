import Swal from 'sweetalert2';

function useAlertHandler (msg = "Success!", type) {
    //Watch this, TODO uniform server messages
    console.log(msg)
    console.log(msg instanceof Object)
    console.log(Array.isArray(msg))
    console.log(Object.keys(msg).length)
    console.log(msg.length)
    if(type === "error"){
        //Uniform errors format on backend responses if possible
        let errorList
        if(msg instanceof Object && !Array.isArray(msg)){
            if (Object.keys(msg).length > 0){
                errorList = msg.msg.join('</br>');
                Swal.fire({
                    title: 'Error!',
                    html: errorList,
                    icon: 'error',
                });
                return;
            }
        }
        if(Array.isArray(msg) && msg.length === 0 ){
            errorList = msg.join('</br>');
            Swal.fire({
                title: 'Error!',
                html: errorList,
                icon: 'error',
            });
            return;
        }
        if (Object.keys(msg).length || msg.length > 0){
            errorList = msg.join('</br>');
            Swal.fire({
                title: 'Error!',
                html: errorList,
                icon: 'error',
            });
            return;
        }
        if(msg.length === 0){
            Swal.fire({
                title: 'Error!',
                text: msg.msg,
                icon: 'error'
        });
            return;
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: "Something went wrong",
                icon: 'error'
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