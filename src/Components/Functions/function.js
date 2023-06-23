export const downloadResume=()=>{
    fetch('Pranshu_Shukla_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = "https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view";
            alink.download = 'Pranshu_Shukla_Resume.pdf';
            alink.click();
        })
    })
}