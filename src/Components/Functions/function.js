export const downloadResume=()=>{
    window.open("./Pranshu_Shukla_Resume.pdf")
    const fileURL = "./Pranshu_Shukla_Resume.pdf";
            console.log(fileURL)
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Pranshu_Shukla_Resume';
            alink.click();
}

