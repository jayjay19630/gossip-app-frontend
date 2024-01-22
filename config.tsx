const onLocalComputer = false;
const onRenderDeploy = true;


//exporting URL for the backend, which is used for fetching data
let URL_NAME = "";
if (onLocalComputer) {
    URL_NAME = 'http://localhost:3000';
} 

if(onRenderDeploy) {
    URL_NAME = 'https://nusgrapevine.onrender.com';
}

export {URL_NAME};