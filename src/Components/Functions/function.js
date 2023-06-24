export const downloadResume=()=>{
    fetch('./images/Pranshu_Shukla_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = "./images/Pranshu_Shukla_Resume.pdf";
            console.log(fileURL)
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Pranshu_Shukla_Resume';
            alink.click();
        })
    })
}